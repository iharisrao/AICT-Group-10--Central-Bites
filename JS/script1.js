// --- 1. DATA: The Restaurant Memory ---
const restaurants = [
    {
        name: "McDonald's",
        image: "../Images/mc.jpeg",
        description: "Quick, reliable fast food with burgers and fries – perfect for late-night cravings.",
        vibes: ["Quick Snack", "Family Dinner", "Late Night"],
        walk: "4 min walk",
        rating: 4.3,
        reviews: 312,
        openTime: 0, 
        closeTime: 24
    },
    {
        name: "KFC",
        image: "../Images/KFC.jpeg",
        description: "Crispy fried chicken and zinger burgers – the ultimate comfort food spot.",
        vibes: ["Quick Snack", "Family Dinner", "Late Night"],
        walk: "5 min walk",
        rating: 4.2,
        reviews: 289,
        openTime: 11,
        closeTime: 2
    },
    {
        name: "Pizza Hut",
        image: "../Images/pizzahut.jpeg",
        description: "Freshly baked pan pizzas with unlimited toppings – ideal for group hangouts.",
        vibes: ["Family Dinner", "Late Night"],
        walk: "7 min walk",
        rating: 4.1,
        reviews: 267,
        openTime: 11,
        closeTime: 0 
    },
     {
        name: "Burning Brownie",
        image:"../images/burningbrownie.jpg",
        description: "Heaven for dessert lovers – signature sizzling brownies and milkshakes.",
        vibes: ["Late Night", "Coffee & Chill"],
        walk: "3 min walk",
        rating: 4.6,
        reviews: 156,
        openTime: 13,
        closeTime: 1 
    },
    {
        name: "Wild Wings",
        image: "../Images/wildwings.jpeg",
        description: "Exceptional wings in multiple flavors – perfect for sports nights.",
        vibes: ["Family Dinner", "Late Night"],
        walk: "5 min walk",
        rating: 4.5,
        reviews: 178,
        openTime: 12,
        closeTime: 2
    },
    {
        name: "Alibaba Doner Kebab",
        image: "../Images/alibaba.jpeg",
        description: "Authentic Turkish flavors with juicy kebabs and fresh wraps.",
        vibes: ["Quick Snack", "Late Night"],
        walk: "5 min walk",
        rating: 4.2,
        reviews: 120,
        openTime: 12,
        closeTime: 0
    },
    {
        name: "Subway",
        image: "../Images/subway.jpeg",
        description: "Build your own fresh sandwiches and salads exactly the way you like.",
        vibes: ["Quick Snack", "Family Dinner"],
        walk: "3 min walk",
        rating: 4.0,
        reviews: 142,
        openTime: 10,
        closeTime: 23
    },
    {
        name: "Choux Pastry",
        image: "../Images/choux.jpeg",
        description: "Elegant and sophisticated French-style desserts and pastries.",
        vibes: ["Coffee & Chill", "Best View"],
        walk: "4 min walk",
        rating: 4.7,
        reviews: 98,
        openTime: 10,
        closeTime: 22 
    },
    {
        name: "Quetta Teas",
        image: "../Images/quetta.jpeg",
        description: "Traditional outdoor tea and paratha spot – very budget-friendly.",
        vibes: ["Quick Snack", "Late Night"],
        walk: "6 min walk",
        rating: 4.5,
        reviews: 540,
        openTime: 0,
        closeTime: 24
    },
    {
        name: "Tayto",
        image: "../Images/tayto.jpeg",
        description: "Delicious pastas, burgers, and snacks for a casual sit-down meal.",
        vibes: ["Family Dinner", "Quick Snack"],
        walk: "3 min walk",
        rating: 4.1,
        reviews: 112,
        openTime: 11,
        closeTime: 23
    },
    {
        name: "Soft Swirl",
        image: "../Images/softswirl.jpeg",
        description: "A trendy spot with a mix of continental and fast food.",
        vibes: ["Coffee & Chill", "Family Dinner"],
        walk: "5 min walk",
        rating: 4.2,
        reviews: 95,
        openTime: 12,
        closeTime: 1
    },
    {
        name: "De afghan",
        image: "../Images/deafghan.jpeg",
        description: "Famous desi food that are perfect for a traditional lunch.",
        vibes: [ "Family dinner","Quick Snack"],
        walk: "8 min walk",
        rating: 4.5,
        reviews: 320,
        openTime: 9,
        closeTime: 22
    },
    {
    name: "Namak Mirch",
    image: "../Images/namakmirch.jpeg",
    description: "Bold and spicy desi dishes packed with authentic Pakistani flavors.",
    vibes: ["Family dinner", "Spicy Food"],
    walk: "10 min walk",
    rating: 4.4,
    reviews: 280,
    openTime: 11,
    closeTime: 23
},
{
    name: "Smash",
    image: "../Images/smash.jpeg",
    description: "Crispy smash burgers with juicy patties and bold sauces.",
    vibes: ["Casual Hangout", "Fast Food"],
    walk: "6 min walk",
    rating: 4.6,
    reviews: 410,
    openTime: 12,
    closeTime: 22
},
{
    name: "Nom Nom Wok",
    image: "../Images/nomnomwok.jpeg",
    description: "Fresh Asian wok dishes made fast with flavorful sauces.",
    vibes: ["Quick Bite", "Street Food"],
    walk: "7 min walk",
    rating: 4.3,
    reviews: 190,
    openTime: 11,
    closeTime: 21
},
{
    name: "Tim Hortons",
    image: "../Images/tims.jpg",
    description: "Coffee, donuts, and quick breakfast favorites all day.",
    vibes: ["Coffee Break", "Quick Snack"],
    walk: "5 min walk",
    rating: 4.2,
    reviews: 520,
    openTime: 7,
    closeTime: 23
},
{
    name: "Jeff BBQ",
    image: "../Images/jeff.jpeg",
    description: "Smoky BBQ meats grilled to perfection with rich flavors.",
    vibes: ["Dinner Spot", "Meat Lovers"],
    walk: "12 min walk",
    rating: 4.5,
    reviews: 260,
    openTime: 13,
    closeTime: 23
},
{
    name: "LIT",
    image: "../Images/lit.jpeg",
    description: "Modern street food with bold flavors and a trendy vibe.",
    vibes: ["Friends Hangout", "Late Night"],
    walk: "9 min walk",
    rating: 4.1,
    reviews: 150,
    openTime: 16,
    closeTime: 1
},
{
    name: "Chucky's Chicken",
    image: "../Images/chuckyschicken.jpeg",
    description: "Crispy fried chicken served hot with classic sides.",
    vibes: ["Comfort Food", "Casual"],
    walk: "8 min walk",
    rating: 4.4,
    reviews: 300,
    openTime: 12,
    closeTime: 22
},
{
    name: "Presto",
    image: "../Images/presto.jpeg",
    description: "Quick and tasty pizzas, wraps, and grab-and-go meals.",
    vibes: ["Quick Meal", "Casual"],
    walk: "6 min walk",
    rating: 4.0,
    reviews: 180,
    openTime: 10,
    closeTime: 22
},
{
    name: "Costa Coffee",
    image: "../Images/costacoffee.jpeg",
    description: "Smooth handcrafted coffee, pastries, and light café bites.",
    vibes: ["Coffee Break", "Relaxed"],
    walk: "6 min walk",
    rating: 4.3,
    reviews: 350,
    openTime: 7,
    closeTime: 22
},
{
    name: "Spice Factory",
    image: "../Images/spicefactory.jpeg",
    description: "Rich desi flavors with spicy curries, BBQ, and classic favorites.",
    vibes: ["Family Dinner", "Spicy Food"],
    walk: "11 min walk",
    rating: 4.4,
    reviews: 240,
    openTime: 12,
    closeTime: 23
},
{
    name: "Casa Rica",
    image: "../Images/casarica.jpeg",
    description: "Delicious ice cream, desserts, and sweet treats for all ages.",
    vibes: ["Dessert Spot", "Family Friendly"],
    walk: "7 min walk",
    rating: 4.5,
    reviews: 400,
    openTime: 11,
    closeTime: 23
}
];

// --- 2. LOGIC: Calculate Open/Closed Status ---
function checkIfOpen(openHour, closeHour) {
    const now = new Date();
    const currentHour = now.getHours();
    
    if (openHour === 0 && closeHour === 24) return true;
    if (closeHour < openHour) {
        return currentHour >= openHour || currentHour < closeHour;
    }
    return currentHour >= openHour && currentHour < closeHour;
}

// --- 3. BUILDER: Generate Visual Components ---
function generateStars(rating) {
    let html = '';
    const full = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
        html += i <= full ? '<span class="filled">★</span>' : '<span class="empty">☆</span>';
    }
    return html;
}

function createCard(r) {
    const isCurrentlyOpen = checkIfOpen(r.openTime, r.closeTime);
    const status = isCurrentlyOpen ? 'OPEN' : 'CLOSED';
    const statusClass = isCurrentlyOpen ? 'open' : 'closed'; 
    const vibes = r.vibes.map(v => `<span class="vibe-tag">${v}</span>`).join('');

    return `
        <div class="restaurant-card">
            <div class="image-container">
                <img src="${r.image}" alt="${r.name}">
                <span class="status-badge ${statusClass}">${status}</span>
            </div>
            <div class="card-content">
                <h3>${r.name}</h3>
                <div class="rating">
                    <div class="stars">${generateStars(r.rating)}</div> ${r.rating} (${r.reviews} reviews)
                </div>
                <p class="restaurant-description">${r.description}</p>
                <div class="vibe-tags">${vibes}</div>
                <div class="walk-distance">${r.walk}</div>
            </div>
        </div>`;
}

// --- 4. ENGINE: Render & Update the Page ---
function renderCards(list) {
    const grid = document.getElementById('restaurant-grid');
    if (grid) {
        grid.innerHTML = '';
        list.forEach(r => grid.innerHTML += createCard(r));
    }
}

// --- 5. INTERACTION: Filters and Search ---
function setupHomeFeatures() {
    // A. Mood Buttons
    document.querySelectorAll('#mood-filter button').forEach(btn => {
        btn.addEventListener('click', () => {
            const mood = btn.dataset.mood;
            const filtered = mood === 'all' ? restaurants : restaurants.filter(r => r.vibes.includes(mood));
            renderCards(filtered);
            
            // Toggle active button style
            document.querySelectorAll('#mood-filter button').forEach(b => b.classList.add('secondary'));
            btn.classList.remove('secondary');
        });
    });

    // B. Live Search Bar
    const searchInput = document.getElementById('restaurant-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = restaurants.filter(r => 
                r.name.toLowerCase().includes(term) || 
                r.vibes.some(v => v.toLowerCase().includes(term))
            );
            renderCards(filtered);
        });
    }
}

// --- 6. RANDOMIZER: Spin the Plate Logic ---
function setupRandomizer() {
    const spin = document.getElementById('spin-button');
    const randomContainer = document.getElementById('random-restaurant');
    const modal = document.getElementById('modal');

    if (spin && randomContainer && modal) {
        spin.onclick = () => {
            const rand = restaurants[Math.floor(Math.random() * restaurants.length)];
            
            // Fixed: Using the wrapper class for CSS alignment
            randomContainer.innerHTML = `
                <div class="modal-card-wrapper">
                    ${createCard(rand)}
                </div>
            `;
            
            modal.style.display = 'flex';
        };
    }
}

// --- 7. START: Run when page loads ---
window.onload = () => {
    // Only run if we are on the Home Page
    if (document.getElementById('restaurant-grid')) {
        renderCards(restaurants);
        setupHomeFeatures();
        setupRandomizer();
        
        // Close Modal logic
        const closeBtn = document.querySelector('.close');
        if (closeBtn) {
            closeBtn.onclick = () => document.getElementById('modal').style.display = 'none';
        }
        
        // Close modal if clicking outside the card
        const modal = document.getElementById('modal');
        window.onclick = (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    }
};
