const Engineer = require('../lib/Manager');

const name='Kevin', id=1, email='test@test.com', github='kevin', school = 'smu', officeNumber = '22' ;
const Manager = new Engineer(name,id,email,officeNumber);

test('Testing getName method', ()=>expect(Manager.getOfficeNumber()).toBe(officeNumber));
test('Testing role',()=>expect(Manager.getRole()).toBe('Manager'));
