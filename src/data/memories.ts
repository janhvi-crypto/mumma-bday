export interface Memory {
  id: number;
  photo: string;
  story: string;
  audio?: string;
}

export interface VideoMemory {
  id: number;
  video: string;
  title: string;
  caption: string;
}

// Add your photos in src/assets/photos/ folder
// Add your audio files in public/audio/ folder
export const memories: Memory[] = [
  {
    id: 1,
    photo: "/photos/family1.jpg",
    story: "Yeh wali photo Mussorie trip ki hai… Mei, aap aur yeh haseen vadiya ❤️",
    audio: "/audios/memory3.mp3"
  },
  {
    id: 2,
    photo: "/photos/family2.jpg", 
    story: " Cool Party, Cool Props 🌅",
   
  },
  {
    id: 3,
    photo: "/photos/family3.jpg",
    story: " Manali trip - first time snowfall experience. With Popatlal ka Umbrella lol ❤️",
    
  },
  {
    id: 4,
    photo: "/photos/family4.jpg",
    story: "  Shimla ki garmi badhne ka raaz kahin aap toh nhi :)",
  
  },
  {
    id: 5,
    photo: "/photos/family5.jpg",
    story: " Vaah, Vaah Kya acting ki hai ✨. Kasam se acting ke baadshah ho aap log hahah XD",
    
  }
];

export const timelineMemories = [
  {
    icon: "Coffee",
    text: "Mumma ki morning choco horlicks aur unka pyaar… sabse best combo ☕",
  },
  {
    icon: "Gift",
    text: "Papa ki smile + Mumma ke hugs = best combo ever 🎁",
  },
  {
    icon: "Heart",
    text: "Mumma ke bina ghar, ghar nahi… unki haathon ka khana hi sab kuch hai ❤️",
  },
  {
    icon: "Star",
    text: "Aap hi toh ho jo har din ko special banati ho Mumma ✨",
  },
];

// Add your video files in public/videos/ folder
export const videoMemories: VideoMemory[] = [
  {
    id: 1,
    video: "/videos/memory1.mp4",
    title: " Me aka aspring vlogger",
    caption: "Papa aur Mumma ke saath woh haseen pal… kuch khaas yaadon ka video 🎥❤️"
  },
  {
    id: 2,
    video: "/videos/memory2.mp4",
    title: "My first time-cooking instead of only 'eating'",
    caption: "Waah! meine momo ka kitna acha naamkaran kiya hai. 💖"
  },
  {
    id: 3,
    video: "/videos/memory3.mp4",
    title: "Together Forever",
    caption: "Horse riding for the 100th time in Kashmir (ab bas ho gya, ab agle janam tk nhi krungi) ✨"
  }
];
