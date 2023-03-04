const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getSchool', () => {
        it('should get the School of the Intern', () => {
            const testSchool = 'UC Davis';
            const testIntern = new Intern('Emily', 1, "test@test.com", 'UC Davis');

            expect(testIntern.getSchool()).toEqual(testSchool);
        })
    })
    describe('getRole', () => {
        it('should get the role of the Intern', () => {
            const testIntern = new Intern('Emily', 1, "test@test.com", 'UC Davis');

            expect(testIntern.getRole()).toEqual('Intern');
        })
    })
})




// const Intern = require("../lib/Intern");

// test("Can set school via constructor", () => {
//   const testValue = "UCLA";
//   const e = new Intern("Foo", 1, "test@test.com", testValue);
//   expect(e.school).toBe(testValue);
// });

// test("getRole() should return \"Intern\"", () => {
//   const testValue = "Intern";
//   const e = new Intern("Foo", 1, "test@test.com", "UCLA");
//   expect(e.getRole()).toBe(testValue);
// });

// test("Can get school via getSchool()", () => {
//   const testValue = "UCLA";
//   const e = new Intern("Foo", 1, "test@test.com", testValue);
//   expect(e.getSchool()).toBe(testValue);
// });



// Check out this example test for the Intern class
// This test is testing the functionality of the Intern class, which is expected to extend the Employee class and have additional properties and methods specific to the Intern role. Here is what each test case is doing:
// • The first test case checks whether an Intern object can be created with a school value via the constructor, and whether that value is correctly assigned to the school property of the object.
// • The second test case checks whether the getRole() method of an Intern object returns the string "Intern". Since the getRole() method is inherited from the Employee class, this test case is also checking whether the Intern class is properly extending the Employee class.
// • The third test case checks whether an Intern object can retrieve its school value using the getSchool() method. This test case is ensuring that the getSchool() method is defined and working as expected.
// Overall, these test cases provide good coverage of the basic functionality of the Intern class. They verify that the Intern class is able to set and retrieve its properties correctly and that it is inheriting the expected behavior from the Employee class.
// Sorry that took so long! That should get you started, if you need extended help after following the above path then feel free to re-submit another ticket and I or another learning assistant will be here to help you out! (If you find yourself still totally confused then your instructional staff will be your best avenue of support.) :party_wizard