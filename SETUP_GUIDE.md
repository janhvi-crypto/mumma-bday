# 🎂 Birthday Website Setup Guide

## 📂 How to Upload Files to GitHub

### Method 1: Using GitHub Web Interface (Easiest)
1. Go to your GitHub repository
2. Navigate to the folder where you want to add files:
   - For photos: Click on `public` folder, then create/open `photos` folder
   - For videos: Click on `public` folder, then create/open `videos` folder
   - For audio: Click on `public` folder, then create/open `audio` folder
3. Click "Add file" → "Upload files"
4. Drag and drop your files or click "choose your files"
5. Scroll down and click "Commit changes"
6. Your files will be uploaded and the website will update automatically!

### Method 2: Using Git Commands (If you know Git)
```bash
git clone [your-repo-url]
cd [your-repo-name]
# Add your files to the appropriate folders
git add .
git commit -m "Added photos/videos/audio"
git push
```

## How to Add Your Photos, Stories & Audio

### 1️⃣ Add Photos
**Steps:**
1. In your GitHub repo, go to `public` folder
2. Create a folder called `photos` (if it doesn't exist)
3. Upload your photos (name them: `family1.jpg`, `family2.jpg`, etc.)
4. Update `src/data/memories.ts` with your photo filenames and stories

### 2️⃣ Add Audio Files
**Steps:**
1. In your GitHub repo, go to `public` folder
2. Create a folder called `audio` (if it doesn't exist)
3. Upload your MP3 files (name them: `memory1.mp3`, `memory2.mp3`, `background-music.mp3`)
4. The website will automatically play them!

**Special Audio Files:**
- `background-music.mp3` - Plays continuously in the background (optional)
- `memory1.mp3`, `memory2.mp3`, etc. - Play when photos are clicked

### 3️⃣ Add Video Files
**Steps:**
1. In your GitHub repo, go to `public` folder
2. Create a folder called `videos` (if it doesn't exist)
3. Upload your MP4 video files (name them: `memory1.mp4`, `memory2.mp4`, etc.)
4. Update `src/data/memories.ts` with your video filenames and captions

### 4️⃣ Edit Memories & Stories
Open `src/data/memories.ts` and update:

**For Photos:**
```typescript
export const memories: Memory[] = [
  {
    id: 1,
    photo: "/photos/family1.jpg",  // ← Your photo path
    story: "Your sweet Hinglish story here...",  // ← Your story
    audio: "/audio/memory1.mp3"  // ← Your audio file (optional)
  },
  // Add more memories...
];
```

**For Videos:**
```typescript
export const videoMemories: VideoMemory[] = [
  {
    id: 1,
    video: "/videos/memory1.mp4",  // ← Your video path
    title: "Video Title",  // ← Short title
    caption: "Your sweet Hinglish caption here..."  // ← Video caption
  },
  // Add more videos...
];
```

### 5️⃣ Edit Timeline Memories
In the same file, update `timelineMemories`:

```typescript
export const timelineMemories = [
  {
    icon: "Coffee",  // Options: Coffee, Gift, Heart, Star
    text: "Your sweet Hinglish message here...",
  },
  // Add more...
];
```

### 6️⃣ Edit Special Message Section
Open `src/components/SpecialMessage.tsx` and customize the paragraphs.

## 📁 Complete Folder Structure
```
public/
  ├── audio/                      ← Put MP3 files here
  │   ├── background-music.mp3   ← Background music (plays continuously)
  │   ├── memory1.mp3            ← Photo-specific audio
  │   ├── memory2.mp3
  │   └── ...
  ├── photos/                     ← Put photo files here
  │   ├── family1.jpg
  │   ├── family2.jpg
  │   └── ...
  └── videos/                     ← Put video files here
      ├── memory1.mp4
      ├── memory2.mp4
      └── ...

src/
  ├── data/
  │   └── memories.ts             ← Edit stories, videos & timeline here
  └── components/
      └── ...
```

## 🎨 Customization Tips

### Change Colors
Edit `src/index.css` - look for the `:root` section:
- `--primary`: Main pink color
- `--cream`: Background cream
- `--gold`: Gold accents

### Add More Photos/Videos
Just add more objects to the `memories` or `videoMemories` arrays in `src/data/memories.ts`

### Remove Audio
If you don't want audio for a photo, just remove or comment out the `audio` line:
```typescript
{
  id: 1,
  photo: "/photos/family1.jpg",
  story: "Story...",
  // audio: "/audio/memory1.mp3"  ← Commented out
}
```

### Disable Background Music
If you don't want background music, just don't upload `background-music.mp3` file or comment out the BackgroundMusicPlayer component in `src/pages/Index.tsx`.

## 🚀 Quick Start Guide
1. **Upload files to GitHub:**
   - Photos → `public/photos/`
   - Videos → `public/videos/`
   - Audio → `public/audio/`
2. **Edit the content:**
   - Update `src/data/memories.ts` with your stories and file paths
3. **Push changes to GitHub** (or commit via web interface)
4. **Your website updates automatically!** ✨

## 💝 Notes
- All audio files are optional
- You can add as many photos as you want
- Stories can be in pure Hinglish - make them personal!
- The confetti animation plays automatically on photo click

---

**Made with pyaar ❤️**
