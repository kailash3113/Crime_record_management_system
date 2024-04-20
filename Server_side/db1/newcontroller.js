// // const model=require('./model')
// const model1=require('./newmodel')


// const adduserb=async(req,res)=>{

//     const userb = new model1.SignupCollectionB(req.body);
    

//     const output = [];

//     try {
//         await userb.save();
//         output.push({"message": "Added dbb", "error": ""});
//         res.json(output);
//     }catch(err) {
//         let errorList = [];
//         if(err.errors) {
//             for(let temp in err.errors) {
//                 errorList.push(err.errors[temp].message);
//             }
//         }
//         output.push({"message": "", "error": errorList});
//         res.json(output);
//     }
// }


// module.exports = {adduserb};