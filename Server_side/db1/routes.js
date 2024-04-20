const Router=require("express").Router();
const Controller=require('./controller')
Router.post("/firstcopy",Controller.adduser)
Router.post("/search",Controller.Search)


module.exports = Router

