-- Union

-- It is used to combine the result-set of two or more SELECT statements.
-- Gives UNIQUE records.

-- To use it :
-- . every SELECT should have same no. of columns
-- . columns must have similar data types
-- . columns in every SELECT should be in same order

-- Syntax
-- SELECT column(s) FROM tableA
-- UNION
-- SELECT column(s) FROM tableB

SELECT name FROM employee
UNION 
SELECT name FROM employee;
-- union all gives distinct values also