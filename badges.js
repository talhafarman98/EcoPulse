(function() {

    // badges.js

// Badge data
const badgeList = [
    { id: 1, name: "Starter Planter", color: "#4CAF50", icon: "🌱" },
    { id: 2, name: "Eco Hero", color: "#2196F3", icon: "🌍" },
    { id: 3, name: "Forest Guardian", color: "#8BC34A", icon: "🌲" },
    { id: 4, name: "Climate Warrior", color: "#FF5722", icon: "🔥" },
    { id: 5, name: "Species Saver", color: "#9C27B0", icon: "🕊️" },
    { id: 6, name: "Water Protector", color: "#03A9F4", icon: "💧" },
    { id: 7, name: "Recycling Champ", color: "#009688", icon: "♻️" },
    { id: 8, name: "Clean Energy Advocate", color: "#FFC107", icon: "🔆" },
    { id: 9, name: "Ocean Defender", color: "#00BCD4", icon: "🌊" },
    { id: 10, name: "Green Architect", color: "#4CAF50", icon: "🏛️" },
    { id: 11, name: "Pollinator Protector", color: "#FFEB3B", icon: "🐝" },
    { id: 12, name: "Soil Saver", color: "#8D6E63", icon: "🌾" },
    { id: 13, name: "Wildlife Guardian", color: "#FF9800", icon: "🦌" },
    { id: 14, name: "Zero Waste Hero", color: "#607D8B", icon: "🗑️" },
    { id: 15, name: "Tree Ambassador", color: "#2E7D32", icon: "🌳" },
    { id: 16, name: "Renewable Ranger", color: "#FFB300", icon: "⚡" },
    { id: 17, name: "River Restorer", color: "#03A9F4", icon: "🏞️" },
    { id: 18, name: "Compost Champion", color: "#6D4C41", icon: "🍂" }
];

// Function to render badges
function renderBadges(containerId, earnedIds) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Inject CSS styles
    const style = document.createElement("style");
    style.innerHTML = `
        .badge-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 10px;
        }
        .badge-card {
            background: white;
            width: 150px;
            padding: 20px;
            border-radius: 15px;
            box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
            text-align: center;
            font-family: Arial, sans-serif;
            position: relative;
        }
        .badge-icon {
            width: 60px;
            height: 60px;
            background-color: var(--badge-color);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            margin: 0 auto 10px auto;
            color: white;
        }
        .badge-name {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 8px;
        }
        .badge-earned {
            color: #4CAF50;
            font-size: 12px;
            background: #E8F5E9;
            display: inline-block;
            padding: 3px 8px;
            border-radius: 10px;
        }
    `;
    document.head.appendChild(style);

    // Create container div
    const badgeContainer = document.createElement("div");
    badgeContainer.className = "badge-container";

    // Loop through earned badges
    badgeList.forEach(badge => {
        if (earnedIds.includes(badge.id)) {
            const badgeCard = document.createElement("div");
            badgeCard.className = "badge-card";
            badgeCard.innerHTML = `
                <div class="badge-icon" style="--badge-color: ${badge.color}">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
                <div class="badge-earned">EARNED</div>
            `;
            badgeContainer.appendChild(badgeCard);
        }
    });

    container.appendChild(badgeContainer);
}

// Export for global use
window.renderBadges = renderBadges;
