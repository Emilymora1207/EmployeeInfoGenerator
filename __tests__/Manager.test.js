const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('getOfficeNumber', () => {
        it('should get the office number of the Manager', () => {
            const testOfficeNumber = 1;
            const testManager = new Manager('Emily', 1, "test@test.com", 1);

            expect(testManager.getOfficeNumber()).toEqual(testOfficeNumber);
        })
    })
    describe('getRole', () => {
        it('should get the role of the Engineer', () => {
            const testManager = new Manager('Emily', 1, "test@test.com", 1);

            expect(testManager.getRole()).toEqual('Manager');
        })
    })
})