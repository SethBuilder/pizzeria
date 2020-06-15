import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function ConfirmForm({ address, total }) {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Confirm
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    Total amount (USD): {total.usd}
                </Grid>
                <Grid item xs={12} md={6}>
                Total amount (Euro):: {total.euro}
                </Grid>
                <Grid item xs={12} md={6}>
                    Address: {address.address}
                </Grid>
                <Grid item xs={12} md={6}>
                    Payment method: cash on delivery
                </Grid>
            </Grid>
        </React.Fragment>
    );
}