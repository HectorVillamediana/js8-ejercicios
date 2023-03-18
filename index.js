//=================NIVEL 1=============================

//===================1=================================

//const dog = {};

//===================2=================================

//console.log(dog);

//===================3=================================

const dog = {
    name: "Bobby",
    legs: 4,
    color: "Brown",
    age: 7,
    bark: function () {
        return `wof wof!`
    }
};
//===================4=================================

console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

//===================5=================================

dog.breed = true;
dog.getDogInfo = function () {
    return `${this.name}, ${this.legs}, ${this.age}, ${this.color}`
}
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

//=================NIVEL 2=============================

//===================1=================================

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
    Alfred: {
        email: 'alfred@alfred.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}

let mostSkills = ''
let current = 0;
let person = {}

for (let i = 0; i <= Object.values(users).length - 1; i++) {
    if (i == 0) {
        person = Object.keys(users)[i];
        current = Object.values(Object.values(users)[i])[1].length
    }
    if (current < Object.values(Object.values(users)[i])[1].length) {
        current = Object.values(Object.values(users)[i])[1].length
        person = Object.keys(users)[i]
    }
}
console.log(person);

//===================2=================================

onlineUsers = 0;
most50Users = 0;
for (let i = 0; i <= Object.values(users).length - 1; i++) {
    if (Object.values(Object.values(users)[i])[3]) {
        onlineUsers += 1
    }
    if (Object.values(Object.values(users)[i])[4] > 50) {
        most50Users += 1
    }
}
console.log(`${onlineUsers} estan conectados, y ${most50Users} tienen mas de 50 puntos`);


//===================3=================================

MERN = false;
mernDevs = []
for (let i = 0; i <= Object.values(users).length - 1; i++) {

    if (Object.values(Object.values(users)[i])[1].includes("MongoDB")) {
        if (Object.values(Object.values(users)[i])[1].includes("React")) {
            if (Object.values(Object.values(users)[i])[1].includes("Node")) {
                if (Object.values(Object.values(users)[i])[1].includes("Express")) {
                    MERN = true
                    mernDevs.push(Object.keys(users)[i])
                }
            }
        }
    }

}
console.log(mernDevs);

//===================4=================================

let copyUsers = Object.assign({}, users);
copyUsers.Hector = "Hola"
console.log(users);

//===================5=================================

console.log(Object.keys(users));

//====================6================================

console.log(Object.values(users));

//===================7=================================

const countries = {
    Japan: {
        capitol: "Tokio",
        lenguaje: "Japanese",
        population: 100000000,
    },
    Spain: {
        capitol: "Madrid",
        lenguaje: "Spanish",
        population: 1000000,
    },
    Canada: {
        capitol: "Toronto",
        lenguaje: "Eng",
        population: 3000000,
    },
}
console.log(Object.entries(countries));

//=================NIVEL 3=============================

//===================1=================================

const personAcount = {
    firstName: "Hector Jose",
    lastName: "Villamediana",
    expenses: 6.000,
    getTotalexpense: function () {

    },
    getTotalIncome: function () {

    },
    getAccountInfo: function () {

    },
    getAddIncome: function () {

    },
    getAddExpense: function () {

    },
    setAccountBalance: function () {

    },
}

//===================2=================================

const users_ = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Alfred",
        email: "alfred@alfred.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];

const products = [
    {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
            { userId: "fg12cy", rate: 5 },
            { userId: "zwf8md", rate: 4.5 },
        ],
        likes: [],
    },
    {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
    },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    },
];

const signUp = function (id, username_, email_, password_) {

    let day = new Date().getDay()
    day < 10 ? day = "0" + day :
        day = day
    let month = new Date().getMonth()
    month < 10 ? month = "0" + month :
        month = month
    let year = new Date().getFullYear()
    let hour = new Date().getHours()
    hour < 10 ? hour = "0" + hour :
        hour = hour
    let minute = new Date().getHours()
    minute < 10 ? minute = "0" + minute :
        minute = minute
    let createdAt_;
    createdAt_ = `${month}/${day}/${year} ${hour}:${minute}`
    let isLoggedIn_ = true;

    const newUser = {
        _id: id,
        username: username_,
        email: email_,
        password: password_,
        createdAt: createdAt_,
        isLoggedIn: isLoggedIn_,
    };
    let repeat = 0;
    for (let i = 0; i < users_.length - 1; i++) {
        if (Object.values(users_[i])[2] == email_ || Object.values(users_[i])[1] == username_) {
            repeat += 1
        }
    }
    if (repeat > 0) {
        return "El usuario ya existe"
    } else {
        users_.push(newUser)
        return users_
    }
}
console.log(signUp("HectorH", "Hector", "hector@gmail.com", 12345));

const signIn = function (username_, password_) {
    let logged = false;
    for (let i = 0; i < users_.length - 1; i++) {
        if (Object.values(users_[i])[1] == username_ && Object.values(users_[i])[3] == password_) {
            logged = true
        }
    }
    if (logged) return "Bienvenido"
    else return "Nombre de usuario o contraseña invalidos"
}
console.log(signIn("Brook", "123111"));
//===================3=================================

const rateProduct = function (name_, id_, ratings_) {

    for (property of products) {
        if (property.name == name_) {
            if (property.ratings.length == 0) {
                let user = {
                    userId: id_,
                    rate: ratings_,
                }
                property.ratings.push(user)
            }
            for (element of property.ratings) {
                if (element.userId == id_) {
                    return "El usuario ya ha valorado este producto"
                } else {
                    let user = {
                        userId: id_,
                        rate: ratings_,
                    }
                    property.ratings.push(user)
                    return products
                }
            }
        }
    }

}
console.log(rateProduct("mobile phone", "fg12cy", 5));

//===================4=================================

const likeProduct = function (name_, id_, like_) {

    for (property of products) {
        if (property.name == name_) {
            if (property.likes.length == 0) {
                user = id_
                property.likes.push(user)
            }
            for (element of property.likes) {
                if (element.userId == id_) {
                    let i = property.likes.indexOf(element)
                    console.log(i);
                    return "El usuario ya ha valorado este producto"
                } else {
                    user = id_
                    property.likes.push(user)
                }
            }
        }
    }
    return products
}
console.log(likeProduct("TV", "fg12cy", true));