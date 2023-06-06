const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// Serve the React client
app.use(express.static('client'));

// Launch Job Endpoint to external application.
app.post('/send-json', async (req, res) => {
  try {
    const { url, payload } = req.body;

    if (!url || !payload) {
      return res.status(400).json({ error: 'Missing URL or payload' });
    }

    // Send the payload to the specified URL
    const response = await axios.post(url, payload);

    return res.json(response.data);
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred' });
  }
});

// Callback results to application
app.post('/callbackJobResults', (req, res) => {
  try {
    const payload = req.body;

    if (!payload) {
      return res.status(400).json({ error: 'Missing payload' });
    }

    // Emit the payload to all connected clients
    io.emit('jsonPayload', payload);

    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});