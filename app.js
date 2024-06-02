fetch('https://jsbymda-default-rtdb.firebaseio.com/db.json')
.then(response => {
    return response.json();
})
.then(response => {
    console.log(response);
    console.log(response.length);
});