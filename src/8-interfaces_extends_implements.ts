interface Person {
    id: number
    name: string
}

interface Employee extends Person {
    dept: string
}

interface Costumer extends Person {
    country: string
}

const emp:Employee = {id: 1, name:'Juan', dept:'Ventas'}

interface Animal {
    name: string
    getDogs: () => void
    getCats: () => void
}

class zoo implements Animal {
    name = 'Cat'
    getCats (): void{

    }
    getDogs (): void{

    }
}