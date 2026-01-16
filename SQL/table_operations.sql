-- TABLE OPERATIONS
 
 -- PRINTING COMPLETE TABLE 
SELECT * FROM student;

-- updating existing values
SET SQL_SAFE_UPDATES = 0;

UPDATE student
SET grade="O"
WHERE grade="A";

UPDATE student
SET marks=95
WHERE rollno=104;

UPDATE student
SET marks = marks + 1;

-- deleting from existing rows

DELETE FROM student
WHERE marks < 33;

-- Alter (change the schema of a table)
-- adding a column
ALTER TABLE student
ADD COLUMN age INT NOT NULL DEFAULT 19;

-- deleting a column
ALTER TABLE student
DROP COLUMN age ;

-- RENAME Table
ALTER TABLE student
RENAME TO students;

SELECT * FROM students;

-- MODIFY Column
ALTER TABLE students
MODIFY age VARCHAR(2);

-- CHANGE Column (rename)
ALTER TABLE students
CHANGE age stu_age INT;





 
