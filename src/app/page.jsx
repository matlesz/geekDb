import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  let endpoint;

  if (genre === "fetchTopRated") {
    endpoint = "movie/top_rated";
  } else if (genre === "fetchNowPlaying") {
    endpoint = "movie/now_playing";
  } else {
    endpoint = "trending/all/week";
  }

  const res = await fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}&language=en-US&page=1`, {
    next: { revalidate: 10000 }
  });

  if (!res.ok) {
    throw new Error("Failed to load the data");
  }

  const data = await res.json();
  const results = data.results;

  return <div><Results results={results} /></div>;
}