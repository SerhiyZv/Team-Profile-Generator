const Manager = require('../lib/Manager.js');

describe('Manager', () =>{

    describe ('the system should create a new instance of manager', () => {

        const manager = new Manager('John', '456', 'John@email.com', '12');

        expect(manager.name).toBe('John');
        expect(manager.id).toBe('456');
        expect(manager.email).toBe('John@email.com');  
        expect(manager.office).toBe('12');  

        it('the system should get the Managers role', () => {

            expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
        });
    })
})