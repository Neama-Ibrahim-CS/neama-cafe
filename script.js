// ================= GLOBAL DATABASE =================
const menuData = {
    "Hot Beverages": [
        { id: 101, name: "Spanish Latte", price: 4.50, desc: "Sweet condensed milk layered with rich double espresso.", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80" },
        { id: 102, name: "Caramel Macchiato", price: 4.80, desc: "Steamed vanilla milk marked with espresso and golden caramel.", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80" },
        { id: 103, name: "Velvet Cappuccino", price: 4.00, desc: "Double shot espresso topped with dense, velvety micro-foam.", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=500&q=80" },
        { id: 104, name: "Flat White", price: 4.25, desc: "Pure ristretto shots infused with silky steamed whole milk.", img: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=500&q=80" },
        { id: 105, name: "Belgian Dark Mocha", price: 5.10, desc: "Espresso combined with premium melted Belgian chocolate ganache.", img:"https://media.istockphoto.com/id/1324007808/photo/dalgona-coffee-with-coffee-beans-on-table.jpg?s=1024x1024&w=is&k=20&c=x-HQbmBL5TW5-ioU1wtRS4dhKFbeBSV_pqJ-SF2D5Mo=" },
        { id: 106, name: "Cortado", price: 3.75, desc: "Equal parts espresso and warm milk to reduce acidity.", img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=500&q=80" },
        { id: 107, name: "Ceremonial Matcha Latte", price: 5.40, desc: "Whisked Japanese Uji matcha with steamed oat milk.", img: "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=500&q=80" },
        { id: 108, name: "Signature White Mocha", price: 4.90, desc: "White chocolate sauce blended with espresso and milk foam.", img: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=500&q=80" }
    ],

    "Cold Beverages": [
        { id: 201, name: "Iced Pistachio Latte", price: 5.75, desc: "Homemade creamy pistachio paste with cold milk and espresso.", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=500&q=80" },
        { id: 202, name: "Iced Salted Caramel Latte", price: 5.20, desc: "Double espresso poured over salted caramel and chilled milk.", img: "https://media.istockphoto.com/id/2211116871/photo/iced-caramel-macchiato-espresso-layered-over-cold-milk-with-a-sweet-caramel-drizzle-served.jpg?s=2048x2048&w=is&k=20&c=wHHsqE5boalNXd3TEfDe_NPfe8DUiIWCuoakfCIpxN4=" },
        { id: 203, name: "Cold Brew Citrus Tonic", price: 4.80, desc: "18-hour cold steeped brew topped with tonic water and orange zest.", img: "https://media.istockphoto.com/id/2285719839/photo/close-up-of-layered-strawberry-espresso-tonic-with-lime-and-ice-in-a-tall-glass-refreshing.jpg?s=1024x1024&w=is&k=20&c=KXcsJHAJ57L5FDeXFM9lYEZIzdcO6Mxs8HLx9-7ircQ=" },
        { id: 204, name: "Iced Choco Frappe", price: 5.50, desc: "Blended espresso frappe with chocolate chips and whipped cream.", img: "https://plus.unsplash.com/premium_photo-1695750678156-ed7b2ad39980?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 205, name: "Brown Sugar Shaken Espresso", price: 4.95, desc: "Espresso shaken with brown sugar, cinnamon, and oat milk.", img: "https://plus.unsplash.com/premium_photo-1669807973305-df034e751b97?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 206, name: "Iced Spanish Latte", price: 5.00, desc: "Sweet iced latte recipe served with slow-melt crystal ice.", img: "https://images.unsplash.com/photo-1566704284379-0d6fdf3d229c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 207, name: "Nitro Cold Brew", price: 5.30, desc: "Infused with nitrogen for a creamy stout-like head.", img: "https://media.istockphoto.com/id/1280105490/photo/cold-drink-or-nitro-coffee-drink-in-a-glass-with-foam-ice-and-coffee-beans.jpg?s=2048x2048&w=is&k=20&c=oImJRniODEmIImPPX-gRZNzfRhnTb8bCTYPjhWyUeGA=" }
    ],
    "Fresh Bakery": [
        { id: 301, name: "Butter Croissant", price: 3.50, desc: "Flaky, multi-layered golden croissant baked fresh daily.", img: "https://images.unsplash.com/photo-1691480162735-9b91238080f6?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 302, name: "Almond Frangipane Croissant", price: 4.50, desc: "Twice-baked croissant with almond cream and sliced almonds.", img: "https://images.unsplash.com/photo-1721324412655-63d4885d9e67?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 303, name: "Pistachio Custard Danish", price: 4.75, desc: "Crisp puff pastry filled with roasted pistachio custard.", img: "https://plus.unsplash.com/premium_photo-1673282159649-089caddeea0e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 304, name: "Smoked Turkey & Emmental Croissant", price: 6.20, desc: "Warm croissant sandwich with smoked turkey breast and melted cheese.", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=500&q=80" },
        { id: 305, name: "Avocado Toast", price: 6.80, desc: "Artisan sourdough slice topped with crushed avocado and poached egg.", img: "https://images.unsplash.com/photo-1633204339691-9d3645430e14?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 306, name: "Pain au Chocolat", price: 3.90, desc: "Traditional French pastry folded with dual dark chocolate batons.", img: "https://media.istockphoto.com/id/183299359/photo/chocolate-croissant.jpg?s=2048x2048&w=is&k=20&c=fXYyrL_PtSmb3w5cfIMqD1OSK2Aw_MgLCJsPPmqQIxw=" },
        { id: 307, name: "Halloumi Pesto Focaccia", price: 6.50, desc: "Grilled halloumi, basil pesto, and sun-dried tomatoes on herb bread.", img: "https://images.unsplash.com/photo-1718395011431-c4efd53b8c2b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],

    "Signature Sweets": [
        { id: 401, name: "San Sebastian Cheesecake", price: 5.90, desc: "Burnt Basque style cheesecake served with warm Belgian chocolate.", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80" },
        { id: 402, name: "Wild Berry New York Cheesecake", price: 5.50, desc: "Dense vanilla cheesecake with an organic mixed berry compote.", img: "https://images.unsplash.com/photo-1578775887804-699de7086ff9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 403, name: "Nutella Lava Cookie", price: 3.80, desc: "Thick-baked chocolate chip cookie with a gooey Nutella center.", img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=80" },
        { id: 404, name: "Salted Caramel Pecan Roll", price: 4.40, desc: "Soft cinnamon roll drizzled with buttery toffee glaze and pecans.", img: "https://images.unsplash.com/photo-1638315221207-3d29f79eafa9?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 405, name: "Lemon Poppyseed Glazed Loaf", price: 4.10, desc: "Moist sponge slice infused with fresh lemon zest and tangy glaze.", img: "https://images.unsplash.com/photo-1658312302011-ad3779dd3c83?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 406, name: "Tiramisu Tradizionale", price: 5.60, desc: "Espresso soaked ladyfingers layered with mascarpone cream.", img: "https://media.istockphoto.com/id/2267848167/photo/traditional-italian-dessert-tiramisu-plated.jpg?s=2048x2048&w=is&k=20&c=lYdKCHJJ7o8CrRBBMo3Hg4vls2T8FU7HMz-J8BvVbwM=" }
    ],

    "Artisan Gelato": [
        { id: 501, name: "Classic Affogato al Caffè", price: 4.80, desc: "Madagascar vanilla bean gelato drowned in a hot espresso shot.", img: "https://media.istockphoto.com/id/2209741922/photo/affogato.jpg?s=2048x2048&w=is&k=20&c=m6Uw6N2JqpM_xuAi-fvGxFCaVBYFk9ceYQWtX-A1vRc=" },
        { id: 502, name: "Sicilian Roasted Pistachio Gelato", price: 4.60, desc: "Authentic Italian pistachio gelato topped with roasted nut shards.", img: "https://images.unsplash.com/photo-1603736029103-dafad0eb0906?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 503, name: "Salted Caramel & Waffle Crunch", price: 4.30, desc: "Rich caramel gelato swirled with sea salt and crisp waffle bits.", img: "https://plus.unsplash.com/premium_photo-1678198828975-02016abf2c5e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 504, name: "70% Dark Chocolate Fondant", price: 4.50, desc: "Intense Belgian cocoa gelato with fine bittersweet shavings.", img: "https://images.unsplash.com/photo-1663100143548-1555dcfd62b7?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 505, name: "Mango & Passionfruit Sorbet", price: 4.20, desc: "Dairy-free refreshing tropical sorbet crafted with pure fruits.", img: "https://images.unsplash.com/photo-1777924985263-0f636944bec6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 506, name: "Hazelnut Gianduja Scoop", price: 4.70, desc: "Creamy Piedmont hazelnut blended with milk chocolate ribbons.", img: "https://media.istockphoto.com/id/2260818038/photo/chocolate-hazelnut-spread-with-nuts-in-black-bowl.jpg?s=2048x2048&w=is&k=20&c=ZzCbb0myTVzMtWt6SZxqkQ3Avg7FDqcDXWQDE7b8few=" }
    ],

    "Refreshment": [
        { id: 601, name: "Sparkling Mint Mojito", price: 4.20, desc: "Crushed lime, fresh garden mint, and bubbly soda over crushed ice.", img: "https://images.unsplash.com/photo-1753263409447-29cf2ae573e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 602, name: "Hibiscus Berry Cooler", price: 4.50, desc: "Slow-brewed Egyptian karkadeh with pomegranate pearls and ice.", img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=500&q=80" },
        { id: 603, name: "Passionfruit Lemon Spritzer", price: 4.60, desc: "Tangy passionfruit seeds, freshly squeezed lemon, and club soda.", img: "https://media.istockphoto.com/id/1163469947/photo/passion-fruits-juice.jpg?s=2048x2048&w=is&k=20&c=58aJMBtJ6fpZ5WwxB5K61LOHyuskNYxphnVjMYFGePI=" },
        { id: 604, name: "Peach Iced White Tea", price: 4.30, desc: "Delicate white tea infused with white peach purée and thyme.", img: "https://plus.unsplash.com/premium_photo-1687977547426-33ff1d8683d3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { id: 605, name: "Blue Lagoon Citrus Fizz", price: 4.75, desc: "Blue curaçao citrus blend with sparkling water and lemon wheel.", img: "https://media.istockphoto.com/id/694210228/photo/blue-cocktail-in-a-glass.jpg?s=1024x1024&w=is&k=20&c=sUKluEdXCi4CeF0J2viLIlE3L0G4Y9fFggoRwvrn0mg=" }
    ]
};

// ================= GLOBAL STATE =================
let cart = [];
let wishlist = [];
let activeCategoryName = "";

// ================= MOBILE NAVIGATION =================
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

if (menuOpenButton && menuCloseButton) {
    menuOpenButton.addEventListener("click", () => {
        document.body.classList.toggle("show-mobile-menu");
    });

    menuCloseButton.addEventListener("click", () => {
        menuOpenButton.click();
    });
}

// ================= HERO TYPING ANIMATION =================
const textElement = document.querySelector(".typing-text");
if (textElement) {
    const textToType = textElement.textContent.trim();
    let charIndex = textToType.length;
    let isDeleting = true;

    function typeAnimation() {
        if (isDeleting) {
            textElement.textContent = textToType.substring(0, charIndex - 1);
            charIndex--;
        } else {
            textElement.textContent = textToType.substring(0, charIndex + 1);
            charIndex++;
        }

        let typingSpeed = isDeleting ? 90 : 140;

        if (!isDeleting && charIndex === textToType.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typingSpeed = 600;
        }

        setTimeout(typeAnimation, typingSpeed);
    }

    setTimeout(typeAnimation, 2000);
}

// ================= CATEGORY POPUP MODAL =================
function openCategory(name) {
    activeCategoryName = name;
    const modal = document.getElementById("category-modal");
    const title = document.getElementById("modal-category-title");
    if (title) title.innerText = name;
    renderCategoryProducts();
    if (modal) modal.classList.add("active");
}

function closeCategoryModal() {
    const modal = document.getElementById("category-modal");
    if (modal) modal.classList.remove("active");
}

function renderCategoryProducts() {
    const container = document.getElementById("products-grid-container");
    if (!container) return;
    container.innerHTML = "";

    const products = menuData[activeCategoryName] || [];
    products.forEach(p => {
        const isFav = wishlist.some(item => item.id === p.id);
        const cartItem = cart.find(item => item.id === p.id);
        const qty = cartItem ? cartItem.qty : 0;

        container.innerHTML += `
            <div class="product-item-card">
                <div class="prod-img-box">
                    <img src="${p.img}" alt="${p.name}">
                    <button class="wishlist-btn ${isFav ? 'active' : ''}" onclick="handleWishlistClick(${p.id}, this)">
                        <i class="fa-solid fa-heart"></i>
                    </button>
                </div>
                <div class="prod-details">
                    <h4 class="prod-name">${p.name}</h4>
                    <p class="prod-desc-short">${p.desc}</p>
                    <div class="prod-footer">
                        <span class="prod-price">$${p.price.toFixed(2)}</span>
                        
                        <div class="card-qty-control ${qty > 0 ? 'in-cart' : ''}">
                            <button class="btn-minus" onclick="handleCartClick(${p.id}, -1)">-</button>
                            <span class="qty-num">${qty}</span>
                            <button class="btn-plus" onclick="handleCartClick(${p.id}, 1)">+</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// ================= CART LOGIC =================
function handleCartClick(id, delta) {
    let product = null;
    for (let category in menuData) {
        const item = menuData[category].find(p => p.id === id);
        if (item) { product = item; break; }
    }
    if (product) {
        changeQty(product, delta);
    }
}

function changeQty(product, delta) {
    const found = cart.find(item => item.id === product.id);
    if (found) {
        found.qty += delta;
        if (found.qty <= 0) {
            cart = cart.filter(item => item.id !== product.id);
        }
    } else if (delta > 0) {
        cart.push({ ...product, qty: 1 });
    }
    updateCartCount();
    renderCategoryProducts();
    
    const fullCart = document.getElementById("full-cart-page");
    if (fullCart && fullCart.classList.contains("active")) {
        renderCartPage();
    }
}

function updateCartCount() {
    const counter = document.getElementById("cart-counter");
    if (counter) counter.innerText = cart.length;
}

// ================= WISHLIST LOGIC =================
function handleWishlistClick(id, btn) {
    let product = null;
    for (let category in menuData) {
        const item = menuData[category].find(p => p.id === id);
        if (item) { product = item; break; }
    }
    if (!product) return;

    const idx = wishlist.findIndex(item => item.id === id);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        btn.classList.remove("active");
    } else {
        wishlist.push(product);
        btn.classList.add("active");
        createHeartBurst(btn);
    }

    const counter = document.getElementById("wishlist-counter");
    if (counter) counter.innerText = wishlist.length;

    const fullWishlist = document.getElementById("full-wishlist-page");
    if (fullWishlist && fullWishlist.classList.contains("active")) {
        renderWishlistPage();
    }
}

function removeFromWishlist(id) {
    wishlist = wishlist.filter(item => item.id !== id);
    const counter = document.getElementById("wishlist-counter");
    if (counter) counter.innerText = wishlist.length;
    renderWishlistPage();
    renderCategoryProducts();
}

function createHeartBurst(btn) {
    const card = btn.closest(".product-item-card") || btn;
    const heartCount = 22;
    const redShades = ['#ff4757', '#ff1744', '#d63031', '#ff5252', '#e84118', '#c0392b'];

    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement("i");
        heart.className = "fa-solid fa-heart card-heart-particle";
        heart.style.color = redShades[Math.floor(Math.random() * redShades.length)];

        const angle = (Math.PI * 2 * i) / heartCount + (Math.random() - 0.5) * 0.4;
        const distance = Math.random() * 80 + 40; 

        const tx = Math.cos(angle) * distance + "px";
        const ty = (Math.sin(angle) * distance - 25) + "px";
        const rot = (Math.random() - 0.5) * 120 + "deg";
        const endScale = (Math.random() * 0.7 + 0.7).toFixed(2);

        heart.style.setProperty('--tx', tx);
        heart.style.setProperty('--ty', ty);
        heart.style.setProperty('--rot', rot);
        heart.style.setProperty('--end-scale', endScale);
        heart.style.fontSize = (Math.random() * 8 + 12) + "px";

        card.appendChild(heart);
        setTimeout(() => heart.remove(), 900);
    }
}

// ================= FULLSCREEN HUB CONTROLS =================
function openCartPage() {
    renderCartPage();
    const page = document.getElementById("full-cart-page");
    if (page) page.classList.add("active");
}

function closeCartPage() {
    const page = document.getElementById("full-cart-page");
    if (page) page.classList.remove("active");
    renderCategoryProducts();
}

function openWishlistPage() {
    renderWishlistPage();
    const page = document.getElementById("full-wishlist-page");
    if (page) page.classList.add("active");
}

function closeWishlistPage() {
    const page = document.getElementById("full-wishlist-page");
    if (page) page.classList.remove("active");
    renderCategoryProducts();
}

// ================= RENDER ORDER SUMMARY =================
function renderCartPage() {
    const container = document.getElementById("cart-full-items-container");
    if (!container) return;
    
    const now = new Date();
    const dateEl = document.getElementById("ticket-date");
    const timeEl = document.getElementById("ticket-time");
    const liveTimeEl = document.getElementById("live-order-time");
    const uniqueCountEl = document.getElementById("ticket-unique-count");

    if (dateEl) dateEl.innerText = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    if (timeEl) timeEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (liveTimeEl) liveTimeEl.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    if (uniqueCountEl) uniqueCountEl.innerText = `${cart.length} Types`;

    if (cart.length === 0) {
        container.innerHTML = `<p style="color:#aaa; text-align:center; padding:40px;">Your coffee bag is empty. Start exploring our taste wheel! ☕</p>`;
        document.getElementById("cart-subtotal").innerText = "$0.00";
        document.getElementById("cart-tax").innerText = "$0.00";
        document.getElementById("cart-final-total").innerText = "$0.00";
        return;
    }

    container.innerHTML = "";
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        container.innerHTML += `
            <div class="order-item-row">
                <div class="item-left">
                    <img src="${item.img}" alt="${item.name}">
                    <div class="item-text">
                        <h4>${item.name}</h4>
                        <span>$${item.price.toFixed(2)} each</span>
                    </div>
                </div>
                <div class="item-controls">
                    <div class="qty-counter">
                        <button onclick="handleCartClick(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="handleCartClick(${item.id}, 1)">+</button>
                    </div>
                    <span style="color:#fff; font-weight:700; min-width:60px;">$${itemTotal.toFixed(2)}</span>
                    <button class="trash-btn" onclick="handleCartClick(${item.id}, -${item.qty})">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });

    const tax = subtotal * 0.05;
    const finalTotal = subtotal + tax;

    document.getElementById("cart-subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("cart-tax").innerText = `$${tax.toFixed(2)}`;
    document.getElementById("cart-final-total").innerText = `$${finalTotal.toFixed(2)}`;
}

// ================= RENDER WISHLIST (WITH MENU NAVIGATION) =================
function renderWishlistPage() {
    const container = document.getElementById("wishlist-full-items-container");
    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = `<p style="color:#aaa; text-align:center; padding:40px; grid-column: 1/-1;">No saved favorites yet.</p>`;
        return;
    }

    container.innerHTML = "";
    wishlist.forEach(p => {
        container.innerHTML += `
            <div class="product-item-card wishlist-card">
                <div class="prod-img-box" onclick="goToProductCategory(${p.id})" style="cursor: pointer;" title="View in Menu">
                    <img src="${p.img}" alt="${p.name}">
                    <button class="trash-action-btn" onclick="event.stopPropagation(); removeFromWishlist(${p.id});" title="Remove from favorites">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
                <div class="prod-details">
                    <h4 class="prod-name" onclick="goToProductCategory(${p.id})" style="cursor: pointer;" title="View in Menu">${p.name}</h4>
                    <p class="prod-desc-short">${p.desc}</p>
                    <div class="prod-footer">
                        <span class="prod-price">$${p.price.toFixed(2)}</span>
                        <button class="quick-add-bag" onclick="handleCartClick(${p.id}, 1); removeFromWishlist(${p.id});">
                            Add to Bag <i class="fa-solid fa-bag-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function goToProductCategory(productId) {
    let targetCategory = null;

    for (let category in menuData) {
        if (menuData[category].some(item => item.id === productId)) {
            targetCategory = category;
            break;
        }
    }

    if (targetCategory) {
        closeWishlistPage();
        const menuSection = document.getElementById("menu");
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => {
            openCategory(targetCategory);
        }, 300);
    }
}

// ================= CHECKOUT & RESERVATION LOGIC =================
function completeCheckout() {
    if (cart.length === 0) return alert("Your bag is empty! ☕");
    openCheckoutModal();
}

function openCheckoutModal() {
    const modal = document.getElementById("checkout-modal");
    const container = document.getElementById("checkout-items-list");
    if (!modal || !container) return;

    container.innerHTML = "";
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        container.innerHTML += `
            <div class="checkout-item-pill">
                <span>${item.qty}x ${item.name}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>
        `;
    });

    const tax = subtotal * 0.05;
    const finalTotal = subtotal + tax;
    const now = new Date();

    const dateInput = document.getElementById("reserve-date");
    const timeInput = document.getElementById("reserve-time");
    if (dateInput && !dateInput.value) {
        dateInput.value = now.toISOString().split('T')[0];
        dateInput.min = now.toISOString().split('T')[0];
    }
    if (timeInput && !timeInput.value) {
        timeInput.value = now.toTimeString().slice(0, 5);
    }

    document.getElementById("modal-order-timestamp").innerText = `${now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} • ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    document.getElementById("modal-subtotal").innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById("modal-tax").innerText = `$${tax.toFixed(2)}`;
    document.getElementById("modal-final-total").innerText = `$${finalTotal.toFixed(2)}`;

    modal.classList.add("active");
}

function closeCheckoutModal() {
    const modal = document.getElementById("checkout-modal");
    if (modal) modal.classList.remove("active");
}

function toggleReservationFields(isDineIn) {
    const box = document.getElementById("reservation-schedule-box");
    const dateInput = document.getElementById("reserve-date");
    const timeInput = document.getElementById("reserve-time");

    if (box) {
        box.style.display = isDineIn ? "block" : "none";
        if (dateInput) dateInput.required = isDineIn;
        if (timeInput) timeInput.required = isDineIn;
    }
}

function handleOrderSubmission(e) {
    e.preventDefault();

    const orderType = document.querySelector('input[name="order_type"]:checked').value;
    const paymentMethod = document.querySelector('input[name="payment_method"]:checked').value;
    const customerName = document.getElementById("order-customer-name").value.trim();
    const customerPhone = document.getElementById("order-customer-phone").value.trim();
    const reserveDate = document.getElementById("reserve-date").value;
    const reserveTime = document.getElementById("reserve-time").value;
    const reserveGuests = document.getElementById("reserve-guests").value;

    const egyPhoneRegex = /^01[0125][0-9]{8}$/;
    if (!egyPhoneRegex.test(customerPhone)) {
        alert("Please enter a valid 11-digit Egyptian phone number (010, 011, 012, 015).");
        return;
    }

    const orderPayload = {
        customer: {
            name: customerName,
            phone: customerPhone
        },
        order_type: orderType,
        payment_method: paymentMethod,
        reservation: orderType === "dine_in" ? {
            date: reserveDate,
            time: reserveTime,
            guests: parseInt(reserveGuests)
        } : null,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            quantity: item.qty,
            unit_price: item.price,
            total_price: parseFloat((item.price * item.qty).toFixed(2))
        })),
        pricing: {
            subtotal: parseFloat(document.getElementById("modal-subtotal").innerText.replace('$', '')),
            tax: parseFloat(document.getElementById("modal-tax").innerText.replace('$', '')),
            total: parseFloat(document.getElementById("modal-final-total").innerText.replace('$', ''))
        }
    };

    console.log("🚀 Payload ready for Laravel POST /api/orders:", orderPayload);

    const btn = document.getElementById("place-order-btn");
    btn.classList.add("loading");

    setTimeout(() => {
        btn.classList.remove("loading");
        closeCheckoutModal();
        closeCartPage();
        cart = [];
        updateCartCount();

        showToastNotification("Order & Reservation Confirmed!😍", `Thank you ${customerName}! Your order has been placed.`);
    }, 1200);
}

// ================= NOTIFICATIONS =================
function showToastNotification(title, message) {
    const toast = document.getElementById("toast-notify");
    if (!toast) return;
    
    document.getElementById("toast-title").innerText = title;
    document.getElementById("toast-body").innerText = message;
    
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 4500);
}

// ================= DOM INITIALIZATION =================
document.addEventListener("DOMContentLoaded", () => {
    // Spotlight Categories Event Listeners
    const diskCards = document.querySelectorAll(".disk-card");
    diskCards.forEach(card => {
        card.addEventListener("click", () => {
            const categoryName = card.dataset.category || card.querySelector("h3").innerText.trim();
            openCategory(categoryName);
        });
    });

    // Smart Contact Form Handling
    const contactForm = document.getElementById("smart-contact-form");
    if (contactForm) {
        const nameInput = document.getElementById("contact-name");
        const emailInput = document.getElementById("contact-email");
        const phoneInput = document.getElementById("contact-phone");
        const msgInput = document.getElementById("contact-msg");

        const egyPhoneRegex = /^01[0125][0-9]{8}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        phoneInput.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });

        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let isValid = true;

            if (nameInput.value.trim().length < 3) {
                setError(nameInput, "err-name", true);
                isValid = false;
            } else {
                setError(nameInput, "err-name", false);
            }

            if (!emailRegex.test(emailInput.value.trim())) {
                setError(emailInput, "err-email", true);
                isValid = false;
            } else {
                setError(emailInput, "err-email", false);
            }

            if (!egyPhoneRegex.test(phoneInput.value.trim())) {
                setError(phoneInput, "err-phone", true);
                isValid = false;
            } else {
                setError(phoneInput, "err-phone", false);
            }

            if (msgInput.value.trim().length < 10) {
                setError(msgInput, "err-msg", true);
                isValid = false;
            } else {
                setError(msgInput, "err-msg", false);
            }

            if (isValid) {
                const btn = document.getElementById("submit-contact-btn");
                btn.classList.add("loading");

                setTimeout(() => {
                    btn.classList.remove("loading");
                    showToastNotification("Reservation / Message Sent! ☕", `Thanks ${nameInput.value.trim()}, our team will call you on ${phoneInput.value.trim()}.`);
                    contactForm.reset();
                    document.querySelectorAll(".input-field-box").forEach(box => box.classList.remove("is-valid"));
                }, 1200);
            }
        });

        function setError(inputEl, errorId, hasError) {
            const parentBox = inputEl.closest(".input-field-box");
            const hint = document.getElementById(errorId);
            if (hasError) {
                parentBox.classList.add("is-invalid");
                parentBox.classList.remove("is-valid");
                if (hint) hint.classList.add("show");
            } else {
                parentBox.classList.remove("is-invalid");
                parentBox.classList.add("is-valid");
                if (hint) hint.classList.remove("show");
            }
        }
    }
    
});