import HeroSection from "@/components/HeroSection"; 
import PhotoGallery from "@/components/PhotoGallery"; 
import VideoMemories from "@/components/VideoMemories"; 
import Timeline from "@/components/Timeline"; 
import SpecialMessage from "@/components/SpecialMessage"; 
import WishWall from "@/components/WishWall";
import Footer from "@/components/Footer"; 
import BackgroundMusicPlayer from "@/components/BackgroundMusicPlayer"; 

const Index = () => { 
  return ( 
    <div className="min-h-screen font-body"> 
      <BackgroundMusicPlayer /> 
      <HeroSection /> 
      <PhotoGallery /> 
      <VideoMemories /> 
      <Timeline /> 
      <SpecialMessage /> 
      <WishWall />
      <Footer /> 
    </div> 
  ); 
}; 

export default Index;
