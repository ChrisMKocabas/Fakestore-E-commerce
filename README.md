# Fake Store

<img width="1527" alt="Screenshot 2023-07-03 at 1 06 45 PM" src="https://github.com/ChrisMKocabas/Fakestore-E-commerce/assets/75855099/f2f9d786-713b-416f-a428-e0bac67b4eb9">


Test here: https://fake-store-mu2y.onrender.com/

Fake Store is a fully functional e-commerce website developed for portfolio purposes, showcasing various features such as authentication, cart functionality, and checkout. All product data is sourced from the fakestoreapi.com API. The website is built using Next.js, a React framework, and is deployed using Vercel.

## Features

1. Authentication: Fake Store incorporates authentication functionality using NextAuth, a popular authentication library for Next.js applications. Users can create accounts, log in, and log out securely.

2. Cart Functionality: The website allows users to add products to their cart, view the cart contents, update quantities, and remove items from the cart. The cart state is managed using Redux, a state management library.

3. Checkout and Payments: Fake Store integrates with Stripe, a widely used payment processing platform. Users can proceed to checkout, enter their credit card details, and complete the payment process. For testing purposes, you can use the following credit card credentials: "4242424242424242 4/42 424".

4. Styling: The website utilizes Tailwind CSS, a highly customizable CSS framework, for its styling needs. Tailwind CSS provides a wide range of utility classes, allowing for rapid and consistent styling development.

5. Database: Fake Store employs Firebase, a real-time database platform, for storing user-related information and cart data. Firebase offers a scalable and secure solution for data storage and retrieval.

6. Notifications: React-Hot-Toast, a lightweight and customizable toast notification library, is integrated into Fake Store. Users receive informative and visually appealing notifications for actions such as adding items to the cart or completing a purchase.

7. Icons: Fake Store utilizes HeroIcons, a set of free SVG icons designed for web projects. These icons enhance the visual appeal and provide intuitive representations for various elements and actions throughout the website.

8. API Handling: Axios, a popular HTTP client library, is used for handling API requests in Fake Store. It simplifies the process of sending requests to the fakestoreapi.com API and retrieving the necessary product data.

9. Date/Currency Formatting: Fake Store leverages react-currency-formatter and moment libraries to format dates and currencies. These libraries ensure consistent and localized formatting of dates and currency values.

## Usage

To use Fake Store locally, follow these steps:

1. Clone the repository from GitHub:

   ```bash
   git clone [repository_link]

2. Install the required dependencies by running the following command:

    npm install

3. Create a Firebase project and obtain the necessary Firebase configuration details.

4. Set up a Stripe account and obtain the API keys required for payments.

5. Create a .env.local file in the project root directory and add the following environment 

NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
STRIPE_PUBLIC_KEY=YOUR_STRIPE_PUBLIC_KEY
NEXTAUTH_URL=http://localhost:3000

Replace the placeholders (YOUR_FIREBASE_... and YOUR_STRIPE_...) with the respective values obtained from your Firebase and Stripe accounts.

6. Start the development server by running the following command:
npm run dev

7. Visit http://localhost:3000 in your web browser to access Fake Store locally.

## Credits
This project utilizes product data from fakestoreapi.com, an API that provides mock data for e-commerce websites.
