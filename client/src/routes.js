// UTILS:
import Auth from './utils/Auth';

// CONTAINERS:
import App from './app/app';

// COMPONENTS:
import Login from './authentication/login';
import Signup from './authentication/signup';
import RecipesListContainer from './recipes-list/recipes-list-container';


const routes = {
    // base component (wrapper for the whole application)
    component: App,
    childRoutes: [

        {
            path: '/',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, RecipesListContainer);
                } else {
                    callback(null, Login);
                }
            }
        },

        {
            path: '/login',
            component: Login
        },

        {
            path: '/signup',
            component: Signup
        },

        {
            path: '/logout',
            onEnter: (nextState, replace) => {
                Auth.deauthenticateUser();

                // change the current URL to /
                replace('/login');
            }
        }
    ]
};

export default routes;
