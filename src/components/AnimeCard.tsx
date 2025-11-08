"use client";
import { Anime } from "@/types/anime";
import Image from "next/image";
import { useState } from "react";

export default function AnimeCard({ anime }: { anime: Anime }) {
  const [expanded, setExpanded] = useState(false);
  const poster = anime.images?.jpg?.image_url;

  const shortSynopsis =
    anime.synopsis && anime.synopsis.length > 220
      ? anime.synopsis.slice(0, 220).trim() + "…"
      : anime.synopsis ?? "No synopsis available.";

  return (
    <article
      className="flex flex-col overflow-hidden rounded-lg border shadow-sm"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        borderColor: "rgba(0,0,0,0.1)",
      }}
    >
      <a
        href={anime.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <div
          className="relative h-56 w-full shrink-0"
          style={{ backgroundColor: "rgba(203,213,225,0.3)" }}
        >
          <Image
            src={poster}
            alt={anime.title}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </a>

      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <a
              href={anime.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <h3 className="text-lg font-semibold leading-tight hover:underline">
                {anime.title}
              </h3>
            </a>
            <div
              style={{ color: "rgba(55,65,81,0.7)" }}
              className="mt-1 text-sm"
            >
              {anime.type} • {anime.episodes ?? "?"} eps • {anime.year ?? "—"}
            </div>
          </div>

          <div className="ml-3 flex shrink-0 flex-col items-end">
            <div
              className="rounded-md px-2 py-1 text-xs font-medium"
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
              }}
            >
              {anime.score ? anime.score.toFixed(2) : "—"}
            </div>
            <a
              href={anime.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "rgba(55,65,81,0.7)" }}
              className="mt-2 text-xs hover:underline"
            >
              View
            </a>
          </div>
        </div>

        <p
          className="mt-3 text-sm leading-relaxed"
          style={{ color: "rgba(55,65,81,0.8)" }}
        >
          {expanded ? anime.synopsis : shortSynopsis}
        </p>

        {anime.synopsis && anime.synopsis.length > 220 && (
          <button
            onClick={() => setExpanded((s) => !s)}
            style={{ color: "rgb(79,70,229)" }}
            className="mt-3 text-sm font-medium hover:underline"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {(anime.genres ?? []).slice(0, 3).map((g) => (
            <span
              key={g.mal_id}
              className="rounded-full px-2 py-0.5 text-xs"
              style={{
                backgroundColor: "rgba(203,213,225,0.3)",
                color: "rgba(55,65,81,0.8)",
              }}
            >
              {g.name}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
