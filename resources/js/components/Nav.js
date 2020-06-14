import React, { useState } from 'react';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const StyledBadge = withStyles((theme) => ({
    badge: {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

function Nav({ cartItems }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed z-50 sm:flex sm:justify-between sm:px-4 w-full" style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'saturate(180%) blur(20px)' }}>
            <div className="flex h-full justify-between px-4 sm:w-3/4">
                <div className="flex h-16">
                    <img className="self-center h-6 md:h-8" src="images/logo.svg" alt="pizzeria innoscripta logo" />
                </div>

                <div className="flex w-32 justify-between">
                    <div className="text-white w-1/2">
                        <a href="#" className="hover:bg-pizza-red focus:bg-bg-pizza-red text-lg flex items-center justify-center block h-full w-full">
                            <IconButton aria-label="cart" color="inherit">
                                <StyledBadge badgeContent={cartItems.length} color="secondary">
                                    <ShoppingCartIcon />
                                </StyledBadge>
                            </IconButton>
                        </a>
                    </div>
                    <button onClick={() => setIsOpen(isOpen => !isOpen)} type="button" className="sm:hidden m-1 block w-1/2 text-gray-500 hover:text-white focus:text-white">
                        <div className={isOpen ? '' : 'hidden'}><strong>X</strong></div>
                        <svg className={isOpen ? 'hidden' : '' + 'h-6 w-6 fill-current flex items-center justify-center mx-auto'} viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={isOpen ? '' : 'hidden' + ' sm:py-0 py-3 sm:flex'}>
                <a className="flex items-center py-2 sm:py-0 px-4 block text-white font-semibold hover:bg-pizza-red" href="#">Menu</a>
                <a className="flex items-center py-2 sm:py-0 mt-1 px-4 block text-white font-semibold hover:bg-pizza-red sm:mt-0 sm:ml-2" href="#">Login</a>
            </div>
        </nav>
    );
}

export default Nav;