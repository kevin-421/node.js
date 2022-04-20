function employeeCard({ Manager, Engineer, Intern }) {

    let output = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <link rel="stylesheet" href="./assets/css/style.css">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <div class="banner">
                <h1>Team Bulider</h1>
            </div>
            <div class="employees">`

    if (Manager.length) {
        output += '<div class="Managers">'
        Manager.forEach(mgr => {
            output += `
                <div class="card">
                    <h2>${mgr.getName()}</h2>
                    <hr>
                    <h5>ID: ${mgr.getId()}</h5>
                    <h5>email: ${mgr.getEmail()}</h5>
                    <h5>Office Number: ${mgr.getOfficeNumber()}</h5>
                </div>
            `
        });

        output += `
        </div>
        <h1>Managers</h1>
        <hr>
        `
    };

    if (Engineer.length) {
        output += '<div class="Engineers">'
        Engineer.forEach(eng => {
            output += `
                <div class="card">
                    <h2>${eng.getName()}</h2>
                    <hr>
                    <h5>ID: ${eng.getId()}</h5>
                    <h5>email: ${eng.getEmail()}</h5>
                    <h5>Github: ${eng.getGithub()}</h5>
                </div>
            `
        });

        output += `
        </div>
        <h1>Engineers</h1>
        <hr>
        `
    };

    if (Intern.length) {
        output += '<div class="Interns">'
        Intern.forEach(intern => {
            output += `
                <div class="card">
                    <h2>${intern.getName()}</h2>
                    <hr>
                    <h5>ID: ${intern.getId()}</h5>
                    <h5>email: ${intern.getEmail()}</h5>
                    <h5>Office Number: ${intern.getSchool()}</h5>
                </div>
                `
            });

        output += `
        </div>
        <h1>Interns</h1>
        <hr>
        </div>`
        };

    output += `
            </body>
            </html>`

    return output;
};

module.exports = employeeCard;