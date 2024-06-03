// sk_test_51PNQgESDgo37ugH7Mj3tN2c3kgMPVmEjQF2TZPYoy15TAVzdPzpLn96NzudCxsxNWiFyfQVDvvzFvt99lidMYzAk00rDOd0rQy
//coffee:price_1PNQiGSDgo37ugH7wGC4l70F
//sun-glasses:price_1PNQjkSDgo37ugH7SfpWFDdy
//camera:price_1PNQkfSDgo37ugH7IZPvK7Hq

const express = require('express');
var cors = require('cors');

const stripe = require('stripe')('sk_test_51PNQgESDgo37ugH7Mj3tN2c3kgMPVmEjQF2TZPYoy15TAVzdPzpLn96NzudCxsxNWiFyfQVDvvzFvt99lidMYzAk00rDOd0rQy');

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());


app.post('/checkout',async(req,res)=>{
        /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });
    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));

