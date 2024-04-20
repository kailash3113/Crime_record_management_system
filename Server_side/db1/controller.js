const model=require('./model')

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

const Search = async (req, res) => {
    try {
        let results = await model.SignupCollection.find({Aadhar: req.body.Aadhar});
        (results.length > 0) ? res.json(results) : res.json("false");
    } catch(err) {
        res.json(err.message);
    }
}


module.exports = {adduser,Search};