class EmployeeClass{
    // Atributos
    id:number
    name:string
    dept:string

    // Metodos
    showInfo(): void {
        console.log(`${this.name}`);
    }

    constructor(id: number, name: string, dept:string){
        this.id = id
        this.name = name
        this.dept = dept
        this.showInfo()
    }
}

const employe = new EmployeeClass (1, 'Fer', 'Ventas');