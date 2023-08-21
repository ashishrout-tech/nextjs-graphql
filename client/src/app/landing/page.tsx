import client from "@/lib/apollo-client";
import Graphql from "./graphql";
import { gql } from "@apollo/client";
import Component1 from "./component-1";
import Component2 from "./component-2";
import { Suspense } from "react";

const LandingPage = (params: unknown) => {
  // await new Promise((resolve) => setTimeout(resolve, 1000));

  // const { data } = await client.query({
  //   query: gql`
  //     query Query {
  //       getTodos {
  //         id
  //         title
  //         completed
  //       }
  //     }
  //   `,
  // });

  return (
    <div>
      <Suspense fallback={<p>Loading outside</p>}>
        <Component1 />
      </Suspense>
      <Suspense fallback={<p>Loading outside</p>}>
        <Component2 />
      </Suspense>
      hihihihhih
      {/* <Graphql data={data} params={params} /> */}
    </div>
  );
};

export default LandingPage;
