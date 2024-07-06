CREATE TABLE usrs (
    cid             int PRIMARY KEY,
    first_name      varchar(50),
    last_name       varchar(50),
    email           varchar(50)
);

CREATE TABLE orders (
    "id"     int PRIMARY KEY,
    customer   int REFERENCES usrs (cid)
);
