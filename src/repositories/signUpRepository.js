const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');

const customError = require('../const/customError');
const JWT = require('../const/JWT');

class SignUpRepository {
    async signUp(email, password, firstname, lastname, address) {
        try {
            const userExists = await User.findOne({ email });

            if (userExists) {
                return {
                    data: {
                        error: true,
                        message:'This username already in use'
                    }
                }
            }

            const user = new User({ email, password, firstname, lastname, address });
            await user.save();
            const token = jwt.sign({ id: user._id }, JWT.secret, { expiresIn: JWT.live });

            return {
                data: {
                    token
                }
            };
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new SignUpRepository();
