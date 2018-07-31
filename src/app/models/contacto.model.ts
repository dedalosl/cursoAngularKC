import { Grupo } from './grupo.model';
import { Sector } from './sector.model';

export class Contacto {
    name: string;
    lastname: string;
    eMail: string;
    phoneNumber: string;
    grupo: Grupo;
    sector: Sector;
    aficiones: Array<string>;

    constructor() {
        this.aficiones = [];
    }
}
