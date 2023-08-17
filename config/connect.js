const mongoose = require('mongoose');
const connectDB = async() => {
    await mongoose.connect('mongodb+srv://hassan130799:hello123@goalsetterapp.dkjljba.mongodb.net/?retryWrites=true&w=majority');
    console.log(`database connected on host ${mongoose.connection.host.cyan}`)
}

module.exports = connectDB