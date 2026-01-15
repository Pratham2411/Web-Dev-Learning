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
 
--  Order By Clause
-- To sort in ascending (ASC) or descending order (DESC)
SELECT * FROM student
ORDER BY marks ASC;

-- TOP 3 STUDENTS 
SELECT * FROM student
ORDER BY marks DESC
LIMIT 3;

-- Aggregate functions perform a calculation on a set of values, and return a single value.
-- count,max,min,sum,avg

SELECT max(marks) FROM student;
SELECT avg(marks) FROM student;
SELECT count(marks) FROM student;

-- Group By Clause
-- Groups rows that have the same values into summary rows.
-- It collects data from multiple records and groups the result by one or more column.
-- *Generally we use group by with some aggregation function.

-- Count number of students in each city
SELECT city, count(name)
FROM student
GROUP BY city;

-- average marks in each city
SELECT city, avg(marks)
FROM student
GROUP BY city;









