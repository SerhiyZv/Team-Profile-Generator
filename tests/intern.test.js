const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    describe('the system should create a new instance of intern', () => {

        const intern = new Intern('John', '456', 'John@email.com', 'university');

        expect(intern.name).toBe('John');
        expect(intern.id).toBe('456');
        expect(intern.email).toBe('John@email.com');
        expect(intern.school).toBe('university');

        it('the system should get the Interns school', () => {

            expect(intern.getSchool()).toEqual(expect.stringContaining('university'));
        });

        it('the system should get the Interns role', () => {

            expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
        });
    })
})