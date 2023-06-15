// const express = require('express');

// // const { faker } = require('@faker-js/faker');
// const faker = require('faker');


// const app = express();
// const port = 3000;

// const createUser = () => {
//     const newUser = {
//         password: faker.internet.password(),
//         email: faker.internet.email(),
//         phoneNumber: faker.phone.phoneNumber(),
//         lastName: faker.name.lastName(),
//         firstName: faker.name.firstName(),
//         _id: faker.datatype.uuid()
//     };
//     return newUser;
// };


// const createCompany = () => {
//     const newCompany = {
//         _id: faker.datatype.uuid(),
//         name: faker.company.companyName(),
//         address: {
//             street: faker.address.streetName(),
//             city: faker.address.city(),
//             state: faker.address.state(),
//             zipCode: faker.address.zipCode(),
//             country: faker.address.country()
//         }
//     };
//     return newCompany;
// };

// app.get('/api/users/new', (req, res) => {
//     const newUser = createUser();
//     res.json('hello')
// });

// app.get('/api/companies/new', (req, res) => {
//     const newCompany = createCompany()
//     res.json(newCompany)
// });

// app.get('api/users/company', (req, res) => {
//     const newUser = createUser()
//     const newCompany = createCompany()
//     const data = { user: newUser, company: newCompany }
//     res.json(data)
// })

// app.listen(port, () => {
//     console.log(`server is running ${port}`)
// })
// // make sure these lines are above any app.get or app.post code blocks
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const express = require('express');
const faker = require('faker');
const cors = require('cors');

const app = express();
const port = 8000;

const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid()
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
    }
  };
  return newCompany;
};

app.get('/', (req, res) => {
    res.send('Welcome to the API!');
  });
  
app.get('/api/users/new', (req, res) => {
  const newUser = createUser();
  res.json(newUser);
});

app.get('/api/companies/new', (req, res) => {
  const newCompany = createCompany();
  res.json(newCompany);
});

app.get('/api/users/company', (req, res) => {
  const newUser = createUser();
  const newCompany = createCompany();
  const data = { user: newUser, company: newCompany };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
