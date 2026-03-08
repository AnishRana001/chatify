# 💬 Real-Time Chat Application

A modern **Real-Time Chat Application** built using the **MERN Stack**.
This application allows users to authenticate securely, chat with contacts instantly, and see messages in real time using **WebSockets**.

---

## 🚀 Features

* 🔐 User Authentication (Signup / Login)
* 💬 Real-time messaging
* 🟢 Online / Offline user status
* 📩 Instant message delivery
* 🧑‍🤝‍🧑 Contact list sidebar
* ⏱ Message timestamps
* 🖼 Image sharing support
* 📱 Fully responsive UI
* ⚡ Fast and smooth user experience

---

## 🛠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Zustand
* Axios

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### Real-time Communication

* Socket.IO

### Cloud Storage

* Cloudinary

---

## 📂 Project Structure

```
chat-app
│
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── store
│   │   └── App.jsx
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

---

### 2️⃣ Install backend dependencies

```
cd backend
npm install
```

---

### 3️⃣ Install frontend dependencies

```
cd ../frontend
npm install
```

---

### 4️⃣ Create Environment Variables

Create a `.env` file inside the **backend** folder.

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

### 5️⃣ Run the Application

Run backend server:

```
cd backend
npm run dev
```

Run frontend:

```
cd frontend
npm run dev
```

---

## 🌐 Deployment

You can deploy the project using:

* Render (Backend)
* Vercel (Frontend)
* Railway

---

## 📌 Future Improvements

* Message notifications
* Group chat
* Voice/video calling
* Message reactions
* Message deletion/editing

---

## 👨‍💻 Author

**Anish Rana**

---

⭐ If you like this project, please give it a star on GitHub!
