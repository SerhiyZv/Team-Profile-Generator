const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    describe ('The system should create a new instance of employee', () => {

        const employee = new Employee('John', '456', 'John@email.com');

        expect(employee.name).toBe('John');
        expect(employee.id).toBe('456');
        expect(employee.email).toBe('John@email.com');

        it('the system should get the employee name', () => {

            expect(employee.getName()).toEqual(expect.stringContaining('John'));
        });

        it("the system should get the Employee's ID", () => {
            
            expect(employee.getId()).toEqual(expect.stringContaining('456'));
        });

        it("the system should get the employee's email", () => {

            expect(employee.getEmail()).toEqual(expect.stringContaining('John@email.com'));
        });

        it("the system get the Employee's role", () => {

            expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
        });
    })
})