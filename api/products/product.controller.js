const products = require('./product.module');
const mongoose = require('mongoose');

module.exports = {
    product:async(req,res)=>{
        try{
           let Product = new products(req.body);
           let result = await Product.save();
           if(result){
               res.status(200).send({result: true, data: result});
           }
           else{
            res.status(404).send({result: false,data: '', message: "no data found"}); 
           }

        }catch(err){
            console.log(err.message);
        }
    }, 
    get: async(req,res)=>{
        try{
            let filter = {}
            if(req.body.productname)
            filter.productname = req.body.productname
            if(req.body.productdescription)
            filter.productdescription = req.body.productdescription
            let result = await products.find(filter)
            if(result)
            res.status(200).send({result: true, data: result});
            else
            res.status(404).send({result: false,data: '', message: "no data found"}); 
             
        } catch(err){
            console.log(err.message);  
        }
    },
    productUpdate: async(req,res)=>{
        try{
             // updateOne updateMany
            let find = {
                _id:mongoose.Types.ObjectId(req.query.id)  
            }
            let result = await products.findByIdAndUpdate(find,req.body);
            if(result)
            res.status(200).send({result: true,message:"You have updated successfully!"})

        }catch(err){
            console.log(err.message);
        }
    },
    productDelete: async(req,res)=>{
        try{
            let result = await products.findByIdAndDelete(mongoose.Types.ObjectId(req.query.id));
            if(result)
            res.status(200).send({result: true,message:"You have deleted successfully."});
        } catch(err){
            console.log(err.message);
        }
    }
}