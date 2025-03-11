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

            const emp = Object.values(this.employees)
            let salaryArray=[]
            let result=[] 
            for(let next of emp){
            let key=next.name
            let  value=next.computeSalary()
            salaryArray.push( {[key]:value})     
            }   
            let max=salaryArray[0]
            for(let next of salaryArray){      
            if((Object.values(max))[0]<(Object.values(next))[0])       
            max=next     
            }
            
            for(let next of salaryArray){      
                if((Object.values(max))[0]==(Object.values(next))[0])       
                result.push(next)    
                }
                
           
            return result
            
    
       
    }
    getEmployeesDepartment(department) {
        const result = Object.values(this.employees).filter(emp => emp.department === department);
        return result
    }
}