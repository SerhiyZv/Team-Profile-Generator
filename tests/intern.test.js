const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    describe('the system should create a new instance of intern', () => {

        const intern = new Intern('Serhiy Zvedenyuk', '456', 'skiev@gmail.com', 'university');

        expect(intern.name).toBe('Serhiy Zvedenyuk');
        expect(intern.id).toBe('456');
        expect(intern.email).toBe('skiev@gmail.com');
        expect(intern.school).toBe('university');

        it('the system should get the Interns school', () => {

            expect(intern.getSchool()).toEqual(expect.stringContaining('university'));
        });

        it('the system should get the Interns role', () => {

            expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
        });
    })
})