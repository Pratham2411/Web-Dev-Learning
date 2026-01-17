-- Join is used to combine rows from two or more tables, based on a related column between them
-- Types:- inner,left,right,full

CREATE DATABASE college_db;
USE college_db;

CREATE TABLE student(
id INT PRIMARY KEY,
name VARCHAR(50));

INSERT INTO student (id, name)
VALUES
(101, "adam"),
(102, "bob"),
(103, "casey");

CREATE TABLE course(
id INT PRIMARY KEY,
course VARCHAR(50)
);

INSERT INTO course (id, course)
VALUES
(102, "english"),
(105, "math"),
(103, "science"),
(107, "computer science");

SELECT * FROM student;
SELECT * FROM course;

-- Inner Join
-- Returns records that have matching values in both tables
SELECT *
FROM student as s --  TABLE A  as is called alias(not compulsory)
INNER JOIN course  as c --  TABLE B
ON   s.id = c.id ;              -- BASIS OF JOIN  (column name can be different also)

-- Left Join
-- Returns all records from the left table, and the matched records from the right table

SELECT *
FROM student as s  --  ISKA PURA DATA AAYEGA
LEFT JOIN course as c
ON s.id = c.id;
-- RIGHT JOIN
SELECT *
FROM student as s  
RIGHT JOIN course as c --  ISKA PURA DATA AAYEGA
ON s.id = c.id;    

-- Full Join
-- Returns all records when there is a match in either left or right table 
-- IT IS LEFT JOIN UNION RIGHT JOIN  

SELECT *
FROM student as s 
LEFT JOIN course as c
ON s.id = c.id
UNION
SELECT *
FROM student as s  
RIGHT JOIN course as c 
ON s.id = c.id; 

-- EXCLUSIVE JOIN 
-- LEFT EXCLUSIVE all columns in left which are not in right
SELECT *
FROM student as s 
LEFT JOIN course as c
ON s.id = c.id
WHERE c.id IS NULL;

-- RIGHT EXLUSIVE 
SELECT *
FROM student as s 
RIGHT JOIN course as c
ON s.id = c.id
WHERE s.id IS NULL;

-- FULL EXCLUSIVE everything not common
SELECT s.id
FROM student s
LEFT JOIN course c
ON s.id = c.id
WHERE c.id IS NULL

UNION

SELECT c.id
FROM student s
RIGHT JOIN course c
ON s.id = c.id
WHERE s.id IS NULL;

      









