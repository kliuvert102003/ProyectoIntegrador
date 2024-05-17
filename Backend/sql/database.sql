CREATE DATABASE dashboard_db;

USE dashboard_db;

CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  correo_electronico VARCHAR(255) UNIQUE NOT NULL,
  contrasena VARCHAR(255) NOT NULL
);

CREATE TABLE ventas (
  id INT PRIMARY KEY AUTO_INCREMENT,
  usuario_id INT NOT NULL,
  fecha_venta DATE NOT NULL,
  importe_total DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE productos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  precio DECIMAL(10,2) NOT NULL
);

CREATE TABLE ventas_productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  venta_id INT NOT NULL,
  producto_id INT NOT NULL,
  cantidad INT NOT NULL,
  FOREIGN KEY (venta_id) REFERENCES ventas(id),
  FOREIGN KEY (producto_id) REFERENCES productos(id)
);

CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL UNIQUE,  -- Enforces unique role names
  descripcion TEXT  -- Optional description for the role
);

CREATE TABLE usuarios_roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  rol_id INT NOT NULL,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (rol_id) REFERENCES roles(id),
  UNIQUE KEY unique_usuario_rol (usuario_id, rol_id)  -- Unique constraint for user-role combinations
);


ALTER TABLE ventas
ADD CONSTRAINT fk_venta_usuario
FOREIGN KEY (usuario_id)
REFERENCES usuarios(id);

ALTER TABLE ventas_productos
ADD CONSTRAINT fk_venta_productos_venta
FOREIGN KEY (venta_id)
REFERENCES ventas(id),
ADD CONSTRAINT fk_venta_productos_producto
FOREIGN KEY (producto_id)
REFERENCES productos(id);
