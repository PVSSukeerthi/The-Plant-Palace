import React from "react";
import "./garden.css";

function Garden(){
    return (
    <>
    <section class="hexagon-gallery">
      <div class="hex"><h2 className='plan'>Rose</h2><img src={require('../../rose.png')} alt="some"/></div>
      <div class="hex"><h2 className='plan'>Alovera</h2><img src={require('../../aloevera .png')} alt="some"/></div>
      <div class="hex"><h2 className='plan'>Crysanthemum</h2><img src={require('../../crysa.png')} alt="some"/></div>
      <div class="hex"><h2 className='plan'>Cilantro</h2><img src={require('../../cila.png')} alt="some"/></div>
      <div class="hex"><h2 className='plan'>Tomato</h2><img src={require('../../tomato final.png')} alt="some"/></div>
      <div class="hex"><h2 className='plan'>Curry leaves</h2><img src={require('../../curry leaves final.png')} alt="some"/></div>
      <div class="hex"><h2 className='plan'>Rose</h2><img src={require('../../rose.png')} alt="some"/></div>
      <div class="hex"></div>
      <div class="hex"></div>
      <div class="hex"></div>
    </section>
    </>
    );
}
export default Garden;