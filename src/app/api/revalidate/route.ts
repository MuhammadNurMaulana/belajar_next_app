import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  //   menggunakan secret keys untuk perlindungan revalidate
  const secret = request.nextUrl.searchParams.get("secret");

  if (!tag) {
    return NextResponse.json({ status: 400, message: "params tag not found" }, { status: 400 });
  }

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ status: 401, message: "unauthorized" }, { status: 401 });
  }

  revalidateTag(tag);

  return NextResponse.json({ status: 200, now: Date.now() });
}
