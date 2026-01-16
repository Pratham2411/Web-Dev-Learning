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



 