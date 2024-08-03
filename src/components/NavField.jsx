import NavFieldItem from "./NavFieldItem";

export default function NavField() {
  return (
    <div className="flex justify-center dark:bg-gray-700 bg-gray-300 lg:text-lg p-5">
        <NavFieldItem title="Trending" param="fetchTrending" />
        <NavFieldItem title="Top Rated" param="fetchTopRated" /> 
    </div>
  )
}
