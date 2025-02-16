# 📚 Flashcard Learning App  

An interactive **Flashcard Learning App** built with **React (Frontend) and Express.js (Backend)** to help users memorize concepts efficiently. Users can create, update, delete, and track their progress on flashcards.

---

## 🚀 Live Demo  
```sh
https://flashcard-teal-two.vercel.app/

✅ Add New Flashcards – Users can create flashcards with a question and answer.  
✅ View & Flip Flashcards – Click to reveal or hide the answer.  
✅ Track Learning Progress – Mark flashcards as "Got it" ✅ or "Wrong" ❌.  
✅ Update & Delete – Modify or remove flashcards when needed.  
✅ Responsive UI – Works seamlessly on mobile, tablet, and desktop.  
✅ REST API – Fully functional Express.js backend with CRUD operations.  

Frontend (React)
- React.js ⚛️  
- Axios for API calls  
- Normal CSS (No Tailwind)  
- Responsive & User-Friendly Design  

Backend (Node.js & Express.js)
- Node.js & Express.js  
- MongoDB (Database)  
- Mongoose (ORM)  
- CORS & dotenv for security  

📁 flashcard-app/
│── 📁 backend/           # Express.js backend
│   ├── 📄 index.js       # Main server file
│   ├── 📄 models.js      # Mongoose schema
│   ├── 📄 routes.js      # API routes
│   ├── 📄 .env           # Environment variables
│── 📁 frontend/          # React frontend
│   ├── 📁 src/          
│   │   ├── 📄 App.js      # Main component
│   │   ├── 📄 index.js    # Entry point
│   │   ├── 📄 styles.css  # CSS styles
│── 📄 README.md          # Project documentation

DEPLOYMENT:

BACKEND:

1. Push your project to GitHub.
2. Go to Vercel → Click New Project.
3. Select your GitHub repo → Choose /backend as the root directory.
4. Set the build command: npm install
5. Deploy and note down your backend URL.

FRONTEND:

1. Go to Vercel → Click New Project.
2. Select the same GitHub repo → Choose /frontend as the root directory.
3. Add an environment variable in Vercel:
   REACT_APP_BACKEND_URL=https://your-backend.vercel.app
4. Deploy and get your frontend URL.

1. Fork the repo  
2. Create a new branch  
3. Commit your changes  
4. Open a Pull Request  

