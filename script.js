document.querySelector(".primary").addEventListener("click", () => {
    alert("Welcome! Join as a Volunteer or NGO.");
});

document.querySelector(".donate").addEventListener("click", () => {
    alert("Redirecting to Donate page...");
});

document.querySelector(".volunteer").addEventListener("click", () => {
    alert("Volunteer Registration Coming Soon!");
});

// Duplicate campaign cards for seamless infinite scroll
document.addEventListener('DOMContentLoaded', function() {
    const campaignGrid = document.getElementById('campaignGrid');
    
    if (campaignGrid) {
        // Clone all campaign cards and append them to create seamless loop
        const cards = Array.from(campaignGrid.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            campaignGrid.appendChild(clone);
        });
    }
});
document.querySelector(".primary").addEventListener("click", () => {
    alert("Welcome! Join as a Volunteer or NGO.");
});

document.querySelector(".donate").addEventListener("click", () => {
    alert("Redirecting to NGO page...");
});

document.querySelector(".volunteer").addEventListener("click", () => {
    alert("Volunteer Registration Coming Soon!");
});

// Campaign Join Button
document.querySelectorAll('.campaign-join-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Joining campaign... Coming Soon!');
    });
});

// Infinite scroll duplicate
document.addEventListener('DOMContentLoaded', function() {
    const campaignGrid = document.getElementById('campaignGrid');
    if (campaignGrid) {
        const cards = Array.from(campaignGrid.children);
        cards.forEach(card => {
            campaignGrid.appendChild(card.cloneNode(true));
        });
    }
});