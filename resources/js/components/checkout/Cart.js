import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import ConfirmForm from './ConfirmForm';
import Review from './Review';
import api from '../../api/backend';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Review', 'Address', 'Confirm'];

function getStepContent(step, cartItems, address, setAddress, total, setTotal, errors, setQuantities) {
  switch (step) {
    case 0:
      return <Review setQuantities={setQuantities} cartItems={cartItems} setTotal={setTotal} />;
    case 1:
      return <AddressForm errors={errors} address={address} setAddress={setAddress} />;
    case 2:
      return <ConfirmForm address={address} total={total} />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Cart({ cartItems, setOrderStatus }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [errors, setErrors] = React.useState(false);
  const [address, setAddress] = React.useState({ firstName: '', lastName: '', address: '' });
  const [total, setTotal] = React.useState({ euro: 0, usd: 0, });
  const [quantities, setQuantities] = React.useState({});

  const handleNext = () => {
    if (activeStep === 1 && (!address.firstName || !address.lastName || !address.address)) {
      setActiveStep(activeStep);
      setErrors(true)
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleSubmit = async () => {
    const params = new URLSearchParams();
    params.append('firstName', address.firstName);
    params.append('lastName', address.lastName);
    params.append('address', address.address);
    params.append('cartItems', JSON.stringify(quantities));

    try {
      const order = await api.post("place-order", params)

      if (order.status === 201) {
        setOrderStatus({ processed: true, success: true })
      } else {
        setOrderStatus({ processed: true, success: false })
      }
    } catch (error) {
      setOrderStatus({ processed: true, success: false })
    }

  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        {console.log(address)}
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  {getStepContent(activeStep, cartItems, address, setAddress, total, setTotal, errors, setQuantities)}
                  <div className={classes.buttons}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
