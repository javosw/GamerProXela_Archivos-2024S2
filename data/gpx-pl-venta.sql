CREATE OR REPLACE FUNCTION caja.exe_venta(
	_username VARCHAR,
	_nit BIGINT,
	_total NUMERIC,
	_fecha DATE,
	_productos JSONB -- Object[]
		--{barcode, unidades, subtotal}
		--id_producto:VARCHAR, unidades:INT, subtotal:NUMERIC
)
RETURNS VOID AS 
$$
DECLARE
	_id_factura INTEGER;
	_producto RECORD;
BEGIN
	INSERT INTO caja.ventas (username, nit, total, total_descuento, fecha)
		VALUES (_username, _nit, _total, 0, _fecha)
		RETURNING id_factura INTO _id_factura;

	FOR _producto IN SELECT * FROM jsonb_to_recordset(_productos) 
		AS (barcode VARCHAR, unidades INTEGER, subtotal NUMERIC)
	LOOP
		INSERT INTO caja.productos_facturados (id_factura, id_producto, unidades, subtotal)
			VALUES (_id_factura, _producto.barcode, _producto.unidades, _producto.subtotal);

		UPDATE inventario.productos 
			SET 
			unidades_pasillo = unidades_pasillo - _producto.unidades,
			unidades_vendidas = unidades_vendidas + _producto.unidades
			WHERE id_producto = _producto.barcode;
	END LOOP;

	UPDATE caja.clientes SET 
		total_historico = total_historico + _total
		WHERE nit = _nit;

	RAISE NOTICE 'Sale processed successfully with venta_id: %', _id_factura;
END;
$$ LANGUAGE plpgsql;
