import { useState, useMemo } from "react";

const users = [
  "Kapil",
  "Amit",
  "Rahul",
  "Ankit",
  "Rohit",
  "Kunal",
  "Neha",
  "Priya",
];

function SearchFilter() {
  const [query, setQuery] = useState("");

  const filteredUsers = useMemo(() => {
     if (!query.trim()) return [];
    return users.filter(user =>
      user.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <ul>
        {filteredUsers.length ? (
          filteredUsers.map((user, index) => (
            <li key={index}>{user}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;
