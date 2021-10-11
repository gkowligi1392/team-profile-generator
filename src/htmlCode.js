const header = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Team</title>
</head>

<body>
    <header>
        Team
    </header>
`;

const footer = `
    <footer>
        Made with ❤️ by Gokul Kowligi
    </footer>
</body>
</html>
`;

function renderCardManager(manager) {
    return `
    <section id="divManager">
        <div class="card">
            <div class="card-title">
                ${manager.name}<br>
                <i class="fas fa-user-secret fa-2x"></i> -  Manager
            </div>
            <div class="card-body">
                <ul>
                    <li>Id: ${manager.id}</li>
                    <li>Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
                    <li>Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </section>
    `;
}

function renderCardEngineers(engineers) {
    if (engineers.length === 0) {
        return ``;
    }
    let html = `<section id="divEngineers">`;
    let engineersHtml = engineers.map(
        (e) => `
            <div class="card">
                <div class="card-title">
                    ${e.name}<br>
                    <i class="fas fa-user-ninja fa-2x"></i> -  Engineer
                </div>
                <div class="card-body">
                    <ul>
                        <li>Id: ${e.id}</li>
                        <li>Email: <a href="mailto:${e.email}">${e.email}</a></li>
                        <li>Github: <a href="https://github.com/${e.github}" target="_blank">${e.github}</a></li>
                    </ul>
                </div>
            </div>`
    );
    html += engineersHtml + "</section>";
    return html;
}

function renderCardInterns(interns) {
    if (interns.length === 0) {
        return ``;
    }
    let html = `<section id="divInterns">`;
    let internsHtml = interns.map(
        (intern) => `
            <div class="card">
                <div class="card-title">
                    ${intern.name}<br>
                    <i class="fas fa-child fa-2x"></i> - Intern  
                </div>
                <div class="card-body">
                    <ul>
                        <li>Id: ${intern.id}</li>
                        <li>Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                        <li>School: ${intern.school}</li>
                    </ul>
                </div>
            </div>`
    );
    html += internsHtml + "</section>";
    return html;
}

module.exports = {
    header,
    footer,
    renderCardManager,
    renderCardEngineers,
    renderCardInterns,
};
