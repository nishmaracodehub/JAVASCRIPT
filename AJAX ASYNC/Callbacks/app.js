const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post Two', body: 'This is post two'}
];

//Synchronous Callbacks
// function createPost(post){
//   setTimeout(()=>{
//     posts.push(post);
//   }, 2000);
// }

// function getPosts(){
//   setTimeout(()=>{
//     let output = '';
//     posts.forEach((post)=>{
//       output += `<li>${post.title}</li>`
//     })
//     document.body.innerHTML = output;
//   },1000);
// }

// createPost({title: 'Post Three', body: 'This is post three'});
// getPosts()

//Asynchronous Callbacks
function createPost(post, callback) {
  setTimeout(function() {
    posts.push(post);
    callback();
  }, 2000);
}


function getPosts() {
  setTimeout(function() {
    let output = '';
    posts.forEach(function(post){
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
createPost({title: 'Post Four', body: 'This is post four'}, getPosts);