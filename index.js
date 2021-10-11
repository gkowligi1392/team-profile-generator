const Team = require("./lib/Team");

function start() {
    const team = new Team();
    team.addManager();
}

start();