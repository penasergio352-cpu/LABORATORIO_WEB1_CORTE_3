INSERT INTO pary (lugar, nombre)
SELECT 'haienda:topacio', 'Andres Martinez'
WHERE NOT EXISTS (SELECT 1 FROM pary WHERE nombre = 'Andres Martinez');

INSERT INTO pary (lugar, nombre)
SELECT 'contro de eventos : el pacifico', 'Juan Perez'
WHERE NOT EXISTS (SELECT 1 FROM pary WHERE nombre = 'Juan Perez');

INSERT INTO pary (lugar, nombre)
SELECT 'luxury eventos', 'Maria Lopez'
WHERE NOT EXISTS (SELECT 1 FROM pary WHERE nombre = 'Maria Lopez');

INSERT INTO promotor (nombre, fecha_nacimiento, promedio)
SELECT 'Carlos Ramirez', '1990-05-15', 4.5
WHERE NOT EXISTS (SELECT 1 FROM promotor WHERE nombre = 'Carlos Ramirez');

INSERT INTO promotor (nombre, fecha_nacimiento, promedio)
SELECT 'Laura Gomez', '1992-08-20', 4.2
WHERE NOT EXISTS (SELECT 1 FROM promotor WHERE nombre = 'Laura Gomez');

INSERT INTO promotor (nombre, fecha_nacimiento, promedio)
SELECT 'Miguel Sanchez', '1991-12-10', 3.8
WHERE NOT EXISTS (SELECT 1 FROM promotor WHERE nombre = 'Miguel Sanchez');

INSERT INTO viajes (hora, fecha)
SELECT '08:00', '2026-11-01'
WHERE NOT EXISTS (
    SELECT 1 FROM viajes WHERE hora = '08:00' AND fecha = '2026-11-01'
);

INSERT INTO viajes (hora, fecha)
SELECT '14:30', '2026-11-02'
WHERE NOT EXISTS (
    SELECT 1 FROM viajes WHERE hora = '14:30' AND fecha = '2026-11-02'
);

INSERT INTO viajes (hora, fecha)
SELECT '19:15', '2026-11-03'
WHERE NOT EXISTS (
    SELECT 1 FROM viajes WHERE hora = '19:15' AND fecha = '2026-11-03'
);
