# Bhagavad Gita Website

A comprehensive digital platform dedicated to making the timeless teachings of the Bhagavad Gita accessible to everyone through beautiful design, authentic translations, and multi-language video content.

## 🙏 About This Project

### Ancient Wisdom, Modern Experience

This is a solo project created to bridge the gap between ancient spiritual wisdom and modern digital accessibility. The website serves as a complete digital sanctuary for the Bhagavad Gita, featuring all 700+ verses with Sanskrit text, transliterations, English translations, and embedded video commentaries.

### The Vision

To create a platform that truly serves anyone who sincerely wishes to read, understand, and experience the Bhagavad Gita—honoring traditional teachings while embracing contemporary learning methods.

## ✨ Key Features

- **Complete Text**: All 18 chapters containing 700+ verses with:
  - Original Sanskrit verses
  - Romanized transliteration for pronunciation
  - English translations
  - Word-by-word meanings for deeper understanding

- **Multi-Language Video Content**: Video commentaries available in 10+ regional languages, embedded as YouTube Shorts for seamless viewing

- **Responsive Design**: Beautiful, mobile-friendly interface that works on all devices

- **Static Site Generation**: Fast loading times and offline reading capabilities through Next.js static export

- **SEO Optimized**: Comprehensive metadata, structured data, and sitemaps for discoverability

- **Accessibility Features**: 
  - Keyboard navigation support
  - WCAG compliance
  - Skip links and ARIA labels
  - Focus management

## 📖 About the Bhagavad Gita

The Bhagavad Gita is a 700-verse Hindu scripture that is part of the epic Mahabharata. It presents a conversation between Prince Arjuna and Lord Krishna on the battlefield of Kurukshetra, addressing profound moral, philosophical, and spiritual questions.

**Key Teachings**:
- **Karma Yoga**: Path of selfless action and duty
- **Bhakti Yoga**: Path of devotion
- **Jnana Yoga**: Path of knowledge and wisdom

The Gita's universal message transcends religious boundaries, offering guidance for ethical living and spiritual growth that remains relevant across cultures and generations.

## 🛠️ Technology Stack

### Core Technologies
- **Framework**: Next.js 15 (App Router with React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives (shadcn/ui)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (Static Export)

### Key Libraries
- **next-themes**: Dark/light mode support
- **sonner**: Toast notifications
- **class-variance-authority**: Component variants
- **tailwind-merge**: Utility class merging

### Development Tools
- **ESLint**: Code linting with Next.js rules
- **PostCSS**: CSS processing
- **Turbopack**: Fast development builds

## 🏗️ Project Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Homepage
│   ├── chapters/                # Chapter listings and routes
│   │   ├── page.tsx            # All chapters
│   │   └── [chapter]/          # Dynamic chapter routes
│   │       ├── page.tsx        # Single chapter
│   │       └── verse/[verse]/  # Verse detail pages
│   ├── about/                   # About page
│   └── donate/                  # Donation page
│
├── components/                   # React components
│   ├── chapter/                 # Chapter-related components
│   ├── verse/                   # Verse display and video player
│   ├── layout/                  # Header, footer
│   ├── ui/                      # Reusable UI primitives
│   └── seo/                     # SEO components
│
├── lib/                         # Core utilities and data
│   ├── data.ts                  # Chapter info (client-safe)
│   ├── verse-data.ts           # File system verse data (server-only)
│   ├── verse-videos.ts         # Video integration
│   ├── sitemap.ts              # Sitemap generation
│   └── seo-structured-data.ts  # JSON-LD schemas
│
└── data/                        # Content data
    ├── quotes-for-each-verse/  # Verse text files
    │   └── chapter-{n}/        # Organized by chapter
    │       └── verse-{m}/      # Each verse directory contains:
    │           ├── sanskrit-shloka.txt
    │           ├── romanized-transliteration.txt
    │           ├── english-translation.txt
    │           └── word-by-word-translation.txt
    │
    └── verse-videos/            # Video metadata
        └── telugu_videos.json   # Language-specific video data
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nrenx/Bhagvad-gita-website.git
   cd Bhagvad-gita-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional for development)
   ```bash
   cp .env.local.example .env.local
   ```
   Edit `.env.local` and set:
   ```
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

Generate static HTML files for deployment:

```bash
npm run build
```

The static site will be exported to the `out/` directory.

### Serve Production Build Locally

```bash
npm run serve
```

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build static export for production
- `npm run build:github` - Build for GitHub Pages deployment
- `npm start` - Start production server (rarely needed for static export)
- `npm run lint` - Run ESLint
- `npm run serve` - Serve production build locally

## 🎨 Key Features in Detail

### Static Site Generation

The website uses Next.js's static export feature to generate ~700 individual HTML pages at build time:
- Homepage and static pages (About, Donate, Chapters listing)
- 18 chapter detail pages
- 700+ verse detail pages with full content

This approach provides:
- **Lightning-fast loading**: No server-side rendering needed
- **SEO benefits**: Fully crawlable by search engines
- **Offline capability**: Content works without internet connection
- **Cost-effective hosting**: Can be hosted on GitHub Pages for free

### Video Integration

Videos are sourced from YouTube and organized by language:
- Each verse can have multiple language versions
- Video metadata stored in JSON files (`src/data/verse-videos/`)
- Automatic extraction of chapter/verse from video titles
- Fallback to default language (Telugu) when available

**Adding New Languages**:
1. Create JSON file: `src/data/verse-videos/{language}_videos.json`
2. Add language to `SUPPORTED_LANGUAGES` in `src/lib/content-utils.ts`
3. Import and register in `VIDEO_LIBRARY` in `src/lib/verse-videos.ts`

### Data Architecture

**Two-Layer Data System**:

1. **Client-Safe Data** (`src/lib/data.ts`):
   - Chapter information (titles, verse counts, descriptions)
   - Navigation helpers
   - Used in both server and client components

2. **Server-Only Data** (`src/lib/verse-data.ts`):
   - Reads verse content from file system
   - Cannot be imported in client components
   - Data passed as props from server components

### SEO & Metadata

Comprehensive SEO implementation:
- **Dynamic metadata** for every page
- **Structured data** (JSON-LD) for rich search results
- **Sitemap** with 700+ URLs and priority levels
- **OpenGraph tags** for social media sharing
- **Canonical URLs** for duplicate content prevention

## 🎓 The Story Behind This Project

### A Student's Journey

This project was created by a B.Tech student with a vision to make the Bhagavad Gita accessible to everyone through modern technology. Without advanced programming expertise or professional tools, the entire project was developed using AI assistance combined with extensive research.

### AI-Powered Development

The development process leveraged AI technology for:
- **Content Collection**: Gathering authentic verse collections from traditional sources
- **Script Generation**: Creating comprehensive explanations for all 700+ verses
- **Audio Production**: Producing high-quality narrations
- **Video Creation**: Generating complete video content for every verse
- **Website Development**: Building the platform architecture and features

### Community Contribution

While AI is powerful, it can occasionally make minor errors. The creator welcomes:
- Bug reports and corrections
- Suggestions for improvements
- Contributions through the GitHub repository
- Feedback on translations and content accuracy

## 🌍 Multi-Language Support

The platform aims to serve diverse communities by providing:
- Video commentaries in 10+ regional languages
- Text content in Sanskrit (original) and English
- Expandable architecture for adding more languages
- Language selector for video content

Currently supported video languages include Telugu, with more languages planned.

## 🤝 Contributing

Contributions are welcome and appreciated! You can help by:

- **Reporting Issues**: Found a typo, broken link, or technical bug? [Open an issue](https://github.com/nrenx/Bhagvad-gita-website/issues)
- **Improving Translations**: Suggest better translations or add commentary
- **Adding Languages**: Help add video content in new languages
- **Code Contributions**: Submit pull requests for features or fixes
- **Documentation**: Improve this README or add code comments

### How to Contribute

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

## 📧 Connect & Support

### Get in Touch

- **Email**: [narendrabollineni2002@gmail.com](mailto:narendrabollineni2002@gmail.com)
- **Phone/WhatsApp**: +91 79899 76214
- **GitHub**: [nrenx/Bhagvad-gita-website](https://github.com/nrenx/Bhagvad-gita-website)

### Your Feedback Matters

Share how you're using this platform:
- How the Bhagavad Gita has touched your life
- Suggestions for resources that helped you
- Ideas for improving the platform
- Collaborations on translations or commentary

## 🙌 Acknowledgments

This project honors:
- The ancient wisdom of the Bhagavad Gita and its traditional commentators
- The spiritual seekers and students worldwide
- The open-source community and modern web technologies
- AI technology that made this comprehensive project possible

## 📜 License

This project is open source and available for educational and spiritual purposes. Please respect the sacred nature of the content when using or sharing it.

## 🔮 Future Plans

- Additional language support for video content
- Audio-only options for verse recitation
- Downloadable content for offline study
- Mobile applications (iOS and Android)
- Advanced search and filtering capabilities
- Community discussion features
- Personalized reading plans and progress tracking

---

**Made with ❤️ for spiritual seekers worldwide**

*"You have the right to perform your prescribed duties, but you are not entitled to the fruits of your actions."* — Bhagavad Gita 2.47
