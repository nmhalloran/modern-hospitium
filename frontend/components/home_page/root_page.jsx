import React from 'react';
import { withRouter } from 'react-router-dom';

class RootPage extends React.Component {
  render() {
    return (
      <div>
        <section className="mod-join">
          <h2 className="big-text over-face">
            Stay with Local and Meet Travelers
          </h2>
          <h3 className="mod-join-sub">
            Share Authentic Travel Experiences
          </h3>
        </section>
        <section className="mod-testimonials image-overlay">
          <h2 className="big-text in-testimonial">
            Why Join?
          </h2>
          <hr className="mod-short mod-white" />

          <div className='info-box-container'>
            <div className="info-box">
              <article>
                <img className="info-image" src="https://imgur.com/Cobvnym.png"/>
                <h3 className="info-box-title">On Surfing</h3>
                <hr className="mod-short mod-white" />
                <p>   We shall defend our island, whatever the cost may be, we shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender. <br/><br/>
                - Winston Churchill
                </p>
              </article>
            </div>
            <div className="info-box">
              <article>
                <img className="info-image" src="https://imgur.com/xzALBme.png" />
                <h3 className="info-box-title">On Community</h3>
                <hr className="mod-short mod-white" />
                <p> Criticism may not be agreeable, but it is necessary. It fulfils the same function as pain in the human body. It calls attention to an unhealthy state of things.<br/><br/>
                -Winston Churchill
                </p>
              </article>
            </div>
            <div className="info-box">
              <article>
                <img className="info-image" src="https://imgur.com/3Grq6VN.png" />
                <h3 className="info-box-title">On Hosting</h3>
                <hr className="mod-short mod-white" />
                <p> Want of foresight, unwillingness to act when action would be simple and effective, lack of clear thinking, confusion of counsel until the emergency comes, until self-preservation strikes its jarring gong - these are the features which constitute the endless repetition of history. <br/><br/>
                -Winston Churchill
                </p>
              </article>
            </div>
          </div>
          </section>
      </div>
    );
  };
}

export default RootPage
