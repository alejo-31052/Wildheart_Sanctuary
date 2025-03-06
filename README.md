# Animal Shelter Donation Platform

## Overview
This project is a crowdfunding website similar to GoFundMe, designed to allow users to donate to animal shelters. The website is built using **HTML, CSS, and JavaScript** and is intended for future modifications in **Visual Studio Code**.

## Features
- **Home Page (index.html)**
  - Header with navigation links: Home, About Us, Animal Shelters, User Registration, Shelter Registration, and Login.
  - Hero section with a featured image and a short description of the platform.
  - Shelter listing section displaying cards with the shelter's name, image, and brief description (dummy data used for now).
  - Footer with relevant links and information.
- **Shelter Details Page**
  - Displays full details of a selected shelter, including images and donation options:
    - One-time donations.
    - Recurring donations (membership-based).
    - Donation via an Amazon wishlist link.
- **User Registration Page**
  - Registration form with fields for name, email, and password.
- **Shelter Registration Page**
  - Form to register a new shelter, collecting:
    - Shelter name
    - Description of activities
    - Explanation of how funds will be used
    - Optional Amazon wishlist link
    - Image upload (stored in localStorage)
- **Login Page**
  - Allows registered users to log in.

## Technologies Used
- **HTML** for structuring web pages.
- **CSS** for styling and responsive design.
- **JavaScript** for interactivity and data management.
- **localStorage** for temporary data storage (e.g., shelter images).

## Future Enhancements
- Implement backend support for user authentication and database storage.
- Integrate a real donation processing system (e.g., PayPal, Stripe).
- Improve UI/UX with animations and better design elements.
- Implement search and filtering options for shelters.

## Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/animal-shelter-donation.git
   ```
2. Open the project in **Visual Studio Code** or any code editor.
3. Open `index.html` in a browser to test the site.

## Contributions
Feel free to contribute by submitting a pull request or reporting issues.

## License
This project is open-source and available under the MIT License.

