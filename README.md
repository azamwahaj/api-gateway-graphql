## API Gateway using GraphQL

#### Note:
- Run User and Reward Service first then access them using API Gateway
- [User API](https://github.com/azamwahaj/user-api)
- [Reward API](https://github.com/azamwahaj/reward-api)
- Edit `index.js` to chane host for User and Reward API

### Installation 
```
npm install
```

```
npm start
```

#### Get Single User with Rewards Consumption  
```
Endpoint: http://localhost:4000/

Query:
{
  getUser(id: 1) {
    success
    data {
      id
      name
      email
      phone
      country
      created_at
      updated_at
      rewards {
        id
        name
        amount
        expiry_date
        created_at
        updated_at
      }
    }
  }
}
```

#### Get Single Reward with Users assigned to it

```
Endpoint: http://localhost:4000/

Query:
{
  getReward(id: 3) {
    success
    data {
      id
      name
      amount
      expiry_date
      created_at
      updated_at
      users {
        id
        name
        email
        phone
        country
        created_at
        updated_at
      }
    }
  }
}
```