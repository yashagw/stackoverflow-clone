# DevOverflow - Stack Overflow Clone

DevOverflow is a user-friendly question-answer platform inspired by Stack Overflow. It provides a space for developers to ask questions, share knowledge, and collaborate within a community-driven environment.

## Features

### User Authentication

- 🔐 **Secure User Authentication**: DevOverflow uses Clerk to ensure secure user authentication. Users can easily register and log in to the platform, guaranteeing data privacy.

### Question and Answer Platform

- ❓ **Ask and Answer Questions**: Users can post questions and provide answers to inquiries posted by others. This facilitates knowledge sharing and collaboration.

- 👍👎 **Voting System**: DevOverflow incorporates a voting system where users can upvote or downvote questions and answers. This feature helps identify high-quality content and rewards active contributors.

- 📚 **Bookmarking**: Users can bookmark questions for later reference, making it easy to track interesting topics and revisit relevant information.

### Intuitive Interface

- 🌐 **User-Friendly Design**: The platform boasts an intuitive and user-friendly interface. It ensures easy navigation and a seamless experience for users, whether they're asking questions, searching for answers, or exploring topics.

- 🔖 **Tag Browsing**: Users can explore content by tags, making it effortless to find topics of interest.

- 🔍 **Advanced Search**: DevOverflow offers a powerful search functionality, allowing users to find specific questions and answers by keywords and tags.

### Community Interaction

- 🤝 **Community Page**: The community page fosters interaction among users. It encourages active participation and collaboration, creating a sense of belonging within the developer community.

## Tech Stack

- 💻 **Frontend**: Built with Next.js and TypeScript, providing a responsive and efficient user interface.

- 📦 **Database**: MongoDB is used for storing data, ensuring scalability and flexibility.

- 🎨 **Styling**: Tailwind CSS is employed for quick and customizable styling.

- 🔐 **Authentication**: Clerk provides secure user authentication.

## Deployment

DevOverflow is deployed on Vercel, ensuring high availability and fast performance for users.

## Environment Variables

To run DevOverflow locally or deploy it to another environment, you need to set the following environment variables in a `.env` file:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Clerk Publishable Key used for client-side user authentication.
- `CLERK_SECRET_KEY`: Clerk Secret Key used for server-side user authentication.
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: The URL where users are redirected after signing in through Clerk.
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: The URL where users are redirected after signing up through Clerk.
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL`: The URL where users are redirected after a successful sign-in action.
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL`: The URL where users are redirected after a successful sign-up action.
- `NEXT_PUBLIC_TINY_EDITOR_API_KEY`: API Key for integrating the TinyMCE editor for rich text editing.
- `MONGODB_URL`: The connection URI for your MongoDB database.
- `NEXT_CLERK_WEBHOOK_SECRET`: Secret Key for secure server-to-server communication with Clerk's webhook events.

## Getting Started

1. Clone the repository: `git clone https://github.com/yashagw/stackoverflow-clone.git`
2. Install dependencies: `npm install`
3. Create a `.env` file and set the required environment variables.
4. Run the application: `npm run dev`

Feel free to contribute to the project or use it as a starting point for your own question-answer platform.

Happy coding! 🚀