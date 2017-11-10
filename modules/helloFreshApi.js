const axios = require( 'axios' );
const hfClientSecret = require( '../config/secrets.json' ).hfClientSecret;

let validToken;
let cuisines;



const getToken = () => {
    const reqOptions = {
        method: 'POST',
        // `url` is the server URL that will be used for the request
        url: '/auth/token',
        // `method` is the request method to be used when making the request
        // `baseURL` will be prepended to `url` unless `url` is absolute.
        // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
        // to methods of that instance.
        baseURL: 'https://gw.hellofresh.com/',
        // `headers` are custom headers to be sent
        headers: { 'Content-Type': 'application/json' },
        // `data` is the data to be sent as the request body
        data: {
            client_id: 'hellofresh-dev-test',
            client_secret: hfClientSecret,
            grant_type: 'client_credentials',
            scope: 'public'
        },
        // `responseType` indicates the type of data that the server will respond with
        responseType: 'json',
    };

    return axios( reqOptions )

        .then( response => {
            // console.log( 'hfApi.js - getToken() - access_token: ', response.data.access_token );
            validToken = response.data.access_token;
            return response.data.access_token;
        } )

        .catch( error => {
            if ( error.response ) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log( error.response.data );
                console.log( error.response.status );
                console.log( error.response.headers );
            } else if ( error.request ) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log( error.request );
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log( 'Error', error.message );
            }
            console.log( error.config );
        } );
};




const getCuisines = bearerToken => {

    const reqOptions = {
        method: 'GET',
        url: '/api/cuisines',
        baseURL: 'https://gw.hellofresh.com/',
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // `params` are the URL parameters to be sent with the request
        // Must be a plain object or a URLSearchParams object
        params: {
            country: 'us',
            locale: 'en-US',
            take: 'all'
        }
    };

    return axios( reqOptions )

        .then( cuisineData => {
            cuisines = cuisineData.data;
            // console.log( cuisines  );
            return cuisines;
        } )

        .catch( error => {
            if ( error.response ) {
                console.log( error.response.data );
                console.log( error.response.status );
                console.log( error.response.headers );
                if ( error.response.status === 401 ) {
                    return getToken()
                        .then( token => getCuisines( token ) );
                }
            } else if ( error.request ) {
                console.log( error.request );
            } else {
                console.log( 'Error', error.message );
            }
            console.log( error.config );
        } );
};




const getRecipes = ( bearerToken, cuisine, order, limit, offset ) => {

    const reqOptions = {
        method: 'GET',
        url: '/api/recipes/search',
        baseURL: 'https://gw.hellofresh.com/',
        headers: {
            'Authorization': `Bearer ${bearerToken}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        // `params` are the URL parameters to be sent with the request
        // Must be a plain object or a URLSearchParams object
        params: {
            country: 'us',
            locale: 'en-US',
            limit: limit || 9,
            offset: offset || 0,
            cuisine: cuisine || 'italian',
            order: order || '-rating'
        },
    };

    return axios( reqOptions )

        .then( recipes => recipes.data )

        .catch( error => {
            if ( error.response ) {
                console.log( error.response.data );
                console.log( error.response.status );
                console.log( error.response.headers );
                if ( error.response.status === 401 ) {
                    return getToken()
                        .then( token => getRecipes( token, cuisine, order, limit, offset ) );
                }
            } else if ( error.request ) {
                console.log( error.request );
            } else {
                console.log( 'Error', error.message );
            }
            console.log( error.config );
        } );
};




const queryCuisines = () => {
    if ( cuisines ) { return Promise.resolve( cuisines ); }
    if ( validToken ) { return getCuisines( validToken ); }
    return getToken().then( token => getCuisines( token ) );

};




const queryRecipes = ( cuisine, order, limit, offset ) => {
    if ( !validToken ) {
        return getToken()
            .then( token => getRecipes( token, cuisine, order, limit, offset ) );
    }
    return getRecipes( validToken, cuisine, order, limit, offset );
};




/* MODULE EXPORTS */
module.exports.queryRecipes = queryRecipes;
module.exports.queryCuisines = queryCuisines;
