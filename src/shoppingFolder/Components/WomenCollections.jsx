import React from "react";

const WomenCollections = (props) =>{
    const {title, image1, image2, image3, image4, image5, image6} = props.ladiesFashion
    return(
        <div className="collectionSection">
            <h2>
                {title}
            </h2>
        <div className="bannerBox">
            <img src="assets/womenBanner.jpeg" alt="" />
        </div>
        <div className="womenImages">
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
            <img src={image5}/>
            <img src={image6}/>
        </div>

        </div>
    )
}

export default WomenCollections;