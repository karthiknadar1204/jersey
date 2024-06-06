const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        name: String,
        email: String,
        phone: String,
        address: String,
    },
    items: [
        {
            productId: String,
            name: String,
            cost: Number,
            quantity: Number,
        },
    ],
    totalCost: Number,
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;