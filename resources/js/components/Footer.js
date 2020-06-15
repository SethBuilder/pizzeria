import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
const Footer = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://seif.rocks">
                pizzeria innoscripta by Seif Elmughrabi
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
export default Footer;