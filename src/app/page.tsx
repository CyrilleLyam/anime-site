import AnimeList from "@/components/AnimeList";
import { Anime } from "@/types/anime";

async function fetchAnime(page = 1) {
  const res = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch anime");
  return res.json();
}

export default async function Home() {
  const json = await fetchAnime(1);
  const data: Anime[] = json.data ?? [];
  const pagination = json.pagination ?? {};

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-5xl p-6">
        <section>
          <AnimeList
            initialData={data}
            initialPage={1}
            lastPage={pagination.last_visible_page ?? 1}
          />
        </section>
      </main>
    </div>
  );
}
