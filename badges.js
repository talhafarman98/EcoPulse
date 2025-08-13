(function() {
    const badgeStyles = `
        .badge-container {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            justify-content: center;
            padding: 20px;
        }
        .badge {
            width: 120px;
            height: 140px;
            background: linear-gradient(135deg, #fff, #f0f0f0);
            border-radius: 15px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            transition: transform 0.2s ease;
            cursor: pointer;
        }
        .badge:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 15px rgba(0,0,0,0.25);
        }
        .badge-shape {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: gold;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            color: white;
            margin-bottom: 10px;
        }
        .badge-name {
            font-weight: bold;
            text-align: center;
            font-size: 14px;
            color: #333;
        }
    `;

    // Inject CSS into the document
    const styleTag = document.createElement("style");
    styleTag.innerHTML = badgeStyles;
    document.head.appendChild(styleTag);

    // Badge data (add as many as you want here)
    const badgeList = [
        { id: "starter", name: "Starter Planter", icon: "🌱" },
        { id: "eco-hero", name: "Eco Hero", icon: "🌍" },
        { id: "forest-guardian", name: "Forest Guardian", icon: "🌳" },
        { id: "climate-warrior", name: "Climate Warrior", icon: "🔥" },
        { id: "species-saver", name: "Species Saver", icon: "🦋" }
    ];

    // Function to render badges
    window.renderBadges = function(targetSelector, earnedBadgeIds = []) {
        const container = document.querySelector(targetSelector);
        if (!container) return;
        
        container.innerHTML = "";
        container.classList.add("badge-container");

        badgeList.forEach(badge => {
            const badgeDiv = document.createElement("div");
            badgeDiv.classList.add("badge");
            badgeDiv.style.opacity = earnedBadgeIds.includes(badge.id) ? "1" : "0.4";
            
            badgeDiv.innerHTML = `
                <div class="badge-shape">${badge.icon}</div>
                <div class="badge-name">${badge.name}</div>
            `;
            container.appendChild(badgeDiv);
        });
    };
})();
