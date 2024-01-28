import { Request, Response, NextFunction } from 'express';
import IndexModel from "../models/index";
//import { } from "../data/index";

export default class IndexController {
    private readonly indexModel: IndexModel;

    constructor() {
        this.indexModel = new IndexModel();
    }
    
    public getData = async (req: Request, res: Response, next: NextFunction) => {

        let getResultData = await this.indexModel.getData();

        res.render('index', { title: getResultData });
    }
}
