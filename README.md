🛡️ AI Spam & Scam Message Detector (Mobile App)

An AI-powered mobile application built using React Native (Expo) and Flask, designed to detect spam, phishing, and scam messages in real time.
The app provides voice alerts, typing-based warnings, and context-aware safety advice to help users avoid online scams.

🚀 Features

✅ Detects Scam / Phishing / Safe messages using AI

🔊 Voice alerts for both scam and safe messages

⌨️ Typing effect while the message is being spoken

🧠 Context-based advice

. Don’t click links

. Don’t pay money

. Banks never ask OTP/details

. Internship/job scam warnings

 
 ## 📱 App Output (Mobile View)

| | |
|---|---|
| ![Output 1](screenshots/output1.jpg) | ![Output 2](screenshots/output2.jpg) |
| ![Output 3](screenshots/output3.jpg) | ![Output 4](screenshots/output4.jpg) |



📱 Built as a React Native mobile app (Android / iOS)

🌐 Flask backend with AI NLP model (DistilBERT)

🧠 How It Works (Simple Explanation)

. User pastes an email / SMS / message in the app

. The message is sent to a Flask backend API

. An AI phishing detection model analyzes the text


The app shows:

. Scam or Safe result

. Voice warning or reassurance

. Context-based safety advice

🏗️ Tech Stack

. Frontend (Mobile App)

. React Native (Expo)

. JavaScript

. Expo Speech (Text-to-Speech)

. React Navigation

Backend (AI Server)

. Python

. Flask

. Flask-CORS

. Hugging Face Transformers

. DistilBERT phishing detection model



⚙️ Setup Instructions
1️⃣ Backend Setup (Flask + AI)

cd backend

pip install -r requirements.txt

python app.py


The backend will run on:

http://0.0.0.0:5000

2️⃣ Mobile App Setup (React Native)

cd mobile

npm install

npx expo start --lan




Real Android Phone
Use your local IP (example):

http://10.19.115.219:5000/predict


Android Emulator (Android Studio)
Use:


http://10.0.2.2:5000/predict

