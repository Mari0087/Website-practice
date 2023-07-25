fetch('Film.json')
    .then((response) => response.json())
    .then((json) => json.forEach(element => {
        console.log(element)
        // console.log(element.Title,)
    }));