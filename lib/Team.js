const inquirer = require("inquirer");
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const createHtmlFile = require("../utils/fileManager");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");

const {
    header,
    footer,
    renderCardManager,
    renderCardEngineers,
    renderCardInterns,
} = require("../src/htmlCode");

class Team {
    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = [];
    }

    addManager() {
        inquirer
        .prompt([
            {
            type: "text",
            name: "name",
            message: "Manager's Name: ",
            },
            {
            type: "text",
            name: "email",
            message: "Manager's Email: ",
            },
            {
            type: "text",
            name: "officeNumber",
            message: "Manager's Office Number: ",
            },
        ])

        .then(({ name, email, officeNumber }) => {
            const id = uuidv4();
            this.manager = new Manager(name, id, email, officeNumber);
            return this.addMember();
        })
        .catch((err) => {
            console.error(err);
        });
    }

    addEngineer() {
        inquirer
        .prompt([
            {
            type: "text",
            name: "name",
            message: "Engineer's Name: ",
            },
            {
            type: "text",
            name: "email",
            message: "Engineer's Email: ",
            },
            {
            type: "text",
            name: "github",
            message: "Engineer's github username: ",
            },
        ])

        .then(({ name, email, github }) => {
            const id = uuidv4();
            const engineer = new Engineer(name, id, email, github);
            this.engineers.push(engineer);
            return this.addMember();
        })
        .catch((err) => {
            console.error(err);
        });
    }

    addIntern() {
        inquirer
        .prompt([
            {
            type: "text",
            name: "name",
            message: "Intern's Name: ",
            },
            {
            type: "text",
            name: "email",
            message: "Intern's Email: ",
            },
            {
            type: "text",
            name: "school",
            message: "Intern's School: ",
            },
        ])

        .then(({ name, email, school }) => {
            const id = uuidv4();
            const intern = new Intern(name, id, email, school);
            this.interns.push(intern);
            return this.addMember();
        })
        .catch((err) => {
            console.error(err);
        });
    }

    addMember() {
        inquirer
        .prompt({
            type: "list",
            name: "type",
            message: "Add a member to the Team?",
            choices: ["Engineer", "Intern", "Finish adding team members"],
        })

        .then(({ type }) => {
            if (type === "Engineer") return this.addEngineer();
            if (type === "Intern") return this.addIntern();

            return this.generateTeamPage();
        })
        .catch((err) => {
            console.error(err);
        });
    }

    generateTeamPage() {
        let html = `
        ${header}
        ${renderCardManager(this.manager)}
        ${renderCardEngineers(this.engineers)}
        ${renderCardInterns(this.interns)}
        ${footer}
        `;

        const dir = path.join(__dirname, "../");
        createHtmlFile(dir, "dist", html);
        return;
    }
}

module.exports = Team;