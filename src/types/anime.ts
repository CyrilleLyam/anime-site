export type Anime = {
  mal_id: number;
  title: string;
  title_english?: string | null;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp?: Record<string, string>;
  };
  score?: number | null;
  episodes?: number | null;
  synopsis?: string | null;
  genres?: { mal_id: number; name: string }[];
  year?: number | null;
  type?: string | null;
  url?: string;
};
