import React from 'react';


const ProfileCard = ({ imageSrc, profession, price, name, address, about, status }) => {
  return (
    <div className="card">
      <div className="p1">
        <img src={imageSrc} alt="" />
        <p id="profession">{profession}</p>
        <p id="price">{price}</p>
      </div>
      <div className="p2">
        <div className="info">
          <p id="name">{name}</p>
          <p id="address">
            <i className="fa-sharp fa-solid fa-location-dot"></i>
            {address}
          </p>
          <p id="about">{about}</p>

          <div className="buttons">
            <button id="viewcv">VIEW CV</button>
            <br />
            <button id="makeoffer">MAKE OFFER</button>
          </div>

          <p className="status">{status}</p>
        </div>
      </div>
    </div>
  );
};

const UserProfileCards = () => {
  return (
    <div className="container">
      <ProfileCard
        imageSrc="Images/image5.jpg"
        profession="Film Director"
        price="$14/hour"
        name="Ashutosh Indapure,51"
        address="New York, United States"
        about="Ashutosh was born in New York and brought up in Los Angeles"
        status={<><i className="fa-solid fa-circle" style={{ color: '#0cf708' }}></i> Online</>}
      />

      <ProfileCard
        imageSrc="Images/image-Kathy.png"
        profession="Actor, Film Director"
        price="$9/hour"
        name="Baltasar Kormakur, 52"
        address="Reykjavik, Iceland"
        about="Iceland actor, theater and film director and film producer."
        status="Last seen: 22 minutes ago"
      />

      <ProfileCard
        imageSrc="Images/image6.png"
        profession="Actor, Singer"
        price="$12/hour"
        name="Daniel Abraham, 48"
        address="Canberra, Australia"
        about="Brilliant Actor and Outstanding Singer."
        status="Seen long time ago"
      />
    </div>
  );
};

export default UserProfileCards;
