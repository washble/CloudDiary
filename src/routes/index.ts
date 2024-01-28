import { Request, Response, NextFunction, Router } from 'express'
import IndexController from "../controller/index";

export default class IndexRouter {
    private router = Router();
    private indexController: IndexController;
    
    constructor() {
        this.indexController = new IndexController();
    }

    public GetRouter() {
        this.router.get('/', this.indexController.getData);

        return this.router;
    }
}
