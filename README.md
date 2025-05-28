# VibeTrading AI

A modern, AI-powered trading platform featuring real-time market analysis, trading signals, and interactive charts.

## Features

- 🤖 Advanced LLM-powered trading assistant
- 📊 Real-time market analysis and visualization
- 💡 AI-driven trading recommendations
- 📱 Fully responsive design
- 🎨 Modern UI with dark theme
- ⚡ Optimized performance

## Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm 7.x or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/vibetrading-ai.git
cd vibetrading-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create an `images` directory and add required images:
```bash
mkdir images
# Add your logo.png, og-image.jpg, and twitter-card.jpg
```

4. Optimize images:
```bash
npm run build
```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Project Structure

```
vibetrading-ai/
├── images/              # Source images
├── public/             # Optimized images and static assets
├── scripts/            # Build and optimization scripts
├── index.html          # Landing page
├── demo.html           # Interactive demo page
├── about.html          # About page
└── site.webmanifest    # PWA manifest
```

## Performance Optimization

- Images are automatically optimized using Sharp
- WebP versions are generated for modern browsers
- Critical resources are preloaded
- Responsive images for different screen sizes
- Minified and optimized assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 