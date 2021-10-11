const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("The manager has an office number", () => {
    const manager = new Manager("Gokul", 1, "gkowligi@gmail.com", 1234);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("getRole() gets a 'Manager' object", () => {
    const manager = new Manager("Gokul", 1, "gkowligi@gmail.com", 1234);

    expect(manager.getRole()).toBe(manager);
});