const Employee = require("../lib/Employee");

test("name is a string, not empty", () => {
    const employee = new Employee("Gokul", 1);

    expect(employee.name).toBe("Gokul");
});

test("ID is a number, not zero", () => {
    const employee = new Employee("Gokul", 1);

    expect(employee.id).toBeGreaterThanOrEqual(1);
});

test("email is a valid email", () => {
    const employee = new Employee("Gokul", 1, "gkowligi@gmail.com");
    const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    expect(employee.email).toMatch(emailRegex);
});

test("getName() returns employee's name", () => {
    const employee = new Employee("Gokul", 1);

    expect(employee.getName()).toBe(employee.name);
});

test("getId() returns employee's ID", () => {
    const employee = new Employee("Gokul", 1);

    expect(employee.getId()).toBe(1);
});

test("getEmail() returns employee's email", () => {
    const employee = new Employee("Gokul", 1, "gkowligi@gmail.com");

    expect(employee.getEmail()).toBe("gkowligi@gmail.com");
});

test("getRole() gets an 'Employee' Object", () => {
    const employee = new Employee("Gokul", 1, "gkowligi@gmail.com");

    expect(employee.getRole()).toBe(employee);
});