Use sakila;

SELECT first_name, last_name
from actor; 

SELECT UPPER(CONCAT(first_name," ", last_name)) 
AS "Actor_Name" FROM actor; /* shows error but works */ 

SELECT actor_id,first_name, last_name
from actor
WHERE first_name = "Joe";

SELECT * FROM actor
WHERE last_name like "%GEN%";

SELECT * FROM actor
WHERE last_name like "%LI%"
ORDER BY last_name,first_name;


SELECT country_id,country FROM country
WHERE country IN ("Afghanistan", "Bangladesh", "China");

ALTER TABLE actor
ADD description blob;

ALTER TABLE actor
DROP COLUMN description;

SELECT COUNT(last_name), last_name
FROM actor
Group by last_name;

SELECT last_name, COUNT(last_name)
FROM actor
Group by last_name;



SELECT last_name, COUNT(last_name)
FROM actor
GROUP BY last_name
HAVING COUNT(last_name) >= 2;


UPDATE actor
SET first_name = "Harpo", last_name = "Williams"
WHERE first_name = "GROUCHO" AND last_name = "Williams";

UPDATE actor
SET first_name = "GROUCHO"
WHERE first_name = "Harpo";

SHOW CREATE TABLE address;/* could be used as per question 5a */

SELECT staff.first_name, staff.last_name,address.address
FROM staff
JOIN address on 
staff.staff_id=address.address_id;

SELECT staff.first_name, staff.last_name,address.address
FROM staff
left JOIN address on
staff.address_id=address.address_id;

SELECT staff.staff_id, payment.payment_date
FROM staff
JOIN payment on
staff.staff_id = payment.staff_id
WHERE payment.payment_date LIKE "%2005-08%";

SELECT film.title,COUNT(film_actor.actor_id)
FROM film_actor
INNER JOIN film on
film.film_id = film_actor.film_id
GROUP BY film.film_id;

SELECT COUNT(*)
FROM inventory
WHERE film_id IN 
(
SELECT film_id
FROM film 
WHERE title ="Hunchback Impossible"
);

Select customer.first_name, customer.last_name, SUM(payment.amount)
FROM payment
INNER JOIN customer on
customer.customer_id = payment.customer_id
GROUP BY customer.customer_id 
ORDER BY customer.last_name ASC;

SELECT title
FROM film
WHERE (title LIKE "K%" or title LIKE "Q%") AND language_id IN
(
Select language_id
FROM language
WHERE NAME = "English"
);

SELECT first_name, last_name
FROM actor
WHERE actor_id in
(
Select actor_id
FROM film_actor
WHERE film_id IN
(
Select film_id
FROM film
WHERE title = "Alone Trip"
));





