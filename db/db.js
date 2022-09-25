const mongoose = require("mongoose")
module.exports = () => {
    const connectionParams = {
        useUnifiedTopology: true
    };
    try {
        mongoose.connect("mongodb+srv://sahoo123:sahoo123@cluster0.bajck.mongodb.net/Practice?retryWrites=true&w=majority", connectionParams)
        console.log("connect to database sucessfuly")

    } catch (error) {
        console.log(error);
        console.log("could not connect to database")
    }
}

