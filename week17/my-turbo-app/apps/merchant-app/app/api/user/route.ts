import { NextResponse } from "next/server";
import prisma from "@repo/db/client";

export const GET = async () => {
  try {
    await prisma.user.create({
      data: {
        name: "John Doe",
        email: "example@gmail.com",
        number: "9876543210",
        password: "securePassword123",
      },
    });

    return NextResponse.json({ message: "hi there" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create user", details: error },
      { status: 500 }
    );
  }
};
