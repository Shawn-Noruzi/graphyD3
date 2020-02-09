const express = require('express');
const graphqlHTTP = require('express-graphql'); 

const app = express();

//setting up middleware
app.use('/graphql', graphqlHTTP({
}));

app.listen(4000, () => {
	console.log('listening for requests on port 4000');
});