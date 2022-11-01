import peoples from "../db/people.json";
import films from "../db/films.json";
import vehicles from "../db/vehicles.json";
import starships from "../db/starships.json";
import species from "../db/species.json";
import planets from "../db/planets.json";
import { IPeople } from "interface/IPeople";
import fs from "fs";
import path from "path";

class BackendModel {

    constructor() {
      // TODO document why this constructor is empty
    }

    /* get people by id */
    public getPeopleByID = (id: number) => peoples[--id];

    /* get film by id */
    public getFilmByID = (id: number): object|null => {
        let film:object = new Object;
        films.forEach(element => {
            if (element.episode_id == id) {
                film = element;
            }
        });
        return film;
    }

    /* get vehicle by id */
    public getVehicleByID = (id: number) => vehicles[--id];

    /* get starship by id */
    public getStarshipByID = (id: number) => starships[--id];

    /* get species by id */
    public getSpeciesByID = (id: number) => species[--id];

    /* get planets by id */
    public getPlanetsByID = (id: number) => planets[--id];
}

export default BackendModel;