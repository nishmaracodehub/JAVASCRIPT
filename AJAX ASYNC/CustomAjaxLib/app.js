const http = new easyHTTP();

//Get Posts

// http.get('https:jsonplaceholder.typicode.com/posts',function(err, posts){
//     if(err) throw err;
//     else{
//         console.log(posts)
//     }
// })

// //Get Single Post

// http.get('https://jsonplaceholder.typicode.com/posts/1',function(err, posts){
//     if(err) throw err;
//     else{
//         console.log(posts)
//     }
// })

// //POST request

// //create data for POST Request
// const data = {
//     title: 'Custome Post',
//     body: 'This is a Custome Post'
// };

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(err,post){
//     if(err) throw err;
//     else{
//         console.log(post)
//     }
// })

// //PUT request
// const data = {
//     title: 'Custom Update Post',
//     body: 'This is a Custome Post'
// };

// http.put('https://jsonplaceholder.typicode.com/posts/1',data,function(err,post){
//     if(err) throw err;
//     else{
//         console.log(post)
//     }
// })

//Delete Request

http.delete('https://jsonplaceholder.typicode.com/posts/1',function(err,response){
    if(err) throw err;
    else{
        console.log(response)
    }
})



