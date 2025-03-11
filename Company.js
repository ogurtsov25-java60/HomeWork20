//Object.keys() returns array of keys
//Object.values() returns array of values
export default class Company {

    constructor() {
        this.employees = {} //key - name (unique name value), value - employee object (either Employee, or WageEmployee, or Manager)
    }
    addEmployee(empl) {
        this.employees[empl.name] = empl;
    }
    deleteEmployee (empl) {
        delete this.employees[empl.name];
    }
    getDepBudget(department) {
        const emp = Object.values(this.employees).filter(emp => emp.department === department);       
        let salary=0
        for(let next of emp){          
        salary=salary +next.computeSalary()
        }
       return salary
    }
    getEmployeesMaxSalary() {
        //TODO
        //returns array of employees with maximal salary
    }
    getEmployeesDepartment(department) {
        const result = Object.values(this.employees).filter(emp => emp.department === department);
        return result
    }
}