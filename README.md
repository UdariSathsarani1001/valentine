# 💖 Valentine's Day Surprise Website

A beautiful, fully responsive romantic Valentine's Day surprise website created with pure HTML, CSS, and JavaScript.

## 🌟 Features

### Design
- **Soft pastel color scheme**: Pink, lavender, peach, and rose gold
- **Glassmorphism effects**: Modern frosted glass aesthetics with soft shadows
- **Smooth animations**: CSS keyframe animations and transitions throughout
- **Floating particles**: Hearts and sparkles continuously floating in the background
- **Dark mode**: Toggle between light and dark themes (pink → purple)

### Sections

1. **Landing Screen**
   - Full-screen gradient background
   - Animated envelope in the center
   - "For My Love ❤️" title with glow effect
   - Two buttons: "Open My Heart" and "Not Yet"
   - Floating hearts background

2. **Envelope Animation**
   - CSS-powered envelope opening animation
   - Letter slides out smoothly
   - Heartbeat animation on the seal

3. **Love Letter Section**
   - Handwritten fonts (Dancing Script, Great Vibes)
   - Typing effect with fade-in lines
   - 5 personalized love messages
   - Beautiful letter paper with shadows

4. **Photo Memories**
   - Polaroid-style photo cards
   - Hover effects with rotations
   - Responsive grid layout
   - Placeholder images with emojis (ready for your photos!)

5. **Surprise Section**
   - Romantic proposal: "Will you be my Valentine forever? 💍"
   - Yes/No buttons with fun interactions
   - Confetti explosion on "Yes"
   - Hearts explosion animation
   - "No" button runs away when hovered!

### Interactive Features

- **Background Music**: Auto-play romantic background music with play/pause control
- **Sound Effects**: Subtle click sounds and celebration sounds
- **Easter Egg**: Click the heart seal 5 times to reveal: "I love you more than bugs in my code ❤️"
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Smooth Navigation**: Seamless transitions between sections

## 🎨 Personalization

The website is personalized with:
- **Boyfriend's name**: Ishan
- **Girlfriend's name**: Udari
- **5 Love Messages**: Beautiful romantic messages in the love letter section

## 🚀 How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Click "Open My Heart"**: Start the romantic journey
3. **Navigate through sections**: Use navigation buttons to explore
4. **Find the Easter Egg**: Click the heart seal 5 times on the landing page
5. **Toggle dark mode**: Click the moon/sun icon in the top-right
6. **Control music**: Click the music icon in the top-left

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Customization Guide

### Adding Your Own Photos

Replace the placeholder divs in the Polaroid gallery with your actual images:

```html
<!-- In index.html, find the polaroid-image divs and replace with: -->
<div class="polaroid-image">
    <img src="your-photo.jpg" alt="Description" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

### Changing Love Messages

Edit the `loveMessages` array in `script.js`:

```javascript
const loveMessages = [
    "Your custom message 1...",
    "Your custom message 2...",
    // Add more messages...
];
```

### Changing Names

Update names in `index.html`:
- Search for "Ishan" and replace with your boyfriend's name
- Search for "Udari" and replace with your name

### Changing Colors

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-pink: #FF69B4;    /* Main pink color */
    --soft-pink: #FFB6C1;       /* Lighter pink */
    --lavender: #E6E6FA;        /* Lavender accent */
    /* ... customize more colors ... */
}
```

### Adding Background Music

Replace the music source in `index.html`:

```html
<audio id="bgMusic" loop>
    <source src="your-music-file.mp3" type="audio/mpeg">
</audio>
```

Note: Use a local music file or a CDN link. Some browsers require user interaction before playing audio.

## 🎨 Technical Details

### Technologies Used
- **HTML5**: Semantic structure
- **CSS3**: Flexbox, Grid, Animations, Custom Properties
- **JavaScript**: Vanilla JS (ES6+)
- **Google Fonts**: Dancing Script, Great Vibes, Poppins, Pacifico

### CSS Features
- Glassmorphism with backdrop-filter
- CSS Grid and Flexbox layouts
- Keyframe animations
- CSS custom properties (variables)
- Responsive design with media queries
- Custom scrollbar styling

### JavaScript Features
- Dynamic particle generation
- Canvas confetti animation
- Web Audio API for sound effects
- LocalStorage for theme persistence
- Event-driven architecture
- Smooth section transitions

## 📊 File Structure

```
valentine/
│
├── index.html          # Main HTML file
├── styles.css          # All styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎁 Easter Egg

There's a hidden surprise! Click the heart seal (💖) on the envelope **5 times** to reveal a special programmer's love message: "I love you more than bugs in my code ❤️"

## 💡 Tips

1. **Best Experience**: Use on desktop with speakers for music
2. **Mobile**: Works great on mobile, but some hover effects are tap-based
3. **Dark Mode**: Perfect for evening romantic moments
4. **Photos**: Add your real photos to make it more personal
5. **Music**: Choose a special song that means something to both of you

## 🐛 Troubleshooting

**Music won't play automatically?**
- Most browsers block autoplay. Click anywhere on the page to start the music.
- Use the music control button in the top-left corner.

**Animations not smooth?**
- Ensure you're using a modern browser (Chrome, Firefox, Safari, Edge)
- Close other heavy applications for better performance

**Images not showing?**
- Check file paths if you added custom images
- Ensure images are in the same directory or update paths accordingly

## 📝 License

This is a personal project created with love. Feel free to use and customize it for your own romantic occasions! 💕

## 💌 Credits

Created with ❤️ for Ishan by Udari
Happy Valentine's Day! 🌹

---

**Made with pure HTML, CSS, and JavaScript - No frameworks needed!**

*Remember: The best gift is one made with love and personal touches. Customize this website to make it uniquely yours!* 💖✨
