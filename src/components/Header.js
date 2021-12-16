import React from 'react';

import { AppBar, Toolbar } from "@material-ui/core";
import logo from "./../assets/assets/img/logo.png";

const Header = () => (

    <AppBar position="sticky">
        <Toolbar>
            <img src={logo} width="36" height="36" />
            &nbsp;&nbsp;
            <h1>Nutricional App</h1>
        </Toolbar>

    </AppBar>
);


export default Header;
