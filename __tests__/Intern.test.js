const Intern = require("../lib/Intern");

test("School name is a string", () => {
    const intern = new Intern("Gokul", 1, "gkowligi@gmail.com", "Boot Camp");

    expect(intern.school).toBe(intern.school);
});

test("getSchool() return  intern School", () => {
    const intern = new Intern("Gokul", 1, "gkowligi@gmail.com", "Boot Camp");

    expect(intern.getSchool()).toBe(intern.school);
});

test("getRole() return  intern Object", () => {
    const intern = new Intern("Gokul", 1, "gkowligi@gmail.com", "Boot Camp");

    expect(intern.getRole()).toBe(intern);
});
