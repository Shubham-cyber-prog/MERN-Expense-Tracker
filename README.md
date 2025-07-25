# 💸 MERN Expense Tracker

A full-stack **Expense Tracker** web app built using the **MERN Stack (MongoDB, Express, React, Node.js)**. Track your income and expenses in real-time with beautiful UI, secure backend, and MongoDB database.

---

## 🚀 Features

- ✅ Add, edit, and delete expenses and incomes
- 📊 Dynamic chart showing income vs expenses
- 🔒 User authentication (JWT-based login/signup)
- 🌐 Connected to MongoDB Atlas
- 📱 Fully responsive UI (mobile-friendly)
- 🔍 Filter transactions by date or type

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS / Bootstrap
- Axios
- Chart.js (for graphs)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- bcrypt.js

---

```

📁 MERN-Expense-Tracker/
│
├── 💻 client/                    # React Frontend
│   ├── 📂 public/               # Static files
│   │   ├── index.html          # Root HTML template
│   │   ├── favicon.ico         # App icon
│   │   ├── manifest.json       # PWA support
│   │   ├── robots.txt          # SEO settings
│   │   └── logos/              # App logos (optional)
│   │
│   └── 📂 src/                  # React source code
│       ├── 📂 pages/           # Page components (e.g., Home, Dashboard)
│       ├── App.js              # Main App component
│       ├── App.css             # Global styles
│       ├── index.js            # Entry point for React DOM
│       ├── index.css           # Global CSS styles
│       ├── utils.js            # Reusable utility functions
│       ├── RefrshHandler.js    # Custom session/refresh logic
│       ├── setupTests.js       # Testing setup for React
│       └── reportWebVitals.js  # Performance monitoring
│
├── 🚀 server/                   # Node + Express Backend
│   ├── 📂 Controllers/          # Route controller logic
│   ├── 📂 Middlewares/         # Auth, logging, error handlers
│   ├── 📂 Models/              # Mongoose schemas
│   ├── 📂 Routes/              # API endpoint definitions
│   ├── index.js                # Main server entry point
│   ├── .env                    # Sensitive environment variables
│   ├── package.json            # Backend dependencies & scripts
│   └── vercel.json             # ⚙️ Vercel deployment configuration

````
## ⚙️ Setup Instructions

### 🔑 Prerequisites
- Node.js & npm
- MongoDB Atlas account
- Vercel (for frontend) / Render (for backend) accounts

---

### 🔐 Environment Variables (`.env`)

Inside `server/.env` file:

```env
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
PORT=5000

📦 Install Dependencies
bash
Copy
Edit
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
🧑‍💻 Run the App
bash
Copy
Edit
# Run backend
cd server
npm run dev

# Run frontend
cd client
npm start
🔗 Local URLs
Frontend: http://localhost:3000

Backend: http://localhost:5000

🌐 Live Demo
🔗 View Live Project

Replace with your actual deployed URL

📸 Screenshots

🙋‍♂️ About the Developer
Created with 💙 by Subham Nayak
📧 Email: sn343555@gmail.com
🔗 GitHub: Shubham-cyber-prog
🔗 LinkedIn: https://www.linkedin.com/in/subhamnayak/

📃 License
This project is licensed under the MIT License

⭐ Support
If you like this project, give it a ⭐ on GitHub and share it!
---

### ✅ What To Do Now:
1. Paste this markdown into your `README.md` file.
2. Replace:
   - `your-deployed-site.vercel.app` with your live link
   - Add screenshots in the “📸 Screenshots” section if you want
3. Commit & push to GitHub

