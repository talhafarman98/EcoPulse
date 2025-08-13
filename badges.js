(function() {

    // Badge data
    const badgeList = [
        { num: 1, name: "Starter Planter", color: "#4CAF50", icon: "fa-seedling" },
        { num: 2, name: "Eco Hero", color: "#2196F3", icon: "fa-globe" },
        { num: 3, name: "Forest Guardian", color: "#8BC34A", icon: "fa-tree" },
        { num: 4, name: "Climate Warrior", color: "#FF5722", icon: "fa-fire" },
        { num: 5, name: "Species Saver", color: "#9C27B0", icon: "fa-dove" },
        { num: 6, name: "Water Protector", color: "#00BCD4", icon: "fa-tint" },
        { num: 7, name: "Recycling Champ", color: "#009688", icon: "fa-recycle" },
        { num: 8, name: "Clean Energy Advocate", color: "#FFC107", icon: "fa-solar-panel" }
    ];

    // Inject CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .badge-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 20px;
        }
        .badge-card {
            background: white;
            border-radius: 15px;
            box-shadow: 0px 4px 20px rgba(0,0,0,0.1);
            text-align: center;
            padding: 20px;
            transition: transform 0.2s ease;
        }
        .badge-card:hover {
            transform: translateY(-5px);
        }
        .badge-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 28px;
            margin: auto;
            margin-bottom: 15px;
        }
        .badge-name {
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .badge-status {
            font-size: 12px;
            font-weight: 600;
            color: #4CAF50;
            background: #E6F5EC;
            padding: 4px 10px;
            border-radius: 20px;
            display: inline-block;
        }
    `;
    document.head.appendChild(style);

    // Render function
    window.renderBadges = function(targetSelector, badgeNumbers) {
        const container = document.querySelector(targetSelector);
        if (!container) return;
        container.innerHTML = "";
        container.classList.add("badge-grid");

        badgeList
            .filter(b => badgeNumbers.includes(b.num))
            .forEach(badge => {
                const badgeDiv = document.createElement("div");
                badgeDiv.className = "badge-card";
                badgeDiv.innerHTML = `
                    <div class="badge-icon" style="background:${badge.color}">
                        <i class="fas ${badge.icon}"></i>
                    </div>
                    <div class="badge-name">${badge.name}</div>
                    <div class="badge-status">EARNED</div>
                `;
                container.appendChild(badgeDiv);
            });
    };

})();
