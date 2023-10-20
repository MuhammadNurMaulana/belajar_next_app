import { NextRequest, NextResponse } from "next/server";

type Data = {
  id: number;
  name: string;
  price: number;
}[];

const data: Data = [
  {
    id: 1,
    name: "Sepatu lama",
    price: 100000,
  },
  {
    id: 2,
    name: "Sepatu kedua",
    price: 200000,
  },
  {
    id: 3,
    name: "Sepatu ketiga",
    price: 300000,
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const product = data.find((item) => item.id === Number(id));
    if (product) {
      return NextResponse.json({ status: 200, message: "seccess", data: product });
    }

    return NextResponse.json({ status: 404, message: "data api not found", data: {} });
  }

  return NextResponse.json({ status: 200, message: "success", data });
}
