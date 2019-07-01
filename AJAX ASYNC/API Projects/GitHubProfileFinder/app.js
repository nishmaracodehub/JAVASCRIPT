//instantiate the class gitHub
const gitHub = new GitHub();

//search user
const searchUser = document.getElementById("searchUser");

//Search input Event Listener

searchUser.addEventListener('keyup', (e)=>{
    const inputText = e.target.value;

    if(inputText !== ''){
        //make http call
        gitHub.getUser(inputText)
            .then(user => console.log(user))
            .catch(err => console.log(err));
    }
})
