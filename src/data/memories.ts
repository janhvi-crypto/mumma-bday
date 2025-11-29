export interface Memory {
  id: number;
  photo: string;
  story: string;
  audio?: string;
}

// Add your photos in src/assets/photos/ folder
// Add your audio files in public/audio/ folder
export const memories: Memory[] = [
  {
    id: 1,
    photo: "family1.jpg",
    story: "Yeh wali photo Shimla trip ki hai… Mumma ki hasi ne poora din bright kar diya tha ❤️",
    audio: "/audio/memory1.mp3"
  },
  {
    id: 2,
    photo: "family2.jpg", 
    story: "Papa aur Mumma ke saath Sunday breakfast… sabse pyaari morning ritual 🌅",
    audio: "/audio/memory2.mp3"
  },
  {
    id: 3,
    photo: "family3.jpg",
    story: "Mumma ke haath ka khana… duniya ka best food! Koi hotel bhi nahi jeet sakta ❤️",
    audio: "/audio/memory3.mp3"
  },
  {
    id: 4,
    photo: "family4.jpg",
    story: "Garden mein baithkar chai peete hue… bas yahi pal kaafi hain 🍵",
    audio: "/audio/memory4.mp3"
  },
  {
    id: 5,
    photo: "family5.jpg",
    story: "Family time is the best time… Mumma ke bina sab incomplete hai ✨",
    audio: "/audio/memory5.mp3"
  }
];

export const timelineMemories = [
  {
    icon: "Coffee",
    text: "Mumma ki morning chai aur unka pyaar… sabse best combo ☕",
  },
  {
    icon: "Gift",
    text: "Papa ki smile + Mumma ke hugs = best combo ever 🎁",
  },
  {
    icon: "Heart",
    text: "Mumma ke bina ghar, ghar nahi… unki muskaan hi sab kuch hai ❤️",
  },
  {
    icon: "Star",
    text: "Aap hi toh ho jo har din ko special banati ho Mumma ✨",
  },
];
