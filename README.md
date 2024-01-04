# React Video Training Platform

This project is a video training platform I developed using React JS. The platform includes multiple tutorials, each containing a series of videos. Users must register to watch these training videos.

You can view the live version of the project at [https://egitim.diyetisyengizemakbulut.com/](https://egitim.diyetisyengizemakbulut.com/). The data in the live database works in connection with **PHP** from the **MySQL** database.

Various technologies are used in the project:

- **React JS:** Used for the core project structure.
- **Context API:** Employed to manage user state across the application.
- **React Router DOM:** Used for page navigation and deep linking.
- **Next UI:** Utilized for creating fast and stylish user interfaces.
- **Tailwind CSS:** A lightweight and customizable CSS framework for styling.
- **Crypto JS:** Used for encrypting videos to enhance security.
- **Plyr:** A [media player](https://plyr.io/) library for video display and playback.

## Installation
**Clone the Repository:**

   ```bash
   git clone https://github.com/yasinakbulut25/encrypted-video-system.git
   cd encrypted-video-system
   npm install
   npm run dev
   ```
## **Security**
Videos are encrypted using Crypto JS, ensuring content is securely stored and only accessible by authorized users.
User information is securely managed through the Context API.

  ```JS
    CryptoJS.AES.encrypt(videoData, secretKeyForCrypto);
    const encodedString = encodeURIComponent(secretKeyForCrypto);
    const base64Encoded = btoa(encodedString);
  ```

## **Contribution**
If you want to contribute to the project, fork it first and make your developments on your fork.
Submit a pull request to integrate your changes into the main project.

## **Screenshots**
<img width="1242" alt="image" src="https://github.com/yasinakbulut25/encrypted-video-system/assets/62993659/4da737dc-201d-4380-b39a-41515e45c3b1">

<img width="1238" alt="image" src="https://github.com/yasinakbulut25/encrypted-video-system/assets/62993659/9a4b2005-4642-4215-bef3-fed72830f057">


