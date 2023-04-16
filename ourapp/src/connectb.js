import React from 'react';
import './connectb.css';
function Connectb() {
  return (
    <section className="client_section layout_padding-bottom">
    <div className="container">
      <div className="heading_container">
        <h3 className='tt'>
          Connect with plant parents
        </h3>
      </div>
    </div>

    <div className="container">
      <div className="client_container layout_padding2">
        <div className="client_box b-1">
          <div className="client-id">
            <div className="img-box">
              <img src={require('./clint1.png')} />
            </div>
            <div className="name">
              <h5>
                Pooja Baldev
              </h5>
              <p>
                Housewife
              </p>
            </div>
          </div>
          <div className="detail">
            <p>
            I grow plants for many reasons: to please my eye or to please my soul, to challenge the elements or to challenge my patience, for novelty or for nostalgia, but mostly for the joy in seeing them grow
            </p>
            <div>
              <div className="arrow_img">
              </div>
            </div>
          </div>
        </div>
        <div className="client_box b-3">
          <div className="client-id">
            <div className="img-box">
            <img src={require('./clint2.png')} />
            </div>
            <div className="name">
              <h5>
                Olivia Jones
              </h5>
              <p>
                Artist
              </p>
            </div>
          </div>
          <div className="detail">
            <p>
            I grow plants for many reasons: to please my eye or to please my soul, to challenge the elements or to challenge my patience, for novelty or for nostalgia, but mostly for the joy in seeing them grow
            </p>
            <div>
              <div className="arrow_img">
              </div>
            </div>
          </div>
        </div>
        <div className="client_box b-2">
          <div className="client-id">
            <div className="img-box">
            <img src={require('./clint3.png')} />
            </div>
            <div className="name">
              <h5>
                Arun Sharma
              </h5>
              <p>
                IT employee
              </p>

            </div>
          </div>
          <div className="detail">
            <p>
            A person who is growing a garden, if he is growing it organically, is improving a piece of the world.
            </p>
            <div>
              <div className="arrow_img">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}

export default Connectb;