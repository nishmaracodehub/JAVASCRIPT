//library function
function easyHTTP(){
  this.http = new XMLHttpRequest();
}

//make a GET http request

easyHTTP.prototype.get = function(url){
  this.http.open('GET',url,true);

  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      console.log(self.http.responseText) // but if you want to do return you have to add async callback see below
    }
  }

  this.http.send();
}

//make a GET http request using async callback

easyHTTP.prototype.get = function(url,callback){
  this.http.open('GET',url,true)

  let self = this;

  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, self.http.responseText)
    }else{
      callback("Error: " + self.http.status)
    }
  }

  this.http.send()
}

//make a POST http request

easyHTTP.prototype.post = function(url, data, callback){
  this.http.open('POST',url,true)
  this.http.setRequestHeader('Content-Type', 'application/json');

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText)
  }

  this.http.send(JSON.stringify(data))
}

//make a PUT request 

easyHTTP.prototype.put = function(url,data,callback){
  this.http.open('PUT',url,true)

  this.http.setRequestHeader('Content-Type', 'application/json')

  let self = this;
  this.http.onload = function(){
    callback(null, self.http.responseText)
  };

  this.http.send(JSON.stringify(data));
}

//make a DELETE request

easyHTTP.prototype.delete = function (url,callback){
  this.http.open('DELETE',url,true)
  let self = this;

  this.http.onload = function(){
    if(self.http.status === 200){
      callback(null, 'Post deleted')
    }else{
      callback('Error: ' + self.http.status)
    }
  }

  this.http.send();
}