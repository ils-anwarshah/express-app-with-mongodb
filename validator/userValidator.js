const joi = require('joi')


const joiSchema = joi.object({
  name:joi.string().min(2).max(20).required(),
  email:joi.string().email().required(),
  password:joi.string().min(3).max(20).required()
})

module.exports = joiSchema