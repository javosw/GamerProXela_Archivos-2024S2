CREATE DATABASE gpx
WITH 
    ENCODING = 'UTF8' 
    LC_COLLATE = 'es_ES.UTF-8' 
    LC_CTYPE = 'es_ES.UTF-8' 
    TEMPLATE = template0;

\c gpx

CREATE SCHEMA administracion;
CREATE SCHEMA bodega;
CREATE SCHEMA inventario;
CREATE SCHEMA caja;

CREATE TABLE administracion.sucursales (
    id_sucursal VARCHAR PRIMARY KEY,
    nombre VARCHAR NOT NULL,
    ubicacion VARCHAR NOT NULL
);

CREATE TABLE administracion.empleados (
    dpi BIGINT PRIMARY KEY,
    nombre VARCHAR NOT NULL
);

CREATE TABLE administracion.cajeros (
    id_sucursal VARCHAR REFERENCES administracion.sucursales(id_sucursal),
    id_caja BIGINT,
    dpi BIGINT REFERENCES administracion.empleados(dpi),
    PRIMARY KEY(id_sucursal, id_caja, dpi)
);

CREATE TABLE administracion.bodegueros (
    id_sucursal VARCHAR REFERENCES administracion.sucursales(id_sucursal),
    dpi BIGINT REFERENCES administracion.empleados(dpi),
    PRIMARY KEY(id_sucursal, dpi)
);

CREATE TABLE administracion.inventaristas (
    id_sucursal VARCHAR REFERENCES administracion.sucursales(id_sucursal),
    dpi BIGINT REFERENCES administracion.empleados(dpi),
    PRIMARY KEY(id_sucursal, dpi)
);

CREATE TABLE administracion.administradores (
    id_sucursal VARCHAR REFERENCES administracion.sucursales(id_sucursal),
    dpi BIGINT REFERENCES administracion.empleados(dpi),
    PRIMARY KEY(id_sucursal, dpi)
);

CREATE TABLE administracion.usuarios (
    dpi BIGINT REFERENCES administracion.empleados(dpi),
    username VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    PRIMARY KEY(dpi)
);

CREATE TABLE bodega.productos (
    id_producto VARCHAR PRIMARY KEY, -- barcode puede ser VARCHAR si es un código de barras
    descripcion VARCHAR NOT NULL
);

CREATE TABLE bodega.productos_sucursal (
    id_sucursal VARCHAR REFERENCES administracion.sucursales(id_sucursal),
    id_producto VARCHAR REFERENCES bodega.productos(id_producto),
    unidades_en_bodega INT NOT NULL,
    unidades_en_estanteria INT NOT NULL,
    PRIMARY KEY(id_sucursal, id_producto)
);

CREATE TABLE inventario.estanteria (
    id_sucursal VARCHAR REFERENCES administracion.sucursales(id_sucursal),
    id_pasillo BIGINT,
    id_producto VARCHAR REFERENCES bodega.productos(id_producto),
    unidades_en_pasillo INT NOT NULL,
    PRIMARY KEY(id_sucursal, id_pasillo, id_producto)
);

CREATE TABLE caja.clientes (
    nit BIGINT PRIMARY KEY,
    nombre VARCHAR NOT NULL
);

CREATE TABLE caja.ventas (
    id_factura BIGINT PRIMARY KEY,
    id_sucursal VARCHAR REFERENCES administracion.sucursales(id_sucursal),
    nit BIGINT REFERENCES caja.clientes(nit),
    dpi BIGINT REFERENCES administracion.empleados(dpi), -- Relación con cajeros por dpi
    total NUMERIC NOT NULL,
    total_descuento NUMERIC NOT NULL,
    fecha DATE NOT NULL
);

CREATE TABLE caja.productos_facturados (
    id_factura BIGINT REFERENCES caja.ventas(id_factura),
    id_producto VARCHAR REFERENCES bodega.productos(id_producto),
    unidades INT NOT NULL,
    subtotal NUMERIC NOT NULL,
    PRIMARY KEY(id_factura, id_producto)
);

CREATE TYPE nivel_enum AS ENUM ('comun', 'oro', 'platino', 'diamante');

CREATE TABLE caja.tarjetas (
    nit BIGINT REFERENCES caja.clientes(nit),
	nivel nivel_enum,
	-- nivel VARCHAR CHECK (nivel IN ('comun', 'oro', 'platino', 'diamante')),
    puntos INT NOT NULL,
    PRIMARY KEY(nit)
);


--\q
