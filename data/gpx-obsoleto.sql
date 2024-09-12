CREATE TABLE Sucursales (
    id_sucursal VARCHAR PRIMARY KEY,
    nombre VARCHAR,
    ubicacion VARCHAR
);

CREATE TABLE Productos (
    id_producto VARCHAR PRIMARY KEY,
    descripcion VARCHAR
);

CREATE TABLE ProductosSucursal (
    id_sucursal VARCHAR,
    id_producto VARCHAR,
    unidades_en_bodega NUMERIC,
    unidades_en_estanteria NUMERIC,
    PRIMARY KEY (id_sucursal, id_producto),
    FOREIGN KEY (id_sucursal) REFERENCES Sucursales(id_sucursal),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

CREATE TABLE Estanteria (
    id_sucursal VARCHAR,
    id_pasillo INT,
    id_producto VARCHAR,
    unidades_en_pasillo NUMERIC,
    PRIMARY KEY (id_sucursal, id_pasillo, id_producto),
    FOREIGN KEY (id_sucursal) REFERENCES Sucursales(id_sucursal),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

CREATE TABLE Empleados (
    dpi NUMERIC PRIMARY KEY,
    nombre VARCHAR
);

CREATE TABLE Cajeros (
    id_sucursal VARCHAR,
    id_caja INT,
    dpi NUMERIC,
    PRIMARY KEY (id_sucursal, id_caja, dpi),
    FOREIGN KEY (id_sucursal) REFERENCES Sucursales(id_sucursal),
    FOREIGN KEY (dpi) REFERENCES Empleados(dpi)
);

CREATE TABLE Bodegueros (
    id_sucursal VARCHAR,
    dpi NUMERIC,
    PRIMARY KEY (id_sucursal, dpi),
    FOREIGN KEY (id_sucursal) REFERENCES Sucursales(id_sucursal),
    FOREIGN KEY (dpi) REFERENCES Empleados(dpi)
);

CREATE TABLE Inventaristas (
    id_sucursal VARCHAR,
    dpi NUMERIC,
    PRIMARY KEY (id_sucursal, dpi),
    FOREIGN KEY (id_sucursal) REFERENCES Sucursales(id_sucursal),
    FOREIGN KEY (dpi) REFERENCES Empleados(dpi)
);

CREATE TABLE Administradores (
    id_sucursal VARCHAR,
    dpi NUMERIC,
    PRIMARY KEY (id_sucursal, dpi),
    FOREIGN KEY (id_sucursal) REFERENCES Sucursales(id_sucursal),
    FOREIGN KEY (dpi) REFERENCES Empleados(dpi)
);

CREATE TABLE Usuarios (
    dpi NUMERIC PRIMARY KEY,
    username VARCHAR,
    password VARCHAR,
    FOREIGN KEY (dpi) REFERENCES Empleados(dpi)
);

CREATE TABLE Clientes (
    nit NUMERIC PRIMARY KEY,
    nombre VARCHAR
);

CREATE TABLE Ventas (
    id_factura SERIAL PRIMARY KEY,
    id_sucursal VARCHAR,
    nit NUMERIC,
    dpi NUMERIC,
    total NUMERIC,
    total_descuento NUMERIC,
    fecha DATE,
    FOREIGN KEY (id_sucursal) REFERENCES Sucursales(id_sucursal),
    FOREIGN KEY (nit) REFERENCES Clientes(nit),
    FOREIGN KEY (dpi) REFERENCES Empleados(dpi)
);

CREATE TABLE ProductosFacturados (
    id_factura INT,
    id_producto VARCHAR,
    unidades NUMERIC,
    subtotal NUMERIC,
    PRIMARY KEY (id_factura, id_producto),
    FOREIGN KEY (id_factura) REFERENCES Ventas(id_factura),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

CREATE TYPE nivel_enum AS ENUM ('comun', 'oro', 'platino', 'diamante');

CREATE TABLE Tarjetas (
    nit NUMERIC PRIMARY KEY,
    nivel nivel_enum,
    puntos NUMERIC,
    FOREIGN KEY (nit) REFERENCES Clientes(nit)
);
