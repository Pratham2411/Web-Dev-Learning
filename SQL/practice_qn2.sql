-- write a query to find avarage marks in each city in ascending order

SELECT city, avg(marks)
FROM student
GROUP BY city
ORDER BY avg(marks) ASC;
