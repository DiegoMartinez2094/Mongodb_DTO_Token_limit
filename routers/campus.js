import { con } from "../db/atlas.js";
import { limitGrt } from "../limit/config.js";
import {appMiddlewareCampusVerify, appDTOData} from "../middleware/campus.js";
import {Router} from "express";
const appCampus = Router();

let db = await con();
let usuario = db.collection("usuario");

appCampus.get("/", limitGrt(), appMiddlewareCampusVerify, async(req, res) => {
    if(!req.rateLimit) return; 
    console.log(req.rateLimit);
    let db = await con();
    let usuario = db.collection("usuario");
    let result = await usuario.find({}).toArray();
    res.send(result);
});
appCampus.post("/", limitGrt(), appMiddlewareCampusVerify, appDTOData, async(req, res) => {
    let resul;
    try {
        resul = await usuario.insertOne(req.body);
        res.status(201).send(resul);
    } catch (error) {
        console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
        res.send();
        // resul = JSON.parse(error.errInfo.details.schemaRulesNotSatisfied[0].propertiesNotSatisfied[0].description);
        // res.status(resul.status).send(resul);
    }
});
export default appCampus; 