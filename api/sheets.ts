import type { VercelRequest, VercelResponse } from '@vercel/node';
import sheets from '../services/sheets';

type Data = unknown[] | undefined;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  try {
    const data = await sheets();

    res.status(200).json(data)
  } catch (e) {
    res.status(404);
  }
}
