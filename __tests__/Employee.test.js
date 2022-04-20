const Employee = require('../lib/Employee');

const name='Kevin', id=1, email='test@test.com';
const employee = new Employee(name,id,email);

test('Testing for object',()=> expect(typeof(employee)).toBe('object'));
test('Testing getName method', ()=>expect(employee.getName()).toBe(name));
test('Testing getName method', ()=>expect(employee.getId()).toBe(id));
test('Testing getName method', ()=>expect(employee.getEmail()).toBe(email));
test('Testing role',()=>expect(employee.getRole()).toBe('Employee'));
