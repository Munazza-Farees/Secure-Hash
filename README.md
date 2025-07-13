# Secure-Hash
Welcome to Secure Hash, a simple yet powerful web application for generating cryptographic hashes! Built with a React frontend and a Spring Boot backend, this project lets you hash text or files using SHA-256, SHA-512, and MD5 algorithms. You can also download the hash values as a text file for easy sharing or record-keeping. Whether you're a student exploring cryptography or just curious about hashing, this app is designed to be user-friendly and fun to use!

## Features
- **Hashing Algorithms**: Supports SHA-256, SHA-512, and MD5 for secure and fast hash generation.
- **Text and File Input**: Input text directly or upload files to generate hashes.
- **Download Hashes**: Save hash outputs as a `.txt` file for easy sharing or storage.
- **Responsive UI**: Clean, intuitive React interface for seamless user experience.
- **RESTful API**: Spring Boot backend with REST endpoints for hashing operations.
- **CORS Enabled**: Smooth communication between frontend (React) and backend (Spring Boot).

## Tech Stack
- **Frontend**: React (JavaScript, HTML, CSS)
- **Backend**: Spring Boot (Java, Maven)
- **Algorithms**: SHA-256, SHA-512, MD5 (via Java's `MessageDigest`)
- **IDE**: Eclipse IDE for Enterprise Java and Web Developers
- **Build Tool**: Maven

## Getting Started

### Prerequisites
- **Java 17+**: Install JDK 21 or later ([Oracle JDK](https://www.oracle.com/java/technologies/javase/jdk21-archive-downloads.html) or OpenJDK).
- **Node.js and npm**: Install Node.js LTS (v20.x recommended) from [nodejs.org](https://nodejs.org/).
- **Eclipse IDE**: Use Eclipse IDE for Enterprise Java and Web Developers ([eclipse.org](https://www.eclipse.org/downloads/)).
- **Maven**: Included in Eclipse or install separately from [maven.apache.org](https://maven.apache.org/).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Munazza-Farees/Secure-Hash
   cd hashing-web-app
   ```

2. **Set Up the Backend**:
   - Open the `hashing-backend` folder in Eclipse.
   - Update Maven dependencies: Right-click project > `Maven > Update Project`.
   - Configure `src/main/resources/application.properties` (optional, default port is 8080):
     ```properties
     server.port=8080
     ```
   - Run the backend: Right-click `HashingApplication.java` > `Run As > Java Application`.

3. **Set Up the Frontend**:
   - Open a terminal in the `hashing-frontend` folder.
   - Install dependencies:
     ```bash
     npm install
     ```
   - Start the React app:
     ```bash
     npm start
     ```
   - The frontend will run at `http://localhost:3000`.

4. **Access the App**:
   - Open `http://localhost:3000` in your browser.
   - Enter text or upload a file, select an algorithm (SHA-256, SHA-512, MD5), and generate the hash.
   - Click the "Download" button to save the hash as a `.txt` file.

## Usage
- **Generate a Hash**:
  - Type text or upload a file in the input field.
  - Choose an algorithm from the dropdown (SHA-256, SHA-512, or MD5).
  - Click "Hash" to see the result.
- **Download Hash**:
  - After generating a hash, click the "Download" button to save it as `hash_output.txt`.
- **API Endpoints**:
  - `POST /api/hash/sha256`: Hash input with SHA-256.
  - `POST /api/hash/sha512`: Hash input with SHA-512.
  - `POST /api/hash/md5`: Hash input with MD5.
  - Example request (using curl):
    ```bash
    curl -X POST http://localhost:8080/api/hash/sha256 -H "Content-Type: text/plain" -d "Hello, World!"
    ```

## Project Structure
```
hashing-web-app/
├── hashing-backend/                # Spring Boot backend
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/example/hashing/
│   │   │   │   ├── HashingApplication.java
│   │   │   │   ├── config/CorsConfig.java
│   │   │   │   ├── controller/HashingController.java
│   │   │   │   ├── service/HashingService.java
│   │   │   ├── resources/application.properties
│   ├── pom.xml
├── hashing-frontend/               # React frontend
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   ├── package.json
├── README.md
```

## Notes
- **Security Warning**: MD5 is considered insecure for cryptographic purposes due to collision vulnerabilities. Use SHA-256 or SHA-512 for secure applications.
- **CORS**: The backend is configured to allow requests from `http://localhost:3000`. Update `CorsConfig.java` if the frontend runs on a different port.
- **Extensibility**: The app is designed to support additional hashing algorithms or features (e.g., fuzzy hashing, homomorphic hashing) in the future.

## Contributing
Feel free to fork the repo and submit pull requests! For bug reports or feature requests, open an issue on GitHub.


## Acknowledgments
- Built with love for learning and experimenting with cryptographic hashing.
- Thanks to the open-source communities behind React, Spring Boot, and Java’s `MessageDigest`.

Happy hashing!