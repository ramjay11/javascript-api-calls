// It is a browser built-in object
const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
    console.log(request);
    if (request.status == 200) {
        console.log(JSON.parse(request.response));
    } else {
        //console.log(request)
        console.log(`error ${request.status}`)
    }
}

// Fetch API. Disadvantage of Fetch API is error handling
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        //console.log(response);
        return response.json();
    }).then(json => {
        console.log(json);
    })

// Second approach
async function getUsers() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    return data;
}

getUsers().then(response => {
    console.log(response)
})

// Axios - third-party javascript library. Promise-based http client
axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        console.log(response.data);
    }, err => {
        console.log(err)
    })

// JQuery
$(document).ready(function() {
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/users',
        type:'GET',
        success:function(result) {
            console.log(result)
        }, 
        error:function() {
            console.log(err);
        }
    })
})