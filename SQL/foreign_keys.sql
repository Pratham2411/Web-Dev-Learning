USE college;

-- parent table
CREATE TABLE dept (
id INT PRIMARY KEY,
name VARCHAR(50)
);

INSERT INTO dept
VALUES
(101, "english"),
(102, "IT"); 

SELECT * FROM dept;

-- child table
CREATE TABLE teacher (
id INT PRIMARY KEY,
name VARCHAR(50),
dept_id INT ,
FOREIGN KEY (dept_id) REFERENCES dept(id)
-- Cascading
ON UPDATE CASCADE
ON DELETE CASCADE
) ;

INSERT INTO teacher
VALUES
(101, "Adam", 101),
(102, "Eve", 102);

SELECT * FROM teacher;

UPDATE dept
SET id = 103
WHERE id = 102; 








 
