CREATE TABLE Clientes
(
id INT PRIMARY KEY,
  nombre VARCHAR(100),
  cif VARCHAR(100),
  direccion VARCHAR(100),
  email VARCHAR(100),
  provincia VARCHAR(100),
  codigoPostal INT,
  telefono INT,
 
);

CREATE TABLE Cine
(
id INT PRIMARY KEY,
  nombre VARCHAR(100),
  cif VARCHAR(100),
  direccion VARCHAR(100),
  email VARCHAR(100),
  provincia VARCHAR(100),
  codigoPostal INT,
  telefono INT,
  grupoid INT,
  salaid INT,
  clientesid INT,
  peliculaid INT,
  FOREIGN KEY (clientesid) REFERENCES Clientes(id),
  FOREIGN KEY (peliculaid) REFERENCES Peliculas(id)
);

CREATE TABLE Peliculas
(
    id INT PRIMARY KEY,
    titulo VARCHAR(200),
    director VARCHAR(200),
    actor VARCHAR(100),
    fecha_estreno INT,
   
    
    
);

CREATE TABLE Grupo
(
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    clientesid INT,

    FOREIGN KEY (clientesid) REFERENCES Clientes(id)
    
);

CREATE TABLE Sala
(
    id INT PRIMARY KEY,
    nombre VARCHAR(100),
    
    cineid INT,
    FOREIGN KEY (cineid) REFERENCES Cine(id)
);