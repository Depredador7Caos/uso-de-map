const btn1 = document.getElementById('cal');
const btn2 = document.getElementById('ph');
const btn3 = document.getElementById('eat');

const btn4 = document.getElementById('getAll');

const chance = document.getElementById('chance');
const home = document.getElementById('home');

const autos = [
        { marca: 'BMW', modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
        { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        { marca: 'Ford', modelo: 'Mustang', year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmision: 'automatico' },
        { marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        { marca: 'BMW', modelo: 'Serie 5', year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmision: 'automatico' },
        { marca: 'Mercedes Benz', modelo: 'Clase C', year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
        { marca: 'Chevrolet', modelo: 'Camaro', year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        { marca: 'Dodge', modelo: 'Challenger', year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
        { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
        { marca: 'Dodge', modelo: 'Challenger', year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmision: 'manual' },
        { marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmision: 'automatico' },
        { marca: 'BMW', modelo: 'Serie 5', year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
        { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
        { marca: 'Dodge', modelo: 'Challenger', year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmision: 'automatico' },
        { marca: 'BMW', modelo: 'Serie 3', year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
        { marca: 'BMW', modelo: 'Serie 5', year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmision: 'automatico' },
        { marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmision: 'automatico' },
        { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];


const locations = [
        {
                name: "OptionFood",
                "btnText": ["Calorias", "Puntos de vida", "Comida", "viewAll", "Option Car"],
                "function": ["getCalorias", "getPH", "getFood", "getFoods", chanceCar]

        },
        {
                name: "OptionCar",
                "btnText": ["Marca", "Model", "Price", "viewAll", "Option Food"],
                "function": [getCarMarca, getCarModel, getCarPrice, getCars, chanceFood]
        }

]



// 1. Crear una función que devuelva un array con todos los modelos de los autos.
function getModelCar() {
        const models = autos.map((model) => {
                console.log(`Modelos existentes: ${model.modelo}, and Price: ${model.precio}`);
        });

        return models;
};


chance.onclick = chanceFood;
home.onclick = notView;


function update(location) {
        btn1.innerText = location["btnText"][0];
        btn2.innerText = location["btnText"][1];
        btn3.innerText = location["btnText"][2];
        btn4.innerText = location["btnText"][3];
        chance.innerText = location["btnText"][4];


        btn1.onclick = location["function"][0];
        btn2.onclick = location["function"][1];
        btn3.onclick = location["function"][2];
        btn4.onclick = location["function"][3];
        chance.onclick = location["function"][4];
}

function chanceFood() {
        update(locations[0]);
        viewsBtns();
}

function chanceCar() {
        update(locations[1]);
        viewsBtns();

}

function viewsBtns() {
        btn1.style.display = "block";
        btn2.style.display = "block";
        btn3.style.display = "block";
        btn4.style.display = "block";
}

function notView() {
        btn1.style.display = "none";
        btn2.style.display = "none";
        btn3.style.display = "none";
        btn4.style.display = "none";

        chance.innerText = "chance Opciones";
}


// Develop functions Car
function getCarMarca() {
        const getMarca = autos.map((marca) => {
                console.log(`Marca: ${marca.marca}`);
        })

        return getMarca;
}

function getCarModel() {
        const getModel = autos.map((model) => {
                console.log(`Modelo: ${model.modelo}`);
        });

        return getModel;
}

function getCarPrice() {
        const getPrice = autos.map((price) => {
                if (price.precio > 20000) {
                        console.log(`precios: ${price.precio}`);
                }
        });

        return getPrice;
}

function getCars() {
        const cars = autos.map((car) => {
                console.log(car)
        });

        return cars;
}

function init() {
        const contenedor = document.getElementById("contenedor-table");
        //create element table
        const table = document.createElement("table");

        let tr = document.createElement("tr");
        let th = document.createElement("th")

        let insertTestTh = document.createTextNode("text here");

        //El hijo "insert text" va dentro del padre "th"
        th.appendChild(insertTestTh);

        //El hijo "th" va dentro del padre "tr"
        tr.appendChild(th);

        table.appendChild(tr);

        contenedor.appendChild(table);
}


//inicializando llamada de funcion init
//window.onload = init;


