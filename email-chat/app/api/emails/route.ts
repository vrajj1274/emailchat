// app/api/emails/route.ts
import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';

export async function POST(request: Request) {
    try {
        const email = await request.json();
        await db.transact('emails', [email]);
        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const emails = await db.get('emails');
        return NextResponse.json(emails);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch emails' }, { status: 500 });
    }
}