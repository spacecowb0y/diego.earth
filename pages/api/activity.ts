import type { NextApiRequest, NextApiResponse } from 'next';
import { getLifeActivity } from 'lib/fitbit';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getLifeActivity();
  const data = await response.json();
  
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({ total: data.lifetime.total.steps });
}
