# 🍔 QuickByte - Modern Food Delivery Platform

<div align="center">

<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750273367/logo_empmap.png" alt="QuickByte Logo" width="120" height="120" style="border-radius: 15px;">

### 🚀 **A Full-Stack MERN Food Delivery Platform**

_Connecting hungry customers with delicious food through seamless technology_

[![Live Demo](https://img.shields.io/badge/🔗_Live_Demo-Visit_Now-FF6B6B?style=for-the-badge)](https://full-stack-frontend-olt1.onrender.com/)
[![User Portal](https://img.shields.io/badge/👤_User_Portal-Access-4ECDC4?style=for-the-badge)](https://full-stack-frontend-olt1.onrender.com/)
[![Admin Dashboard](https://img.shields.io/badge/👨‍💼_Admin_Panel-Manage-45B7D1?style=for-the-badge)](https://full-stack-admin-ihw6.onrender.com/)
[![API Backend](https://img.shields.io/badge/📚_API_Backend-Explore-96CEB4?style=for-the-badge)](https://full-stack-1f9p.onrender.com)

</div>

---

## 📋 Table of Contents

<details>
<summary>Click to expand navigation</summary>

- [🎯 About The Project](#-about-the-project)
- [✨ Key Features](#-key-features)
- [🛠️ Built With](#️-built-with)
- [🏗️ System Architecture](#️-system-architecture)
- [🚀 Quick Start](#-quick-start)
- [📱 User Experience](#-user-experience)
- [⚡ Admin Dashboard](#-admin-dashboard)
- [🔌 API Reference](#-api-reference)
- [📱 Responsive Design](#-responsive-design)
- [📸 Screenshots](#-screenshots)
- [🗺️ Roadmap](#️-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)
- [🙏 Acknowledgments](#-acknowledgments)

</details>

---

## 🎯 About The Project

<br>

**QuickByte** is a full-stack food delivery application built using the MERN stack (MongoDB, Express.js, React, Node.js). The platform connects customers with restaurants, enabling seamless food ordering and delivery experiences.

### 🏗️ **Three-Component Architecture**

| Component              | Purpose                                             | Technology Stack            |
| ---------------------- | --------------------------------------------------- | --------------------------- |
| 🎨 **User Frontend**   | Customer-facing interface for browsing and ordering | React + Vite                |
| 👨‍💼 **Admin Dashboard** | Restaurant management and order processing          | React + Material-UI         |
| 🔧 **Backend API**     | Business logic, authentication, and data management | Node.js + Express + MongoDB |

---

## ✨ Key Features

<div align="center">

### 🛍️ **Customer Portal Features**

</div>

<table>
<tr>
<td width="50%">

**🔐 Authentication System**

- User registration and login
- Email verification with OTP
- Secure session management

**🍕 Food Catalog**

- Browse by 8 categories (Salad, Rolls, Deserts, Sandwich, Cake, Pure Veg, Pasta, Noodles)
- View food details with images and descriptions
- Category-wise filtering

</td>
<td width="50%">

**🛒 Shopping Cart**

- Add/remove items
- Real-time quantity updates
- Price calculations
- Apply promo codes ("FIRST-ORDER" for free delivery)

**📦 Order Management**

- Secure checkout with address input
- Payment integration (Stripe checkout)
- View order history
- Track live order

</td>
</tr>
</table>

**💬 Real-time Communication**

- Direct chat with restaurant support staff
- Live messaging system

<div align="center">

### 👨‍💼 **Admin Dashboard Features**

</div>

<table>
<tr>
<td width="50%">

**🍽️ Food Management**

- Add new food items with image uploads
- Edit existing food items
- Delete food items from menu
- List all food items

**📊 Order Processing**

- View all incoming orders
- Update order status (Processing, Out for Delivery, Delivered)
- Access customer details and contact information

</td>
<td width="50%">

**💬 Customer Support**

- Real-time chat with customers
- Respond to customer queries
- Manage customer communications

**🔧 Restaurant Management**

- Clean, intuitive interface
- Efficient order management workflow
- User-friendly design for restaurant staff

</td>
</tr>
</table>

---

## 🛠️ Built With

<div align="center">

### 🎨 **Frontend Technologies**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Material-UI](https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### ⚙️ **Backend Technologies**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)

### 🚀 **Services & Tools**

![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

</div>

---

## 🏗️ System Architecture

### 📁 **Project Structure**

## frontend/ - User Interface (React + Vite)
- `src/`
  - `components/` - Reusable UI components
  - `pages/` - Page components
  - `context/` - React Context API
  - `assets/` - Images and static files
- `package.json`

## admin/ - Admin Dashboard (React)
- `src/`
  - `components/` - Admin components
  - `pages/` - Admin pages
  - `assets/` - Admin assets
- `package.json`

## backend/ - API Server (Node.js + Express)
- `controllers/` - Route controllers
- `models/` - MongoDB models
- `routes/` - API routes
- `middlewares/` - Custom middleware
- `uploads/` - File uploads directory
- `config/` - Database config
- `index.js` - Server entry point

## Root Files
- `README.md`
---

## 🚀 Quick Start

### 📋 **Prerequisites**

```bash
Node.js (v14 or newer)
npm or yarn
MongoDB
Git
```

### 🛠️ **Installation Steps**

#### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/harsh8104/Full-Stack.git
cd Full-Stack
```

#### 2️⃣ **Backend Setup**

```bash
cd backend
npm install
# Configure your environment variables in a .env file (see below)
npm run dev
```

#### 3️⃣ **Frontend Setup**

```bash
cd ../frontend
npm install
npm run dev
```

#### 4️⃣ **Admin Dashboard Setup**

```bash
cd ../admin
npm install
npm run dev
```

### 🎉 **Access Your Application**

| Service                | Local URL               | Description           |
| ---------------------- | ----------------------- | --------------------- |
| 🎨 **User Frontend**   | `http://localhost:5173` | Customer interface    |
| 👨‍💼 **Admin Dashboard** | `http://localhost:5174` | Restaurant management |
| 🔧 **Backend API**     | `http://localhost:5000` | RESTful API server    |

---

## ⚙️ Environment Variables

Create a `.env` file in the `backend/` directory with the following:

```env
PORT=5000
DB_CONNECT=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

---

## 📱 User Experience

### 🏠 **User Journey**

<table>
<tr>
<td width="25%">

**🎯 Homepage**

- Food categories display
- Featured items
- Mobile app promotion

</td>
<td width="25%">

**🍽️ Menu Browsing**

- Filter by 8 categories
- View food details
- Add items to cart

</td>
<td width="25%">

**🛒 Shopping Cart**

- Adjust quantities
- Apply promo codes
- View order summary

</td>
<td width="25%">

**📦 Checkout**

- Enter delivery address
- Complete payment
- Order confirmation

</td>
</tr>
</table>

### 🎟️ **Promotional System**

- **"FIRST-ORDER"** promo code for free delivery
- Real-time promo code validation
- Discount calculations in cart

---

## ⚡ Admin Dashboard

### 🎛️ **Admin Capabilities**

<table>
<tr>
<td width="33%">

**🍽️ Food Management**

- Add new food items
- Upload food images
- Set prices and descriptions
- Remove items from menu

</td>
<td width="33%">

**📋 Order Processing**

- View incoming orders
- Update order status
- Track delivery progress
- Customer information access

</td>
<td width="33%">

**💬 Customer Support**

- Real-time chat system
- Respond to queries
- Customer communication tools

</td>
</tr>
</table>



---

## 🔌 API Reference

### 🛡️ **Authentication Endpoints**

| Method | Endpoint               | Description           |
| ------ | ---------------------- | --------------------- |
| `POST` | `/api/user/register`   | Register new user     |
| `POST` | `/api/user/login`      | User login            |
| `POST` | `/api/user/verifyemail`| Verify email with OTP |
| `POST` | `/api/user/removeuser` | Remove user           |

### 🍽️ **Food Management Endpoints**

| Method | Endpoint         | Description                |
| ------ | ----------------| -------------------------- |
| `GET`  | `/api/food/list`| Get all food items         |
| `POST` | `/api/food/add` | Add new food item (admin)  |
| `POST` | `/api/food/remove`| Remove food item (admin) |

### 🛒 **Cart Management Endpoints**

| Method | Endpoint         | Description           |
| ------ | ----------------| --------------------- |
| `POST` | `/api/cart/add` | Add item to cart      |
| `POST` | `/api/cart/remove`| Remove item from cart |
| `POST` | `/api/cart/get` | Get user's cart       |

### 📦 **Order Management Endpoints**

| Method | Endpoint         | Description                     |
| ------ | ----------------| ------------------------------- |
| `POST` | `/api/order/place`| Place new order                 |
| `POST` | `/api/order/verify`| Verify order                  |
| `POST` | `/api/order/userorders`| Get user's orders         |
| `GET`  | `/api/order/list`| Get all orders (admin)          |
| `POST` | `/api/order/status`| Update order status (admin)   |

### 📞 **Contact Endpoints**

| Method | Endpoint         | Description         |
| ------ | ----------------| ------------------- |
| `POST` | `/api/contact/contact-us` | Submit contact form |

---

## 📱 Responsive Design

<div align="center">

### 🎨 **Multi-Device Support**

<table>
<tr>
<td align="center" width="33%">
<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750274282/Screenshot_2025-06-19_004650_xqshwn.png" alt="Mobile View" style="border-radius: 10px;">
<br><b>📱 Mobile Optimized</b>
<br>Touch-friendly interface
<br>Collapsible navigation
<br>Streamlined layout
</td>

<td align="center" width="33%">
<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750273504/Screenshot_2025-06-19_003440_zgadls.png" alt="Desktop View" style="border-radius: 10px;">
<br><b>🖥️ Desktop Full-Featured</b>
<br>Complete interface
<br>Enhanced visuals
<br>Full functionality
</td>
</tr>
</table>

</div>

### ⚡ **Responsive Features**


- Flexible grid layouts
- Touch-friendly controls
- Responsive images
- Collapsible navigation menu
- Media queries for all breakpoints

---

## 📸 Screenshots

<div align="center">

### 🎨 **User Interface**

</div>

<table>
<tr>
<td align="center" width="33%">
<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750273504/Screenshot_2025-06-19_003440_zgadls.png" alt="Homepage" style="border-radius: 8px;">
<br><b>🏠 Homepage</b>
<br><i>Food categories and featured items</i>
</td>
<td align="center" width="33%">
<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750273776/Screenshot_2025-06-19_003550_wfdscw.png" alt="Menu" style="border-radius: 8px;">
<br><b>🍽️ Food Menu</b>
<br><i>Category filtering system</i>
</td>
<td align="center" width="33%">
<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750273784/Screenshot_2025-06-19_003622_v9sbuq.png" alt="Cart" style="border-radius: 8px;">
<br><b>🛒 Shopping Cart</b>
<br><i>Item management interface</i>
</td>
</tr>
<tr>
<td align="center" width="33%">
<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750273778/Screenshot_2025-06-19_003653_ixzh6j.png" alt="Checkout" style="border-radius: 8px;">
<br><b>💳 Checkout</b>
<br><i>Address input and payment</i>
</td>
<td align="center" width="33%">
<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750273777/Screenshot_2025-06-19_003732_hlbcef.png" alt="Orders" style="border-radius: 8px;">
<br><b>📦 Order History</b>
<br><i>Order tracking interface</i>
</td>
<td align="center" width="33%">
<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750273775/Screenshot_2025-06-19_003858_iqouh0.png" alt="Chat" style="border-radius: 8px;">
<br><b>💬 Customer Chat</b>
<br><i>Real-time support system</i>
</td>
</tr>
</table>

<div align="center">

### 👨‍💼 **Admin Dashboard**

</div>

<table>
<tr>
<td align="center" width="33%">
<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750274045/Screenshot_2025-06-19_004305_j5j6dk.png" alt="Food Management" style="border-radius: 8px;">
<br><b>🍽️ Food Management</b>
<br><i>Add, edit, delete food items</i>
</td>
<td align="center" width="33%">
<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750274047/Screenshot_2025-06-19_004325_nvvxsg.png" alt="Order Processing" style="border-radius: 8px;">
<br><b>📋 Order Processing</b>
<br><i>Order status management</i>
</td>
<td align="center" width="33%">
<img src="https://res.cloudinary.com/dldpwhnad/image/upload/v1750274046/Screenshot_2025-06-19_004346_vrnqgq.png" alt="Admin Chat" style="border-radius: 8px;">
<br><b>💬 Admin Chat</b>
<br><i>Customer support interface</i>
</td>
</tr>
</table>

---

## 🗺️ Roadmap

### ✅ **Completed Features**

- [x] User authentication with email verification (OTP)
- [x] Food catalog with 8 categories
- [x] Shopping cart functionality
- [x] Order processing and tracking
- [x] Real-time chat support
- [x] Admin dashboard
- [x] Responsive design
- [x] Payment integration (Stripe checkout)
- [x] Promo code system

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 👨‍💻 Author

<div align="center">

**Harsh Jivani**

[![GitHub](https://img.shields.io/badge/GitHub-harsh8104-181717?style=for-the-badge&logo=github)](https://github.com/harsh8104)
[![Project](https://img.shields.io/badge/Project-QuickByte-FF6B6B?style=for-the-badge&logo=github)](https://github.com/harsh8104/Full-Stack)

</div>

---

## 🙏 Acknowledgments

- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon components
- **[Material-UI](https://mui.com/)** - UI component library
- **[Socket.io](https://socket.io/)** - Real-time communication
- **[Cloudinary](https://cloudinary.com/)** - Image hosting and management
- **[Render](https://render.com/)** - Application hosting platform
- **[Stripe](https://stripe.com/)** - Payment processing
- **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas)** - Database hosting
- **[Outfit Font](https://fonts.google.com/specimen/Outfit)** - Typography

---

<div align="center">

### ⭐ **Star this repository if you found it helpful!**

**Made with ❤️ by [Harsh Jivani](https://github.com/harsh8104)**

</div>
