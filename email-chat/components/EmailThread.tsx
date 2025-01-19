// components/EmailThread.tsx
import React from 'react';
import { Card, CardBody } from '@nextui-org/react';
import type { EmailThread } from '../types/email';
import { formatDate } from '../utils/dateUtils';

interface EmailThreadProps {
    thread: EmailThread;
}

export const EmailThread: React.FC<EmailThreadProps> = ({ thread }) => {
    return (
        <div className="space-y-4">
            <h3 className="text-xl font-bold">{thread.subject}</h3>
            {thread.messages.map((message) => (
                <Card key={message.id} className="w-full">
                    <CardBody>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-bold">{message.from_name}</p>
                                <p className="text-sm text-gray-500">{message.from}</p>
                            </div>
                            <p className="text-sm text-gray-500">
                                {formatDate(message.date)}
                            </p>
                        </div>
                        <p className="mt-2">{message.snippet}</p>
                    </CardBody>
                </Card>
            ))}
        </div>
    );
};