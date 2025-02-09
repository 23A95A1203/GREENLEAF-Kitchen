CREATE TABLE meal_planner (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    breakfast VARCHAR(255),
    lunch VARCHAR(255),
    dinner VARCHAR(255)
);
