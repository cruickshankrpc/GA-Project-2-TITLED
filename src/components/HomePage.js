import React from 'react'
import { Controller, Scene } from 'react-scrollmagic'

const HomePage = () => {
  
  return <div className="homepage">
    <div className="titled">
      <h1> /titled </h1>
    </div>
    <Controller>
      <Scene >
        <div className="typewriter">
          <p><span className="text-1"><span id="statistic">85.4%</span> of the works in the collections of all major US museums belong to <span id="artists">white artists,</span></span></p>
          <p><span className="text-2"><span id="artists">African American</span> artists have <span id="statistic">1.2%</span></span></p>
        </div>
      </Scene>
    </Controller>

    <Controller>
      <Scene triggerHook={'onScroll'} classToggle={'fade-in'}>
        <div className="artistSpotlight">
          <h2> ARTIST SPOTLIGHT:</h2>
          <h3>ARCAMANORO NILES</h3>
          <p className="homePageArtistText">‘Born and raised in Washington, D.C., Niles continues to draw inspiration from his upbringing and his portraits 
        are based on family members, friends, or the artist himself. While his last body of work found his subjects depicted 
        outside of their homes, here Niles turns to interiors. Considering our emotional attachment to place, he positions 
        each character in a ‘safe’ space where they feel most comfortable and introspective. 
        
        A traditionally trained painter, Niles is heavily influenced by art history, specifically history painting and 
        portraiture. The poses of his characters and attention to light call to mind classical compositions yet Niles 
        disrupts these standards by using a highly saturated color palette over orange and blue grounds.’

          <a href="https://www.racheluffnergallery.com/exhibitions/detail/arcmanoro-niles/installation-stills" target="_blank" rel="noreferrer">
             Read more…</a>
          </p>
        </div>
      </Scene>
    </Controller>
  
    <div className="slider" >
      <img id="1" src="https://i.pinimg.com/564x/cd/ec/b4/cdecb4c88b223f347092ccb357712f07.jpg" alt="'My Heart is Like Paper, 2018'" />
      <img id="2" src="https://i.pinimg.com/564x/b9/c4/75/b9c475d002d0a3acae46e473f3849c53.jpg" alt="How Much of My Mother Has My Mother Left in Me, 2018" />
      <img id="3" src="https://www.racheluffnergallery.com/www_racheluffnergallery_com/ANI_59_PTG2.jpg" alt="" />
      <img id="4" src="https://www.racheluffnergallery.com/www_racheluffnergallery_com/ANI_55_PTG2.jpg" alt="" />
      <img id="5" src="https://www.racheluffnergallery.com/www_racheluffnergallery_com/ANI_44_PTG2.jpg" alt="bed" />
      <img id="6" src="https://www.racheluffnergallery.com/www_racheluffnergallery_com/ANI_52_PTG2.jpg" alt="baby" />
      <img id="7" src="https://i.pinimg.com/564x/b8/11/9d/b8119d8c26ec1f1d28915e45783b4d2c.jpg" alt="A Place for Me" />
      <img id="8" src="https://i.pinimg.com/564x/52/26/2a/52262a87529a5435f603ed7d10087ad0.jpg" alt="Trying Not to Feel the Trouble, 2018" />
      <img id="9" src="https://i.pinimg.com/564x/74/c2/bc/74c2bc9e3870bcf2ab9336d62105999f.jpg" alt="'You Give Your Love Away, 2018'" />
    </div>
  
    <footer>
      <small>All images © 2020 Artsy</small>
      <p id="by"> 4kir4 x SilkenTofu</p>
    </footer>
  </div>

 
}


export default HomePage