const user = require('./user.module');
const bcrypt = require('bcrypt');

module.exports = {
   signup:async (req,res)=>{
       try{
         let isUserExist = await user.findOne({email:req.body.email});
         if(isUserExist){
            res.status(409).send({result: false,data: '', message: "user is already exist"});
         } else{
            let User = new user(req.body);
            let salt = await bcrypt.genSalt(10);
            User.password = await bcrypt.hash(User.password, salt);
            let result = await User.save();
            if(result){
               res.status(200).send({result: true,data: result});
            } else{
              res.status(404).send({result: false,data: '', message: "no data found"});
            }
         }
       }catch(err){
           console.log(err.message);
       }
   },
   login: async (req,res)=>{
      try{
          let isUser = await user.findOne({email:req.body.email});
           if(isUser){
            let isValidPassword = await bcrypt.compare(req.body.password, isUser.password);
              if(isValidPassword){
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
