
// ng g cl data/User --type=data
export class User {
    dpi:number;
    nombre:string;
    sucursal:string;
    rol:string;
    username:string;

    constructor(dpi:number, nombre:string, sucursal:string, rol:string, username:string){
        this.dpi = dpi;
        this.nombre = nombre;
        this.sucursal = sucursal;
        this.rol = rol;
        this.username = username;
    }
}
