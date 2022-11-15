const Manager = require('../lib/Manager.js');

describe('Manager', () =>{

    describe ('the system should create a new instance of manager', () => {

        const manager = new Manager('Serhiy Zvedenyuk', '456', 'skiev@gmail.com', '12');

        expect(manager.name).toBe('Serhiy Zvedenyuk');
        expect(manager.id).toBe('456');
        expect(manager.email).toBe('skiev@gmail.com');  
        expect(manager.office).toBe('12');  

        it('the system should get the Managers role', () => {

            expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
        });
    })
})