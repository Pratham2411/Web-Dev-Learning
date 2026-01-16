USE college;

-- parent table
CREATE TABLE dept (
id INT PRIMARY KEY,
name VARCHAR(50)
);


-- child table

CREATE TABLE teacher (
id INT PRIMARY KEY,
name VARCHAR(50),
dep_id INT ,
FOREIGN KEY (dept_id) REFERENCES dept(id)
) ;
 