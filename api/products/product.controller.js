const products = require('./product.module');

module.exports = {
    product:async(req,res)=>{
        try{
            console.log("=====>soooooo")
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
    }
}