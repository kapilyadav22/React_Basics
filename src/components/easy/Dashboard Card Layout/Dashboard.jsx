const cards = [
  { id: 1, title: "Users", value: "1,245" },
  { id: 2, title: "Revenue", value: "$18,400" },
  { id: 3, title: "Orders", value: "320" },
  { id: 4, title: "Pending", value: "12" },
];

function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
      }}
    >
      {cards.map(card => (
        <div
          key={card.id}
          style={{
            flex: "1 1 200px",
            padding: "16px",
            border: "1px solid #ddd",
            borderRadius: "6px",
          }}
        >
          <h4 style={{ margin: "0 0 8px 0" }}>{card.title}</h4>
          <p style={{ fontSize: "20px", margin: 0 }}>{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
