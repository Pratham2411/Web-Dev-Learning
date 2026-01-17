-- SQL Sub Queries
-- A Subquery or Inner query or a Nested query is a query within another SQL query.

-- Example
-- Get names of all students who scored more than class average.
-- Step 1. Find the avg of class
-- Step 2. Find the names of students with marks > avg

USE college;
select *from students;
-- average calculation
select avg(marks)
from students;

SELECT full_name, marks
FROM students
WHERE marks > (SELECT AVG(marks) FROM students);

-- find students name with even roll number
SELECT full_name,rollno
FROM students
WHERE rollno % 2 = 0;

SELECT full_name
FROM students
WHERE rollno IN (
    SELECT rollno
    FROM students
    WHERE rollno % 2 = 0
);

-- Example with FROM
-- Find the max marks from the students of Delhi
-- Step 1. Find the students of Delhi
-- Step 2. Find their max marks using the sublist in step 1

SELECT *
    FROM students
    WHERE city = 'Delhi';
    
SELECT MAX(marks) AS max_marks
FROM (SELECT *FROM students WHERE city = 'Delhi') as temp;








