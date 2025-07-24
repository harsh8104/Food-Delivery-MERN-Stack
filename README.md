# QuickByte - Food Delivery Platform

A complete full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) that provides an online food ordering platform for restaurant with separate customer and admin interfaces.

## Project Overview

QuickByte is a comprehensive food delivery solution for restaurant that allows customers to browse menu items, place orders, and track their delivery status, while providing restaurant administrators with tools to manage their menu and orders efficiently.

## Core Features

### Customer Application

- **User Registration & Authentication** - Secure account creation and login system using JWT tokens
- **Menu Browsing** - Dynamic display of available food items with images, descriptions, and pricing
- **Shopping Cart Management** - Add, remove, and modify items with persistent cart functionality
- **Order Placement** - Complete checkout process with order confirmation
- **Order History & Tracking** - View past orders and current order status
- **Live Chat with Admin** - Real-time chat functionality for customer support and inquiries

### Admin Dashboard

- **Admin Authentication** - Secure admin login system with role-based access control
- **Food Item Management** - Add, and remove menu items with image upload capability
- **Order Management** - View all customer orders and update order status (Processing, Out for Delivery, Delivered)
- **Customer Chat Support** - Real-time communication with customers for support

## Technical Implementation

### Backend Architecture

- **RESTful API** built with Express.js
- **Database Design** using MongoDB with Mongoose ODM
- **Authentication System** implementing JWT tokens and bcrypt password hashing
- **File Upload Handling** using Multer for image management
- **Email Integration** with Nodemailer for notifications
- **Real-time Communication** using Socket.io for chat between user and admin

### Frontend Development

- **React Application** with functional components and hooks
- **State Management** with React Context API
- **Routing** implemented with React Router DOM
- **HTTP Client** using Axios for API communication
- **User Interface** with toast notifications and interactive components

### Database Schema

- **User Model** - Customer account information and authentication
- **Food Model** - Menu items with details, pricing, and images
- **Order Model** - Order information, items, status
- **Contact Model** - Customer details and messages

## Tech Stack

**Frontend:** React.js, Vite, CSS, Material-UI, React Router  
**Backend:** Node.js, Express.js, JWT Authentication  
**Database:** MongoDB, Mongoose ODM  
**Additional Tools:** Socket.io, Multer, Nodemailer, Bcrypt

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd QuickByte
   ```

2. **Backend Setup**

   ```bash
   cd backend
   npm install
   npm run dev
   ```

3. **Frontend Setup**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

4. **Admin Panel Setup**
   ```bash
   cd admin
   npm install
   npm run dev
   ```

## Key Learning Outcomes

- Full-stack web development using MERN stack
- RESTful API design and implementation
- Database design and management with MongoDB
- User authentication and authorization
- File upload and management
- State management in React applications
- Real-time communication implementation

## Screenshots

### Application Overview

![Application Screenshot 1](image-1.png)
_The home page of QuickByte Food Delivery platform for customers_

![Application Screenshot 2](image-2.png)
_Users can select food items from 8 various categories_

### Customer Interface

![Customer Interface 1](image-3.png)
_Food items display where users can add items to cart or remove them using the + and - buttons_

![Customer Interface 2](image-4.png)
_Shopping cart page showing all selected items summary, with promo code option for first-time users_

![Customer Interface 3](image-5.png)
_Delivery details form where users enter complete address and contact information for accurate order delivery_

![Customer Interface 4](image-7.png)
_Integrated Stripe payment gateway for secure card payments with necessary payment details_

![Customer Interface 5](image-6.png)
_My Orders page displaying order history and real-time order status after successful payment_

![Customer Interface 6](image-8.png)
_Customer chat interface for real-time communication with admin support for queries and assistance_

![Customer Interface 7](image-9.png)
_Contact Us page where users can provide feedback or raise queries for customer support_

### Admin Panel

![Admin Panel 1](image-10.png)
_Secure admin login panel with role based authentication system_

![Admin Panel 2](image-11.png)
_Comprehensive admin dashboard with options to add items, view lists, manage orders, and chat with customers_

![Admin Panel 3](image-12.png)
_Add Items page interface for administrators to add new food items to the menu_

![Admin Panel 4](image-13.png)
_Food items management page where administrators can view and remove items from the website_

![Admin Panel 5](image-14.png)
_Admin chat interface for real-time communication with customers to resolve queries and provide support_
