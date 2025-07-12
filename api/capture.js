module.exports = function handler(req, res) {
    // Add CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }
    
    if (req.method === 'GET') {
        const cookies = req.query.cookies;
        const data = req.query.data;
        
        if (data) {
            console.log('Received all data:', data);
            try {
                const parsedData = JSON.parse(data);
                console.log('Parsed data:', parsedData);
            } catch (e) {
                console.log('Raw data:', data);
            }
        }
        
        if (cookies) {
            console.log('Received cookies:', cookies);
        }
        
        res.status(200).json({ message: 'Data received!' });
    } else if (req.method === 'POST') {
        console.log('Received data:', req.body);
        res.status(200).json({ message: 'Data received successfully!' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
};
