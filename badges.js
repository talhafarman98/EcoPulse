(function() {     
    // Badge data (edit/add badges here)
    const badgeList = [
        { id: "starter", name: "Starter Planter", icon: "fa-seedling", color: "#4CAF50" },
        { id: "eco-hero", name: "Eco Hero", icon: "fa-globe-americas", color: "#2196F3" },
        { id: "forest-guardian", name: "Forest Guardian", icon: "fa-tree", color: "#8BC34A" },
        { id: "climate-warrior", name: "Climate Warrior", icon: "fa-fire", color: "#FF5722" },
        { id: "species-saver", name: "Species Saver", icon: "fa-dove", color: "#9C27B0" },
        { id: "water-protector", name: "Water Protector", icon: "fa-tint", color: "#00BCD4" },
        { id: "recycling-champ", name: "Recycling Champ", icon: "fa-recycle", color: "#009688" },
        { id: "clean-energy", name: "Clean Energy Advocate", icon: "fa-solar-panel", color: "#FFC107" }
    ];

    // Function to render badges
    window.renderBadges = function(targetSelector, earnedBadges = []) {
        const container = document.querySelector(targetSelector);
        if (!container) return;
        
        container.innerHTML = "";
        container.classList.add("badge-container");

        badgeList.forEach(badge => {
            const badgeDiv = document.createElement("div");
            badgeDiv.classList.add("badge");

            const isEarned = earnedBadges.includes(badge.id);

            badgeDiv.innerHTML = `
                <div class="badge-shape" style="background: linear-gradient(135deg, ${badge.color}, ${lightenColor(badge.color, 20)})">
                    <i class="fas ${badge.icon}"></i>
                </div>
                <div class="badge-name">${badge.name}</div>
                <div class="badge-status ${isEarned ? 'earned' : 'locked'}">
                    ${isEarned ? 'Earned' : 'Locked'}
                </div>
            `;

            if (!isEarned) {
                badgeDiv.classList.add("locked-badge");
                badgeDiv.title = "You haven't earned this badge yet!";
            } else {
                badgeDiv.title = `You earned this badge on ${new Date().toLocaleDateString()}!`;
            }
            
            container.appendChild(badgeDiv);
        });
    };
    
    // Helper function to lighten colors
    function lightenColor(color, percent) {
        const num = parseInt(color.replace("#", ""), 16),
            amt = Math.round(2.55 * percent),
            R = (num >> 16) + amt,
            G = (num >> 8 & 0x00FF) + amt,
            B = (num & 0x0000FF) + amt;
        return `#${(
            0x1000000 +
            (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
            (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
            (B < 255 ? (B < 1 ? 0 : B) : 255)
        ).toString(16).slice(1)}`;
    }
})();
