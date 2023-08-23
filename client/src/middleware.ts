import userInfo from "./lib/userInfo";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const { log } = userInfo();
  if (req.nextUrl.pathname === "/dummy") {
    console.log(req.nextUrl.pathname);
    console.log(new URL(req.url))
    const newUrl = new URL("/myhome", req.url);
    console.log(newUrl)
    console.log(newUrl);
  }

  // if(!log){
  //     return NextResponse.redirect(new URL("/dummy"))
  // }
};
