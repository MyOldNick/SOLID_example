//Не правильно, компания - отдельная сущность
// interface User {
//     name: string,
//     age: number,
//     company: {
//         name: string,
//         country: string,
//         city: string,
//         age: number,
//         money: number
//     }
// }


//Правильно
interface User {
    name: string,
    age: number
}


interface Company {
    name: string,
    country: string,
    city: string,
    age: number,
    money: number
}



const user: User = {
    name: "Adam",
    age: 27
}

const company: Company = {
    name: "The best software LLC company development best production",
    country: "London",
    city: "England",
    age: 120,
    money: 100500
}


