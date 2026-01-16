import { useState } from "react";

const tabsData = [
  {
    id: "profile",
    label: "Profile",
    content: "This is Profile tab content",
  },
  {
    id: "settings",
    label: "Settings",
    content: "This is Settings tab content",
  },
  {
    id: "security",
    label: "Security",
    content: "This is Security tab content",
  },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState(tabsData[0].id);

  return (
    <div>
      <div style={{ display: "flex", gap: "8px" }}>
        {tabsData.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "8px 12px",
              cursor: "pointer",
              borderBottom:
                activeTab === tab.id ? "2px solid blue" : "none",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "16px" }}>
        {tabsData.map(tab =>
          tab.id === activeTab ? (
            <div key={tab.id}>{tab.content}</div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Tabs;
