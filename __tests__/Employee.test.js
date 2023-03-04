const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should get the name of the Employee', () => {
            const testName = 'Emily';
            const testEmployee = new Employee('Emily', 1, "test@test.com");

            expect(testEmployee.getName()).toEqual(testName);
        })
    })
    describe('getId', () => {
        it('should get the Id of the Employee', () => {
            const testId = 1;
            const testEmployee = new Employee('Emily', 1, "test@test.com");

            expect(testEmployee.getId()).toEqual(testId);
        })
    })
    describe('getEmail', () => {
        it('should get the Id of hte Employee', () => {
            const testEmail = 'test@test.com';
            const testEmployee = new Employee('Emily', 1, "test@test.com");

            expect(testEmployee.getEmail()).toEqual(testEmail);
        })
    })
    describe('getRole', () => {
        it('should get the Id of hte Employee', () => {
            const testEmployee = new Employee('Emily', 1, "test@test.com");

            expect(testEmployee.getRole()).toEqual('Employee');
        })
    })
})