import type { NextApiRequest, NextApiResponse } from 'next';
import sheets from '../../services/sheets';

type Data = unknown[] | undefined;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const data = await sheets();

    res.status(200).json(data)
  } catch (e) {
    res.status(404);
  }
}
