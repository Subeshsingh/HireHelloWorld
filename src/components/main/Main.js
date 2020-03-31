import React, { Component, Fragment } from 'react';
import laptop from '../../assests/images/icons/laptop.png';
import mission from '../../assests/images/background/creativity.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSun, faQuoteLeft,faUsers} from '@fortawesome/free-solid-svg-icons'
import {Modal} from 'react-bootstrap'
import {Carousel}from 'react-bootstrap';
import './Main.css';
import {NavLink} from 'react-router-dom'
export class Main extends Component {
	state={
			show1:false,
			show2:false,
			show3:false
	}
	// methods for handling modals
	handleClose1=()=>{
			this.setState((prevState,props)=>({
				...prevState,
				show1: !this.state.show1
			}))
	}
	handleClose2=()=>{
		this.setState((prevState,props)=>({
			...prevState,
			show2: !this.state.show2
		}))
	}
	handleClose3=()=>{
		this.setState((prevState,props)=>({
			...prevState,
			show3: !this.state.show3
		}))
	}
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
	   <div className="breakerdiv"></div>
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
	<div className="breakerdiv"></div>
        <section id="about" className="section mission ">
		<div className="container">
			<h3>Our Mission</h3>
			<div className="row" >
				<div className="col-md-4">
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
						<img src={mission} className="missonImg"alt="mission" />
					</div>
				</div>
			</div>
		</div>
	</section>
	
{/* --------------- Quote-------------------- */}
	<div className="breakerdiv"></div>
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
	<div className="breakerdiv"></div>

{/* ------------Services------------------------ */}
    <section id="services" className="section orange">
		<div className="container">
			<h3>Courses Offered</h3>
			<div className="row">
				<div className="col-sm">
					<div className="service-box" onClick={this.handleClose1}>
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
					<div className="service-box" onClick={this.handleClose2}>
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
					<div className="service-box" onClick={this.handleClose3}>
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
{/* modal for service boxes */}
	<Modal id="serviceModal1" show={this.state.show1} onHide={this.handleClose1} size="lg" centered>
			<Modal.Body>
				<span className="modalButton" onClick={this.handleClose1}>&#10006;</span>
				<div className="container-fluid">
					<h5 className="modalHeading">Full Stack Development Kit</h5>
					<div className="contentDevider mb-2"></div>
					<div className="contentWrapper">
						<div className="frontEnd">
							<h6 className="contentHeading">Front End</h6>
							<div className="content">
								<h6>HTML5: </h6>
								<ul>
									<li> Basics of HTML(Elements, Attributes, Tags).</li>
									<li> HTML Semantics (Semantic tags in html).</li>
									<li> HTML forms. (Form elements and Input Attributes).</li>
									<li> Responsive HTML (Basics of responsive design, viewport, responsive properties).</li>
									<li> HTML apis (web storage, history, geolocations, web-workers etc).</li>
								</ul>
								<h6>CSS3: </h6>
								<ul>
									<li> Basics of CSS (How to add css, selector, declarations and various css properties). </li>
									<li> Advanced CSS (Flexbox, Box-sizing, Animation, Pagination, Media Queries).</li>
									<li> Responsive CSS (Viewport, Grid, Media Queries, Libraries(Bootstrap, Materialize etc). </li>
									<li> CSS Preprocessors (Less/ Sass). </li>
								</ul>
								<h6>CSS Libraries (Bootstrap, FontAwesome) : </h6>
								<ul>
									<li> Basics (Grid System, Containers, jumbotron and various bootstrap classes). </li>
									<li> Bootstrap Tables and Forms. </li>
									<li> Alerts, Progress bars, modals, accordion, navbar, popover, tootips etc. </li>
									<li> BS fonts and font awesome. </li>
								</ul>
								<h6>JQuery: </h6>
								<ul>
									<li> Basics of Jquery (Selectors and Events).</li>
									<li> Jquery Effects (Hide, Show, animate etc).</li>
									<li> Jquery Callbacks and Chaining. </li>
									<li> Jquery DOM Element and Attribute manipulation(set, add, remove etc).</li>
									<li> Jquery DOM Traversing (Parent, Siblings, Children etc). </li>
									<li> Jquery AJAX (Asynchronous calls to server).</li>
								</ul>
								<h6>React.js: </h6>
								<ul>
									<li> Basics of React (JSX, Render etc). </li>
									<li> Components and Props. </li>
									<li> States and Lifecycle. </li>
									<li> Event Handling.</li>
									<li> Conditional Rendering. </li>
									<li> Forms in React. </li>
									<li> Context API(redux & flux). </li>
									<li> Routing(react-router-dom). </li>
									<li> Hooks. </li>
									<li> Axios. </li>
									<li> Performance Optimization.</li>
									<li> Lazy Loading. </li>
									<li> Fetching data and Storing to storage.</li>
								</ul>
							</div>
						</div>
						<div className="contentDevider mb-2"></div>
						<div className="backEnd">
							<h6 className="contentHeading">BackEnd</h6>
							<div className="content">
								<h6>Node core concept: </h6>
								<ul>
									<li>Node modules, packages and versioning overview</li>
									<li>Overview of Blocking vs Non-Blocking execution </li>
									<li>Event loop and event driven architecture </li>
									<li>Node's single threaded ​architecture overview</li>
									<li>Node advantages and disadvantages</li>
									<li>MVC overview(Model, View and Controller) </li>
									<li>CORS overview and handling </li>
									<li>Middleware overview and use cases </li>
									<li>Sql vs No sql database </li>
									<li>Sql overview and hands on with complex queries </li>
								</ul>
								<h6>Project 1​: ​E-commerce catalog rendering </h6>
								<ul>
									<li>How to use postman for REST API endpoint testing </li>
									<li>Version Control overview and hands on </li>
									<li>Http Request types and http headers </li>
								</ul>
								<h6>Project 2:​ ​CRUD REST Api design and coding </h6>
								<ul>
									<li>Overview of Oauth client and server, Jwt token formation </li>
								</ul>
								<h6>Project 3:​ ​Design authentication service and implementation </h6>
								<ul>
									<li>Logstasher Implementation </li>
									<li>Database indexing concepts, when to use and when not to use. </li>
									<li>In-Memory database storage overview - Redis, Memcached </li>
									<li>Sql query result caching using In-Memory database storage </li>
									<li>Database connection pooling </li>
									<li>Deployment Overview </li>
								</ul>
								<h6>Server Side hands on: </h6>
								<ul>
									<li>Amazon ec2 instance overview and hands on configuring ec2 machine on aws </li>
									<li>Aws Vpc and security groups </li>
									<li>Nginx tool overview and reverse proxy implementation </li>
									<li>Log-rotation overview and linux service implementation</li>
									<li>Shell scripting overview and hands on </li>
									<li>Domain - A record and CNAME </li>
									<li>AWS Route53 configuration </li>
									<li>DNS resolution </li>
									<li>S3-bucket overview </li>
									<li>AWS Lambda overview and hands on </li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<NavLink className="btn btn-success btn-sm" to="/apply" onClick={this.handleClose1}>Apply</NavLink>	
				<button type="button" className="btn btn-danger btn-sm" onClick={this.handleClose1}>Close</button>
			</Modal.Footer>
	</Modal>
	<Modal id="serviceModal2" show={this.state.show2} onHide={this.handleClose2} size="lg" centered>
			<Modal.Body>
				<span className="modalButton" onClick={this.handleClose2}>&#10006;</span>
				<div className="container-fluid">
					<h5 className="modalHeading">Resume Building Kit</h5>
					<div className="contentDevider mb-2"></div>
					<div className="contentWrapper">
						<h6 className="contentHeading">Front End</h6>
						<div className="content">
							
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<NavLink className="btn btn-success btn-sm" to="/apply" onClick={this.handleClose2}>Apply</NavLink>	
				<button type="button" className="btn btn-danger btn-sm" onClick={this.handleClose2}>Close</button>
			</Modal.Footer>
	</Modal>
	<Modal id="serviceModal3" show={this.state.show3} onHide={this.handleClose3} size="lg" centered>
			<Modal.Body>
				<span className="modalButton" onClick={this.handleClose3}>&#10006;</span>
				<div className="container-fluid">
					<h5 className="modalHeading">Placement Kit</h5>
					<div className="contentDevider mb-2"></div>
					<div className="contentWrapper">
						<h6 className="contentHeading">Front End</h6>
						<div className="content">
							<ul>

							</ul>	
						</div>
					</div>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<NavLink className="btn btn-success btn-sm" to="/apply" onClick={this.handleClose3}>Apply</NavLink>	
				<button type="button" className="btn btn-danger btn-sm" onClick={this.handleClose3}>Close</button>
			</Modal.Footer>
	</Modal>
{/* --------------form----------- */}
  </Fragment> );
    }
}

export default Main

