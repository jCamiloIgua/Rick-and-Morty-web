
let charactersContent = document.getElementById("CharactersInfo");//apunta al div html

//Get all characters
fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())//volver data a json
.then((dataCharacter)=>{ //traer datos
    //console.log(dataCharacter);
    //console.log(dataCharacter.results);
    dataCharacter.results.forEach(element => {//funtion
        //console.log(element.name);
        const containerDatosCha = document.createElement('div');//crea div

        containerDatosCha.innerHTML =`
        <h4>${element.name}</h4>
        <section>
        <h5  class="estado">Estado: ${element.status}</h5>
        <h5>Specie: ${element.species}</h5>
        </section>
        
        <div class="genero">
        <h4>Gender</h4>
        </div>

        
        <div>
        <h3>Imagen</h3>
        <img src="${element.image}">
        </div>

        `;

        //Colocar color a los generos
        const generoDiv = containerDatosCha.querySelector('.genero');
        const generH5 = document.createElement('h5');

        if(element.gender === 'Male'){
            generH5.textContent = 'Male';
            generH5.style.color = 'blue';
            
        }else{
            generH5.textContent = 'Female';
            generH5.style.color = 'pink';
        }
        //añadir el h5 al div de genero
        generoDiv.appendChild(generH5);
        //insertar en html
        charactersContent.append(containerDatosCha);
    });
})