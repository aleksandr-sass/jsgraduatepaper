fetch('https://jsbymda-default-rtdb.firebaseio.com/orders.json')
.then(response => {
    return response.json();
})
.then(response => {    
     for (const [key, value] of Object.entries(response)) {
        if (key > Date.now() - 16 * 3600000) {
            console.log(`${value.tel}`);
        }        
     }
});

// fetch('https://jsbymda-default-rtdb.firebaseio.com/orders.json')
// .then(response => {
//     return response.json();
// })
// .then(response => {
//     console.log(response);
//     console.log(response.length);
// });


// fetch('https://jsbymda-default-rtdb.firebaseio.com/orders.json')
// .then(response => {
//     return response.json();
// })
// .then(response => {    
//      console.log(Object.keys(response).filter(el => el > Date.now() - 16 * 3600000));
// });