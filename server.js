require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route - to verify server is working
app.get('/api/test', (req, res) => {
  res.json({ 
    message: '✅ Backend server is working!', 
    timestamp: new Date().toISOString(),
    status: 'OK'
  });
});

// Contact form route
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  console.log('📧 Contact form received:', { name, email, message });
  
  // Simple validation
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'All fields are required.' 
    });
  }
  
  // For now, just return success (we'll add email later)
  res.json({ 
    success: true, 
    message: 'Contact form received successfully!',
    data: { name, email, message }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🎉 Sirius Zen Backend Server running!`);
  console.log(`📍 http://localhost:${PORT}`);
  console.log(`📍 http://127.0.0.1:${PORT}`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
  console.log(`🧪 Test endpoint: http://localhost:${PORT}/api/test`);
});

module.exports = app;
