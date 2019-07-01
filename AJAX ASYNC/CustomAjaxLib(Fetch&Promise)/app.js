const http = new EasyHTTP();

//Get users

// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(users => console.log(users))
//     .catch(err => console.log(err))

//User Data
const data = {
    name : 'Nishanth',
    username : 'nmaraboina',
    email : 'nishanth@loyalytics.in'
}

//Post user request
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(user => console.log(user))
//     .catch(err => console.log(err))

//Update User request
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//     .then(user => console.log(user))
//     .catch(err => console.log(err))

//Delete User request
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err))
