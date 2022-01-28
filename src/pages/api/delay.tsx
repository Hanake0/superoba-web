import type { NextApiRequest, NextApiResponse } from 'next';
import delay from '../../utils/delay';
import { DelayReq, DelayRes } from '../../types/api/delay';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<DelayRes>
) {
	const dr = req.body as DelayReq;

	if (!Number.isInteger(dr.time))
		return res.status(400).json({ error: `${dr.time} is not an integer` });

	await delay(dr.time);
	res.status(200).json({ success: `awaited ${dr.time}ms` });
}
