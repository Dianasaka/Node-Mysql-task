mysql -u root -p
CREATE DATABASE baigiamasis;
USE baigiamasis;

mysql.js negali prisijungti nesuvedus sitos eilutes
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'labas123';

CREATE TABLE dalyviai(
dalyvio_id INT AUTO_INCREMENT,
vardas VARCHAR(100) NOT NULL,
pavarde VARCHAR(100) NOT NULL,
el_pastas VARCHAR(100) NOT NULL,
amzius INT NOT NULL,
gimimo_data DATE NOT NULL,
renginio_id int NOT NULL, 
FOREIGN KEY (renginio_id) REFERENCES renginiai(renginio_id),
PRIMARY KEY(dalyvio_id));

INSERT INTO dalyviai (vardas, pavarde, el_pastas, amzius, gimimo_data, renginio_id) VALUES ('Ignas', 'Karaliunas', 'ignas.karaliunas@gmail.com', '25', '1997-12-22', 3);

CREATE TABLE renginiai(
renginio_id INT AUTO_INCREMENT, 
pavadinimas VARCHAR(100) NOT NULL, 
prasideda DATETIME NOT NULL, 
PRIMARY KEY(renginio_id));

INSERT INTO renginiai (pavadinimas, prasideda) VALUES ('Koncertas', '2023-03-30 18:50:00');
INSERT INTO renginiai (pavadinimas, prasideda) VALUES ('Dazasvydzio turnyras', '2023-08-16 12:30:00');
INSERT INTO renginiai (pavadinimas, prasideda) VALUES ('Automobiliu paroda', '2024-01-12 14:00:00');
