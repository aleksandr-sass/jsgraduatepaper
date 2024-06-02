const tel = document.querySelector('.tel');
const btn = document.querySelector('.btn');


const handler = (e) => {
    e.preventDefault();
    const order = {};
    const time = new Date();

    id = time.getTime();
    order.tel = tel.value;

    const firebase = new Firebase(`https://jsbymda-default-rtdb.firebaseio.com/orders/${id}`);
    firebase.update(order);
    console.log(order);
}

btn.addEventListener('click', handler);



//firebase.update(order);