<img width="1149" height="801" alt="Screenshot 2026-03-08 105120" src="https://github.com/user-attachments/assets/7039ab2f-e0f0-40cb-9643-50231b81290d" /># 💬 Chatify – Real-Time Chat Application

Chatify is a **full-stack real-time chat application** built using the **MERN stack (MongoDB, Express, React, Node.js)** with **Socket.IO** for instant messaging.
It allows users to communicate in real time, track online users, and share messages seamlessly.

---

## 🚀 Features

* 🔐 **User Authentication** (JWT + Cookies)
* 💬 **Real-Time Messaging** using Socket.IO
* 🟢 **Online User Tracking**
* 📷 **Image Sharing in Chats**
* 🔔 **Notification Sound for New Messages**
* ⚡ **Optimistic UI Updates**
* 🎨 **Modern UI built with React**
* ☁️ **Image Upload using Cloudinary**

---

## 🛠 Tech Stack

### Frontend

* React
* Zustand (State Management)
* Axios
* TailwindCSS
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB
* Socket.IO
* JWT Authentication
* Cloudinary

---

## 📂 Project Structure

```
chatify
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   └── lib
│
├── frontend
│   ├── components
│   ├── pages
│   ├── store
│   └── lib
│
└── README.md
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/AnishRana001/chatify.git
cd chatify
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** folder and add:

```
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## ▶️ Run the Application

### Start Backend

```bash
cd backend
npm run dev
```

Backend runs on:

```
http://localhost:3000
```

---

### Start Frontend

```bash
cd frontend
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📸 Screenshots


🔐 Login Page
<img src="screenshots/login.png" alt="Login Page" width="900"/>

Users can securely log in to access the chat application.

💬 Chat Interface
<img src="screenshots/chat.png" alt="Chat Interface" width="900"/>

The chat interface allows users to send and receive messages in real time with a clean and responsive UI.

📂 Chat List / Contacts
<img src="screenshots/sidebar.png" alt="Contacts Sidebar" width="900"/>

Users can view available contacts and open conversations from the sidebar.



## 📌 Future Improvements

* Typing indicator ("User is typing...")
* Message read / delivered status
* File sharing support
* Mobile responsive improvements

---

## 👨‍💻 Author

**Anish Rana**

GitHub:
https://github.com/AnishRana001

---

## ⭐ Support

If you like this project, consider giving it a **star ⭐ on GitHub**.
