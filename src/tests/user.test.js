const request = require('supertest')
const app = require('../app')

const BASE_URL = '/api/v1/users'
let TOKEN

beforeAll(async () => {
    const body = {
        email: "sperez@mail.com",
        password: "samantha1234",
    }

    const res = await request(app)
     .post(`${BASE_URL}/login`)
     .send(body)
    
    // console.log(res.body.token);

    TOKEN = res.body.token
})

test("POST -> 'BASE_URL', should return statusCode 201, and res.body.firstName === user.firstName", async()=>{

    const user = {
            firstName: "Michel",
            lastName: "Cordova",
            email: "mcordova@mail.com",
            password: "michel1234",
            phone: "5631063434"
    }

    const res = await request(app)
     .post(BASE_URL)
     .send(user)


    expect(res.statusCode).toBe(201)
    expect(res.body).toBeDefined()
    expect(res.body.firstName).toBe(user.firstName)
})

test("GET -> 'BASE_URL', should return statusCode 200, and res.body.length === 2", async () => {
    const res = await request(app)
      .get(BASE_URL)
      .set('Authorization', `Bearer ${TOKEN}`)
    // console.log(res.body);s
    expect(res.status).toBe(200)
  
  })