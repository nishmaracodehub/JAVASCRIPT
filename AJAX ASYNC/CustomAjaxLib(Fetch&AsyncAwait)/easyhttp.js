/**
 * Easy HTTP Library
 * Library for making HTTP Requests
 * 
 * @version 2.0.0
 * @author Nishanth Maraboina
 * @license MIT
 */

 class EasyHTTP {
     //make a HTTP GET Request

    async get(url){
         //await response from the fetch call
        const promise = await fetch(url);
        //only proceed once the 1st promise is resolved
        const res = await promise.json();
        //only proceed after the 2nd promise is resolved
        return res;
         
     }

     async post(url,data){
        //await response from the fetch call
        const promise = await fetch(url, {
                 method : 'POST',
                 headers : {
                     'Content-type' : 'application/json',
                 },
                 body : JSON.stringify(data)
             })
        //only proceed once the 1st promise is resolved
        const res = await promise.json();
        //only proceed after the 2nd promise is resolved
        return res;
         
    }

    async put(url,data){
        //await response from the fetch call
        const promise = await fetch(url,{
                method : 'PUT',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
        //only proceed once the 1st promise is resolved
        const res = await promise.json();
        //only proceed after the 2nd promise is resolved
        return res;
            
    }

    async delete(url){
        //await response from the fetch call
        await fetch(url)
        //only proceed once the 1st promise is resolved
        const res = await 'Post Deleted';
        //only proceed after the 2nd promise is resolved
        return res;
        
    }
 }