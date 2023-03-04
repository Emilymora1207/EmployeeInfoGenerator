const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getGithub', () => {
        it('should get the gitHub username of the Engineer', () => {
            const testGithub = 'Emilymora1207';
            const testEngineer = new Engineer('Emily', 1, "test@test.com", 'Emilymora1207');

            expect(testEngineer.getGithub()).toEqual(testGithub);
        })
    })
    describe('getRole', () => {
        it('should get the role of the Engineer', () => {
            const testEngineer = new Engineer('Emily', 1, "test@test.com", 'Emilymora1207');

            expect(testEngineer.getRole()).toEqual('Engineer');
        })
    })
})

module.exports = Employee