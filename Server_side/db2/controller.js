const model=require('./model')
// const model1=require('./newmodel')


const adduser=async(req,res)=>{

    const usera = new model.SignupCollection(req.body);
    

    const output = [];

    try {
        await usera.save();
        output.push({"message": "Added", "error": ""});
        res.json(output);
    }catch(err) {
        console.log(err)
        let errorList = [];
        if(err.errors) {
            for(let temp in err.errors) {
                errorList.push(err.errors[temp].message);
            }
        }
        output.push({"message": "", "error": errorList});
        res.json(output);
    }
}


module.exports = {adduser};