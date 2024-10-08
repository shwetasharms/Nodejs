// Import the required modules
const express = require('express')

// Create an instance of the Express router
const router = express.Router()

// Define your routes and handlers
router.get('/hello', (req, res) => {
	res.send('Hello, World!')
})

router.get('/bye', (req, res) => {
	res.send('Goodbye, World!')
})
router.get('/*', (req, res) => {
	res.writeHead(404, { 'Content-Type': 'text/plain' })
	res.end('Not found')
})
// Export the router so it can be used in other files
module.exports = router
