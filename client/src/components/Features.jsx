import React from "react";
import './css/misc.css'
import './css/themify-icons.css';
import './css/main.css'
import { IoMdWallet} from "react-icons/io";

import svg3 from '../../images/download.svg'
import svg4 from '../../images/service2.svg'
import svg2 from '../../images/service3.svg'
import svg1 from '../../images/service4.svg'
 const Feature = () => {
    return (
     <div id="service" style={{marginTop: '2%'}}>
		 <div className="serviceContainerStyle">
		 	<div  style={{background: ' rgb(43, 24, 103);'}} className="serviceRowStyle">
		    	<div className="serviceColStyle">
					<div className="serviceBoxWrapper">
						<div className="featureRowStyle">
							<div className="imageWrapper">
								<div className="service-item">
									<img src={svg1} alt="" />
									<h3 className="headingF">ICO Finance</h3>
									<p className="textWrapper">The highly the not having with  <br /> lively Our up with.</p>
								</div>
							</div>
						</div>
					</div>
		 		</div>
				 <div className="serviceColStyle">
					<div className="serviceBoxWrapper">
						<div className="featureRowStyle">
							<div className="imageWrapper">
								<div className="service-item">
									<img src={svg2} alt="" />
									<h3 className="headingF">Blockchain Technology</h3>
									<p className="textWrapper">The highly the not having with  <br /> lively Our up with.</p>
								</div>
							</div>
						</div>
					</div>
		 		</div>
				 <div className="serviceColStyle">
					<div className="serviceBoxWrapper">
						<div className="featureRowStyle">
							<div className="imageWrapper">
								<div className="service-item">
									<img src={svg3} alt="" />
									<h3 className="headingF">Market status and news</h3>
									<p className="textWrapper">The highly the not having with  <br /> lively Our up with.</p>
								</div>
							</div>
						</div>
					</div>
		 		</div>
				 <div className="serviceColStyle">
					<div className="serviceBoxWrapper">
						<div className="featureRowStyle">
							<div className="imageWrapper">
								<div className="service-item">
									<img src={svg4} alt="" />
									<h3 className="headingF">Exchange Offer</h3>
									<p className="textWrapper">The highly the not having with  <br /> lively Our up with.</p>
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

  export default Feature;