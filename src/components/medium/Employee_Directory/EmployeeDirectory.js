import React, { useEffect, useState } from "react";
import "./style.css";

export default function EmployeeDirectory() {
  const [employees, setEmployees] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favEmployees");
    return saved ? JSON.parse(saved) : [];
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchEmployees() {
      setLoading(true);
      setError("");
      try {
        const res = await fetch("https://dummyjson.com/users?limit=50");
        if (!res.ok) throw new Error("Failed to fetch employees");
        const data = await res.json();
        const formatted = data.users.map((u) => ({
          id: u.id,
          name: `${u.firstName} ${u.lastName}`,
          department: u.company?.department || "General",
          title: u.company?.title || "Employee",
          email: u.email,
          image: u.image,
        }));
        setEmployees(formatted);
        setFiltered(formatted);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchEmployees();
  }, []);

  // Filter and search
  useEffect(() => {
    let list = [...employees];
    if (search) {
      list = list.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (department !== "All") {
      list = list.filter((e) => e.department === department);
    }
    setFiltered(list);
  }, [search, department, employees]);

  // Favorites toggle
  const toggleFavorite = (id) => {
    let updated;
    if (favorites.includes(id)) {
      updated = favorites.filter((fid) => fid !== id);
    } else {
      updated = [...favorites, id];
    }
    setFavorites(updated);
    localStorage.setItem("favEmployees", JSON.stringify(updated));
  };

  const uniqueDepartments = ["All", ...new Set(employees.map((e) => e.department))];

  if (loading) return <p className="loading">Loading employees...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="app-container">
      <h1>👩‍💼 Employee Directory</h1>

    {/* filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={department} onChange={(e) => setDepartment(e.target.value)}>
          {uniqueDepartments.map((dep) => (
            <option key={dep} value={dep}>
              {dep}
            </option>
          ))}
        </select>
      </div>

      {favorites.length > 0 && (
        <p className="favorites">⭐ Favorites: {favorites.length}</p>
      )}

      <div className="grid">
        {filtered.map((emp) => (
          <div key={emp.id} className="card">
            <div className="card-header">
              <h3>{emp.name}</h3>
              <button
                // className={`fav-btn ${favorites.includes(emp.id) ? "active" : ""}`}
                onClick={() => toggleFavorite(emp.id)}
              >
                ★
              </button>
            </div>
            <p>{emp.title}</p>
            <span className="dept">{emp.department}</span>
            <p className="email">{emp.email}</p>
          </div>
        ))}
      </div>

      {filtered.length === 0 && <p className="no-results">No employees found.</p>}
    </div>
  );
}
