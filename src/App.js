import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const toggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="contents">
        <h1>ACCESS THE HIGHEST-QUALITY REAL ESTATE INVESTMENTS</h1>
        <button id="myBtns" onClick={togglePopup}>
          INVEST NOW
        </button>
      </div>
      <div className="content">
        <h1>Steffan Capital</h1>
      </div>
      <div className="video-container">
        {isMobile ? (
          <div className="poster-image">
            <img src="/poster.png" alt="Video Poster" />
          </div>
        ) : (
          <ReactPlayer
            url="/new.mp4"
            playing={isVideoPlaying}
            loop={true}
            muted={true}
            width="100%"
            height="100%"
            playsInline={true}
            config={{
              file: {
                attributes: {
                  autoPlay: 'true',
                  muted: 'true',
                  playsInline: 'true',
                },
              },
            }}
          />
        )}
      </div>
        <div style={{ fontSize: '10px', color: 'black', margin: '10px' }}>
  Investing involves risk, including loss of principal. Past performance does not guarantee or indicate future results. Any historical returns, expected returns, or probability projections may not reflect actual future performance. While the data we use from third parties is believed to be reliable, we cannot ensure the accuracy or completeness of data provided by investors or other third parties. Neither Cardone Capital nor any of its affiliates provide tax advice and do not represent in any manner that the outcomes described herein will result in any particular tax consequence. Offers to sell, or solicitations of offers to buy, any security can only be made through official offering documents that contain important information about investment objectives, risks, fees, and expenses. Prospective investors should consult with a tax or legal adviser before making any investment decision.

  For our current Regulation A offering(s), no sale may be made to you in this offering if the aggregate purchase price you pay is more than 10% of the greater of your annual income or net worth (excluding your primary residence, as described in Rule 501(a)(5)(i) of Regulation D). Different rules apply to accredited investors and non-natural persons. Before making any representation that your investment does not exceed applicable thresholds, we encourage you to review Rule 251(d)(2)(i)(C) of Regulation A. For general information on investing, we encourage you to refer to <a href="https://www.investor.gov" target="_blank" rel="noopener noreferrer">www.investor.gov</a>.
</div>
  
      {isPopupVisible && (
        <div className={`popup ${isMobile ? 'mobile' : ''}`}>
          <h2>SEND THE AMOUNT YOU WANT TO INVEST TO:</h2>
          <p>Bitcoin: 1DdfAdYF6E1awJ9cXDYjbT2Pq6sNCX9Am6</p>
          <p>OR</p>
          <p>ETH: 0x32ee767697d09286BE1D8f75b96448CFc8AD94dc</p>
          <p>YOU WILL BE PAID A RETURN DIRECTLY TO THE WALLET YOU DEPOSITED WITH</p>

          <button onClick={togglePopup}>Close</button>
          
        </div>
        
      )}
    </>
  );
}

export default App;
