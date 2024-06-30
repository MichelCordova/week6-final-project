const User = require("../../models/User")

const user = async () =>{
    const body = {
        firstName: "Samantha",
        lastName: "Perez",
        email: "sperez@mail.com",
        password: "samantha1234",
        phone: "5534263585"
    }

    await User.create(body)
}

module.exports = user