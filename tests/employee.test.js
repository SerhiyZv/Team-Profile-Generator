const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    describe ('Use should create a new instance of employee', () => {

        const employee = new Employee('Serhiy Zvedenyuk', '456', 'skiev@gamil.com');

        expect(employee.name).toBe('Serhiy Zvedenyuk');
        expect(employee.id).toBe('456');
        expect(employee.email).toBe('skiev@gmail.com');

        it('the system should get the employee name', () => {

            expect(employee.getName()).toEqual(expect.stringContaining('Serhiy Zvedenyuk'));
        });

        it("the system should get the Employee's ID", () => {
            
            expect(employee.getId()).toEqual(expect.stringContaining('456'));
        });

        it("the system should get the employee's email", () => {

            expect(employee.getEmail()).toEqual(expect.stringContaining('skiev@gamil.com'));
        });

        it("the system get the Employee's role", () => {

            expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
        });
    })
})