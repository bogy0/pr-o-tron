import { text } from 'micro';
import { parse } from 'querystring';

export default async (req, res) => {
  // Parse code received through req
  const body = parse(await text(req));
  const message = `Hello ${body.text}`;

  const response_type = 'in_channel';

  res.writeHead(200, { 'Content-Type': 'application/json' })
  // Create response object and send result back to Slack
  res.end(JSON.stringify({ response_type, text: message }))
}