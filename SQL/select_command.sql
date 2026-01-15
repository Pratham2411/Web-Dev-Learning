CREATE DATABASE college;
USE college;
CREATE TABLE student (
rollno INT PRIMARY KEY,
name VARCHAR(50),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(20)
);

INSERT INTO student
(rollno, name, marks, grade, city)
VALUES
(101, "anil", 78, "C", "Pune"),
(102, "bhumika", 93, "A", "Mumbai"),
(103, "chetan", 85, "B", "Mumbai"),
(104, "dhruv", 96, "A", "Delhi"),
(105, "emanuel", 12, "F", "Delhi"),
(106, "farah", 82, "B", "Delhi");

--  selecting some columns of a table (* selects all)
SELECT name,marks FROM student;
SELECT * FROM student;

-- for unique values
SELECT DISTINCT city FROM student;

-- where clause select with condition
SELECT * FROM student WHERE marks > 80;
SELECT * FROM student WHERE city = "Mumbai";
SELECT * FROM student WHERE marks > 80 AND city = "Mumbai";
SELECT * FROM student WHERE marks > 80 OR city = "Mumbai";

-- Between (selects for a given range)
SELECT * FROM student WHERE marks BETWEEN 80 AND 90;

-- In (matches any value in the list)
SELECT * FROM student WHERE city IN ("Delhi", "Mumbai");
SELECT * FROM student WHERE city NOT IN ("Delhi", "Mumbai");

-- Limit Clause
-- Sets an upper limit on number of (tuples)rows to be returned
 SELECT *FROM student LIMIT 4;



