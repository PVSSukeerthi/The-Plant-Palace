import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Plants</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={require('.//aloevera .png')}
              text={<ul>
                <li className='name'>Aloe vera</li>
                        <li>Soil <span>loose, rocky, well-draining soil</span></li>
                        <li>Sunlight<span>bright and indirect sunlight</span></li>
                        <li>Water<span>Twice a week</span></li>
              </ul>}
              path='/services'
            />
            <CardItem
              src={require('.//crysa.png')}
              text={<ul>
                <li className='name'>Chrysanthemum</li>
                <li>Soil <span>well drained, sandy</span></li>
                <li>Sunlight<span> 6 hrs. of direct sunlight</span></li>
                <li>Water<span>every day or whenever soil seems dry</span></li>
             </ul>}
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={require('.//neem final.png')}
              text={<ul>
                <li className='name'>Neem</li>
                <li>Soil <span> rocky, dry, shallow, infertile soils</span></li>
                <li>Sunlight<span>indirect sunlight</span></li>
                <li>Water<span> once a week</span></li>
             </ul>}            
               path='/services'
            />
            <CardItem
             src={require('.//cila.png')}
              text={<ul>
                <li className='name'>Cilantro</li>
                <li>Soil <span>flight and well-drained  </span></li>
                <li>Sunlight<span>full sun</span></li>
                <li>Water<span>1 inch water per week</span></li>
             </ul>}
              path='/products'
            />
            <CardItem
                src={require('.//rose.png')}
              text={<ul>
                <li className='name'>Rose</li>
                <li>Soil <span> loam soil</span></li>
                <li>Sunlight<span>4 hrs of direct sunlight</span></li>
                <li>Water<span>2-3 days later</span></li>
             </ul>}
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;