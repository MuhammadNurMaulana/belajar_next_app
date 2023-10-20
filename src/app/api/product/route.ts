import { NextRequest, NextResponse } from "next/server";

type Data = {
  id: number;
  title: string;
  price: number;
  image: string;
}[];

const data: Data = [
  {
    id: 1,
    title: "Sepatu lama",
    price: 100000,
    image: "/logo.ico",
  },
  {
    id: 2,
    title: "Sepatu kedua",
    price: 200000,
    image: "/logo.ico",
  },
  {
    id: 3,
    title: "Sepatu ketiga",
    price: 300000,
    image: "/logo.ico",
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
