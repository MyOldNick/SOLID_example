class Bird {

    walk() {
        console.log('walk')
    }


    fly() {
        console.log(fly)
    }

}


// Правильно
class Chicken extends Bird {

    giveEggs() {
        console.log('give eggs')
    }

}

//Не правильно
// Стальная курица не умеет летать, нужно либо убрать метод fly у класса птицы
// class SteelChicken extends Bird {}

//Правильно
//Либо создать класс SteelBird
class SteelBird {
    
    walk() {
        console.log('walk')
    }

    destroyWorld() {
        console.log("The end")
    }

}

class SteelChicken extends SteelBird {

}

const chicken = new Chicken()
const steelChicken = new SteelChicken() 

chicken.giveEggs()
steelChicken.destroyWorld()