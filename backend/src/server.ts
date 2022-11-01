import express, { Application, json, urlencoded } from "express";
import BackendRoute from "./route/BackendRoute"

class Server {

    private backend: Application;
    private backendRoute: BackendRoute;

    constructor() {
        this.backend = express();
        this.backendRoute = new BackendRoute();
        this.config();
        this.route();
        this.start();
    }

    public config = (): void => {
        this.backend.set('port', 1802);
        this.backend.use(urlencoded({extended: true}));
        this.backend.use(json());  
        this.backend.use(function (req, res, next) {
			// Website you wish to allow to connect
			res.setHeader('Access-Control-Allow-Origin', '*');

			// Request methods you wish to allow
			res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

			// Request headers you wish to allow
			res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

			// Set to true if you need the website to include cookies in the requests sent
			// to the API (e.g. in case you use sessions)
			res.setHeader('Access-Control-Allow-Credentials', 0);

			// Pass to next layer of middleware
			next();
		});
    }

    public route = (): void => {
        this.backend.use('/api', this.backendRoute.router);
    }

    public start = (): void => {
        this.backend.listen(this.backend.get('port'), () => {
            console.log('Server on port:', this.backend.get('port'));
        });
    }

}

const server = new Server();