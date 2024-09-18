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

--\q
