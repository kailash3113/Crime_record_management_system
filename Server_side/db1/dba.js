const mongoose = require('mongoose');
require('dotenv').config();

const connectToMongooseDB = async () => {
    try {
        // Create a Mongoose connection using the default connection
        mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Create a reference to the default connection
        const defaultConnection = mongoose.connection;

        // Set up event listeners for the default connection
        defaultConnection.on('error', console.error.bind(console, 'Default connection error..'));
        defaultConnection.once('open', function () {
            console.log('Default Connection Connected Successfully!');
        });

       
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
}

module.exports = { connectToMongooseDB };
