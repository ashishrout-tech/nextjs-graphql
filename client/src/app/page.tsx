"use client"

import { gql, useQuery } from "@apollo/client";

type Ttodo = {
  id: string,
  title: string,
  completed: boolean,
}

const Query = gql `
query Query {
  getTodos {
    id
    title
    completed
  }
}

`;

const LandingPage = () => {
  const {data, error, loading} = useQuery(Query);

  if(loading) return <h1>loading...</h1>
  if(error){
    console.dir(error);
    return;
  }

  console.dir(data.getTodos)
  return <div>
    <table>
      <tbody>
        {
          data.getTodos.map((todo: Ttodo) => <tr key={todo.id}>
            <td>{todo.title}</td>
            <td>{todo.completed ? "true": "false"}</td>
          </tr>)
        }
      </tbody>
    </table>
  </div>
}

export default LandingPage;
