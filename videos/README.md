# Video Background Setup

## 📁 Video File Requirements

To add your video background, place your video files in this `videos/` folder:

### Required Files:
- `hero-video.mp4` - Main video file (MP4 format)
- `hero-video.webm` - WebM format for better browser compatibility (optional but recommended)

### Video Specifications:
- **Format**: MP4 (H.264 codec) and/or WebM
- **Resolution**: 1920x1080 (Full HD) or higher
- **Duration**: 10-30 seconds (will loop automatically)
- **File Size**: Keep under 10MB for better loading performance
- **Aspect Ratio**: 16:9 recommended

### Video Content Tips:
- Use subtle, non-distracting backgrounds
- Avoid text or important visual elements in the video
- Consider using abstract patterns, technology themes, or subtle animations
- Ensure good contrast with white text overlay

## 🎬 How to Add Your Video:

1. **Rename your video file** to `hero-video.mp4`
2. **Place it in this folder** (`videos/hero-video.mp4`)
3. **Optional**: Convert to WebM format for better compatibility
4. **Refresh the webpage** to see your video background

## 🔧 Video Optimization:

### For Better Performance:
- Compress the video to reduce file size
- Use video editing software to trim to 10-30 seconds
- Consider using a video compression tool like HandBrake

### Recommended Tools:
- **HandBrake** - Free video compression
- **FFmpeg** - Command-line video processing
- **Online converters** - For format conversion

## 📱 Mobile Considerations:

- Videos may not autoplay on mobile devices due to browser restrictions
- The design includes fallback styling for when video doesn't load
- Consider using a shorter, smaller video file for mobile users

## 🎨 Fallback Options:

If video doesn't load, the hero section will use:
- Gradient background
- SVG pattern overlay
- All text and buttons remain fully functional
