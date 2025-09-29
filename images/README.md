# Images Folder

## 📁 How to Add Images to Your Website

### **Step 1: Add Your Images Here**
Place your image files directly in this `images/` folder.

### **Step 2: Use Images in Your HTML**

#### **Method 1: Replace Existing Images**
Find the current image sources in your HTML and replace them:

```html
<!-- Current (using external URLs) -->
<img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" alt="Hero Image">

<!-- Replace with your local image -->
<img src="images/your-hero-image.jpg" alt="Hero Image">
```

#### **Method 2: Add New Images**
Add new image elements anywhere in your HTML:

```html
<img src="images/your-image.jpg" alt="Description of your image">
```

### **📋 Image Guidelines**

#### **Recommended Formats:**
- **JPG/JPEG** - For photos and complex images
- **PNG** - For images with transparency
- **WebP** - For modern browsers (smaller file sizes)
- **SVG** - For icons and simple graphics

#### **File Naming:**
- Use lowercase letters
- Use hyphens instead of spaces: `hero-image.jpg`
- Be descriptive: `team-photo.jpg`, `product-screenshot.png`

#### **Image Sizes:**
- **Hero Images**: 1920x1080px or larger
- **Feature Images**: 800x600px
- **Profile Photos**: 400x400px
- **Icons**: 64x64px or 128x128px

### **🎯 Where to Replace Images in Your Website**

#### **1. Hero Section Background**
```html
<!-- Current video background - you can also add a fallback image -->
<video class="hero-video" autoplay muted loop playsinline>
    <source src="videos/hero-video.mp4" type="video/mp4">
    <!-- Add fallback image if video fails -->
    <img src="images/hero-fallback.jpg" alt="Hero Background">
</video>
```

#### **2. Feature Cards**
```html
<!-- Replace the icon with your image -->
<div class="feature-image">
    <img src="images/ai-engine.jpg" alt="AI Engine">
</div>
```

#### **3. About Section**
```html
<!-- Replace the current image -->
<img src="images/team-working.jpg" alt="Team working on project">
```

#### **4. Testimonials**
```html
<!-- Replace profile images -->
<img src="images/sarah-johnson.jpg" alt="Sarah Johnson">
```

### **🔧 Image Optimization Tips**

#### **Before Adding Images:**
1. **Resize** images to appropriate dimensions
2. **Compress** images to reduce file size
3. **Use descriptive filenames**
4. **Add alt text** for accessibility

#### **Recommended Tools:**
- **Photoshop** - Professional image editing
- **GIMP** - Free alternative to Photoshop
- **TinyPNG** - Online image compression
- **Squoosh** - Google's image optimization tool

### **📱 Responsive Images**

For better performance, you can add responsive images:

```html
<picture>
    <source media="(min-width: 768px)" srcset="images/hero-desktop.jpg">
    <source media="(max-width: 767px)" srcset="images/hero-mobile.jpg">
    <img src="images/hero-desktop.jpg" alt="Hero Image">
</picture>
```

### **🎨 Common Image Placements**

1. **Hero Section**: `images/hero-bg.jpg`
2. **About Section**: `images/team-photo.jpg`
3. **Feature Cards**: `images/feature-1.jpg`, `images/feature-2.jpg`
4. **Testimonials**: `images/client-1.jpg`, `images/client-2.jpg`
5. **Services**: `images/service-1.jpg`, `images/service-2.jpg`
6. **Footer**: `images/logo.png`

### **📂 Folder Structure**
```
images/
├── hero-bg.jpg          # Hero section background
├── team-photo.jpg       # About section team photo
├── feature-1.jpg        # Feature card images
├── feature-2.jpg
├── feature-3.jpg
├── client-1.jpg         # Testimonial photos
├── client-2.jpg
├── service-1.jpg        # Service images
├── service-2.jpg
└── logo.png            # Company logo
```

### **🚀 Quick Start**

1. **Add your images** to this `images/` folder
2. **Open your HTML file** in a text editor
3. **Find image URLs** (they start with `https://images.unsplash.com/`)
4. **Replace them** with `images/your-image-name.jpg`
5. **Save and refresh** your browser

That's it! Your images will now load from your local folder instead of external URLs.
