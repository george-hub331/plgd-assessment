# 📂🌐 IPFS File Uploader (using Pinata)

This project provides a simple script to 📤 upload files to IPFS via Pinata and 📥 retrieve them using their CID (Content Identifier).

## ✨ Features
- 📤 Uploads files to IPFS through Pinata
- 📥 Retrieves file content from IPFS using Pinata gateway
- 📌 Automatically pins files for persistence
- 🔑 Secure API authentication

## 🛠️ Prerequisites
Ensure you have the following installed:
- 🖥️ Node.js (v14 or higher)
- 📦 npm (Node Package Manager)
- 🔑 Pinata account and API keys

## 🔧 Installation
1. 📂 Clone this repository or download the script file
2. 🖱️ Navigate to the project directory in your terminal
3. 📥 Install the required dependencies:
   ```bash
   yarn 
   ```
4. 🔐 Create a `.env` file with your Pinata credentials:
   ```env
   PINATA_API_KEY=your_api_key_here
   PINATA_SECRET_KEY=your_secret_key_here
   ```

## 🔑 Getting Pinata API Keys
1. Sign up at [Pinata](https://app.pinata.cloud/)
2. Go to API Keys section
3. Create a new API Key
4. Copy both API Key and Secret Key to your `.env` file

## 🚀 Usage
1. 📂 Place your file in the project directory or specify the path in the script
2. 📥 Run the script:
   ```bash
   yarn start
   ```

## 🔒 Security
- Never commit your `.env` file
- Keep your API keys secure
- The `.env` file is included in `.gitignore`
