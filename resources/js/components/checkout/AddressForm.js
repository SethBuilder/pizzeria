import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

export default function AddressForm({ setAddress, errors, address }) {
    const handleChange = (e) => {
        e.persist()
        setAddress((state) => ({ ...state, [e.target.name]: e.target.value }))
    }
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Delivery address (in Munich)
      </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        error={errors && !address.firstName}
                        helperText={errors && !address.firstName ? 'Please fill this' : ''}
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        autoComplete="given-name"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        error={errors && !address.lastName}
                        helperText={errors && !address.lastName ? 'Please fill this' : ''}
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        autoComplete="family-name"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        error={errors && !address.address}
                        helperText={errors && !address.address ? 'Please fill this' : ''}
                        id="address"
                        name="address"
                        label="Address"
                        fullWidth
                        autoComplete="shipping address-line1"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="city"
                        name="city"
                        label="Munich"
                        fullWidth
                        disabled
                        autoComplete="shipping address-level2"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}