import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export function GET() {
    return Response.json({
        "name":"biswajit",
        "email":"biswa@gmail.com",
        "state":"westbengal",
        "houseNumber":"411"
    })
}
const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });
  console.log(user.id);

  return NextResponse.json({ message: "User signup" });
}
