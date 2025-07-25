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