const Person = require('../model/personModel')

exports.nameController = (req,res)=>{
   const person =new Person("yp",30)
    res.status(200).json({
        name:person.getName(),
        age : person.getAge()
    })
}