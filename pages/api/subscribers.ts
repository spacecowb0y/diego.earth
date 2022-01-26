import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

    const aggregations = await prisma.subscribers.aggregate({
      _count: {
        email: true,
      },
    })

    return res.status(200).json({ count: aggregations._count.email });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
