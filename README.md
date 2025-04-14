# 🛍️ Online Clothing Shop

An e-commerce web application built with **ReactJS** and **Firebase**, offering a smooth shopping experience with user authentication, product browsing, cart management, and checkout functionality.

## 🚀 Live Demo

🔗 [Click here to view the app](https://subtle-kringle-253e7d.netlify.app)

## 🧰 Tech Stack

- **Frontend**: ReactJS  
- **Backend / Auth / Database**: Firebase  
- **Deployment**: Netlify  

## ✨ Features

- 🔐 User Authentication (Sign Up, Login, Logout) using Firebase  
- 👕 Browse Products by Category  
- 🛒 Add/Remove Products to/from Cart  
- ➕➖ Increase or Decrease Product Quantity  
- 🧾 View Cart Summary (Mini Cart)  
- 💳 Checkout Page  
- 🔄 Persistent Cart State (based on logged-in user)  

## 📁 Folder Structure (optional)


## 🛡️ Firebase Rules (optional)

```js
// Firestore rules example
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }
  }
}
