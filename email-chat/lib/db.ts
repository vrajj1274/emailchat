import { init } from '@instantdb/react';

// Initialize InstantDB with your appId (replace with your actual App ID)
const db = init({
    appId: '651234f4-a16c-4a40-8b06-ee813ea1587f',
});
export const loadEmails = async () => {
    try {
        // Use query instead of get
        const emails = await db.find('emails'); // Use the correct method, verify schema
        return emails;
    } catch (error) {
        console.error('Error loading emails:', error);
        return [];
    }
};
