Aadhava — Official Website

Aadhava is a modern, responsive website built using React, TypeScript, and Vite.
This project follows a clean component-based architecture and is optimized for fast builds, scalability, and easy deployment.

🚀 Live Demo

🔗 https://aadhava-website.vercel.app

📌 Features

⚛️ Built with React + TypeScript

⚡ Powered by Vite for super-fast development

📦 Organized with components, pages, and constants

📁 Clean and scalable folder structure

🎨 Static assets stored in /images

🔐 Supports environment variables (e.g., GEMINI_API_KEY)

🌐 Ready for deployment (Vercel recommended)

📂 Project Structure
Aadhava_website/
│
├─ components/       # Reusable UI components
├─ pages/            # Website pages (Home, About, Contact, etc.)
├─ images/           # Images and static resources
│
├─ App.tsx
├─ index.tsx
├─ constants.ts
├─ types.ts
│
├─ package.json
├─ tsconfig.json
├─ vite.config.ts
└─ README.md

🛠️ Tech Stack

React

TypeScript

Vite

Node.js / npm

🧑‍💻 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/gokulananth0802/Aadhava_website.git
cd Aadhava_website

2️⃣ Install Dependencies
npm install

3️⃣ Run in Development Mode
npm run dev


Visit the URL printed in the terminal (usually: http://localhost:5173
).

🔧 Production Build
Build
npm run build

Preview
npm run preview

🔑 Environment Variables

If your app requires API keys (e.g., Gemini AI), create a .env.local file:

GEMINI_API_KEY=your_api_key_here


Make sure .env.local is not committed to GitHub.

📝 Scripts

Common scripts available in the project:

{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}

🚀 Deployment

The site is already configured for deployment.
Recommended platform: Vercel

Steps:

Connect GitHub repo to Vercel

Build Command: npm run build

Output Directory: dist

Add environment variables (if required)

Deploy 🚀

🛠 Troubleshooting
Issue	Solution
Dependencies fail to install	Delete node_modules and package-lock.json → run npm install again
Dev server won’t start	Ensure no port conflict, check Node version
API key errors	Make sure .env.local exists and key is valid
Images not loading	Verify paths in components
🤝 Contributing

Fork the repository

Create a new branch

Commit your changes

Push and open a pull request

📄 License

This project currently has no license.
If you want others to legally use or contribute, add a LICENSE file (MIT recommended).

📬 Contact

GitHub: @gokulananth0802
For updates and bug reports, open an issue in this repository.
