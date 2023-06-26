const joi = require('joi')


const joiSchema = joi.object({
  name:joi.string().min(2).max(20).required(),
  email:joi.string().email().required(),
  password:joi.string().min(3).max(20).required()
})

const Validator = async (req,res,next)=>{

    const validated_data = await joiSchema.validateAsync(req.body).then((result)=>{
      if(result){
        console.log('validation funcation',result);
        next() 
      }
    }).catch((e)=>{
      res.status(404).send('please enter valid email or password')
      console.log('error',e.message);
    })
    
  }
module.exports = {Validator}