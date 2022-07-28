const handler = (req: any, res: any) => {
  if (req.method === 'POST') {
    // Process a POST request
    console.log('post');
  } else {
    // Handle any other HTTP method
    res.status(200).json({ name: 'John Doe' });
  }
};

export default handler;
