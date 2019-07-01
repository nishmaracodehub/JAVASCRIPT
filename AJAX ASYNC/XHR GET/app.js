document.getElementById("button").addEventListener('click', loadData);

function loadData(){
  //creare a xhr object
  const xhr = new XMLHttpRequest();

  //OPEN request

  xhr.open('GET', 'data.txt', true);

  xhr.onload = function (){
    //check the status
    if(this.status === 200) {
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  xhr.onerror = function (){
    console.log('Request Error')
  }
  xhr.send();
}

//readystate values

// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

//HTTP status
// 200 : Status Ok
// 403 : Request Forbidden
// 404 : Not Found