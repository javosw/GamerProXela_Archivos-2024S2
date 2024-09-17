\c gpx

CREATE OR REPLACE FUNCTION administracion.insertar_empleado(
    p_dpi BIGINT,
    p_nombre VARCHAR,
    p_id_sucursal VARCHAR,
    p_rol administracion.rol_type,
    p_username VARCHAR,
    p_password VARCHAR
) RETURNS VOID AS $$
BEGIN
    INSERT INTO administracion.empleados (dpi, nombre, id_sucursal, rol, username, password)
    VALUES (p_dpi, p_nombre, p_id_sucursal, p_rol, p_username, p_password);
EXCEPTION
    WHEN unique_violation THEN
        RAISE NOTICE 'El username ya está en uso.';
    WHEN foreign_key_violation THEN
        RAISE NOTICE 'La sucursal especificada no existe.';
    WHEN others THEN
        RAISE EXCEPTION 'Error desconocido al insertar el empleado.';
END;
$$ LANGUAGE plpgsql;

--\q
