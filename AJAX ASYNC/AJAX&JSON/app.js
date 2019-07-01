document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e){
  //Create xhr object
  const xhr = new XMLHttpRequest();

  //calling open method with GET request to the file customer.json
  xhr.open('GET','customer.json',true);

  //once its loaded calling a function to check the status and deal with responseText
  xhr.onload = function(){
    if(this.status === 200){
      const customer = JSON.parse(this.responseText); //JSON.parse to make it as a customer object for accessing the properties in it

      //creating a template literal for creating an unodered list of values.
      const output = `<ul><li>${customer.name}</li><li>${customer.company}</li><li>${customer.phone}</li></ul>`
      
      //passing the output to the id=customer to display the data
      document.getElementById('customer').innerHTML = output
    }
  } 
  xhr.send()
}

document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomers(e){
  //Create xhr object
  const xhr = new XMLHttpRequest();

  //calling open method with GET request to the file customers.json
  xhr.open('GET','customers.json');

  //once its loaded calling a function to check the status and deal with responseText
  xhr.onload = function(){
    if(this.status === 200){
      //JSON.parse to make it as a customers object for accessing the properties in it
      const customers = JSON.parse(this.responseText);
      //declaring an empty output for storing the result for every iteration
      let output = '';
      customers.forEach(customer => {
        //creating a template literal for creating an unodered list of values.
        output = output + `<ul><li>${customer.name}</li><li>${customer.company}</li><li>${customer.phone}</li></ul>`

        //passing the output to the id=customers to display the data
        document.getElementById('customers').innerHTML = output
      });
    }
  }

  xhr.send()
}