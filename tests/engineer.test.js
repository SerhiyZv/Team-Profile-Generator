const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    describe('the system should create a new instance of engineer', () => {

        const engineer = new Engineer('Serhiy Zvedenyuk', '456', 'skiev@gmail.com', 'MyGitHub');

        expect(engineer.name).toBe('Serhiy Zvedenyuk');
        expect(engineer.id).toBe('456');
        expect(engineer.email).toBe('skiev@gmail.com');
        expect(engineer.github).toBe('MyGitHub');

        it('the system should get the engineers gitHub', () => {

            expect(engineer.getGithub()).toEqual(expect.stringContaining('MyGitHub'));
        });

        it("the system should get the engineers role", () => {

            expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
        });
    })
})