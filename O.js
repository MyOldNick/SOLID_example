class Car {
   
    constructor({ model }) {
        this.model = model
    }


    printModel() {
        console.log(this.model)
    }

    //не правильно

    // printPower() {
    //     if(model === 'Mersedes E63') {
    //         console.log(751)
    //     }

    //     if(model === 'Ваз 2101') {
    //         console.log(0)
    //     }

    //     if(model === 'BMW M4') {
    //         console.log(1000)
    //     }
    // }

}


class E63 extends Car {

    constructor(props) {
        super(props)
    }

    printPower() {
        console.log(751)
    }
}


class VAZ extends Car {
    
    constructor(props) {
        super(props)
    }

    printPower() {
        console.log(0)
    }
}

class M4 extends Car {
    
    constructor(props) {
        super(props)
    }

    printPower() {
        console.log(1000)
    }

}

const mersedes = new E63({ model: "Mersedes E63" })
const vaz = new VAZ({ model: "Ваз 2101" })
const bmw = new M4({ model: "BMW M4" })

mersedes.printModel()
vaz.printModel()
bmw.printModel()

mersedes.printPower()
vaz.printPower()
bmw.printPower()

