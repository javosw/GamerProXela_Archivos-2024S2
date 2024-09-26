export type GetProducto = {
    barcode: string;
    precio: number;
    nombre: string;
};
export type GetCliente = {
    nit:number;
    nombre:string;
};

export type AddSubVenta = {
    barcode:string;
    unidades:number;
    subtotal:number;
}

export type AddVenta = {
    nit:number;
    total:number;
    fecha:string;
    productos:AddSubVenta[]
}
export type AddCliente = {
    nit:number;
    nombre:string;
}
export type ModCliente = {
    nit:number;
    nombre:string;
    username:string;
    password:string;
}
