export default function handler(req, res) {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method === 'POST') {
        console.log('Received data:', req.body);
        res.status(200).json({ message: 'Data received successfully!' });
    } else {
        res.status(405).json({ message: 'Only POST requests are allowed' });
    }
}
