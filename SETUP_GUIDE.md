# 🎂 Birthday Website Setup Guide

## How to Add Your Photos, Stories & Audio

### 1️⃣ Add Photos
1. Create a folder: `src/assets/photos/`
2. Add your photos there (name them: `family1.jpg`, `family2.jpg`, etc.)
3. Import them in components (see PhotoGallery.tsx for example)

**Alternative (easier):** Place photos in `public/photos/` folder and they'll be accessible directly.

### 2️⃣ Add Audio Files
1. Create a folder: `public/audio/`
2. Add your MP3 files (name them: `memory1.mp3`, `memory2.mp3`, etc.)
3. The website will automatically play them when photos are clicked!

### 3️⃣ Edit Memories & Stories
Open `src/data/memories.ts` and update:

```typescript
export const memories: Memory[] = [
  {
    id: 1,
    photo: "family1.jpg",  // ← Your photo name
    story: "Your sweet Hinglish story here...",  // ← Your story
    audio: "/audio/memory1.mp3"  // ← Your audio file
  },
  // Add more memories...
];
```

### 4️⃣ Edit Timeline Memories
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

### 5️⃣ Edit Special Message Section
Open `src/components/SpecialMessage.tsx` and customize the paragraphs.

## 📁 Folder Structure
```
public/
  ├── audio/              ← Put MP3 files here
  │   ├── memory1.mp3
  │   ├── memory2.mp3
  │   └── ...
  └── photos/             ← Put photos here (optional)
      ├── family1.jpg
      └── ...

src/
  ├── data/
  │   └── memories.ts     ← Edit stories & timeline here
  └── components/
      └── ...
```

## 🎨 Customization Tips

### Change Colors
Edit `src/index.css` - look for the `:root` section:
- `--primary`: Main pink color
- `--cream`: Background cream
- `--gold`: Gold accents

### Add More Photos
Just add more objects to the `memories` array in `src/data/memories.ts`

### Remove Audio
If you don't want audio for a photo, just remove or comment out the `audio` line:
```typescript
{
  id: 1,
  photo: "family1.jpg",
  story: "Story...",
  // audio: "/audio/memory1.mp3"  ← Commented out
}
```

## 🚀 Testing Locally
1. Add your photos to `public/photos/`
2. Add your audio to `public/audio/`
3. Update `src/data/memories.ts`
4. Refresh the page!

## 💝 Notes
- All audio files are optional
- You can add as many photos as you want
- Stories can be in pure Hinglish - make them personal!
- The confetti animation plays automatically on photo click

---

**Made with pyaar ❤️**
