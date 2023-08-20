import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import axios from "axios";

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs: `
            type User {
                id: ID!
                name: String!
                username: String!
                email: String!
                phone: String!
                website: String!
            }

            type Todo {
                id: ID!
                title: String!
                completed: Boolean
                user: User
            }

            type Query {
                getTodos: [Todo]
                getAllUsers: [User]
                getUser(id: ID!): User
            }
        `,
        resolvers: {
            Todo: {
                user: async (todo) => {
                    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${todo.id}`)
                    return response.data
                }
            },
            Query: {
                getTodos: async () => {
                    // can do database operations to fetch data, it should be of type as mentioned above
                    const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
                    return response.data
                },
                getAllUsers: async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                    return response.data
                },
                getUser: async (parent, {id}) => {
                    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
                    return response.data
                }
            },
        }
    });

    app.use(express.json());
    app.use(cors());

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    app.listen(8000, () => {
        console.log("server started at port 8000");
    })
}

startServer();
