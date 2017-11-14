// UTILS:
import Auth from './utils/Auth';

// CONTAINERS:
import App from './app/App';

// COMPONENTS:
import Login from './authentication/Login';
import Signup from './authentication/Signup';
import Recipes from './recipes/Recipes';


const routes = {
    // base component (wrapper for the whole application)
    component: App,
    childRoutes: [

        {
            path: '/',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, Recipes);
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
