const mongoose = require('mongoose');
const User = mongoose.model('User');
const Good = mongoose.model('Good');

class GoodsRepository {
    async buy(userId, goodId) {
        try {
            const user = await User.findOne({ _id: userId });
            if (!user) {
                return {
                    data: {
                        error: true,
                        message: 'Invalid user'
                    }
                };
            }

            const good = await Good.findOne({ _id: goodId });
            if (!good) {
                return {
                    data: {
                        error: true,
                        message: 'There are no such good'
                    }
                };
            }

            await User.updateOne({ _id: userId }, { $set: { orderedGoods: [...user.orderedGoods, goodId] } });
        } catch (err) {
            throw err;
        }
    }

    async getAllGoods() {
        try {
            const goods = await Good.find({});
            if (!goods) {
                return {
                    data: {
                        error: true,
                        message: 'There are no such goods'
                    }
                };
            }

            return {
                data: {
                    goods
                }
            };
        } catch (err) {
            throw err;
        }
    }

    async getOrderedGoods(userId) {
        try {
            const user = await User.findOne({ _id: userId });
            if (!user) {
                return {
                    data: {
                        error: true,
                        message: 'User not found'
                    }
                };
            }

            const orderedGoodsId = user.orderedGoods;
            const orderedGoods = await Good.find(
                {'_id': { $in: orderedGoodsId}}
            );

            if (!orderedGoods) {
                return {
                    data: {
                        error: true,
                        message: 'Goods not found'
                    }
                };
            }

            return {
                data: {
                    goods: orderedGoods
                }
            }

        } catch (err) {
            throw err;
        }
    }
}

module.exports = new GoodsRepository();
