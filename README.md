# Apartment Veve - Vacation Rental Website

A modern, responsive website for Apartment Veve, a luxury vacation rental in Privlaka, Croatia.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Gallery**: Click on images to view them in a modal
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Easy-to-use contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Lazy loading images and optimized assets

## Project Structure

```
apveve/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Image assets (placeholders included)
│   ├── hero-bg.jpg
│   ├── apartment-exterior.jpg
│   ├── living-room.jpg
│   ├── bedroom.jpg
│   ├── kitchen.jpg
│   ├── bathroom.jpg
│   ├── balcony.jpg
│   └── beach.jpg
└── README.md           # This file
```

## Getting Started

1. **Clone or download** this repository
2. **Replace placeholder images** with actual photos of your apartment
3. **Update contact information** in `index.html`:
   - Change email address in the contact section
   - Update Google Calendar embed URL
4. **Customize content** as needed
5. **Open `index.html`** in a web browser to view the site

## Customization

### Colors

The website uses CSS variables for easy color customization. Edit these in `css/styles.css`:

```css
:root {
    --primary-color: #50b3a2;
    --secondary-color: #e8491d;
    --dark-color: #333;
    --light-color: #f4f4f4;
    --white: #ffffff;
    --text-color: #555;
}
```

### Content

All content can be edited directly in `index.html`. The website is organized into sections:

- Hero Section
- About Section
- Gallery Section
- Facilities Section
- Nearby Attractions
- Policies Section
- Availability Section
- Contact Section

### Images

Replace the placeholder SVG images in the `/images` folder with actual photographs:

- **hero-bg.jpg**: Main hero background image (recommended size: 1920x1080px)
- **apartment-exterior.jpg**: Exterior view (recommended size: 800x600px)
- **living-room.jpg**: Living room photo
- **bedroom.jpg**: Bedroom photo
- **kitchen.jpg**: Kitchen photo
- **bathroom.jpg**: Bathroom photo
- **balcony.jpg**: Balcony with sea view
- **beach.jpg**: Nearby beach

### Google Calendar

To integrate your availability calendar:

1. Go to Google Calendar
2. Create a calendar for your rental availability
3. Get the embed code
4. Replace the iframe `src` in the availability section of `index.html`

## Features Explained

### Mobile Navigation

The mobile menu automatically activates on screens smaller than 768px. It includes:
- Hamburger menu animation
- Smooth slide-in effect
- Click outside to close
- Auto-close when clicking on links

### Image Gallery Modal

Click any gallery image to view it in a fullscreen modal:
- Click outside or press ESC to close
- Zoom animation on open
- Responsive sizing

### Contact Form

The contact form currently uses `mailto:` functionality. For production:
- Consider integrating with a backend service
- Use services like Formspree, EmailJS, or your own server
- Update the email address in both HTML and JavaScript

### Smooth Scrolling

All anchor links smoothly scroll to their target sections, accounting for the fixed navbar height.

### Back to Top Button

A floating button appears when scrolling down, allowing users to quickly return to the top of the page.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Optimize images before uploading (use tools like TinyPNG)
2. Consider using WebP format for better compression
3. Enable gzip compression on your server
4. Use a CDN for faster global delivery
5. Minify CSS and JavaScript for production

## Deployment

This is a static website and can be deployed to:

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Easy deployment with continuous integration
- **Vercel**: Fast deployment platform
- **Traditional Web Hosting**: Upload files via FTP
- **AWS S3**: For scalable hosting

### Quick Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to repository Settings
3. Navigate to Pages
4. Select your branch and root folder
5. Your site will be live at `https://yourusername.github.io/apveve`

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Google Fonts (Poppins)
- SVG for icons and placeholders

## License

This project is free to use for personal and commercial purposes.

## Support

For questions or issues, please open an issue in the repository or contact the developer.

---

**Note**: Remember to replace all placeholder content, images, and contact information before deploying to production!
