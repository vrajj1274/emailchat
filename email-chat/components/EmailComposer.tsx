// components/EmailComposer.tsx
import React, { useState } from 'react';
import { Button, Textarea } from '@nextui-org/react';
import { EmailMessage } from '../types/email';

interface EmailComposerProps {
    onSend: (email: Partial<EmailMessage>) => void;
    replyTo?: EmailMessage;
}

export const EmailComposer: React.FC<EmailComposerProps> = ({ onSend, replyTo }) => {
    const [message, setMessage] = useState('');

    const handleSend = () => {
        if (!message.trim()) return;

        const newEmail: Partial<EmailMessage> = {
            from: 'user@example.com',
            from_name: 'Current User',
            subject: replyTo ? `Re: ${replyTo.subject}` : 'New Message',
            snippet: message,
            date: new Date().toISOString(),
            created: new Date().toISOString(),
            updated: new Date().toISOString(),
        };

        onSend(newEmail);
        setMessage('');
    };

    return (
        <div className="space-y-4 mt-4">
            <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                minRows={3}
                className="w-full"
            />
            <Button
                color="primary"
                onClick={handleSend}
                disabled={!message.trim()}
            >
                Send
            </Button>
        </div>
    );
};