# Sanctuary-Stays

Modern full-stack cabin reservation platform built with Next.js, Supabase, and Tailwind CSS. Features OAuth authentication, profile management, and a complete reservation workflow including booking creation, editing, and cancellation.

## ✨ Features

* OAuth authentication with Auth.js
* Protected account and reservation routes
* Cabin reservation workflow
* Create, edit, and cancel bookings
* Guest profile management
* Dynamic date selection
* Responsive UI built with Tailwind CSS
* Server-side rendering with Next.js App Router
* Supabase database integration

---

## 🛠️ Tech Stack

### Frontend

* Next.js 16
* React 19
* Tailwind CSS 4
* React Day Picker
* Heroicons

### Backend / Database

* Supabase
* Auth.js / NextAuth

### Tooling

* ESLint
* PostCSS

---

## 📸 Preview

Live Demo:
[Sanctuary-Stays Live Site](https://sanctuary-stays.vercel.app?utm_source=chatgpt.com)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/arthur-user/Sanctuary-Stays.git
cd Sanctuary-Stays
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the root directory and add the required environment variables:

```env
NEXTAUTH_URL=http://localhost:3000

AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=

AUTH_DISCORD_ID=
AUTH_DISCORD_SECRET=

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### 4. Run the development server

```bash
npm run dev
```

Visit:

```txt
http://localhost:3000
```

---

## 📂 Project Structure

```bash
app/
 ├── account/
 ├── cabins/
 ├── login/
 ├── api/
components/
lib/
public/
```

---

## 🔐 Authentication

Sanctuary-Stays uses OAuth authentication powered by Auth.js.

Supported providers:

* Google
* Discord

---

## 🌐 Deployment

The application is deployed on Vercel.

Production URL:
[Sanctuary-Stays Deployment](https://sanctuary-stays.vercel.app?utm_source=chatgpt.com)

---

## 📖 What I Learned

This project helped strengthen my understanding of:

* Strengthened my full-stack application architecture
* Authentication flows with Auth.js
* Server Components and Server Actions
* Protected routing in Next.js
* Database integration with Supabase
* Responsive UI and component composition
* Modern React and Next.js development patterns

---

## 📄 License

This project is licensed under the MIT License.
