const user = require('./user.module');

module.exports = {
   signup:async (req,res)=>{
       try{
          let User = new user(req.body);
          let result = await User.save();
          if(result){
             res.status(200).send({result: true,data: result});
          } else{
            res.status(404).send({result: false,data: '', message: "no data found"});
          }
       }catch(err){
           console.log(err.message);
       }
   },
   login: async (req,res)=>{
      try{
          let isUser = await user.findOne({email:req.body.email});
           if(isUser){
              if(isUser.password == req.body.password){
                 res.status(200).send({result: true, data: isUser})
              } else{
                 res.status(404).send({result: false, data: '', message:"Please check  password"})
              }
           } else
           res.status(404).send({result: false, data: '', message:"Please check userId"})
      }catch(e){
         console.log(e.message);
      }
   }
}
