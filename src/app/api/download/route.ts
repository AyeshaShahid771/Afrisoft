import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'ai.pdf');

  try {
    const data = fs.readFileSync(filePath);
    const size = data.length;
    // Log server-side so you can see if file was read correctly
    console.log('[api/download] serving', filePath, 'size=', size);

    return new NextResponse(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="ai.pdf"',
        'Content-Length': String(size),
      },
    });
  } catch (err) {
    console.error('[api/download] error reading file', filePath, err);
    return NextResponse.json({ error: 'File not found' }, { status: 404 });
  }
}
