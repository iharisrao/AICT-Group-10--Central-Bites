// --- 1. DATA: The Restaurant Memory ---
const restaurants = [
    {
        name: "McDonald's",
        image: "../images/mcdonalds.jpg",
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
        image: "../images/kfc.jpg",
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
        image: "../images/pizzahut.jpg",
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
        image: "../images/wildwings.jpg",
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
        image: "../images/alibabadoner.jpg",
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
        image: "../images/subway.jpg",
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
        image: "../images/chouxpastry.jpg",
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
        image: "../images/quettateas.jpg",
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
        image: "../images/tayto.jpg",
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
        image: "../images/softswirl.jpg",
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
        image: "../images/deafghan.jpg",
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
    image: "../images/namakmirch.jpg",
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
    image: "../images/smash.jpg",
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
    image: "../images/nomnomwok.jpg",
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
    image: "../images/tims.jpg",
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
    image: "../images/jeffbbq.jpg",
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
    image: "../images/lit.jpg",
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
    image: "../images/chuckyschicken.jpg",
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
    image: "../images/presto.jpg",
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
    image: "../images/costacoffee.jpg",
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
    image: "../images/spicefactory.jpg",
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
    image: "../images/casarica.jpg",
    description: "Delicious ice cream, desserts, and sweet treats for all ages.",
    vibes: ["Dessert Spot", "Family Friendly"],
    walk: "7 min walk",
    rating: 4.5,
    reviews: 400,
    openTime: 11,
    closeTime: 23
}

]