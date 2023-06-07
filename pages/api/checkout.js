import {initMongoose} from "../../lib/mongoose";
import Product from "../../models/Product";
import Order from "../../models/Order";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req,res) {
  await initMongoose();

  if (req.method !== 'POST') {
    res.json('should a post but its not!');
    return;
  }

  const {email,name,address,city} = req.body;
  const productsIds = req.body.products.split(',');
  const uniqIds = [...new Set(productsIds)];
  const products = await Product.find({_id:{$in:uniqIds}}).exec();

  let line_items = [];
  for (let productId of uniqIds) {
    const quantity = productsIds.filter(id => id === productId).length;
    const product = products.find(p => p._id.toString() === productId);
    line_items.push({
      quantity,
      price_data: {
        currency: 'USD',
        product_data: {name:product.name},
        unit_amount: product.price * 100,
      },
    });
  }

  res.redirect(303, "/thanks");
}