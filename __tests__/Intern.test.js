const Engineer = require('../lib/Intern');

const name='Kevin', id=1, email='test@test.com', github='kevin', school = 'smu';
const intern = new Engineer(name,id,email,school);

test('Testing getName method', ()=>expect(intern.getSchool()).toBe(school));
test('Testing role',()=>expect(intern.getRole()).toBe('Intern'));
