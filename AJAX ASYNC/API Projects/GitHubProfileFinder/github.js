class GitHub {
    constructor(){
        this.client_id = '98d98ccc0ceba35b4b67';
        this.client_secret = 'fcb71ec938ceb930bf7684d7b47f8cc9c4decd58'
    }

    async getUser(user){
        const profResponse = await fetch(`https://api.github.com/users/${user}`,{
            qs : {
                clientId : this.client_id,
                clientSecret : this.client_secret
            }
        });

        const response = await profResponse.json();
        return {
            response
            //or you can just write profile
        }


    }
}