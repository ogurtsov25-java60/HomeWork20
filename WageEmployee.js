import Employee from "./employee.js";
export default class WageEmployee extends Employee{
    constructor(name, basicSalary, department, hours, wage) {
        super(name, basicSalary, department);
        this.hours = hours;
        this.wage = wage;
    }
    computeSalary() {
        const res = super.computeSalary() + this.hours * this.wage;
        return res;
    }
}