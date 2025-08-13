<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eco Achievement Badges</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-color: #2ecc71;
            --secondary-color: #3498db;
            --accent-color: #f39c12;
            --dark-color: #2c3e50;
            --light-color: #ecf0f1;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f7fa;
            margin: 0;
            padding: 20px;
        }
        
        .badge-container {
            display: flex;
            gap: 25px;
            flex-wrap: wrap;
            justify-content: center;
            padding: 30px;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .badge {
            width: 150px;
            height: 180px;
            background: white;
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.08);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px 15px;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }
        
        .badge::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 5px;
            background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        }
        
        .badge:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.15);
        }
        
        .badge-shape {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 15px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            transition: all 0.3s ease;
        }
        
        .badge-shape i {
            font-size: 36px;
            filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        }
        
        .badge:hover .badge-shape {
            transform: scale(1.1);
        }
        
        .badge-name {
            font-weight: 600;
            text-align: center;
            font-size: 15px;
            color: var(--dark-color);
            margin-bottom: 8px;
        }
        
        .badge-status {
            font-size: 12px;
            font-weight: 500;
            padding: 3px 10px;
            border-radius: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .earned {
            background-color: rgba(46, 204, 113, 0.1);
            color: var(--primary-color);
        }
        
        .locked {
            background-color: rgba(189, 195, 199, 0.2);
            color: #95a5a6;
        }
        
        .badge.locked-badge {
            opacity: 0.7;
            filter: grayscale(30%);
        }
        
        .badge.locked-badge .badge-shape {
            background: linear-gradient(135deg, #bdc3c7, #95a5a6);
        }
        
        .badge.locked-badge::before {
            background: #bdc3c7;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .header h1 {
            color: var(--dark-color);
            font-weight: 700;
            margin-bottom: 10px;
        }
        
        .header p {
            color: #7f8c8d;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Eco Achievement Badges</h1>
        <p>Celebrate your environmental contributions by earning these beautiful badges. Each represents a milestone in your sustainability journey.</p>
    </div>
    
    <div id="badgeDisplay"></div>

    <script>
        (function() {     
            // Badge data (add as many as you want here)
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
            window.renderBadges = function(targetSelector) {
                const container = document.querySelector(targetSelector);
                if (!container) return;
                
                container.innerHTML = "";
                container.classList.add("badge-container");

                badgeList.forEach(badge => {
                    const badgeDiv = document.createElement("div");
                    badgeDiv.classList.add("badge");
                    
                    badgeDiv.innerHTML = `
                        <div class="badge-shape">
                            <i class="fas ${badge.icon}"></i>
                        </div>
                        <div class="badge-name">${badge.name}</div>
                        <div class="badge-status earned">
                            Earned
                        </div>
                    `;
                    
                    // Set custom color for each badge
                    const shape = badgeDiv.querySelector('.badge-shape');
                    shape.style.background = `linear-gradient(135deg, ${badge.color}, ${lightenColor(badge.color, 20)})`;
                    
                    // Add tooltip on hover
                    badgeDiv.title = `You earned this badge on ${new Date().toLocaleDateString()}!`;
                    
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
                )
                    .toString(16)
                    .slice(1)}`;
            }
            
            // Initialize with all badges earned
            document.addEventListener('DOMContentLoaded', function() {
                renderBadges('#badgeDisplay');
            });
        })();
    </script>
</body>
</html>
