import { Router } from "express";
import BackendController from "../controller/BackendController"

class BackendRoute {

    public router: Router;
    private backendController: BackendController;

    constructor() {
        this.router = Router();
        this.backendController = new BackendController();
        this.config();
    }

    public config = (): void => {
        this.router.get('/', this.backendController.index);
        this.router.get('/people/:id', this.backendController.getPeople);
        this.router.get('/films/:id', this.backendController.getFilm);
        this.router.get('/vehicles/:id', this.backendController.getVehicle);
        this.router.get('/starships/:id', this.backendController.getStraship);
        this.router.get('/species/:id', this.backendController.getStraship);
        this.router.get('/planets/:id', this.backendController.getPlanet);
    }

}

export default BackendRoute;