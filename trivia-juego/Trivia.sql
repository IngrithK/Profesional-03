CREATE  TABLE Preguntas(
	Id decimal(18, 0) NOT NULL primary key,
	Pregunta varchar(150) NOT NULL,
	opcion1 varchar(150) NOT NULL,
	opcion2 varchar(150) NOT NULL,
	opcion3 varchar(150) NOT NULL,
	opcion4 varchar(150) NOT NULL,
	correcta decimal(18,0) NOT NULL
);
INSERT INTO Preguntas (Id, Pregunta, opcion1, opcion2, opcion3, opcion4,correcta) VALUES (1, '¿Cuál d estos países no está en una isla?', 'Japón', 'Jamaica', 'Madagascar', 'Ghana',4);
INSERT INTO Preguntas (Id, Pregunta, opcion1, opcion2, opcion3, opcion4,correcta) VALUES (2, '¿Cuál es la capital de Japón?', 'Tokio', 'Kyoto', 'Pekin', 'Ninguna de las anteriores',1);
INSERT INTO Preguntas (Id, Pregunta, opcion1, opcion2, opcion3, opcion4,correcta) VALUES (3, '¿Cómo se llama el sistema operativo con el que trabajan los teléfonos HTC,LG,Samsung?', 'iOS', 'Microsoft', 'Windows', 'Android',4);
INSERT INTO Preguntas (Id, Pregunta, opcion1, opcion2, opcion3, opcion4,correcta) VALUES (4, '¿Qué es un bit?', 'La unidad más pequeña de almacenamiento', 'La escala musical que tiene un tempoNULL', 'Un remix de algún dj', 'Bassic interface conection',1);
INSERT INTO Preguntas (Id, Pregunta, opcion1, opcion2, opcion3, opcion4,correcta) VALUES (5, '¿Qué nombre tiene el portátil más ligero, en peso, de Apple?', 'MacBook Light', 'MacBook Slim', 'MacBook Air', 'MacBook Lite',3);
INSERT INTO Preguntas (Id, Pregunta, opcion1, opcion2, opcion3, opcion4,correcta) VALUES (6, '¿Dónde se encuentran las medusas con veneno mortal?', 'Australia', 'Sudafria', 'Corea de Sur', 'Thailandia',1);
INSERT INTO Preguntas (Id, Pregunta, opcion1, opcion2, opcion3, opcion4,correcta) VALUES (7, '¿Quién escribió El Diario de Ana Frank?', 'Ana Frank', 'La madre de Ana Frank', 'El padre de Ana Frank', 'La hermana de Ana Frank',1);
INSERT INTO Preguntas (Id, Pregunta, opcion1, opcion2, opcion3, opcion4,correcta) VALUES (8, '¿De qué país es la caricatura \"Condorito\"?', 'Perú', 'México', 'Chile', 'Bolivia',3);
INSERT INTO Preguntas (Id, Pregunta, opcion1, opcion2, opcion3, opcion4,correcta) VALUES (9, '¿En qué año se suicidó Van Gogh?', '1890', '1914', '1912', '1902',1);
INSERT INTO Preguntas (Id, Pregunta, opcion1, opcion2, opcion3, opcion4,correcta) VALUES (10, '¿Cuál fue la primera versión de Windows?', 'Windows 3.0', 'Windows 95', 'My Windows', 'Windows 1.0',4);
