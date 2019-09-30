// getting data 
fetch('https://pokeapi.co/api/v2/pokemon/gible/')
    // making sure the response is in json 
    .then(res => res.json())
    .then(
        data => {
            // destructuring the data object
            const {...sprites} = data.sprites;
    
            console.log(sprites.front_shiny);

            // adding the sprite into a div
            const htmlSelector = document.getElementById("sprite");
            const img = `<img src="${sprites.front_shiny}" alt="">`;
            htmlSelector.innerHTML = img;

            // adding the name of the pokemon 
            const htmlName = document.querySelector('h5');
            const pokemonName = data.name;
            htmlName.innerHTML = pokemonName;
            console.log(htmlName)
        }
    );

