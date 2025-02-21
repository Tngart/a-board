# A-Board (Q&A Forum)

A-Board is a question-and-answer forum built with **Next.js 15** and powered by **Bun**.  
Users can create posts, comment, and manage their own discussions.

## 🛠 Tech Stack

- **Frontend:** Next.js 15, TypeScript
- **State Management:** React Context
- **HTTP Client:** Axios
- **Package Manager:** Bun / npm

## 🔧 Installation

Clone the repository:

````sh
git clone https://github.com/Tngart/a-board.git
cd a-board

# Using npm
npm install

# OR using Bun
bun install

```markdown
## 🚀 Running the Project

### Start the development server:
```sh
# Using npm
npm run dev

# OR using Bun
bun dev

NEXT_PUBLIC_API_URL="http://localhost:3000"

/src
  ├── app
  │   ├── homepage/          # Homepage UI
  │   │   ├── [id]/          # Post Detail Pages
  │   │   ├── our-blog/      # Own User Blog
  │   │   ├── sign-in/       # Login Page
  ├── components/            # Reusable Components
  │   ├── app-bar/           # Navigation Bar
  │   ├── blogs/             # Blog Post Components
  │   ├── dialog/            # Action(Create Update)Dialog, Delete Dialogs
  ├── providers/             # Global Context Providers
  ├── services/              # API Calls (Axios)
  ├── store/                 # State Management With Zustand
  ├── theme/                 # MUI Theme Configuration
  ├── types/                 # TypeScript Types
  ├── middleware             # Manage Router at path '/'

```markdown
## 🔗 API Calls

### Posts
- `GET /posts` → Fetch all posts
- `GET /posts/my/post` → Fetch user's posts
- `GET /posts/{id}` → Fetch post details
- `POST /posts` → Create a new post
- `PATCH /posts/{id}` → Update a post
- `PATCH /posts/{id}/message` → Update post comment
- `DELETE /posts/{id}` → Delete a post

### Users
- `POST /users/sign-in` → Login
- `POST /users/register` → Register
- `GET /users/me` → Get user info
````

Please provide feedback if possible.
