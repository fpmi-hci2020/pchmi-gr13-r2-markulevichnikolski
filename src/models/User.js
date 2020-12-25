const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    orderedGoods: {
        type: [String],
        required: false
    }
});

// const userSchema = new mongoose.Schema({
//     version: {
//         type: Number,
//         required: true
//     },
//     name: {
//         type: String
//     },
//     releaseDate: {
//         type: Date,
//         required: true
//     }
// });

mongoose.model('User', userSchema);
//mongoose.model('Android', userSchema);
