import express from 'express'
import { login } from '../controllers/auth.js';
import { getallchanels, updateChanelData } from '../controllers/chanel.js';



const routes = express.Router();

routes.post('/login',login)
routes.patch('/update/:id',updateChanelData)
routes.get('/getallchannel',getallchanels)

export default routes;