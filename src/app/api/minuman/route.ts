import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const data = [
    {
      id: 1,
      name: "Es Teh",
      price: 4000,
    },
  ];
  return NextResponse.json({ status: 200, message: "success", data });
}
