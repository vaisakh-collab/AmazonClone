# Amazon Clone

A full-stack Amazon-inspired e-commerce web application built using React, Firebase, Firestore, and Stripe.

## Features

- User Authentication (Sign Up / Sign In / Sign Out)
- Product Listing Page
- Shopping Basket
- Add and Remove Items from Basket
- Dynamic Basket Total Calculation
- Checkout Page
- Stripe Payment Integration (Test Mode)
- Order History
- Firestore Database Storage
- Responsive Navigation Header

## Tech Stack

### Frontend
- React
- React Router
- CSS

### State Management
- React Context API
- Reducer Pattern

### Backend & Database
- Firebase Authentication
- Cloud Firestore
- Firebase Functions

### Payments
- Stripe API
- Stripe Elements

## Project Structure

```
src/
│
├── App.js
├── Header.js
├── Home.js
├── Checkout.js
├── CheckoutProduct.js
├── Payment.js
├── Orders.js
├── Order.js
├── Login.js
├── Footer.js
│
├── StateProvider.js
├── reducer.js
│
└── firebase.js
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate into the project directory:

```bash
cd amazon-clone
```

Install dependencies:

```bash
npm install
```

Install Firebase Functions dependencies:

```bash
cd functions
npm install
```

## Running Locally

Start the React application:

```bash
npm start
```

Start Firebase Emulators (optional):

```bash
cd functions
firebase emulators:start
```

## Environment Variables

Create a `.env` file in the project root and add:

```env
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

Store Firebase configuration and Stripe secret keys securely and never commit them to source control.

## Firebase Services Used

### Authentication

Used for:
- User registration
- User login
- Session management

### Firestore

Used for:
- Storing user orders
- Retrieving order history

### Cloud Functions

Used for:
- Creating Stripe Payment Intents
- Handling secure payment processing

## Learning Outcomes

This project helped me learn:

- React component architecture
- State management using Context API
- React Hooks
- Authentication workflows
- Firestore database operations
- REST API integration
- Payment processing with Stripe
- Cloud Functions
- Full-stack application development

## Future Improvements

- Product search functionality
- Product categories and filters
- User profiles
- Wishlist feature
- Improved responsive design
- Deployment to Firebase Hosting
- Admin dashboard

## Disclaimer

This project is built for educational purposes and is not affiliated with Amazon.
