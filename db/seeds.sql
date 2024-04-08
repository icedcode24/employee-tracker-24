 INSERT INTO department '('name')'
 VALUES '('Management')',
        '('Engineering')',
        '('Finance')',
        '('Sales')';

 INSERT INTO role ('title', 'salary', 'department_id')
 VALUES ('VP of Operations', 275000, 1),
        ('Director', 200000, 1),
        ('Sales Manager', 175000, 4),
        ('Application Engineer', 110000, 2),
        ('Accountant', 125000, 3),
        ('Salesperson', 150000, 4),
        ('Sr. Accountant', 165000, 3);

        INSERT INTO EMPLOYEE ('first_name', 'last_name', 'role_id', 'manager_id')
        VALUES ("Chris", "Stokes", 1, null),
                ("Bart", "Smith", 2, 1),
                ("Mary", "Allen", 3, 2),
                ("Sarah", "Hardy", 4, 2),
                ("Jeff", "Lowery", 5, 3),
                ("Becky", "Crow", 6, 3),
                ("Henry", "Brown", 7, 3);

