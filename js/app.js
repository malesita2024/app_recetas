const populares = document.getElementById('populares');
const ul = document.getElementById('lista-recetas');
const h2Recetas = document.getElementById('tit_recetas')


let inputEdad = document.getElementById("input-edad");
let inputAltura = document.getElementById("input-altura");
let inputPeso = document.getElementById("input-peso");
let genero = document.getElementById("genero");
let actividadFisica = document.getElementById("act-fisica");
let resCalorias = document.getElementById("p-res-calorias");
let resultado = document.getElementById("resultado");

let li
let h3
let pCocina
let pDieta
let pInstrucciones
let pCalorias
let imagen

// function construirUrlconParametros() {
//     let urlActual = window.location.href;
//     let nuevaURL = urlActual + `?receta=${item.nombre}`;
// }




const recetasPopulares = recetas.filter((item) => item.ranking >= 4);

recetasPopulares.forEach(item => {
    populares.innerHTML += `
    <div class="card1" style="width: 30%;">
        <img src="${item.foto}" class="card-img-top" alt="...">
        <div class="card-body1">
            <h5 class="card-title">${item.nombre}</h5>
            <div>${createStars(item.ranking)}</div>
            <p><strong>Cocina: </strong>${item.cocina}</p>
            <p><strong>Tipo: </strong>${item.tipo}</p>
            <p><strong>Dieta: </strong>${item.dieta}</p>
            <a href="receta_detalle.html`+ `?receta=${item.nombre}" id="a_popular" class="btn1 btn-secondary" target="_blank">Ver más</a>
        </div>
    </div>
    `;
});


const a_popular = document.getElementById("a_popular");

function getParams() {
    console.log("hola")
    let params = a_popular.href.split('=');
    console.log(params[1]);
    sessionStorage.setItem("receta", JSON.stringify(params[1]))
}

getParams()


//a_popular.addEventListener('click', () => getParams());



//getParams();

function createStars(ranking) {
    if (ranking == 5) {
        return `<div class="stars">&#x2B50 &#x2B50 &#x2B50 &#x2B50 &#x2B50 </div>`
    } else if (ranking == 4) {
        return `<div class="stars"> &#x2B50 &#x2B50 &#x2B50 &#x2B50 </div>`
    }
}

// Funciones de la Calculadora de calorías

function iconCalOnClick(valor) {
    switch (valor) {
        case 'MenosEdad':
            if (inputEdad.value >= 1) {
                let inputMenos = inputEdad.value - 1;
                inputEdad.value = inputMenos;
            } else {
                inputEdad.value = 0;
            }
            break;
        case 'MenosAltura':
            if (inputAltura.value >= 1) {
                let inputMenos = inputAltura.value - 1;
                inputAltura.value = inputMenos;
            } else {
                inputAltura.value = 0;
            }
            break;
        case 'MenosPeso':
            if (inputPeso.value >= 1) {
                let inputMenos = inputPeso.value - 1;
                inputPeso.value = inputMenos;
            } else {
                inputPeso.value = 0;
            }
            break;

        case 'MasEdad':
            if (inputEdad.value >= 0) {
                let inputEdadFormateado = parseInt(inputEdad.value);
                let inputMas = inputEdadFormateado + 1;
                inputEdad.value = inputMas;
            } else {
                inputEdad.value = 0;
            }
            break;

        case 'MasAltura':
            if (inputAltura.value >= 0) {
                let inputAlturaFormateado = parseInt(inputAltura.value);
                let inputMas = inputAlturaFormateado + 1;
                inputAltura.value = inputMas;
            } else {
                inputAltura.value = 0;
            }
            break;

        case 'MasPeso':
            if (inputPeso.value >= 0) {
                let inputPesoFormateado = parseInt(inputPeso.value);
                let inputMas = inputPesoFormateado + 1;
                inputPeso.value = inputMas;
            } else {
                inputPeso.value = 0;
            }
            break;

    }
}

function calculoCalorias() {
    console.log(genero.value);
    console.log(inputEdad.value);
    console.log(inputAltura.value);
    console.log(inputPeso.value);
    console.log(actividadFisica.value);

    let TMBFemenino = (10 * inputPeso.value) + (6.25 * inputAltura.value) - (5 * inputEdad.value) - 161;
    let TMBMasculino = (10 * inputPeso.value) + (6.25 * inputAltura.value) - (5 * inputEdad.value) - 5;

    if (genero.value == "Femenino") {
        console.log("escogi femenino")
        if (actividadFisica.value == "Poco") {
            resCalorias.innerHTML = ``;
            let TMB = TMBFemenino * 1.2;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Ligero") {
            resCalorias.innerHTML = ``;
            let TMB = TMBFemenino * 1.375;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Moderado") {
            resCalorias.innerHTML = ``;
            let TMB = TMBFemenino * 1.55;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Fuerte") {
            resCalorias.innerHTML = ``;
            let TMB = TMBFemenino * 1.75;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Muy fuerte") {
            resCalorias.innerHTML = ``;
            let TMB = TMBFemenino * 1.9;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        }
    } else if (genero.value == "Masculino") {
        if (actividadFisica == "Poco") {
            resCalorias.innerHTML = ``;
            let TMB = TMBMasculino * 1.2;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Ligero") {
            resCalorias.innerHTML = ``;
            let TMB = TMBMasculino * 1.375;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Moderado") {
            resCalorias.innerHTML = ``;
            let TMB = TMBMasculino * 1.55;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Fuerte") {
            resCalorias.innerHTML = ``;
            let TMB = TMBMasculino * 1.75;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        } else if (actividadFisica.value == "Muy fuerte") {
            resCalorias.innerHTML = ``;
            let TMB = TMBMasculino * 1.9;
            resCalorias.innerHTML = "Tu consumo recomendado de calorías es: " + parseInt(TMB);
            resultado.style.display = "block";
        }
    }

}

//Funciones Lista de Recetas

function crearRecetas(recipes) {
    recipes.forEach(recipe => {
        ul.innerHTML += `
        <div class="card1" style="width: 30%;">
            <div class="photo_list">
            <img src="${recipe.foto}" class="card-img-top" alt="...">
            <i class="fa-regular fa-heart"></i>
            </div>
            <div class="card-body1">
                <h5 class="card-title">${recipe.nombre}</h5>
                <p><strong>Cocina: </strong>${recipe.cocina}</p>
                <p><strong>Tipo: </strong>${recipe.tipo}</p>
                <p><strong>Dieta: </strong>${recipe.dieta}</p>
                <a href="#" class="btn1 btn-secondary">Ver más</a>
            </div>
        </div>
        `;
    });
}


function filtra(categoria) {
    if (categoria == "todos") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        crearRecetas(recetas);
    } else if (categoria == "criolla") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let cocinaCriolla = recetas.filter((item) => item.tipo == "Criolla");
        crearRecetas(cocinaCriolla);
    } else if (categoria == "internacional") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let cocinaInternacional = recetas.filter((item) => item.tipo == "Internacional");
        crearRecetas(cocinaInternacional);
    } else if (categoria == "ricaCal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let ricaCalorias = recetas.filter((item) => item.dieta == "Rica en calorías");
        crearRecetas(ricaCalorias);
    } else if (categoria == "moderadaCal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let moderadaCalorias = recetas.filter((item) => item.dieta == "Moderada en calorías");
        crearRecetas(moderadaCalorias);
    } else if (categoria == "bajaCal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let bajaCalorias = recetas.filter((item) => item.dieta == "Baja en calorías");
        crearRecetas(bajaCalorias);
    } else if (categoria == "menos500Cal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let menor500Calorias = recetas.filter((item) => item.calorias <= 500);
        crearRecetas(menor500Calorias);
    } else if (categoria == "menos1000Cal") {
        ul.innerHTML = ``;
        h2Recetas.style.display = "block";
        let menor1000Calorias = recetas.filter((item) => item.calorias <= 1000);
        crearRecetas(menor1000Calorias);
    }

}

//funciones Detalle de receta

// let a_popular = document.getElementById("a_popular");

// console.log(a_popular)

// a_popular.addEventListener("click", getParams)

// function getParams(){
//     let urlActual = window.location.href;
//     console.log(urlActual);
//     // sessionStorage.setItem("receta","prueba1")
// }

