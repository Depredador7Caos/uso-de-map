const btnCalorias = document.getElementById('cal');
const btnPuntosVida = document.getElementById('ph');
const btnComida = document.getElementById('eat');
const getAll = document.getElementById('getAll');

const contenedorLista = document.getElementById('contenedor lista');

const createList = document.createElement("li");

const listFood = [
  { name: "banana", calories: 350, pointHealp: 30 },
  { name: "apple", calories: 200, pointHealp: 20 },
  { name: "been", calories: 100, pointHealp: 30 },
  { name: "tomato", calories: 185, pointHealp: 10 },
  { name: "pear", calories: 250, pointHealp: 50 },
  { name: "becon", calories: 125, pointHealp: 30 },
  { name: "rice", calories: 120, pointHealp: 70 }
];


btnCalorias.addEventListener('click', () => {
  const calorias = listFood.map((food) => {
    console.log(food.calories)
  });

  return calorias;
});


btnPuntosVida.addEventListener('click', () => {
  const puntosVida = listFood.map((food) => {
    console.log(`PH = ${food.pointHealp}`);
  });

  return puntosVida;
})


btnComida.addEventListener('click', () => {
  const comida = listFood.map((food) => {
    console.log(food.name);
  });

  return comida;
});


getAll.addEventListener('click', () => {
  const allFood = listFood.map((food) => {
    console.log(`Name Food: ` + food.name, `N°.Calories: ` + food.calories, `point Healp: ` + food.pointHealp);

  });

  return allFood;
});



/*
  listFood.map((food) => {
    contenedorLista.appendChild(createList);

    createList.textContent = `Calorias: ${food.calories}`;
    dataAdd.push(food.calories);

    console.log(food);
  });
*/