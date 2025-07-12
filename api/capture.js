module.exports = function handler(req, res) {
    // Log everything first
    console.log('=== INCOMING REQUEST ===');
    console.log('Method:', req.method);
    console.log('Query:', req.query);
    console.log('Body:', req.body);
    console.log('Headers:', req.headers);
    console.log('========================');
    
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    // Handle all GET requests
    if (req.method === 'GET') {
        console.log('GET request received with query:', req.query);
        
        // Return a 1x1 pixel image for image requests
        res.setHeader('Content-Type', 'image/png');
        res.status(200).send(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64'));
    } else {
        res.status(200).json({ message: 'Request received' });
    }
};
