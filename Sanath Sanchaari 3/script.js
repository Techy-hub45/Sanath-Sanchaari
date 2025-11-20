// Function to validate the username/password structure
function isValidCredential(input) {
    // Check 1: First letter must be a capital letter (A-Z)
    // Removed the alphanumeric check to simplify the rule.
    const firstLetterCapital = /^[A-Z]/.test(input);
    
    // We now only return the result of the capital letter check.
    return firstLetterCapital;
}

// Function to handle the form submission
function handleLogin(event) {
    event.preventDefault(); // Stop the default form submission

    const usernameInput = document.getElementById('username').value;
    // We still retrieve the password, but its specific content is ignored for validation.
    const passwordInput = document.getElementById('password').value; 
    const messageElement = document.getElementById('login-message');

    // Remove the predefined credentials, as we will accept any valid-format input.
    // const VALID_USER = "Sanath123";
    // const VALID_PASS = "Pass123";

    messageElement.classList.remove('hidden', 'text-green-600', 'text-red-600');

    // 1. Validate the structure of the input fields
    // The password input's structure is also checked for the starting capital letter, 
    // but the content is not checked against a fixed value.
    if (!isValidCredential(usernameInput) || !isValidCredential(passwordInput)) {
        // Updated error message to reflect the new, simpler rule
        messageElement.textContent = "Error: Both Username and Password must start with a capital letter.";
        messageElement.classList.add('text-red-600');
        messageElement.style.display = 'block';
        return;
    }

    // 2. SUCCESS LOGIC (Accepts any input that passes the capital letter check)
    // The original credential check (step 2) is entirely replaced with a success redirection.
    messageElement.textContent = "Login Successful! Redirecting...";
    messageElement.classList.add('text-green-600');
    messageElement.style.display = 'block';
    
    // Advanced JS: Storing a session indicator and redirecting
    localStorage.setItem('isAuthenticated', 'true'); 
    setTimeout(() => {
        window.location.href = 'home.html'; // Redirect to the Home Page
    }, 1500);

    // The 'else' (Invalid username or password) block is removed since any valid-format input succeeds.
}

// Attach the event listener to the form
document.getElementById('login-form')?.addEventListener('submit', handleLogin);




























// --- Data for Slideshow and Cards ---
const karnatakaData = {
   slideshow: [
        { src: 'bisle-Sakleshpura.jpg', alt: 'Sakleshpura', caption: 'Sakleshpura:The Heaven of Karnataka' },
        { src: 'mallalli.jpg', alt: 'Mallalli Falls', caption: 'Mallalli Falls: The Majestic Water Plunge Near Sakleshpura' },
        { src: 'coffee.webp', alt: 'Coffee', caption: 'Chikmagalur: The Coffee Land of Karnataka' },
        { src: 'mysore.jpg', alt: 'Mysore Palace', caption: 'Mysore:The Heritage Capital of Karnataka' },
        { src: 'GOKARNA1.jpg', alt: 'Gokarna Beach', caption: 'Gokarna: The Coastline Paradise of Karnataka' },
        
        { src: 'hampi1.jpg', alt: 'Hampi Ruins', caption: 'Hampi: The Ancient Ruins of Majestic Vijayanagara Empire' },
        { src: 'coorg.webp', alt: 'Coorg Landscape', caption: 'Madikeri[Coorg]: The Scotland of India' },
        { src: 'bengaluru.jpg', alt: 'bengaluru', caption: 'Bengaluru: The Silicon Valley of India' },
        { src: 'mng-udp.jpg', alt: 'Manglore', caption: 'Manglore - Udupi Highway.' },
        { src: 'beluru.jpg', alt: 'Beluru', caption: 'Beluru: The Temple Town of Karnataka with Exceptional and Unreal Carvings and Sculptures' },
    ],
    cards: [
        { 
            title: 'Sakleshpura', 
            intro: 'A serene hill station known for its lush green forests,waterfalls,spices and coffee plantations Commonly reffered as"ಮಲೆನಾಡ ಹೆಬ್ಬಾಗಿಲು(Gateway to Western Ghats)"', 
            image: 'images/sakleshpura.jpg', 
            route: 'Located in between Bengaluru and Mangaluru Highway via Hassan.' 
        },
        { 
            title: 'Gokarna', 
            intro: 'Famous for its pristine beaches like Om Beach and Kudle Beach.', 
            image: 'images/gokarna.jpg', 
            route: 'Located on the NH 66 coastal highway,well connected by road and train.' 
        },
        
        { 
            title: 'Mysore Palace', 
            intro: 'The seat of the Kingdom of Mysore, known for its intricate design and night illumination.', 
            image: 'mysore.jpg', 
            route: 'Just 150km from Bangalore, well-connected by Road and Train.' 
        },
        { 
            title: 'Sringeri', 
            intro: 'A Spiritual town known for the Sharada Peetham established by Adi Shankaracharya.', 
            image: 'images/sringeri1.webp', 
            route: 'Accessible via road from Chikamagalur (80km)' 
        },
        { 
            title: 'Murudeshwara', 
            intro: 'Home to one of the tallest Lord Shiva Statues and a scenic beach', 
            image: 'images/murudeshwara.jpg', 
            route: 'Located on NH 66,well conncected by Road and Train' 
        },
        { 
            title: 'Bengaluru', 
            intro: 'The vibrant capital city known for its parks,nightlife and Tech industry. ', 
            image: 'images/bangalore.jpg', 
            route: 'Well-connected by air,road and train from all over the world.' 
        },
        { 
            title: 'Dharmasthala', 
            intro: 'A unique temple town known for its religious harmony and the famous Manjunatha Temple.', 
            image: 'images/dharmasthala.jpg', 
            route:'Located on NH 75 between Mangaluru and Bengaluru' 
        },
        { 
            title: 'Badami Caves', 
            intro: 'Ancient rock-cut cave temples showcasing exquisite Chalukyan architecture.', 
            image: 'images/badami.webp', 
            route: 'Closest major city is Hubli (75km).Well connected by road and train.' 
        },
        { 
            title: 'Bandipur National Park', 
            intro: 'A renowed wildlife sanctury,part of the Nilgiri Biosphere Reserve,Home to Tigers,Elephants and diverse flora and fauna.', 
            image: 'images/Bandipur.jpeg', 
            route: 'Located on the way from Mysore to Ooty via NH 766.' 
        },
        { 
            title: 'Ckikkamagluru', 
            intro: 'Famous for its coffee palntations,hills,temples and pleasent weather throught the year.', 
            image: 'images/chikkamagaluru.jpg', 
            route: 'Located in Between Bengaluru and Mangaluru Highway via Hassan.' 
        },
    ]
};

// --- Functionality for Home Page (`home.html`) ---

// Advanced JS: Slideshow Generation and Fading Interval
function setupSlideshow() {
    const container = document.getElementById('slideshow-container');
    if (!container) return; // Exit if not on home.html

    karnatakaData.slideshow.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-item', 'transition-opacity', 'duration-1000', 'ease-in-out');
        if (index === 0) {
            slide.classList.add('active'); // The first slide is active
        }

        // Fading transition is controlled by Bootstrap's carousel logic/CSS, 
        // but we ensure the fade class is on the container for BS to handle the effect
        slide.innerHTML = `
            <img src="${item.src}" class="d-block w-100 object-cover" style="height: 500px;" alt="${item.alt}">
            <div class="carousel-caption d-none d-md-block bg-black/50 p-2 rounded-lg">
                <h5 class="text-xl font-bold">${item.caption}</h5>
            </div>
        `;
        container.appendChild(slide);
    });

    // Set the 3-second (3000ms) interval for the slideshow
    const carouselElement = document.getElementById('image-slideshow');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            interval: 3000,
            pause: 'hover'
        });
    }
}

// Advanced JS: Bootstrap Card Generation
function setupContentCards() {
    const container = document.getElementById('karnataka-cards-container');
    if (!container) return;

    karnatakaData.cards.forEach(card => {
        const cardHtml = `
            <div class="col">
                <div class="card h-full shadow-lg border-t-4 border-indigo-500 hover-shadow-lg transition duration-500 ease-in-out transform hover:scale-[1.03]">
                    <img src="${card.image}" class="card-img-top object-cover" alt="${card.title}" style="height: 200px;">
                    <div class="card-body">
                        <h5 class="card-title text-2xl font-bold text-indigo-700">${card.title}</h5>
                        <p class="card-text">${card.intro}</p>
                        <div class="mt-4 border-t pt-3">
                           <p class="text-sm font-semibold">Route:</p>
                           <p class="text-sm italic text-gray-600">${card.route}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        // Using insertAdjacentHTML for better performance than repeated innerHTML
        container.insertAdjacentHTML('beforeend', cardHtml); 
    });
}

// Advanced JS: Logout Handler
function setupLogout() {
    document.getElementById('logout-btn')?.addEventListener('click', (event) => {
        event.preventDefault();
        localStorage.removeItem('isAuthenticated');
        window.location.href = 'index.html';
    });
}

// Run functions when the DOM is fully loaded for the respective pages
document.addEventListener('DOMContentLoaded', () => {
    // Check if on home.html
    if (window.location.pathname.includes('home.html')) {
        // Simple authentication check (Advanced JS concept)
        if (localStorage.getItem('isAuthenticated') !== 'true') {
            window.location.href = 'index.html'; // Redirect if not logged in
            return;
        }

        setupSlideshow();
        setupContentCards();
        setupLogout();
    }
    
    // The login listener is already at the bottom of the script.js 
    // for the index.html page.
});