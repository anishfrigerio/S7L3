axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        console.log(response);
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log(0);
    });


axios.get('https://jsonplaceholder.typicode.com/users/1').then(function (response) {
    console.log(response);
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
}).then(function () {
    console.log(0);
});

axios.post('https://jsonplaceholder.typicode.com/users/', { name: 'anish', email: 'af@gmail.com', surname: 'frigerio' }).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.log(error);
});

axios.put('https://jsonplaceholder.typicode.com/users/1', {name: 'Lee Jones'}).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});

axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(function (response) {
        console.log(response);
        console.log(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(function () {
        console.log(0);
    });

axios.delete('https://jsonplaceholder.typicode.com/users/1', {data: {name:1}}).then(function (response) {
    console.log(response.data);
})
.catch(function (error) {
    console.log(error);
})
.then(function () {
    console.log(5);
});
