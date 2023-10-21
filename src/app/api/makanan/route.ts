import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    name: "Ayam Bakar",
    price: 20000,
  },
  {
    id: 2,
    name: "Sate Ayam",
    price: 25000,
  },
  {
    id: 3,
    name: "Sop Kambing",
    price: 30000,
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const product = data.find((item) => item.id === Number(id));
    if (product) {
      return NextResponse.json({ status: 200, message: "fetching success", data: product });
    }

    return NextResponse.json({ status: 400, message: "fetching failed", data: [] });
  }

  return NextResponse.json({ status: 200, message: "fetching success", data });
}
