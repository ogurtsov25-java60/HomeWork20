import {testframework} from './testframework.js'
import Employee from './employee.js'
import Manager from './Manager.js'
import WageEmployee from './WageEmployee.js'
import Company from './Company.js'


testframework("getDepBudget and getEmployeesDepartment", 'const emp1 = new Employee("Vasya",3500,1);' +
'const emp2 = new Employee("Petya",4500,1);' +
'const emp3 = new Employee("Vanya",5500,2);' +
'const emp4 = new Employee("Igor",5500,5);' +
'const emp5 = new Manager("Raisa",2300,5,2);' +
'const emp6 = new WageEmployee("Kate",1200,6,122,35);' +
'const com1 = new Company();' + 
'com1.addEmployee(emp1);' +
'com1.addEmployee(emp2);' +
'com1.addEmployee(emp3);' +
'com1.addEmployee(emp4);' +
'com1.addEmployee(emp5);' +
'com1.addEmployee(emp6);',
['com1.getDepBudget(1)', 'com1.getDepBudget(2)', 'com1.getDepBudget(5)','com1.getEmployeesDepartment(1)','com1.getEmployeesDepartment(5)','com1.getEmployeesMaxSalary()'],
[8000, 5500, 10100,[{"name":"Vasya","basicSalary":3500,"department":1},{"name":"Petya","basicSalary":4500,"department":1}],[{"name":"Igor","basicSalary":5500,"department":5},{"name":"Raisa","basicSalary":2300,"department":5,"factor":2}],[{"Vanya":5500},{"Igor":5500}]])


