import React from "react";
import background from '../../images/background.png'
import './css/main.css';
import hero from '../../images/hero-bg.png'
import laptop from '../../images/laptop.png'

import ball1 from '../../images/ball1.png'
import ball2 from '../../images/ball2.png'
import ball3 from '../../images/ball3.png'
import ball4 from '../../images/ball4.png'
import ball5 from '../../images/ball5.png'

import cube from '../../images/3dcube.svg'

const HeroSection = () => {
  return (
    <div id="home" >
        <div className="bannerStyle">
			<div className="">
				<img className="particleOne section-particle" src={ball1} alt="" />
				<img className="particleTwo section-particle" src={ball2} alt="" />
				<img className="particleThree section-particle" src={ball3} alt="" />
				<img className="particleFour section-particle" src={ball4} alt="" />
				<img className="particleFive section-particle" src={ball5} alt="" />

				<div className="containerStyle">
					<img className="bannerThumb" src={cube} alt="" />
					<div className="rowStyle">
						<div className="colStyle">
							<div className="bannerContent">
								<h1 className="heading">
									The most trusted
									<br />
									Digital asset exchange
								</h1>
								<p style={{color: 'rgb(190, 171, 223)'}} className="smallText">
								The highly the not having with lively. Our up with ran go her <br/> it gloomy the back, though however projected not for six with <br /> then, trusted as concepts belt.
								</p>
								<div className="inputBox">
									<div className="inputWrapper">
										<input placeholder="Enter your email" type="text" name="" className="sInput"/>
									
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

    </div>
  );
};

export default HeroSection;
