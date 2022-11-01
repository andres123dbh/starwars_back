"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const people_json_1 = __importDefault(require("../db/people.json"));
const films_json_1 = __importDefault(require("../db/films.json"));
const vehicles_json_1 = __importDefault(require("../db/vehicles.json"));
const starships_json_1 = __importDefault(require("../db/starships.json"));
const species_json_1 = __importDefault(require("../db/species.json"));
const planets_json_1 = __importDefault(require("../db/planets.json"));
class BackendModel {
    constructor() {
        /* get people by id */
        this.getPeopleByID = (id) => people_json_1.default[--id];
        /* get film by id */
        this.getFilmByID = (id) => {
            let film = new Object;
            films_json_1.default.forEach(element => {
                if (element.episode_id == id) {
                    film = element;
                }
            });
            return film;
        };
        /* get vehicle by id */
        this.getVehicleByID = (id) => vehicles_json_1.default[--id];
        /* get starship by id */
        this.getStarshipByID = (id) => starships_json_1.default[--id];
        /* get species by id */
        this.getSpeciesByID = (id) => species_json_1.default[--id];
        /* get planets by id */
        this.getPlanetsByID = (id) => planets_json_1.default[--id];
        // TODO document why this constructor is empty
    }
}
exports.default = BackendModel;
