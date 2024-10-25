import React from 'react';
import Home from '@/components/Home'; 
import FunFacts from '@/components/FunFacts'; 
import Video from '@/components/Video'; 

function HomePage() { 
  return (
    <div>
      <Home /> 
      <FunFacts /> 
      <Video /> 
    </div>
  );
}

export default HomePage; 
