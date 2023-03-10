//Substitui o componente Route

import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import { isLogged } from '../helpers/authHandler';

export default({children, ...rest}) => { 
    let logged = isLogged();
    let authorized = (rest.private && !logged) ? false : true;

    return (
        <Route
            {...rest}
            render={() => 
                authorized ? children : <Redirect to="/signin"/>
            }
        />
    );
}