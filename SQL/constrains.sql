
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    LastName VARCHAR(50) NOT NULL,
    -- UNIQUE: Ensures all values in a column are different
    Email VARCHAR(100) UNIQUE,
    -- CHECK: Ensures the value satisfies a specific condition
    Age INT CHECK (Age >= 18),
    -- DEFAULT: Sets a default value if none is specified
    HireDate DATE DEFAULT '2004-11-24'

);
 INSERT INTO Employees 
  (EmployeeID,LastName,Email,Age)
  VALUES 
  (1, 'RAJ', 'prathamraj2411@gmail.com', 21);
SELECT * FROM Employees;