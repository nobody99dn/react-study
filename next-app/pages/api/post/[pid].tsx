import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { pid } = req.query;
  res.end(`Post: ${pid}`);
};

export default handler;
