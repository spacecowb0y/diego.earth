import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (req.method === 'POST') {
      const newEntry = await prisma.subscribers.create({
        data: { email }
      });

      return res.status(200).json({
        id: newEntry.id.toString(),
        email: newEntry.email,
        created_at: newEntry.created_at,
        updated_at: newEntry.updated_at
      });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}
