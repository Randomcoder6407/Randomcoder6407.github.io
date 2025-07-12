export default function handler(req, res) {
    if (req.method === 'POST') {
        // Log incoming data to the console or store it
        console.log('Received data:', req.body);

        // Respond with a success message
        res.status(200).json({ message: 'Data received successfully!' });
    } else {
        // Respond if method is not POST
        res.status(405).json({ message: 'Only POST requests are allowed' });
    }
}
