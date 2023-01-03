const mongoose = require('mongoose')

const connectDB = async () => {

    try {
        mongoose.set("strictQuery", false);
        const connect = await mongoose.connect(process.env.MONGO_URI)

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB


// use this function to connect to mongoDb and start the server.js

// const startServer = async() => {
//     try {
//         await connectDB();
//         app.listen(PORT, (
//             console.log(`server running on port ${PORT}`)
//         ))
//     } catch (error) {
//         console.log(error);
//     }
// }
// startServer()