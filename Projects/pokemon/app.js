// getting data 
fetch('https://pokeapi.co/api/v2/pokemon/gible/')
    // making sure the response is in json 
    .then(res => res.json())
    .then(
        data => {
            // destructuring the data object
            const {...sprites} = data.sprites;

            console.log(data);

            // adding the sprite into a div
            const htmlSelector = document.getElementById("sprite");
            const img = `<img src="${sprites.front_shiny}" alt="">`;
            htmlSelector.innerHTML = img;

            // adding the name of the pokemon 
            const htmlName = document.querySelector('h5');
            const pokemonName = data.name;
            const uppercaseName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
            htmlName.innerHTML = uppercaseName;

            // adding the type of pokemon
            const htmlType = document.querySelector('.card-text');
            const typesArray = data.types;
            htmlType.innerHTML = `${uppercaseName}'s types are: ${typesArray[0].type.name} and ${typesArray[1].type.name}`

            // NEED TO TAKE ALL THIS INFORMATION AND APPEND AS A DOCUMENT FRAGMENT
        }
    );
