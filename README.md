A full-featured **Ecommerce Web Application** built with the **MERN stack** (MongoDB / Express / React / Node.js).  
Includes dynamic cart, checkout, order tracking, and optional AI integrations.  

---

## 📌 Features

- Dynamic **shopping cart** with quantity updates and delete functionality  
- **Checkout page** with delivery options and real-time price calculations  
- **Order tracking** with progress bar  
- Frontend-backend integration with **Axios / Fetch**  
- **JWT authentication** for secure user login  
- Responsive **mobile-first design**  
- Optional **AI integration** for smart features  

---

## 🛠 Tech Stack

- **Frontend:** React, React Router, Vite, CSS Modules / Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB (or SQLite for testing)  
- **Auth:** JSON Web Token (JWT)  
- **Utilities:** dayjs (date formatting), custom `formatMoney` function  
- **Testing:** Vitest  

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/younes02-ui/ecommerce-Website.git
cd ecommerce-Website
2. Install Frontend Dependencies
cd React
npm install
3. Install Backend Dependencies
cd ../ecommerce-backend
npm install
🔧 Running the Project
Backend
npm run dev
Runs the backend on: http://localhost:3000

Frontend
cd ../React
npm start
Runs the frontend on: http://localhost:5173 (Vite default port)

🗂 Project Structure
React/                  # Frontend
  src/
    components/         # Reusable components (Header, CartItem, etc.)
    pages/              # Pages (CheckoutPage, Tracking, etc.)
    utils/              # Utility functions (formatMoney, etc.)
ecommerce-backend/       # Backend
  routes/               # Express routes / endpoints
  models/               # Database schemas
  server.js             # Main server file
  database.sqlite       # Local database file
💻 Usage
Update your cart

Choose delivery options

Track orders in tracking page

Admin can update products via backend endpoints (optional)

📝 Notes
Ensure Node.js & npm are installed

Configure .env file for JWT secrets and database connections

MongoDB recommended for production, SQLite fine for testing

🌐 Deployment
Frontend can be deployed on Vercel, Netlify, or AWS

Backend can be deployed on Render, Heroku, or AWS EC2
