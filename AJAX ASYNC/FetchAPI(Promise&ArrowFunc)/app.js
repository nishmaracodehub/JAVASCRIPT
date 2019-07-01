//Adding EventListeners for the buttons

document.getElementById('button1').addEventListener('click',getText)

document.getElementById('button2').addEventListener('click',getJson)

document.getElementById('button3').addEventListener('click',getExternal)

//fetch data from text file

function getText(e){
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      console.log(data);
      document.getElementById('output').innerHTML = data
    })
    .catch(err => err)
}

//fetch data from Json file

function getJson(){
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(post => {
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => err)
}

//fetch data from external api

function getExternal(){
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let output = '';
      data.forEach(user => {
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => err)
}