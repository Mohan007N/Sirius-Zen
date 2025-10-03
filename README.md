# Contact Backend

This project is a Node.js backend for handling contact form submissions. It uses Express to create a server and Nodemailer to send emails to the specified address.

## Project Structure

```
contact-backend
├── src
│   ├── server.js          # Entry point of the application
│   ├── routes
│   │   └── contact.js     # Route handler for contact form submissions
│   └── config
│       └── mail.js        # Configuration for sending emails
├── package.json           # npm configuration file
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd contact-backend
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Configure email settings:**
   Update the `src/config/mail.js` file with your email service provider's settings.

4. **Start the server:**
   ```
   npm start
   ```

## Usage

- The server will run on `http://localhost:3000`.
- To submit a contact form, send a POST request to `/contact` with the following JSON body:
  ```json
  {
    "name": "Your Name",
    "email": "your.email@example.com",
    "message": "Your message here"
  }
  ```

## Dependencies

- **Express**: A web framework for Node.js.
- **Nodemailer**: A module for sending emails from Node.js applications.

## License

This project is licensed under the MIT License.
