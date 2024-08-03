"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function NavFieldItem({ title, param }) {
    const searchParams = useSearchParams();
    const genre = searchParams.get("genre");
    return (
    <div>
        <Link 
        className={`m-5 hover:text-green-600 font-semibold p-2
            ${
                genre && genre === param && "underline underline-offset-8 decoration-4 decoration-green-600 rounded-lg"
            }`}
        href={`/?genre=${param}`}>
            {title}
        </Link>
    </div>
  )
}
