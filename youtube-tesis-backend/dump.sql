INSERT INTO roles (id,nombre_rol) VALUES 
    (1, 'Usuario'),
    (2, 'Administrador'),
    (3, 'SuperAdministrador');

INSERT INTO usuarios (id, nickname,nombre,apellido,contrasenia, correo_electronico,preferencia_idioma,"rolId")  VALUES 
    (1, 'carlawas', 'Carla Viviana', 'Polanco Rodriguez', 'contra123', 'carla@gmail.com', 'Espanol', 3),
    (2, 'Lorepro', 'Patricia Loreto', 'Polanco Rodriguez', 'soylinda1234', 'loreto@outlook.com', 'Frances', 2),
    (3, 'Juanito', 'Juan Pablo', 'Perez Munoz', 'junito123456', 'juanito@hotmail.com', 'Ingles', 1),
    (4, 'Vivi', 'Viviana Loreto', 'Rodriguez Cordero', 'vivi123', 'vivi@gmail.com', 'Espanol', 1);



INSERT INTO videos (id, url ,titulo,descripcion,duracion,fecha_publicacion,canal) VALUES 
    (1,'https://www.youtube.com/watch?v=SLZKbbXBvF4','REGLA DE TRES SIMPLE DIRECTA - Problema 4','Para elaborar 48 galletas se requiere 1/2 kg de harina, 3 huevos, 2 tazas de azúcar y 250 g de mantequilla. ¿Qué cantidad de esos ingredientes sería necesaria para producir 960 galletas?',
            11,'2023-10-13','Julio Profe'),

    (2,'https://www.youtube.com/watch?v=OyEcoAV3oFY','Regla de 3 | Cómo identificar si es directa o inversa','Breve explicación con ejemplos de la manera fácil de identificar si una regla de tres es directa o inversa',
            6,'2017-09-19','Matematicas Profe Alex'),

    (3,'https://www.youtube.com/watch?v=MJ9H7O1LiBU','REGLA DE TRES Compuesta ✅ Proporcionalidad','Te enseño a resolver problemas de regla de tres compuesta mediante varios ejemplos.',
            5,'2018-09-02','Profe Susi'),

    (4,'https://www.youtube.com/watch?v=Cy89XkXmvd8','Math -grade 6 - 1st term - unit 2 -concept 2 - lessons 3&4- فيديو مهم- Rational Numbers -','grade 6 - 1st term - unit 2 - concept 2 - lessons 3&4 - Rational Numbers - الصف السادس الابتدائي - المنهج الجديد - الترم الاول - شرح ماث - فيديو مهم - شروحات ماثAnalyzing',
            25,'2023-10-20','fhgjnfghn'),

    (5,'https://www.youtube.com/watch?v=m3Xyh1zixc8','fghfghfghfgh','Soy una descripcion',
            33,'2023-10-19','Lebanese Online Academy by Meryana Younes'),

    (6,'https://www.youtube.com/watch?v=5zx6kYUYRfc','Chapter 3 Equation Derivations Part 5 (for no time given problems)','',
            8,'2023-10-20','Drabmuh_Physics'),

    (7,'https://www.youtube.com/watch?v=JElGkGhFaJ0','HTMX: ¿Es el futuro de HTML?','Descubre que es HTMX, cómo utilizarlo y por qué podría ser el futuro de HTML.  htmx es una biblioteca que le permite acceder a funciones modernas del navegador directamente desde HTML',
            54,'2023-10-16','Bluuweb'),

    (8,'https://www.youtube.com/watch?v=B1J6Ou4q8vE','Animation vs. Math','How much of this math do you know?',
            14,'2023-07-13','Alan Becker');
    


INSERT INTO video_usuario (id_video,id_usuario) VALUES 
    (8, 1),
    (7, 1),
    (6, 2),
    (5, 2),
    (4, 3),
    (3, 3),
    (2, 4),
    (1, 4);



INSERT INTO favorito (id,video,fecha_creacion,"usuarioId") VALUES 
    (1, 'https://www.youtube.com/watch?v=B1J6Ou4q8vE',CURRENT_DATE,1),
    (2, 'https://www.youtube.com/watch?v=JElGkGhFaJ0',CURRENT_DATE,1),
    (3, 'https://www.youtube.com/watch?v=5zx6kYUYRfc',CURRENT_DATE,2),
    (4, 'https://www.youtube.com/watch?v=m3Xyh1zixc8',CURRENT_DATE,2),
    (5, 'https://www.youtube.com/watch?v=Cy89XkXmvd8',CURRENT_DATE,3),
    (6, 'https://www.youtube.com/watch?v=MJ9H7O1LiBU',CURRENT_DATE,3),
    (7, 'https://www.youtube.com/watch?v=OyEcoAV3oFY',CURRENT_DATE,4),
    (8, 'https://www.youtube.com/watch?v=SLZKbbXBvF4',CURRENT_DATE,5); // No deja anadir dos videos a unmismo usuario

INSERT INTO favorito (id,video,fecha_creacion,"usuarioId") VALUES 
    (1, 'https://www.youtube.com/watch?v=B1J6Ou4q8vE',CURRENT_DATE,1),
    (2, 'https://www.youtube.com/watch?v=5zx6kYUYRfc',CURRENT_DATE,2),
    (3, 'https://www.youtube.com/watch?v=Cy89XkXmvd8',CURRENT_DATE,3),
    (4, 'https://www.youtube.com/watch?v=SLZKbbXBvF4',CURRENT_DATE,4);




INSERT INTO resumenes (id,contenido,longitud,fecha_creacion,idioma_origen,idioma_resumen,palabras_clave,"videoId") VALUES 
    (1,'sefsefsefsRESUMEN1ef',345,CURRENT_DATE,'Frances','Italiano','Matematicas, algebra',1),
    (2,'sefsefRESUMEN2sefsef',345,CURRENT_DATE,'Ingles','Espanol','Lenguaje, Pronombres',2),
    (3,'sefsefRESUMEN3sefsef',345,CURRENT_DATE,'Espanol','Ingles','Historia, Chile',3);





INSERT INTO traduccione (id, contenido,contenido_original,longitud,fecha_creacion,idioma_origen,idioma_traducido,"videoId") VALUES 
    (1,'sefsefsefsTRADUCCION1', 'sefsefsefs',345,CURRENT_DATE,'Frances','Italiano',4),
    (2,'sefsefTRADUCCION2', 'sefsef',323,CURRENT_DATE,'Ingles','Espanol',5),
    (3,'sefsefTRADUCCION3', 'sefsef',462,CURRENT_DATE,'Espanol','Ingles',6);




INSERT INTO transcripciones (id, contenido,longitud,fecha_creacion,idioma_origen,idioma_transcripcion,"videoId") VALUES 
    (1,'xdfgvdxfvdxvTRANSCRIPCION1fxdvxjmdbvxkjdnbvkxjdnvjkxdnvjkxdnvd',50,CURRENT_DATE,'Espanol','Ingles',1),
    (2,'drgdrgdrgdTRANSCRIPCION2rgdrgdrgdrg',25,CURRENT_DATE,'Ingles','Frances',2),
    (3,'zxdfhsdrhgsTRANSCRIPCION3ergerg',500,CURRENT_DATE,'Italiano','Ingles',3),
    (4,'xdsesrtgTRANSCRIPCION4ersgersg',345,CURRENT_DATE,'Ingles','Espanol',4),
    (5,'xdfgvdxfvdxvdxfhgersgTRANSCRIPCION5hergnvjkxdnvjkxdnvd',2356,CURRENT_DATE,'Ruso','Ingles',5),
    (6,'xdfgvdxfvdthgdthftghdbvxkjdnbvkxjdnTRANSCRIPCION6vjkxdnvjkxdnvd',5456,CURRENT_DATE,'Postuguez','Espanol',6),
    (7,'xdfgvdxfvdxvfxdvxjmdbvxkjrgsdeTRANSCRIPCION7rgsegjkxdnvjkxdnvd',3420,CURRENT_DATE,'Chino mandarin','Ingles',7),
    (8,'xdfgvdxfvdxvfxdTRANSCRIPCION8vsegsegsejdnvjkxdnvjkxdnvd',43560,CURRENT_DATE,'Arabe','Frances',8);

DROP TABLE roles CASCADE;
DROP TABLE usuarios CASCADE;
DROP TABLE videos CASCADE;
DROP TABLE favorito CASCADE;
DROP TABLE resumenes CASCADE;
DROP TABLE traduccione CASCADE;
DROP TABLE transcripciones CASCADE;
DROP TABLE video_usuario CASCADE;

