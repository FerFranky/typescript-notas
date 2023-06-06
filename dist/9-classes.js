"use strict";
class EmployeeClass {
    // Metodos
    showInfo() {
        console.log(`${this.name}`);
    }
    constructor(id, name, dept) {
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
}
const employe = new EmployeeClass(1, 'Fer', 'Ventas');
