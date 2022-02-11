const { auth } = require('express-openid-connect');

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: 'f18cdec8abee38d6dec4693517aa215cc19ec223050a1b6f93c124e53ca6d7cc',
    baseURL: 'https://sechatroom.herokuapp.com',
    clientID: 'RGyt8daCqkqWTILkox7gQI4tBAkCJHqS',
    issuerBaseURL: 'https://patient-tree-2876.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});