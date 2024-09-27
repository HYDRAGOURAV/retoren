import React from 'react'
import "../../public/css/footer.css";
import FB from "../../public/image/facebook.png";
import WP from "../../public/image/whatsapp.png";
import insta from "../../public/image/instagram.png";
import gmail from "../../public/image/gmail.png";
function footer() {
    return (
        <>
        <footer className="footer">
  	 <div className="container_footer">
  	 	<div className="row">
  	 		<div className="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">Reservations</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>Contact</h4>
  	 			<ul>
  	 				<li> <i></i><a href="#">123 Street, New York, USA</a></li>
  	 				<li><i></i><a href="#">+012 345 67890</a></li>
  	 				<li><i></i><a href="#">nfo@example.com</a></li>
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>online shop</h4>
  	 			<ul>
  	 				<li><a href="#">Monday - Saturday <br />
                       09AM - 09PM</a></li>
  	 				<li><a href="#">Sunday <br />
                       10AM - 08PM</a></li>
  	 			
  	 			</ul>
  	 		</div>
  	 		<div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><img src={WP} alt="" /></a>
  	 				<a href="#"><img src={insta} alt="" /></a>
  	 				<a href="#"><img src={gmail} alt="" /></a>
  	 				<a href="#"><img src={FB} alt="" /></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>
        </>
    )
}

export default footer
