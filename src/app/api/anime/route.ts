import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const page = Number(url.searchParams.get("page") ?? 1);

  const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`);
  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed fetching upstream" },
      { status: res.status }
    );
  }
  const data = await res.json();
  return NextResponse.json(data);
}
