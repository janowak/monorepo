import { sayHello } from '@your-org/core-lib';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function ApiHelloRoute(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.send(sayHello('world loaded from /api/hello'));
}
