import React from 'react'
import profile from "../../Assets/rohan.jpg";
import './Banner.css'

const RightBanner = () => {
    return (
        <div className="right-banner-container">
            <img
                className="right-banner-img"
                src={profile}
                alt="bannerImg"
            />
            {/* <div className="right-banner-overlay"></div> */}
        </div>
    );
}

export default RightBanner