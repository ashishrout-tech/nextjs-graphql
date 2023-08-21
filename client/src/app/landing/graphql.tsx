"use client";

import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Suspense } from "react";

type Ttodo = {
  id: string;
  title?: string;
  completed?: boolean;
};

const Graphql = ({ data, params }: any) => {
  //   const router = useRouter();

  //   const pathname = usePathname();
  //   const searchParams = useSearchParams();

  //   console.dir(router);
  //   console.dir(pathname);
  //   console.dir(params);
  //   console.dir(searchParams);

  console.log("graphql");

  return (
    <div>
      <table>
        <tbody>
          {data.getTodos.map((todo: Ttodo) => (
            <Suspense fallback={<p>Loading each</p>} key={todo.id}>
              <tr key={todo.id}>
                <td>{todo?.title}</td>
                <td>{todo?.completed ? "true" : "false"}</td>
              </tr>
            </Suspense>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Graphql;
