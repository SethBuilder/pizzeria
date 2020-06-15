import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles((theme) => ({
    listItem: {
        padding: theme.spacing(1, 0),
    },
    total: {
        fontWeight: 700,
    },
    title: {
        marginTop: theme.spacing(2),
    },
}));

export default function Review({ cartItems, setTotal, setQuantities }) {
    const classes = useStyles();

    const items = [...new Set(cartItems)];

    const quantities = {}
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        quantities[item.slug] = cartItems.filter((cartItem) => cartItem.slug === item.slug);
    }
    let total = 0
    const totalObj = {}
    items.forEach(item => {
        total += item.price * quantities[item.slug].length
    })
    totalObj.total = total
    totalObj.deliveryFees = total * .07

    useEffect(() => {
        setTotal((state) => ({ ...state, 'euro': format(total + total * .07) }))
        setTotal((state) => ({ ...state, 'usd': format((total + total * .07) / .89) }))
        setQuantities(quantities)
    }, [])


    const format = (amount) => {
        return Number.parseFloat(amount).toFixed(2);
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List disablePadding>
                {items.map((item) => (
                    <ListItem className={classes.listItem} key={item.name}>
                        <ListItemText primary={item.name} secondary={item.price + ' € X ' + quantities[item.slug].length} />
                        <Typography variant="body2">{format(item.price * quantities[item.slug].length)} €</Typography>
                    </ListItem>
                ))}
                <ListItem className={classes.listItem} key="Subtotal">
                    <ListItemText primary="Subtotal" />
                    <Typography variant="body2">{format(totalObj.total)} €</Typography>
                </ListItem>
                <ListItem className={classes.listItem} key="delivery">
                    <ListItemText primary="Delivery fees" secondary={'7%'} />
                    <Typography variant="body2">{format(totalObj.deliveryFees)} €</Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total (Euro)" />
                    <Typography variant="subtitle1" className={classes.total}>
                        {format(totalObj.total + totalObj.deliveryFees) + " €"} <br />
                    </Typography>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemText primary="Total (USD)" />
                    <Typography variant="subtitle1" className={classes.total}>
                        {format((totalObj.total + totalObj.deliveryFees) / .89) + " $"}
                    </Typography>
                </ListItem>
            </List>
        </React.Fragment>
    );
}