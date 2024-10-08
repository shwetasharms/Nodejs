
# OTP Verification Project

### Steps to set up:

1. **Create project directory:**
   ```bash
   mkdir otp-verification-project
   ```

2. **Navigate & initialize Node.js project:**
   ```bash
   cd otp-verification-project
   npm init -y
   ```

3. **Install dependencies:**
   ```bash
   npm install express mongoose nodemailer bcrypt otp-generator
   ```
# Project Folder Structure Overview

1. **controllers/**  
   Contains files responsible for handling business logic and actions.  
   - Example: `authController.js`, `otpController.js`, `userController.js`.

2. **models/**  
   Stores Mongoose models that define the database schemas and interact with MongoDB collections.  
   - Example: `otpModel.js`, `userModel.js`.

3. **routes/**  
   Manages API routes and connects them to the corresponding controllers.  
   - Example: `authRoutes.js`, `otpRoutes.js`, `userRoutes.js`.

4. **utils/**  
   Holds utility functions and helpers for tasks like sending emails.  
   - Example: `mailSender.js` for handling emails with Nodemailer.
