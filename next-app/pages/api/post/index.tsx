import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  listData: number;
};

export default function post(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ listData: 4 });
}
