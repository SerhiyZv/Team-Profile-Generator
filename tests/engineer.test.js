const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    describe('the system should create a new instance of engineer', () => {

        const engineer = new Engineer('John', '456', 'John@email.com', 'MyGitHub');

        expect(engineer.name).toBe('John');
        expect(engineer.id).toBe('456');
        expect(engineer.email).toBe('John@email.com');
        expect(engineer.github).toBe('MyGitHub');

        it('the system should get the engineers gitHub', () => {

            expect(engineer.getGithub()).toEqual(expect.stringContaining('MyGitHub'));
        });

        it("the system should get the engineers role", () => {

            expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
        });
    })
})