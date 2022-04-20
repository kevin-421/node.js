const Engineer = require('../lib/Engineer');

const name='Kevin', id=1, email='test@test.com', github='kevin';
const engineer = new Engineer(name,id,email,github);

test('Testing getName method', ()=>expect(engineer.getGithub()).toBe(github));
test('Testing role',()=>expect(engineer.getRole()).toBe('Engineer'));
