import type { NextApiRequest, NextApiResponse } from 'next';
import { getSleepToday } from 'lib/fitbit';

let format = (n) => `${n / 60 ^ 0}h ${n % 60}m`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getSleepToday();
  const data = await response.json();
  
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=30'
  );

  return res.status(200).json({ efficiency: format(data.sleep[0].timeInBed) });
}
