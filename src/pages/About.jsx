import React from "react";
import Secheader from "./common/Secondaryheader";



const Tcards = (props) => {
	return (

		<figure className="figure col-md-3 text-center">
			<img src={props.timage} className="figure-img img-fluid rounded col-lg-6 col-7 col-md-10" alt="team3" />
			  <figcaption className="figure-caption text-dark">{props.ttitle}</figcaption>
		</figure>
	);
};

const About = () => {
	return (
		<>

		<Secheader 
			sectitle="About"  
		/>

		<section>
			<div className="container mx-auto py-5 col-lg-10 col-xl-9">
				<div className="mb-5 text-center">
					<p className="display-6 mb-1">Who We Are...</p>
				</div>
				<p>8BITS provides end-to-end business solutions that integrate latest technologies. We provide dynamic solutions for a dynamic environment where business and technology strategies lead to success. Our approach focuses to find new ways of business combining IT innovation and adoption while also utilizing an organization's current IT assets.</p>
				<p>8BITS invest on high quality and future secured technologies. We constantly work on identifying your business needs and developing innovative solutions that address them completely. We future secure your business by constantly updating you on the latest trends of the digital economy.</p>
			</div>
		</section>

		<section className="bg-light">
			<div className="container row py-5 m-auto col-lg-10 col-xl-9">
				<p className="display-6 text-center mb-4">Our Core Values</p>
				<p>1. IT infrastructure to support business growth.</p>
				<p>2. Agile solutions that deliver real business benefits.</p>
				<p>3. Assistance for IT professionals with project support.</p>
				<p>4. Additional support for existing IT teams.</p>
				<p>5. Comprehensive cyber security solutions for peace of mind.</p>
			</div>
		</section>
		
		</>
	);
};

export default About;