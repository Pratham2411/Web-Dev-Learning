-- for the given table, find the total payment according to each payment method
CREATE DATABASE customers;
USE customers;
CREATE TABLE payment (
customer_id INT PRIMARY KEY,
customer VARCHAR(50),
mode VARCHAR(50),
city VARCHAR(20)
);

INSERT INTO payment
(customer_id, customer,mode, city)
VALUES
(101, "Pratham", "Netbanking", "Siwan"),
(102, "Madhav",  "Debit Card", "Sitamarhi"),
(103, "Gautam", "Netbanking", "Munger"),
(104, "Rajesh",  "Credit Card", "Munger"),
(105, "Dubey", "Credit Card", "Aurangabad"),
(106, "Sudhanshu", "Debit Card", "Kishanganj"),
(107, "Mithlesh", "Credit Card", "Bhagalpur"),
(108, "Anant", "Debit Card", "Saharsha"),
(109, "Kaushik", "Netbanking", "Patna"),
(110, "Pural", "Debit Card", "Punjab");

SELECT mode, count(customer)
FROM payment
GROUP BY mode
ORDER BY count(customer);




