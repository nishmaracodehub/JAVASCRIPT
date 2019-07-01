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

     get(url){
         return new Promise((resolve,reject)=>{
            fetch(url)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err))
         })
     }

     post(url,data){
         return new Promise((resolve,reject)=>{
             fetch(url, {
                 method : 'POST',
                 headers : {
                     'Content-type' : 'application/json',
                 },
                 body : JSON.stringify(data)
             })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
         })
    }

    put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method : 'PUT',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
    }

    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
                .then(res => res.json())
                .then(()=> resolve('User Deleted'))
                .catch(err => reject(err))
        })
    }
 }