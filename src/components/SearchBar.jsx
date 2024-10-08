"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const [search, setSearch] = useState("");
    const router = useRouter();
    function handleSubmit (e) {
        e.preventDefault();
        if (!search) return;
        router.push(`/search/${search}`);
    }
    return (
        <form 
            onSubmit={handleSubmit}
            className="flex max-w-6xl mx-auto justify-between items-center px-5 flex-1">
        <input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text" placeholder="Search sth.." className=" w-full h-14 rounded-sm placeholder-gray-500 outline-none p-2 bg-transparent" />
        <button 
            disabled={!search}
            type="submit"
            className="text-green-600 disabled:text-gray-400">
            Search
        </button>
        </form>
  )
}
