"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BackendModel_1 = __importDefault(require("../model/BackendModel"));
class BackendController {
    constructor() {
        this.index = (req, res) => res.json({ 'error': 0, 'msg': 'API: node-express-ts' });
        this.getPeople = (req, res) => {
            const { id } = req.params;
            const people = this.model.getPeopleByID(parseInt(id));
            if (people) {
                return res.send(people);
            }
            return res.json({ 'error': 1, 'msg': 'API: id no found' });
        };
        this.getFilm = (req, res) => {
            const { id } = req.params;
            const film = this.model.getFilmByID(parseInt(id));
            if (film) {
                return res.send(film);
            }
            return res.json({ 'error': 1, 'msg': 'API: id no found' });
        };
        this.getVehicle = (req, res) => {
            const { id } = req.params;
            const vehicle = this.model.getVehicleByID(parseInt(id));
            if (vehicle) {
                return res.send(vehicle);
            }
            return res.json({ 'error': 1, 'msg': 'API: id no found' });
        };
        this.getStraship = (req, res) => {
            const { id } = req.params;
            const species = this.model.getSpeciesByID(parseInt(id));
            if (species) {
                return res.send(species);
            }
            return res.json({ 'error': 1, 'msg': 'API: id no found' });
        };
        this.getPlanet = (req, res) => {
            const { id } = req.params;
            const species = this.model.getPlanetsByID(parseInt(id));
            if (species) {
                return res.send(species);
            }
            return res.json({ 'error': 1, 'msg': 'API: id no found' });
        };
        this.model = new BackendModel_1.default();
    }
}
exports.default = BackendController;
