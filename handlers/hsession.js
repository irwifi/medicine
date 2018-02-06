"use strict";
module.exports = ( params ) => {
	const app = params.app;
	const sessions = params.sessions;

	app.use(sessions({
		cookieName: 'authen', // cookie name dictates the key name added to the request object 
		secret: 'fkjdaihmvij_kgj;aGDagafdfjkf;mnfKJNMF:MFJfadm;k', // should be a large unguessable string 
		duration: 30 * 60 * 1000, // session expires in 30 minutes
		activeDuration:  20 * 60 * 1000, // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds : here 20 minutes
		httpOnly: true // when true, cookie is not accessible from javascript 
	}));

	app.use(sessions({
		cookieName: 'temp_session', // cookie name
		secret: 'fkjdaihmvij_kgj;aGDagafdfjkf;mnfKJNMF:MFJfadm;k', // should be a large unguessable string 
		duration: 30 * 60 * 1000, // session expires in 30 minutes
		activeDuration:  20 * 60 * 1000, // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds : here 20 minutes
		httpOnly: true // when true, cookie is not accessible from javascript 
	}));
};
