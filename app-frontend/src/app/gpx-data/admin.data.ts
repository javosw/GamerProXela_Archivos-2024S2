export type Empleado = {
    dpi: number,
    nombre: string,
    rol: string,
    sucursal: string,
    username: string
};

export type AddEmpleado = {
    dpi: number,
    nombre: string,
    sucursal: string,
    rol: string,
    username: string,
    password: string,
}