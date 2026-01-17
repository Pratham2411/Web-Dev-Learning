
-- MySQL Views
-- A view is a virtual table based on the result-set of an SQL statement.
-- syntax:-
-- CREATE VIEW view1 AS
-- SELECT rollno, name FROM student;
-- SELECT * FROM view1;

create view view1 as
select rollno,full_name,marks
from students;

select* from view1;
--  drop view view1;
