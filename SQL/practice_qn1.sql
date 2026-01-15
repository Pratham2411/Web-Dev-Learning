CREATE DATABASE IF NOT EXISTS XYZ;
USE XYZ;
CREATE TABLE IF NOT EXISTS  employee_info(
-- id INT PRIMARY KEY,
id int,
name VARCHAR(50),
salary INT NOT NULL,
PRIMARY KEY(ID));
--  CAN ALSO DO PRIMARY KEY(id,name)

INSERT INTO employee_info
 VALUES
(1,"adam",25000),
(2,"bob",30000),
(3,"casey",40000);

SELECT * FROM employee_info;



