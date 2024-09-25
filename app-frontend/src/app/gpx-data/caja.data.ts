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