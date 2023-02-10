import React from "react";
// import web from "../images/ST1.jpg"
import work1 from "../images/brands/client-1.jpg"
import work2 from "../images/brands/client-2.png"
import work3 from "../images/brands/client-3.png"
import work4 from "../images/brands/client-4.jpg"
import work5 from "../images/brands/client-5.png"
import product1 from "../images/products/cctv.jpg"
import product2 from "../images/products/xray.png"
import product3 from "../images/products/net.jpg"
import BusinessIcon from '@material-ui/icons/Business';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PhotoSizeSelectSmallIcon from '@material-ui/icons/PhotoSizeSelectSmall';


const Home = () => {
	return (
		<>
		<section className="sec_1"> 
			<div className="header_height sec_bg d-flex align-items-center">
				<div className="container">
					<div className="col-12 col-md-9 col-lg-6 py-5">
						<h1 className="hdrcolor">8 BITS</h1>
						<p className="text-white lead">For Your Structured Cabling, CCTV and IT Solutions</p>
						<button className="btn btn-lg col-lg-4 col-6 btn_custom btn_shadow">GET STARTED</button>
					</div>
				</div>
			</div>
		</section>

		<section> 
			<div className="container mx-auto py-5">
				<div className="mb-4 text-center">
					<p className="display-6 mb-1">Frequently Asked Questions</p>
					<p className="text-muted">The team at 8BITS proudly delivers superior service and quality to our clients throughout Philippines.</p>
				</div>
				<div className="row gy-5 d-flex align-items-center justify-content-evenly mt-0">
					<div className="col-md-4 col-lg-3 text-center">
						<div className="box_border position-relative rounded pt-5 pb-3 px-3">
							<div className="shp"><BusinessIcon /></div>
							<p className="mb-2 mt-4"> What is structured cabling?</p>
							<p className="text-muted text-left text-xl-center text-lg-center">A structured cabling system (SCS) includes not only data cables but also routers, switches and other standardised components; arranged in a unique structure that can provide reliable, consistent network coverage to all devices across your premises.</p>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 text-center">
						<div className="box_border position-relative rounded pt-5 pb-3 px-3">
							<div className="shp"><PhotoSizeSelectSmallIcon /></div>
							<p className="mb-2 mt-4">Why install structured cabling?</p>
							<p className="text-muted text-left text-xl-center text-lg-center">As well as providing all the infrastructure to run your organisation’s current networking activities, structured cabling also provides a solution for your future networking needs.</p>
						</div>
					</div>
					<div className="col-md-4 col-lg-3 text-center">
						<div className="box_border position-relative rounded pt-5 pb-3 px-3">
							<div className="shp"><AttachMoneyIcon /></div>
							<p className="mb-2 mt-4">Why is structured cabling better than conventional wiring?</p>
							<p className="text-muted text-left text-xl-center text-lg-center">Electrical wires allow for complex communication protocols (such as internet access) but come at a cost: you need someone who knows how to install them properly.</p>
						</div>
					</div>
				</div>
			</div>
		</section>


		<section> 
			<div className="container mx-auto py-5">
				<div className="mb-5 text-center">
					<p className="display-6 mb-1">Our Products</p>
					<p className="text-muted">High quality products that have proven their names in the industry.</p>
				</div>
				<div className="row gy-3 d-flex align-items-center justify-content-evenly">
					<div className="col-md-3 text-center">
						<div className="snip1534">
							<img className="img-fluid" alt="product1"  src={product1} />
							<div className="img_caption">
								<h6>CCTV</h6>
							</div>
						</div>
					</div>
					<div className="col-md-3 text-center">
						<div className="snip1534">
							<img className="img-fluid" alt="product2" src={product2} />
							<div className="img_caption">
								<h6>X-RAY INSPECTION SYSTEM</h6>
							</div>
						</div>
					</div>
					<div className="col-md-3 text-center">
						<div className="snip1534">
							<img className="img-fluid" alt="product3" src={product3} />
							<div className="img_caption">
								<h6>RUIKIE NETWORKS</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="bg-light"> 
			<div className="container mx-auto py-5">
				<div className="mb-5 text-center">
					<p className="display-6 mb-1">We Worked With...</p>
					<p className="text-muted">the reputable names in the industry.</p>
				</div>
				<div className="row gy-2 brands_logo d-flex align-items-center justify-content-evenly col-md-7 m-auto">
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company1" src={work1} />
					</div>
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company2" src={work2} />
					</div>
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company3" src={work3} />
					</div>
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company4" src={work4} />
					</div>
					<div className="col-md-3 col-4 col-lg-4 text-center">
						<img className="img-fluid" alt="company4" src={work5} />
					</div>
				</div>
			</div>
		</section>

		<section> 
			<div className="py-5">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12 col-md-9 col-lg-6 py-5 text-center">
						<p className="display-6 mb-1">Work with an elite team of thinkers.</p>
						<button className="btn p-2 btn_custom col-lg-3 col-md-5 col-6">GET IN TOUCH</button>
					</div>
				</div>
			</div>
		</section>

		</>
	);
};

export default Home;