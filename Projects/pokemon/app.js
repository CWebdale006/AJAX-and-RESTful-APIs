// getting data 
fetch('https://pokeapi.co/api/v2/pokemon/gible/')
    // making sure the response is in json 
    .then(res => res.json())
    .then(
        data => {
            // destructuring the data object
            const {...sprites} = data.sprites;

            console.log(sprites.front_shiny);

            // creating variable selectors for cleaner code
            const htmlSelector = document.getElementById("sprite");
            const img = `<img src="${sprites.front_shiny}" alt="">`;
            const htmlName = document.querySelector('h5');
            const pokemonName = 
            console.log(htmlName)
            // putting it all together 
            htmlSelector.innerHTML = img;
            htmlName
        }
    );

