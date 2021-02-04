const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
      productname:{
            type: String,
            required: true,
      },
      productdescription: {
             type: String,
            required: true,  
      },
      productqnty: {
             type: Number,
             required: true,  
      },
      productimage: {
            type: 'string'
      },
      productprice:{
            type: Number,
            required: true,
      }
})
module.exports = mongoose.model('products', productSchema);