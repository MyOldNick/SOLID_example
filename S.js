class Animal {

    constructor({ color, name, breed }) {
        this.color = color
        this.name = name
        this.breed = breed
    }

    setName(name) {
        this.name = name
    }

    setColor(color) {
        this.color = color
    }

    // Не правильно
    
    // printJson() {
    //     return JSON.stringify(this.animal)
    // }

    // printHtml() {
    //     return (
    //         `<div>
    //             <h1>${this.animal.name}</h1>
    //             <p>${this.animal.breed}</p>
    //             <p>${this.animal.color}</p>
    //         </div>`
    //     )
    // }

}


class printAnimal {

    constructor(animal) {
        this.animal = animal
    }

    printJson() {
        return JSON.stringify(this.animal)
    }

    printHtml() {
        return (
            `<div>
                <h1>${this.animal.name}</h1>
                <p>${this.animal.breed}</p>
                <p>${this.animal.color}</p>
            </div>`
        )
    }
}


const CorgiRaf = new Animal({ name: "Раф", color: "white", breed: "Корги"})

const CorgiRafLog = new printAnimal(CorgiRaf)

console.log(CorgiRafLog.printJson())
console.log(CorgiRafLog.printHtml())