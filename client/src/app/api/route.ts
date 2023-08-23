import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    // req.nextUrl.searchParams.get("q")
    const new_url = new URL(req.url)
    console.log(req.url)
    console.log(req.nextUrl)
    req.nextUrl.hash="sdf";
    console.log(req.nextUrl)
    console.log(new_url)
    // console.log(req.json())
    return NextResponse.json({ message: "Hi" }, { status: 202, statusText: "ALL OK" });
}
