const useFetch = (url, selector) => {
    fetch(url)
    // converting our response into json
    .then( response => response.json)
    // process the response 
    // 2. iterate through the data 
    .then(
        // log the data
        data => {
            console.log(data);
        }
    )
}

// first quotes are the api, second is where it is being appended to 
useFetch('', '#fetch');