const Engineer = require("../lib/Engineer");

test("github profile is a string", () => {
    const engineer = new Engineer(
        "Gokul",
        1,
        "gkowligi@gmail.com",
        "gkowligi1392"
    );
    expect(engineer.github).toBe(engineer.github);
});

test("getGithub() returns a string", () => {
    const engineer = new Engineer(
        "Gokul",
        1,
        "gkowligi@gmail.com",
        "gkowligi1392"
    );
    expect(engineer.getGithub()).toBe(engineer.github);
});

test("getRole() gets an 'Engineer' Object", () => {
    const engineer = new Engineer(
        "Gokul",
        1,
        "gkowligi@gmail.com",
        "gkowligi1392"
    );
    expect(engineer.getRole()).toBe(engineer);
});