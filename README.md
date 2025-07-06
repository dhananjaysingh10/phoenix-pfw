# 🚀 Next.js Portfolio & Real-Time Chat App

A modern, fullstack portfolio and global chat app built with [Next.js](https://nextjs.org/), [MongoDB Atlas](https://www.mongodb.com/atlas), [Mongoose](https://mongoosejs.com/), [shadcn/ui](https://ui.shadcn.com/), and [Recharts](https://recharts.org/).  
Includes real-time chat (with polling fallback), live analytics, beautiful theming, and interactive effects.


- **Personal Portfolio**: Modern, responsive, and themeable profile sections.
- **Global Chat**: Public chat room with optimistic UI, cooldown, and anti-spam.
- **Live Analytics**: Tracks total and unique visitors, with a bar chart of countries.
- **Consent-based Analytics**: Users can opt-in/out of analytics tracking.
- **Real-Time Effects**: Interactive splash cursor (fluid simulation).
- **Accessibility & Mobile-First**: Fully responsive and accessible.
- **Dark/Light Mode**: Automatic and manual theme switching.
- **Backend API**: Next.js API routes for chat, analytics, etc.
- **MongoDB Atlas**: Cloud database for chat messages and analytics.
- **shadcn/ui**: Consistent, beautiful UI components.

## 🖥️ Demo

> **Live Demo:** [app-url](https://global-chat-tau.vercel.app/)

## 📦 Tech Stack

- **Frontend:** Next.js 15, React 18, shadcn/ui, TailwindCSS, Framer Motion, Recharts
- **Backend:** Next.js API Routes (serverless functions)
- **Database:** MongoDB Atlas
- **Analytics:** GeoIP via `geoip-lite`
- **Deployment:** Vercel Free Tier

## 🚀 Getting Started

### 1. **Clone the Repo**

```bash
git clone https://github.com/dhananjaysingh10/global-chat
cd global-chat
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Configure Environment Variables**

Create a `.env.local` file in the root:

```env
MONGODB_URI=mongodb+srv://:@cluster0.xxx.mongodb.net/?retryWrites=true&w=majority
```

> Get your MongoDB URI from [MongoDB Atlas](https://www.mongodb.com/atlas).

### 4. **Run Locally**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🌏 Deployment (Vercel)

1. Push your code to GitHub/GitLab/Bitbucket.
2. [Sign up on Vercel](https://vercel.com/) and import your repo.
3. Add your `MONGODB_URI` in Vercel’s Environment Variables.
4. Click **Deploy**.
5. Your site is live!

## 🗨️ Features in Detail

### Portfolio

- Modular sections: About, Education, Experience, Projects, Tech Stack
- Clean navigation, animated transitions

### Global Chat

- Public chat room (MongoDB-backed)
- Optimistic UI for instant feedback
- Cooldown to prevent spam
- Polling for real-time-like updates 

### Analytics

- Tracks total views, unique visitors (by IP), and country distribution
- Consent popup for privacy
- Bar chart (Recharts) with scroll and tooltips
- “See Analytics” button for users who opt out

### Splash Cursor

- Fluid simulation effect

## 📝 Folder Structure

```
src/
  components/
    analytics.tsx
    global-chat.tsx
    profile-card.tsx
    SplashCursor.tsx
    ...
  models/
    Message.ts
    Analytics.ts
  pages/
    api/
      messages/
        index.ts
      analytics/
        track.ts
  hooks/
    useInView.ts
  lib/
    dbConnect.ts
  ...
public/
  preview.png
```

## 🛡️ Security & Privacy

- No personal data is stored.
- Analytics are opt-in and based on IP.

## 🧑‍💻 Contributing

Pull requests and issues are welcome!  
Please open an issue for bugs or feature requests.

## 🙏 Credits

- [shadcn/ui](https://ui.shadcn.com/)
- [Recharts](https://recharts.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Framer Motion](https://www.framer.com/motion/)
- [geoip-lite](https://github.com/bluesmoon/node-geoip)

## 💬 Contact

**Dhananjay Singh**  
[LinkedIn](https://www.linkedin.com/in/dhananjay-singh-0335a5259/)  
[X](https://x.com/DhananjaySing_h)