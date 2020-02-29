const { GraphQLServer } = require("graphql-yoga");
const fetch = require("node-fetch");

const typeDefs = `
  type Query {
    getUserWeb(id: Int!): User
    getUserMobile(id: Int!): User
    getRewardWeb(id: Int!): Reward
    getRewardMobile(id: Int!): Reward
  }
  
  type UserRewards {
    id: Int
    name: String
    amount: String
    expiry_date: String
    created_at: String
    updated_at: String
  }
  
  type UserData {
    id: Int
    name: String
    email: String
    phone: String
    country: String
    created_at: String
    updated_at: String
    rewards: [UserRewards]
  }
  
  type User {
    success: Boolean
    data: UserData
  }

  type RewardUsers {
    id: Int
    name: String
    email: String
    phone: String
    country: String
    created_at: String
    updated_at: String
  }
  
  type RewardData {
    id: Int
    name: String
    amount: String
    expiry_date: String
    created_at: String
    updated_at: String
    users: [RewardUsers]
  }
  
  type Reward {
    success: Boolean
    data: RewardData
  }
`;

const resolvers = {
  Query: {
    // get single user call from web
    getUserWeb: async (_, { id }) => {
      const response = await fetch(`http://192.168.99.101:8081/api/v1/user/${id}/`);
      return response.json();
    },
    // get single user call from mobile
    getUserMobile: async (_, { id }) => {
      const response = await fetch(`http://192.168.99.101:8081/api/v1/user/${id}/`);
      return response.json();
    },
    // get single reward call from web
    getRewardWeb: async (_, { id }) => {
      const response = await fetch(`http://192.168.99.101:8082/api/v1/reward/${id}/`);
      return response.json();
    },
    // get single reward call from mobile
    getRewardMobile: async (_, { id }) => {
      const response = await fetch(`http://192.168.99.101:8082/api/v1/reward/${id}/`);
      return response.json();
    }
  }
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log("Server is running on localhost:4000"));
