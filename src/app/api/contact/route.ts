import { NextResponse } from 'next/server';
import { Client } from '@notionhq/client';

// Define the expected request body type
type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message: string;
  countryCode: string;
};

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const formData: ContactFormData = await request.json();

    // Validate required fields
    if (!formData.firstName || !formData.email) {
      return NextResponse.json(
        { error: 'First name and email are required' },
        { status: 400 }
      );
    }

    // Create page in Notion using the official client
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Firstname: {
          title: [
            {
              text: {
                content: formData.firstName,
              },
            },
          ],
        },
        Lastname: {
          rich_text: [
            {
              text: {
                content: formData.lastName,
              },
            },
          ],
        },
        Email: {
          email: formData.email,
        },
        Phone: {
          rich_text: [
            {
              text: {
                content:
                  `${formData.countryCode} ${formData.phoneNumber}`.trim(),
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: formData.message,
              },
            },
          ],
        },
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        id: response.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Server error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
