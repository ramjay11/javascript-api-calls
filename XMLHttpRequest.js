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