import React from "react";
import "./css/bootstrap.min.css";
import "./css/bootstrap-5.0.0-alpha-1.min.css";
import "./css/main.css";
import "./css/animate.css";
import bg from '../../images/ethreum_bg.png'
import about from '../../images/about.svg'
const About = () => {
  return (
    <div id="about" style={{marginTop: '10%'}}>
		<div className="aboutContainerStyle">
			<div className="rowStyles">
				<div className="aboutColStyle">
					<img className="about-hero" style={{width: '100%', height: 'auto', display: 'block'}} src={about} alt="" />
				</div>

				<div className="aboutColStyle">
					<div className="boxWrapper">
						<div className="sectionTitleStyle">
							<div style={{marginLeft: '70px'}} className="sectiontitlestyle">
								<h1 className="BigHeading">
								Protecting investor with high  <br /> security
								</h1>
							</div>
							<p style={{marginTop: '27px', color: 'rgb(190, 171, 223)'}} className="smallText">
							Intended village pay like…. Discipline would, interesting that I off easier <br /> bathroom covered project the away, man you their by a temple prisoners. <br /> Have as her of your of in many, searched had class. Had with one entire <br /> children away. Problem got boss.
							</p>
						</div>
						<div className="box-wrapper-span">
							<span className="about-list">
							75% Distributed to Community.
							</span>
							<span className="about-list">
							13% Reserved Funding.
							</span>
							<span className="about-list">
							9% Founders and Team Management.
							</span>	
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  );
};

export default About;
