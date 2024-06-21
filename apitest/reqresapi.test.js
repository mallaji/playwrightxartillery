const{test, expect}= require('@playwright/test')
const { request } = require('http')

var userid

test("GET: Users List", async({request})=>{
    const reponse= await request.get('https://reqres.in/api/users?page=2')
    console.log(await reponse.json())
    expect(reponse.status()).toBe(200)
})

test("POST: Create user", async({request})=>{
    const response= await request.post('https://reqres.in/api/users',{
        data:{
            "name":"Milan",
            "job": "QA"
        },
        headers:{
            "Accept":"application/json"
        }
       })
    console.log(await response.json())
    expect(response.status()).toBe(201)
    var res=await response.json()
    userid=res.id
})

test("PUT: Update user", async ({request})=>{
    const response= await request.put('https://reqres.in/api/users/'+userid,{
        data:{
            "name":"Milan",
            "job": "Software QA Engineer"
        },
        headers:{
            "Accept":"application/json"
        }
       })
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test("DELETE: Delete User", async({request})=>{
    const response= await request.delete('https://reqres.in/api/users/'+userid)
    expect(response.status()).toBe(204)
})

