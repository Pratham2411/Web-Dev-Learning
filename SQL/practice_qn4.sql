-- Qs: In the students table :
-- a. Change the name of column name to "full_name".
-- b. Delete all the students who scored marks less than 80.
-- c. Delete the column for grades.
USE college;

ALTER TABLE students
CHANGE name full_name VARCHAR(50) ;

SELECT * FROM students;


DELETE FROM students
WHERE MARKS<80;

ALTER TABLE students
DROP COLUMN age;


