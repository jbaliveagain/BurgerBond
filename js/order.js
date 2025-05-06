export default function handler(req, res) {
    if (req.method === 'POST') {
      const order = req.body;
      console.log('New order received:', order);
      
      // You can use any database or storage here
      // For now, let's just log it to the console
      res.status(200).json({ message: 'Order received' });
    } else {
      // Handle unsupported methods (e.g., GET)
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  }