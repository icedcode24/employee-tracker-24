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
}