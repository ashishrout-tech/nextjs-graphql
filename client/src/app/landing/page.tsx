"use client"

import { gql, useQuery } from "@apollo/client";
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation";

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


const LandingPage = (props: unknown) => {
  const {data, error, loading} = useQuery(Query);
  const router = useRouter();

  const pathname = usePathname();
  const searchParams = useSearchParams();

  console.dir(router);
  console.dir(pathname);
  console.dir(props);
  console.dir(searchParams);

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
