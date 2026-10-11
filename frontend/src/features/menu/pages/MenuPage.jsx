import MenuList from "../components/MenuList";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { useFetch } from "../hooks/useFetch";

function MenuPage() {
    const { data: dishes, isLoading, error } = useFetch("/api/menu");
    const [query, setQuery] = useState("");
    const debounced = useDebounce(query, 400);
    const filtered = (dishes || []).filter((d) =>
        d.name.toLowerCase().includes(debounced.toLowerCase())
    );

    if (isLoading) return <p>Loading menu…</p>;
    if (error) return <p>Could not load menu: {error}</p>;

    return (
        <div>
            <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dishes..."
            />
            <MenuList dishes={filtered} />
        </div>
    );
}

export default MenuPage;
