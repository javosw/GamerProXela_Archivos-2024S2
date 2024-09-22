export type Producto = {
    barcode: string;
    nombre: string;
    pasillo: number;
    en_bodega: number;
    en_pasillo: number
};
export type AddPasillo = {
    barcode: string;
    pasillo: number;
    en_pasillo: number
};
