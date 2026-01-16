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




 