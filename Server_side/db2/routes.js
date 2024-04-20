const Router=require("express").Router();
const Controller=require('./controller')
Router.post("/secondcopy",Controller.adduser)
module.exports = Router

