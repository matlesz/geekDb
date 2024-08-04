import Results from "@/components/Results";
import { Suspense } from 'react';

export default async function SearchPage({params}) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchTerm}&language=en-US&page=1&include_adult=false`);
    
    if (!res.ok || res.status === 404) {
        throw new Error("Failed to load the data");
    }

    const data = await res.json();

    const results = data.results;
    return (
    <Suspense fallback={<div>Loading...</div>}>
        <div>
            {results && results.length === 0 &&
            <h1 className="text-center pt-6">No results find</h1>}
            {results && <Results results={results}/>}
        </div>
    </Suspense>
  )
}
