const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const User = require('./models/user.model.js');
const Order = require('./models/order.model.js');
const stripe = require('stripe')('sk_test_51PNQgESDgo37ugH7Mj3tN2c3kgMPVmEjQF2TZPYoy15TAVzdPzpLn96NzudCxsxNWiFyfQVDvvzFvt99lidMYzAk00rDOd0rQy');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

dotenv.config();

mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB is connected!!!'))
    .catch(err => console.log('MongoDB connection error:', err));

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'kendall.mertz@ethereal.email',
        pass: 'Nk7FemF6rx5Yufh1yZ'
    }
});

app.post('/checkout', async (req, res) => {
    const { user, items } = req.body;

    const totalCost = items.reduce((acc, item) => acc + item.cost * item.quantity, 0);

    try {
        console.log('Received user data:', user);
        console.log('Received items:', items);

        let existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
            existingUser = new User(user);
            await existingUser.save();
            console.log('User saved to the database:', existingUser);
        } else {
            console.log('User already exists in the database:', existingUser);
        }

        const newOrder = new Order({ user, items, totalCost });
        await newOrder.save();
        console.log('Order saved to the database:', newOrder);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'karthiknadar1204@gmail.com',
            subject: 'New Order Placed',
            html: `
                <p>A new order has been placed by ${user.name}.</p>
                <p>Order details:</p>
                <ul>
                    ${items.map(item => `
                        <li>
                            <strong>Product Name:</strong> ${item.name}<br>
                            <strong>Cost:</strong> $${item.cost}<br>
                            <strong>Quantity:</strong> ${item.quantity}<br>
                        </li>
                    `).join('')}
                </ul>
                <p>Total Cost: ${totalCost}</p>
            `
        };
        

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        let lineItems = items.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                },
                unit_amount: item.cost * 100,
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: "http://localhost:3000/success",
            cancel_url: "http://localhost:3000/cancel"
        });

        res.json({ url: session.url });
    } catch (error) {
        console.error('Error during checkout:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(4000, () => console.log("Listening on port 4000!"));
