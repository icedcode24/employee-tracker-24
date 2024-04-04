const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
require('inquirer');

const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employees_db'
    },
    console.log('Connected to the employees_db database.')
);

// Command-Line Prompts
const startApp = () => {
    inquirer
        .prompt({
            name: "startApp",
            message: "what would you like to do?",
            type: "rawlist",
            choices: [
                "view all departments",
                "view all roles",
                "view all employees",
                "add a department",
                "add a role",
                "add an employee",
                "update an employee role",
                "exit app",
            ]
        }).then((selected) => {
            switch (selected.startApp) {
                case "view all departments":
                    viewAllDepts();
                    break;

                case "view all roles":
                    viewAllRoles();
                    break;

                case "view all employees":
                    viewAllEmployees();
                    break;

                case "add a department":
                    addDept();
                    break;

                case "add a role":
                    addRole();
                    break;

                case "add an employee":
                    addEmployee();
                    break;
                case "update an employee role":
                    updateRole();
                    break;

                case "exit app":
                    process.exit();
                    break;
            };
            return;
        });
};


// VIEW ALL DEPARTMENTS
const viewAllDepts = () => {
    db.query('
        SELECT * FROM department', function (err, depts) {
            if (err) return console.log(err);
    // DISPLAY QUERY OF DEPARTMENTS
    console.table(depts);
    // RESTART APP
    startApp();
});
    }

// VIEW ALL ROLES
const viewAllRoles = () => {
    db.query('
    SELECT * FROM role', function (err, roles) {
        if (err) return console.log(err);
        // DISPLAY QUERY OF ROLES
        console.table(roles);
        // RESTART APP
        startApp();
    });
}

    // VIEW ALL EMPLOYEES
    const viewAllEmployees = () => {
        db.query('
        SELECT * FROM employee', function (err, employess) {
            if (err) return console.log(err);
            // DISPLAY QUERY OF EMPLOYEES
            console.table(employees);
            // RESTART APP
            startApp();
        });
    }

    // ADD A DEPARTMENT
    const addDept = () => {
        inquirer
        .prompt({
            name: "department",
            message: "Provide the departmentname you want to add.",
            type: "input",
        }).then((newDept) => {
            db.query('
            INSERT INTO department (name) VALUES (?)',[newDept.department],
            function (err) {
                if (err) return console.log(err);
                console.log('New department ${newDept.department} added!');
                // DISPLAY QUERY OF NEW DEPARTMENT
                console.table(newDept);
                // RESTART APP
                startApp();
            });
        });
    }

    // ADD A ROLE
    const addRole = ( => {
        db.query('
        SELECT * FROM department', function (err, depts) {
            if (err) return console.log(err);
            inquirer
            .prompt([
                {
                    name: "title",
                    message: "Provide the title for this role.",
                    type: "input",
                },
                {
                    name: "salary",
                    message: "Provide the salary for this role.",
                    type: "input",
                },
                {
                    name: "department",
                    message: "Provide the department for this role.",
                    type:"list",
                    choices: depts.map(department =>
                    ({
                        name: department.name,
                        value: department.id
                    })
                    )
                },
                .then((newRole) => {
                    db.query('
                    INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)', [newRole.title, newRole.salary, newRole.department],
                    function (err) {
                        if (err) return console.log(err);
                        console.log('New role ${newRole.title} added!');
                        // DISPLAY QUERY OF NEW ROLE
                        console.table(newRole);
                        // RESTART APP
                        startApp();
                    })
                });
            ]);
        }

        // ADD AN EMPLOYEE
        const addEmployee = () => {
            // PULLING IN DATA FOR ROLE
            db.query('
            SELECT
            id AS value,
            title AS name 
            FROM role', (err, roles) => {
                db.query('
                SELECT
                id AS value,
                CONCAT')
            })
        }