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
INSERT INTO administracion.sucursales VALUES 
('parque','Parque Central Xela','Zona 1'),
('centro1','Centro Comercial Pradera','Zona 3'),
('centro2','Centro Comercial Mont Blanc','Zona 3')
;

CREATE TYPE administracion.rol_type AS ENUM ('caja', 'bodega', 'inventario', 'administracion');

CREATE TABLE administracion.empleados (
    dpi BIGINT PRIMARY KEY,
    nombre VARCHAR NOT NULL,
    id_sucursal VARCHAR REFERENCES administracion.sucursales(id_sucursal),
    rol administracion.rol_type NOT NULL,
    username VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL
);

CREATE TABLE bodega.productos (
    id_producto VARCHAR PRIMARY KEY, -- barcode
    descripcion VARCHAR NOT NULL
);

CREATE TABLE bodega.productos_sucursal (
    id_sucursal VARCHAR REFERENCES administracion.sucursales(id_sucursal),
    id_producto VARCHAR REFERENCES bodega.productos(id_producto),
    unidades_bodega INT CHECK (unidades_bodega >= 0),
    unidades_estanteria INT CHECK (unidades_estanteria >= 0),
    PRIMARY KEY(id_sucursal, id_producto)
);

CREATE TABLE inventario.estanteria (
    id_sucursal VARCHAR REFERENCES administracion.sucursales(id_sucursal),
    id_pasillo INT NOT NULL,
    id_producto VARCHAR REFERENCES bodega.productos(id_producto),
    unidades_pasillo INT CHECK (unidades_pasillo >= 0),
    PRIMARY KEY(id_sucursal, id_pasillo, id_producto)
);

CREATE TABLE caja.cajas (
    id_caja INT,
    id_sucursal VARCHAR REFERENCES administracion.sucursales(id_sucursal), --ON DELETE CASCADE,
    dpi BIGINT REFERENCES administracion.empleados(dpi),--ON DELETE SET NULL,
    PRIMARY KEY (id_caja, id_sucursal)
);

CREATE TABLE caja.clientes (
    nit BIGINT PRIMARY KEY,
    nombre VARCHAR NOT NULL,
    total_historico NUMERIC CHECK (total_historico >= 0)
);

CREATE TABLE caja.ventas (
    id_factura BIGINT PRIMARY KEY,
    id_caja SMALLINT,
    id_sucursal VARCHAR,
    nit BIGINT REFERENCES caja.clientes(nit),
    total NUMERIC CHECK (total >= 0),
    total_descuento NUMERIC CHECK (total_descuento >= 0),
    fecha DATE NOT NULL,
	FOREIGN KEY (id_caja, id_sucursal) REFERENCES caja.cajas(id_caja, id_sucursal)
);

CREATE TABLE caja.productos_facturados (
    id_factura BIGINT REFERENCES caja.ventas(id_factura),
    id_producto VARCHAR REFERENCES bodega.productos(id_producto),
    unidades INT CHECK (unidades > 0),
    subtotal NUMERIC CHECK (subtotal >= 0),
    PRIMARY KEY(id_factura, id_producto)
);

CREATE TYPE nivel_type AS ENUM ('comun', 'oro', 'platino', 'diamante');

CREATE TABLE caja.tarjetas (
    nit BIGINT REFERENCES caja.clientes(nit),
	nivel nivel_type NOT NULL,-- nivel VARCHAR CHECK (nivel IN ('comun', 'oro', 'platino', 'diamante')),
    puntos INT CHECK (puntos >= 0),
    PRIMARY KEY(nit)
);

--\q
