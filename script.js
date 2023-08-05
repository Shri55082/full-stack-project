// Sample data for major cities, hotels, and rooms (replace this with actual data from the backend)
const cities = ['New York', 'London', 'Tokyo'];
const hotels = {
    'New York': ['Hotel A', 'Hotel B', 'Hotel C'],
    'London': ['Hotel X', 'Hotel Y', 'Hotel Z'],
    'Tokyo': ['Hotel P', 'Hotel Q', 'Hotel R'],
};
const rooms = {
    'Hotel A': 10,
    'Hotel B': 5,
    'Hotel C': 3,
    'Hotel X': 8,
    'Hotel Y': 2,
    'Hotel Z': 4,
    'Hotel P': 6,
    'Hotel Q': 7,
    'Hotel R': 9,
};

// Function to display cities
function displayCities() {
    const citiesSection = document.getElementById('cities');
    cities.forEach(city => {
        const cityButton = document.createElement('button');
        cityButton.textContent = city;
        cityButton.addEventListener('click', () => displayHotels(city));
        citiesSection.appendChild(cityButton);
    });
}

// Function to display hotels for a selected city
function displayHotels(city) {
    const hotelsSection = document.getElementById('hotels');
    hotelsSection.innerHTML = ''; // Clear previous content
    hotels[city].forEach(hotel => {
        const hotelButton = document.createElement('button');
        hotelButton.textContent = hotel;
        hotelButton.addEventListener('click', () => displayRooms(hotel));
        hotelsSection.appendChild(hotelButton);
    });
}

// Function to display available rooms for a selected hotel
function displayRooms(hotel) {
    const roomsSection = document.getElementById('rooms');
    roomsSection.innerHTML = ''; // Clear previous content
    const availableRooms = rooms[hotel];
    const roomInfo = document.createElement('p');
    roomInfo.textContent = `Available rooms at ${hotel}: ${availableRooms}`;
    roomsSection.appendChild(roomInfo);
}

// Call the displayCities() function to show cities on page load
displayCities();
