const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should get the name of the Employee', () => {
            const employeeName = new getName();
            const name = 'Emily';

            expect(employeeName) = name;
        })
    })
    describe('getId', () => {
        it('should get the Id of hte Employee', () => {
            const employeeId = new getId()
            const Id = "1"

            expect(employeeId) = Id;
        })
    })
    describe('getEmail', () => {
        it('should get the Id of hte Employee', () => {
            const employeeEmail = new getEmail()
            const Email = "email@example.com"

            expect(employeeEmail) = Email;
        })
    })
    describe('getRole', () => {
        it('should get the Id of hte Employee', () => {
            const gettingRole = new getRole();

            expect(gettingRole) = Employee;
        })
    })
})