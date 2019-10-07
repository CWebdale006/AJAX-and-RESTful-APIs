// getting data 
for (let i = 1; i < 10; i++) {
fetch('https://pokeapi.co/api/v2/pokemon/' + i + '/')
    // making sure the response is in json 
    .then(res => res.json())
    .then(
        data => {
            /*APPENDING INFORMATION AS A DOCUMENT FRAGMENT*/ 
            // creating the parent div
            let divCard = document.createElement(`div`);
            divCard.setAttribute('class', 'card');
            divCard.setAttribute('id', i);
            divCard.setAttribute('style', 'width: 25vw;');

            // creating the sprite div
            let divSprite = document.createElement(`div`);
            divSprite.setAttribute('class', 'sprite');
            divSprite.setAttribute('style', 'margin: 0 auto');
            divSprite.setAttribute('id', 'sprite' + i);

            // creating the card-body div
            let divBody = document.createElement(`div`);
            divBody.setAttribute('id', 'body' + i);
            divBody.setAttribute('class', 'card-body');

            // creating the h5 tag
            let h5Name = document.createElement(`h5`);
            h5Name.setAttribute('id', 'h5' + i)
            h5Name.setAttribute('class', 'card-title');
            h5Name.setAttribute('align', 'center');

            // creating the p tag
            let pType = document.createElement(`p`);
            pType.setAttribute('id', 'p' + i)
            pType.setAttribute('class', 'card-text');

            //putting it all together... 
            divBody.innerHTML = h5Name.outerHTML + pType.outerHTML;
            divCard.innerHTML = divSprite.outerHTML + divBody.outerHTML;

            document.body.append(divCard)

            // destructuring the data object
            const {...sprites} = data.sprites;

            // console.log(data);

            /*ADDING THE SPRITE INTO A DIV*/
            const htmlSelector = document.getElementById("sprite" + i);
            const img = `<img src="${sprites.front_shiny}" alt="">`;
            htmlSelector.innerHTML = img;

            /*ADDING THE NAME OF POKEMON TO THE DOCUMENT*/ 
            const htmlName = document.getElementById('h5' + i);
            const pokemonName = data.name;
            const uppercaseName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
            htmlName.innerHTML = uppercaseName;

            /*ADDING THE TYPE OF POKEMON TO DOCUMENT*/
            const htmlType = document.getElementById('p' + i);
            const typesArray = data.types;
            // checking for single or multiple types 
            if (typesArray.length === 1 ) {
                htmlType.innerHTML = `${uppercaseName}'s type is: ${typesArray[0].type.name}`
            } else {
                htmlType.innerHTML = `${uppercaseName}'s types are: ${typesArray[1].type.name} and ${typesArray[0].type.name}`
            }

            /* CHANGING BACKGROUND BASED ON TYPE */
            // gets the last value of the type array 
            let typeIndex = typesArray.length -1;
            // sets the last index of the type array to "main type"
            const mainType = typesArray[`${typeIndex}`].type.name;
            // getting the div.card as a constant to affect its styles 
            const card = document.getElementById(i);
            if (mainType == 'normal') {
                card.style.backgroundColor = 'rgba(150, 161, 101, 0.8)';
            } else if (mainType == 'fighting') {
                card.style.backgroundColor = 'rgba(214, 21, 21, 0.692)';
            } else if (mainType == 'flying') {
                card.style.backgroundColor = 'rgba(142, 75, 230, 0.815)';
            } else if (mainType == 'poison') {
                card.style.backgroundColor = 'rgba(119, 32, 122, 0.829)';
            } else if (mainType == 'ground') {
                card.style.backgroundColor = 'rgba(146, 145, 72, 0.829)';
            } else if (mainType == 'rock') {
                card.style.backgroundColor = 'rgba(88, 72, 37, 0.938)';
            } else if (mainType == 'bug') {
                card.style.backgroundColor = 'rgba(116, 151, 58, 0.938)';
            } else if (mainType == 'ghost') {
                card.style.backgroundColor = 'rgba(88, 19, 153, 0.671)';
            } else if (mainType == 'steel') {
                card.style.backgroundColor = 'rgba(117, 111, 111, 0.932)';
            } else if (mainType == 'fire') {
                card.style.backgroundColor = 'rgba(179, 99, 8, 0.932)';
            } else if (mainType == 'water') {
                card.style.backgroundColor = 'rgba(36, 70, 180, 0.849)';
            } else if (mainType == 'grass') {
                card.style.backgroundColor = 'rgba(40, 180, 12, 0.849)';
            } else if (mainType == 'electric') {
                card.style.backgroundColor = 'rgba(251, 255, 24, 0.938)';
            } else if (mainType == 'psychic') {
                card.style.backgroundColor = 'rgba(247, 45, 163, 0.856)';
            } else if (mainType == 'ice') {
                card.style.backgroundColor = 'rgba(45, 234, 247, 0.801)';
            } else if (mainType == 'dragon') {
                card.style.backgroundColor = 'rgba(59, 6, 145, 0.75)';
            } else if (mainType == 'dark') {
                card.style.backgroundColor = 'rgba(85, 57, 5, 0.959)';
            } else if (mainType == 'fairy') {
                card.style.backgroundColor = 'rgba(214, 70, 183, 0.877)';
            } 

            /*ORGANIZING THE POKEMON BY NUMBER */
            
        }
    );
    }

    /*
need to reorder the cards by pokemon number
need to fix some styles, just looking better
add multiple cards on one line  
*/