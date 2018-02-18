DROP TABLE IF EXISTS vending_machine;
CREATE TABLE vending_machine
(
    id INTEGER PRIMARY KEY,
    name VARCHAR,
    amount INTEGER,
    type CHAR,
    cost FLOAT
);

INSERT INTO vending_machine
    (name, amount, type, cost)
VALUES
    ("banana", 3, 'fruit', .6),
    ("water bottle", 1, 'liquid', 1.00),
    ("tea", 2, 'liquid', 1.50),
    ("milk", 4, 'liquid', 2.00),
    ("coffee", 6, 'liquid', 2.50),
    ("chocolate", 2, 'candy', 2.00),
    ("popcorn", 17, 'snack', 1.25),
    ("bubble gum", 13, 'candy', .50),
    ("gummies", 10, 'candy', 1.00),
    ("chips", 9, 'snack', 1.30),
    ("pop tarts", 7, 'snack', 2.45),
    ("trail mix", 5, 'snack', 5.00);