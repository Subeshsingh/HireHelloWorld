import React, { Component, Fragment } from 'react';
import backgund1 from '../../assests/images/background/background-1.png';
import backgund2 from '../../assests/images/background/bg2.jpg';
import laptop from '../../assests/images/icons/laptop.png';
import mission from '../../assests/images/background/creativity.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun, faQuoteLeft,faUsers} from '@fortawesome/free-solid-svg-icons'
// import {Animated} from "react-animated-css";
import {Carousel}from 'react-bootstrap';
import './Main.css';

export class Main extends Component {

    render() {
        return (
        <Fragment>
        <div className="container-fluid slideTextImg">
             <Carousel controls={false} indicators={false} interval={3000} >
                 <Carousel.Item className="innertext">
                        <p>If you think you<strong> Deserve <br/>Better</strong></p>
                 </Carousel.Item>
                 <Carousel.Item className="innertext">
                        <p>If you think you can<strong> Work Hard</strong></p>
                 </Carousel.Item>
                 <Carousel.Item className="innertext">
                        <p>If you think you are bound <br/> by your <strong>Circumstances</strong></p>
                 </Carousel.Item>
                 <Carousel.Item className="innertext">
                        <p>If you dream to change your <strong>Life</strong></p>
                 </Carousel.Item>
                 <Carousel.Item className="innertext">
                        <p>We are here to <strong>Help</strong></p>
                 </Carousel.Item>
             </Carousel>
        </div>
        {/*------- Section--------------*/ }
       <section className="spacer yellow">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <blockquote className="large">
                           <FontAwesomeIcon icon={faQuoteLeft}/> Our circumstances are no barrier to our success.
                        </blockquote>
                    </div>
                    <div className="col">
                    <FontAwesomeIcon className="icon-10x" icon={faSun}/>
                    </div>
                </div>
            </div>
        </section>
    {/*------------------------mission------------------ */}
        <section id="about" class="section mission ">
		<div class="container">
			<h3>Our Mission</h3>
			<div class="row" >
				<div class="col-md-4">
					<div>
						<h2 className="belivesText">What we <strong>believe</strong> in?</h2>
						<p>
							Success isn't about how much money you make, it's about the difference 
							you make in people's lives.
						</p>
						<p>
							Our mission is to help those candidates who were not fortunate enough to get 
							their dream job during college placements due to lack of industry demanded skills
							and want to move bangalore for job search but currently they are not in the situation to 
							manage expenses in the giant city.
						</p>
					</div>
				</div>
				<div class="col-md-7">
					<div class="aligncenter">
						<img src={mission} className="missonImg"alt="mission-image" />
					</div>
				</div>
			</div>
		</div>
	</section>

    {/* ------------Services------------------------ */}
    
    <section id="services" className="section orange">
		<div className="container">
			<h3>Courses Offered</h3>
			<div className="row">
				<div className="col-sm">
					<div className="service-box">
						<div className="target"> 
							<img src={laptop} alt="" />
						</div>
						<div className="targetText">
						<h4>Full Stack Developer Kit</h4>
						</div>
						<p>Front-end kit with React js, Back-end kit with Node js and Server-side kit with AWS</p>
					</div>
				</div>
				<div className="col-sm">
					<div className="service-box">
						<div className="target"> 
							<img src={laptop} alt="" />
						</div>
						<div className="targetText">
							<h4>Resume Building Kit</h4>
						</div>	
						<p>Resume Building guide by Technical Recruiter</p>
					</div>
				</div>
				<div className="col-sm">
					<div className="service-box">
							 <div className="target"> 
								<img src={laptop} alt="" />
															</div>
							<div className="targetText">
								<h4>Placement Kit</h4>
							</div>
						<p>	Mock Coding Test, Technical Interviews and HR Interviews</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	{/* --------------- Quote-------------------- */}

	<section class="section bg3">
		<div class="container">
			<div class="row groupQuote">
				<div class="col-sm-12">
					<blockquote class="large">
					<FontAwesomeIcon icon={faQuoteLeft}/> We are a small tribe which shares a common dream of bringing huge change.
					</blockquote>
				</div>
				<div class="col-sm-12">
				<FontAwesomeIcon className="icon-10x iconpeopole" icon={faUsers}/>
				</div>
			</div>
		</div>
	</section>

	{/* --------------form----------- */}
	
    </Fragment>
        );
    }
}

export default Main

