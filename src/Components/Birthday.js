import React from 'react';
import './Birthday.css';
import Birthday1 from '../Components/images/john3.jpg';
import Birthday from '../Components/images/John.jpg';

import Img1 from '../Components/images143/IMG_20230905_182518.jpg';
import Img2 from '../Components/images143/IMG_20240203_204632.jpg';
import Img3 from '../Components/images143/IMG_20231005_184612.jpg';
import Img4 from '../Components/images143/IMG_20231122_214707.jpg';
import Img5 from '../Components/images143/IMG_20240203_205025.jpg';
import Img6 from '../Components/images143/IMG_20240519_200235.jpg';
import Img7 from '../Components/images143/IMG_20240522_144206.jpg';
import Img8 from '../Components/images143/IMG_20240506_205628.jpg';
import Img9 from '../Components/images143/IMG_20240203_154916.jpg';
import Img10 from '../Components/images143/IMG_20240315_140024.jpg';


const InvitationCard = () => {
  const invitation = {
    name: "JOHN",
  };

  const colors = [
    '142, 249, 252',
    '142, 252, 204',
    '142, 252, 157',
    '215, 252, 142',
    '252, 252, 142',
    '252, 208, 142',
    '252, 142, 142',
    '252, 142, 239',
    '204, 142, 252',
    '142, 202, 252'
  ];


    const images = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10
  ];

  
  return (
<div className="carousel-container">
<img
  src={Birthday1}
  alt="Birthday1"
  className="background-image"
/>

  <div className="center-image">
    <img
      src={Birthday}
  alt="Birthday"
  className="center-image"
    />
  </div>

  <h2 className="name-text">{invitation.name}</h2>

  <div className="carousel" style={{ '--quantity': colors.length }}>
    {colors.map((color, index) => (
      <div
        key={index}
        className="card"
        style={{
          '--index': index,
          '--color-card': color
        }}
      >
        <div className="img">
              <img src={images[index]} alt={`Card ${index}`} />
        </div>
     </div>
    ))}
  </div>
</div>

  );
};

export default InvitationCard;
