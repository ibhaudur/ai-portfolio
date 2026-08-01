import connectMangoDB from "@/lib/mangodb";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  await connectMangoDB();
  return NextResponse.json(
    { message: "Welcome to ibhaudur's portfolio!" },
    { status: 200 }
  );
};
