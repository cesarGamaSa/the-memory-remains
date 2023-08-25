import { createClient } from "contentful";

const client = createClient({
    space: `${process.env.NEXT_PUBLIC_CTF_SPACE}`,
    accessToken: `${process.env.NEXT_PUBLIC_CTF_TOKEN}`
});

export const getEvents = async() => {
    const response = await client.getEntries({
        content_type: 'event',
        order: '-fields.date',
        include: 5
    });

    return response.items.map(item => item.fields);
};
