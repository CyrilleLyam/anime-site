"use client";
import { useState } from "react";
import AnimeCard from "./AnimeCard";
import type { Anime } from "@/types/anime";

export default function AnimeList({
  initialData,
  initialPage = 1,
  lastPage = 1,
}: {
  initialData: Anime[];
  initialPage?: number;
  lastPage?: number;
}) {
  const [items, setItems] = useState<Anime[]>(initialData ?? []);
  const [page, setPage] = useState<number>(initialPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(page < lastPage);

  async function loadMore() {
    if (loading || !hasMore) return;
    const next = page + 1;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/anime?page=${next}`);
      if (!res.ok) throw new Error(`Failed to fetch page ${next}`);
      const json = await res.json();
      const newItems: Anime[] = json.data ?? [];
      setItems((prev) => [...prev, ...newItems]);
      setPage(next);
      setHasMore(next < (json.pagination?.last_visible_page ?? lastPage));
    } catch (e: any) {
      setError(e?.message ?? "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>

      <div className="mt-6 flex flex-col items-center gap-3">
        {error && (
          <div style={{ color: "rgb(220,38,38)" }} className="text-sm">
            {error}
          </div>
        )}

        <button
          onClick={loadMore}
          disabled={loading || !hasMore}
          style={{
            backgroundColor: "var(--foreground)",
            color: "var(--background)",
            opacity: loading || !hasMore ? 0.5 : 1,
          }}
          className="rounded-full px-5 py-2"
        >
          {loading ? "Loading…" : hasMore ? "Load more" : "No more results"}
        </button>
      </div>
    </div>
  );
}
