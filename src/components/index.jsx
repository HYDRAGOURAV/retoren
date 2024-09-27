import React, { useState,useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser,faUtensils,faCartPlus,faHeadset,faBurger,faMugHot,faComment, } from '@fortawesome/free-solid-svg-icons'
import "../../public/css/index.css";
import plat from "../../public/image/plate.png";
import FB from "../../public/image/facebook.png";
import WP from "../../public/image/whatsapp.png";
import insta from "../../public/image/instagram.png";
import resto from "../../public/image/resto.jpg";
import resto_one from "../../public/image/resto2.jpg";
import resto_two from "../../public/image/resto3'.jpg";
import resto_three from "../../public/image/resto4.jpg";
import burger from "../../public/image/chickenburger.jpeg";
import paneer from "../../public/image/paneer-tikka-masala-.webp";
import Dal from "../../public/image/dal.jpeg";
import Bchicken from "../../public/image/butturchicken.jpeg";
import margherita from "../../public/image/margherita.jpeg";
import biryani from "../../public/image/Biryani.jpeg";
import fried from "../../public/image/fried.jpg";
import egg from "../../public/image/egg.jpg";
import chef_one from "../../public/image/chef_one.jpg";
import chef_two from "../../public/image/chef_two.jpg";
import chef_three from "../../public/image/chef_three.jpg";
import chef_four from "../../public/image/chef_four.jpg";
import Rajma from "../../public/image/Rajma.jpeg";
import Pulao from "../../public/image/pulao.jpeg";
import Pao from "../../public/image/PaoBhaji.jpeg";
import Kadhi from "../../public/image/Kadhi.jpeg";
import DalB from "../../public/image/DalBati.jpeg";
import Masala from "../../public/image/MasalaKichdi.jpeg";
import Makke from "../../public/image/sarson.jpeg";
import Fish from "../../public/image/FishFry.jpeg";
import ADS from "../../public/image/restroads.mp4";
function index() {
  const ChangeP = [
    "Juicy patty, lettuce, tomato, cheese, toasted bun.",
    "Soft cottage cheese, rich gravy, Indian spices, herbs.",
    "Tender Panner, creamy tomato sauce, buttery goodness.",
    "Aromatic rice, spices, tender meat, flavorful, slow-cooked.",
    "Lentils, tempered spices, garlic, turmeric, comforting dish.",
    "Fresh mozzarella, basil, tomato sauce, thin crust.",
    "Crispy coating, juicy inside, deep-fried, seasoned perfectly.",
    "Boiled eggs, spiced curry, flavorful sauce, comforting meal."
  ]
  const PNew = [
    " Spiced kidney beans curry with rice.",
    "Fragrant rice with vegetables and spices.",
    " Buttered vegetable curry served with bread.",
    "Tangy yogurt curry with gram flour dumplings.",
    "Spiced lentils with baked wheat balls.",
    "Rice and lentils with mild spices.",
    "Mustard greens with cornmeal flatbread.",
    "Crispy spiced fish fried with breadcrumbs."
  ]
  const changePrice = [
    "59$",
    "49$",
    "49$",
    "29$",
    "79$",
    "100$",
    "119$",
    "179$",
  ]
  const NewPrice = [
    "129$",
    "159$",
    "148$",
    "50$",
    "50$",
    "99$",
    "119$",
    "99$",
  ]
  const contentForButtonOne = [
    "Rajma Chawal ",
    "Vegetable Pulao ",
    "Pav Bhaji",
    "Kadhi Pakora with Rice",
    "Daal Baati Churma",
    "Masala Khichdi",
    "SarsoKa Saag with Makke KiRoti",
    "Bengali-style Fish Fry",
  ];
  const contentForButtonTwo = [
    "chicken Burger",
    "Kadhai Paneer",
    "Paneer Tikka Masala",
    "Biryani",
    "Dal Makhani",
    "Margherita Pizza",
    "Fried Chicken",
    "Anda Curry "
  ];
  const contentForButtonOneImage = [
    Rajma,
    Pulao,
    Pao,
    Kadhi,
    DalB,
    Masala,
    Makke,
    Fish
  ];
  const contentForButtonTwoImage = [
    burger,
    paneer,
    Bchicken,
    biryani,
    Dal,
    margherita,
    fried,
    egg,

  ];
  const [price, setPrice] = useState(changePrice);
  const [P, setP] = useState(ChangeP);
  const [content, setContent] = useState(contentForButtonOne);
  const [ImageContent, setImageContent] = useState(contentForButtonOneImage);
  const changeDOM = () => {
    document.getElementById("menuBox3").style.background = "transparent";
    document.getElementById("menuBox2").style.background = "red";
    setContent(contentForButtonOne);
    setImageContent(contentForButtonOneImage)

    setP(PNew)
    setPrice(changePrice)
  };
  // second
  const changeItem = () => {
    document.getElementById("menuBox3").style.background = "red";
    document.getElementById("menuBox2").style.background = "transparent";
    setContent(contentForButtonTwo);
    setImageContent(contentForButtonTwoImage)
    setPrice(NewPrice)
    setP(ChangeP)
  };
  // from Data 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    numberOfPeople: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };


  // scroll event ---------------------------------------------------------------------------------------------------------------------
  const [count, setCount] = useState(1); 
  const [isScrolling, setIsScrolling] = useState(false); 
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);  // Detect scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    let interval;
    if (isScrolling) {
      //  increase the count
      interval = setInterval(() => {
        setCount((prevCount) => {
          if (prevCount < 15) {
            return prevCount + 1;
          } else {
            return 1;  
          }
        });
      }, 150);  // Increase 
    }
    // stop Karne Ka 
    if (count === 15) {
      setIsScrolling(false);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count, isScrolling]);


  //   sliding

  const slides = [
    { name: 'Ananya Sharma', text: 'The food was absolutely delicious! The spices were just right, and the presentation was beautiful. The staff was warm and welcoming. I ll definitely be visiting again!' },
    { name: 'Rajesh Kumar', text: 'A great experience! The ambiance was perfect for a family dinner, and the service was attentive. The biryani was especially flavorful. Highly recommend this place!' },
    { name: 'Priyal', text: 'Loved the variety on the menu, especially the vegetarian options. The paneer tikka was a standout dish. The service could have been a bit faster, but the food made up for it.' },
    { name: 'Moni', text: 'The restaurant had a vibrant atmosphere, and the tandoori dishes were cooked to perfection. The staff was courteous, but there was a slight delay in service. Still, a great dining experience overall.' },
    { name: 'Neha Gupta ', text: 'This place is amazing! The chaat was authentic and reminded me of street food in Delhi. The desserts, especially the gulab jamun, were a perfect way to end the meal' },
    { name: 'Arjun', text: 'I really enjoyed the meal. The butter chicken was creamy and rich, and the naan was soft and fresh. The ambiance was a bit loud, but the food made it worth the visit.' },
    { name: 'Shreya Gosh', text: 'A lovely dining experience! The dosa was crispy, and the sambar was perfectly spiced. The service was quick, and the staff was very polite. Will definitely recommend to friends' },
    { name: 'MiniCat', text: 'The food was authentic, and the portions were generous. The masala chai was a nice touch after a hearty meal. The decor could use a little upgrade, but overall a good experience' },
    { name: 'Daniel', text: 'Beautiful ambiance with traditional Indian decor. The fish curry was flavorful and perfectly spiced. The staff made great recommendations. I’m looking forward to my next visit!' }
  ];
  const slidesToShow = 3;
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    if (currentIndex + slidesToShow < slides.length) {
      setCurrentIndex(currentIndex + slidesToShow);
    }
  };
  const handlePrev = () => {
    if (currentIndex - slidesToShow >= 0) {
      setCurrentIndex(currentIndex - slidesToShow);
    }
  };
  AOS.init()
  return (
    <>
      <div className="container">
        <div className="dataBox" id="dataBox1">
          <div>
            <h1>Enjoy Our Delicious Meal</h1>
            <p>
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
          </div>
        </div>
        <div className="dataBox" id="dataBox2">
          <div>
            <img src={plat} alt="" />
          </div>
        </div>
      </div>

      <section>
        <div className="boxes">
          <div className="box" data-aos="fade-up" data-aos-duration="500" id="Box_1"><div className="box_data">
          <FontAwesomeIcon className="Icons" icon={faUser} />
          <h1>Master Chefs</h1>
          <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p></div></div>
          <div className="box" data-aos="fade-up" data-aos-duration="1000" id="Box_2"><div className="box_data">
          <FontAwesomeIcon className="Icons" icon={faUtensils} />
          <h1>Master Chefs</h1>
          <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p></div></div>
          <div className="box" data-aos="fade-up" data-aos-duration="1500" id="Box_3"><div className="box_data">
          <FontAwesomeIcon className="Icons" icon={faCartPlus} />
          <h1>Master Chefs</h1>
          <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p></div></div>
          <div className="box" data-aos="fade-up" data-aos-duration="2000" id="Box_4"><div className="box_data">
          <FontAwesomeIcon className="Icons" icon={faHeadset} />
          <h1>Master Chefs</h1>
          <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p></div></div>
        </div>
      </section>

      <section>
        <div className="about_box">
          <div className="the_about_boxes" id="the_about_boxes1">
            <div className="design_box">
              <div className="D_box" id="D_box1" data-aos="zoom-in"  data-aos-duration="500" >
                <img src={resto} alt="" />
              </div>
              <div className="D_box" id="D_box2" data-aos="zoom-in"  data-aos-duration="1500">
                <img src={resto_one} alt="" />
              </div>
              <div className="D_box" id="D_box3" data-aos="zoom-in"  data-aos-duration="3500">
                <img src={resto_two} alt="" />
              </div>
              <div className="D_box" id="D_box4" data-aos="zoom-in"  data-aos-duration="2500">
                <img src={resto_three} alt="" />
              </div>
            </div>
          </div>
          <div className="the_about_boxes" id="the_about_boxes2">
            <div>
              <h2> ─── ⋆⋅about us⋅⋆ ──  </h2>
              <h1>Welcome to Restoran</h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit. Tempor erat elitr rebum at clita. Diam dolor diam
                ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                lorem et sit, sed stet lorem sit clita duo justo magna dolore
                erat amet
              </p>
              <div className="num">
                <div className="num_one">
                  <h1>
                    {count} <span>Years of Experience</span>
                  </h1>
                </div>
                <div className="num_one">
                  <h1>
                    50 <span>Popular Master Chefs</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="options">
        <div className="Heading_div">
          <h1> ─── ⋆⋅F00D Menu⋅⋆ ── </h1>
          <h2> Most Popular Items</h2>
          <div className="BigMenu" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  data-aos-duration="3000" >
            <div className="menuBox" id="menuBox1">
              <div>
                <i><FontAwesomeIcon className="MenuIcons" icon={faMugHot} /></i>
                <h2>Popular Breakfast</h2>
              </div>
            </div>
            <div className="menuBox" onClick={changeDOM} id="menuBox2">
              <div>
                <i><FontAwesomeIcon className="MenuIcons" icon={faBurger} /></i>
                <h2>Special Launch</h2>
              </div>
            </div>
            <div className="menuBox" id="menuBox3" onClick={changeItem}>
              <div>
                <i> <FontAwesomeIcon className="MenuIcons" icon={faUtensils} /></i>
                <h2>Lovely &nbsp; Dinner</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="DishMenu">
          <div className="girdSection">
            <div className="item" id="item1">
              <div className="item_menu" data-aos="zoom-in">
                <img src={ImageContent[0]} alt="..." />
                <div>
                  <div className="flexItem">
                    <h1>{content[0]}
                    </h1>
                    <h2>{price[0]}</h2>
                  </div>
                  <hr />
                  <p>
                    {P[0]}
                  </p>
                </div>
              </div>
            </div>
            <div className="item" id="item2" data-aos="zoom-in">
              <div className="item_menu">
                <img src={ImageContent[1]} alt="..." />
                <div>
                  <div className="flexItem">
                    <h1>          {content[1]}
                    </h1>
                    <h2>{price[1]}</h2>
                  </div>
                  <hr />
                  <p>
                    {P[1]}                  </p>
                </div>
              </div>
            </div>
            <div className="item" id="item3" data-aos="zoom-in">
              <div className="item_menu">
                <img src={ImageContent[2]} alt="..." />
                <div>
                  <div className="flexItem">
                    <h1>{content[2]}</h1>
                    <h2>{price[2]}</h2>
                  </div>
                  <hr />
                  <p>
                  {P[2]}
                  </p>
                </div>
              </div>
            </div>
            <div className="item" id="item4" data-aos="zoom-in">
              <div className="item_menu">
                <img src={ImageContent[3]} alt="..." />
                <div>
                  <div className="flexItem">
                    <h1>{content[3]}</h1>
                    <h2>{price[3]}</h2>
                  </div>
                  <hr />
                  <p>
                  {P[3]}
                  </p>
                </div>
              </div>
            </div>
            <div className="item" id="item5" data-aos="zoom-in">
              <div className="item_menu">
                <img src={ImageContent[4]} alt="..." />
                <div>
                  <div className="flexItem">
                    <h1>{content[4]}</h1>
                    <h2>{price[4]}</h2>
                  </div>
                  <hr />
                  <p>
                  {P[4]}
                  </p>
                </div>
              </div>
            </div>
            <div className="item" id="item6" data-aos="zoom-in">
              <div className="item_menu">
                <img src={ImageContent[5]} alt="..." />
                <div>
                  <div className="flexItem">
                    <h1>{content[5]}</h1>
                    <h2>{price[5]}</h2>
                  </div>
                  <hr />
                  <p>
                  {P[5]}
                  </p>
                </div>
              </div>
            </div>
            <div className="item" id="item7" data-aos="zoom-in">
              <div className="item_menu">
                <img src={ImageContent[6]} alt="..." />
                <div>
                  <div className="flexItem">
                    <h1>{content[6]}</h1>
                    <h2>{price[6]}</h2>
                  </div>
                  <hr />
                  <p>
                  {P[6]}
                  </p>
                </div>
              </div>
            </div>
            <div className="item" id="item8" data-aos="zoom-in">
              <div className="item_menu">
                <img src={ImageContent[7]} alt="..." />
                <div>
                  <div className="flexItem">
                    <h1>{content[7]}</h1>
                    <h2>{price[7]}</h2>
                  </div>
                  <hr />
                  <p>
                  {P[7]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <section className="bookTable"  data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
        <div className="DataBox" id="DataBox1">
          <video controls autoPlay loop muted className="VID">
        <source src={ADS} type="video/mp4"/>
        Your browser does not support the video tag.
      </video></div>
        <div className="DataBox" id="DataBox2">
        <div className="form-container">
      <h2 className="form-title">Reservation Form</h2>
      <h1>Book a Table Online </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="numberOfPeople">Number of People:</label>
            <input
              type="number"
              id="numberOfPeople"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="4"
            className="form-textarea"
          ></textarea>
        </div>

        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
        </div>
      </section>

      <section className="chefSection">
        <br />
        <br />
        <div className="heading_chef">
          <h1> ─── ⋆⋅Team Member⋅⋆ ── </h1>
          <h2>Our Master Chefs</h2>
        </div>
        <div className="chef_box">
          <div className="chefData" id="chefData1">
            <div className="Pic">
              <img src={chef_one} alt="sd" />
              <h1>Joohn Kena </h1>
              <h2>USA</h2>
              <div className="icons_">
              <i><img src={insta} alt="" /></i>
              <i><img src={FB} alt="" /></i>
              <i><img src={WP} alt="" /></i>
            </div>
            </div>
          </div>
          <div className="chefData" id="chefData2" data-aos="fade-up"
     data-aos-duration="1000">
            {" "}
            <div className="Pic">
              <img src={chef_two} alt="sd" />
              <h1>Joohn Kena </h1>
              <h2>USA</h2><div className="icons_">
              <i><img src={insta} alt="" /></i>
              <i><img src={FB} alt="" /></i>
              <i><img src={WP} alt="" /></i>
            </div>
            </div>
          </div>
          <div className="chefData" id="chefData3"  data-aos="fade-up"
     data-aos-duration="2000"   >
            {" "}
            <div className="Pic">
              <img src={chef_three} alt="sd" />
              <h1>Joohn Kena </h1>
              <h2>aus</h2>
              <div className="icons_">
              <i><img src={insta} alt="" /></i>
              <i><img src={FB} alt="" /></i>
              <i><img src={WP} alt="" /></i>
            </div>
            </div>
          </div>
          <div className="chefData" id="chefData4" data-aos="fade-up"
     data-aos-duration="3000">
            {" "}
            <div className="Pic">
              <img src={chef_four} alt="sd" />
              <h1>Joohn Kena </h1>
              <h2>USA</h2>
              <div className="icons_">
              <i><img src={insta} alt="" /></i>
              <i><img src={FB} alt="" /></i>
              <i><img src={WP} alt="" /></i>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* client Reactions  */}
      <section className="slider" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" >
      <div className="slider-container">
      <button className="prev-btn" onClick={handlePrev} disabled={currentIndex === 0}>
        ‹
      </button>
      <div className="slider-wrapper">
        {slides.slice(currentIndex, currentIndex + slidesToShow).map((slide, index) => (
          <div className="slide" key={index}>
           <div className="slide_heading">
             <i><FontAwesomeIcon className="MenuIcons" icon={faComment} /></i>
           <p>{slide.text}</p>
           <h3>{slide.name}</h3> 
           </div>
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={handleNext} disabled={currentIndex + slidesToShow >= slides.length}>
        ›
      </button>
    </div>
      </section>
    </>
  );
}

export default index;
