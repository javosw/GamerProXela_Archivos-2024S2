\c gpx

CREATE OR REPLACE FUNCTION administracion.add_empleado(
    p_dpi BIGINT,
    p_nombre VARCHAR,
    p_id_sucursal VARCHAR,
    p_rol administracion.rol_type,
    p_username VARCHAR,
    p_password VARCHAR
)
RETURNS VOID 
AS $$
BEGIN
    INSERT INTO administracion.empleados (dpi, nombre, id_sucursal, rol, username, password)
    VALUES (p_dpi, p_nombre, p_id_sucursal, p_rol, p_username, p_password);
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE VIEW administracion.get_empleados AS
SELECT
    empl.dpi,
    empl.nombre,
    empl.id_sucursal AS sucursal,
    empl.rol,
    empl.username
FROM
    administracion.empleados empl;

CREATE OR REPLACE FUNCTION inventario.add_producto(
    p_id_producto VARCHAR,
    p_id_sucursal VARCHAR,
    p_nombre VARCHAR,
    p_precio NUMERIC,
    p_unidades_bodega INTEGER
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO inventario.productos (
        id_producto, id_sucursal, nombre, precio, 
        unidades_vendidas, unidades_bodega, unidades_pasillo, id_pasillo
    ) 
    VALUES (
        p_id_producto, p_id_sucursal, p_nombre, p_precio, 
        0, p_unidades_bodega, 0, -1
    );
END;
$$ LANGUAGE plpgsql;

--\q
