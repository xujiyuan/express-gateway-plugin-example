const authUrl = 'https://login.microsoftonline.com/f3308007-477c-4a70-8889-34611817c55a/oauth2/v2.0/authorize';
const tokenUrl = 'https://login.microsoftonline.com/f3308007-477c-4a70-8889-34611817c55a/oauth2/v2.0/token';
const jwksUrl = 'https://login.microsoftonline.com/f3308007-477c-4a70-8889-34611817c55a/discovery/v2.0/keys';
const request = require('request-promise-native');

module.exports = function (gatewayExpressApp) {
  gatewayExpressApp.get('/oauth/authorize', (req, res) => {
  	const redirectUrl = `${authUrl}?response_type=${req.query.response_type}&client_id=${req.query.client_id}&scope=http://localhost:9000/test%20offline_access&state=${req.query.state}&redirect_uri=${req.query.redirect_uri}`;
    console.log(redirectUrl);
  	console.log('hello get called');
    res.redirect(redirectUrl);
  });

    gatewayExpressApp.post('/oauth/token', async (req, res) => {
  	const requestUrl = 'https://login.microsoftonline.com/f3308007-477c-4a70-8889-34611817c55a/oauth2/v2.0/token';
	let formData = {
        form: {
            grant_type: 'client_credentials',
            client_id: 'ac2aaf10-0d1c-4794-8cb8-fe8790d4c12f',
            client_secret: '6F/+q/aXO]l2HkZ5xXzT3yaD7vGp:XF-',
            scope: 'http://localhost:9000/.default'
        }
    };
    try{
	    const response = await request.post(requestUrl, formData);
	    res.type('application/json');
	    res.send(response);
	    console.log(result);
	} catch(error){
		res.send('error', error);
		console.log(error);
	}

  });
};


