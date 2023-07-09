import { useEffect, useState, useRef } from "react";

import "./Home.css";
import "@fontsource/roboto";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

import food from "./dataMenu";

import background from "./images/tacos.jpeg";

import image from "./images/all-plates.jpeg";
import image1 from "./images/plate1.jpeg";
import image2 from "./images/plate2.jpeg";
import image3 from "./images/plate3.jpeg";
import trailer from "./images/trailer.jpeg";

const Home = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const burritosPanchos = new URL(
    "./images/burritos-panchos.png",
    import.meta.url
  );

  const [openIndex, setOpenIndex] = useState(-1);

  const images = [image, image1, image2, image3, burritosPanchos];

  const rdmImages = [image, image2, image1, background];

  const [backgroundImages, setBackgroundImages] = useState(rdmImages);
  const [randomImage, setRandomImage] = useState(backgroundImages[0]);

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * Math.floor(4));
      setRandomImage(backgroundImages[randomIndex]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [backgroundImages]);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3pb4ym8",
        "template_1dtzrjj",
        form.current,
        "UtS5wF4XdHFhXqFWX"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Message its been send",
            showConfirmButton: true,
          });
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="homeContainer" key={image}>
      <motion.div
        className="presentation"
        initial={{ y: -500 }}
        whileInView={{ y: 0, transition: { duration: 1 } }}>
        <img
          id="imgBackground"
          src={randomImage}
          alt="foodImage"
          className="firstImage"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0, x: 200 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="title">
          <h1 style={{ textAlign: "center" }}>TACOS </h1>
          <h1 style={{ textAlign: "center" }}>LOS</h1>
          <h1>PANCHOS</h1>
        </motion.div>
      </motion.div>
      <section className="description">
        <div className="storyContainer">
          <motion.div
            initial={{ opacity: 0, y: -75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}>
            <img className="trailer" src={trailer} alt="trailer" />
          </motion.div>
          <motion.div
            className="text"
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.25 }}>
            <h2 style={{ textAlign: "center", color: "#fff" }}>About Us</h2>
            <br />
            <p
              className="welcome"
              style={{ color: "#fff", textAlign: "center" }}>
              Welcome to Tacos Los Panchos, where a world of exceptional Mexican
              cuisine awaits you right here in Utah. Step into our vibrant and
              inviting restaurant, where the tantalizing aromas of traditional
              spices and savory delights envelop you from the moment you arrive.
            </p>
            <br />
            <br />
            <p
              className="welcome"
              style={{ color: "#fff", textAlign: "center" }}>
              Prepare to embark on a culinary adventure that will transport your
              taste buds to the heart of Mexico. Indulge in the absolute best
              Mexican food that Utah has to offer. Our passion for authentic
              flavors and impeccable craftsmanship shines through in every dish
              we serve. From our signature shrimp tacos to a wide array of
              mouthwatering delicacies, each bite is a testament to our
              commitment to culinary excellence.
            </p>
          </motion.div>
        </div>
      </section>
      <motion.h2
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
        style={{ textAlign: "center", color: "#d3462e" }}>
        Our Best Plates
      </motion.h2>
      <motion.div
        className="carousel"
        ref={carousel}
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.25 }}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel">
          {food.map((food, index) => {
            const isOpen = index === openIndex;
            return (
              <div className="cardContainer">
                <div className="cardPlates" key={food.id}>
                  <div className="imgBox">
                    <img src={food.image} alt="" />
                  </div>
                  <div className="cardContent">
                    <h2>{food.title}</h2>
                    <p>{food.description}</p>
                    <a href="/Menu">See the menu</a>
                  </div>
                </div>
              </div>

              // <div className="card">
              //   <div
              //     className="item"
              //     key={food.id}
              //     onClick={() => setOpenIndex(isOpen ? -1 : index)}>
              //     <img src={food.image} alt="food" className="tacos-image" />

              //     {isOpen && (
              //       <div className="info">
              //         <h2>{food.title}</h2>
              //         <br />
              //         <p className="welcome">{food.description}</p>
              //       </div>
              //     )}
              //   </div>
              // </div>
            );
          })}
        </motion.div>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, x: 75 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
        style={{ textAlign: "center", color: "#d3462e" }}
        id="findUs">
        Our Location
      </motion.h2>
      <div className="location">
        <motion.div
          initial={{ opacity: 0, x: -75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3101.1701254126965!2d-112.3263440234391!3d38.988613471704795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874b5d5c777813bf%3A0x2ea2d828327b287e!2sTacos%20Los%20Panchos!5e0!3m2!1sen!2sus!4v1680641080760!5m2!1sen!2sus"
            style={{ border: 0 }}
            loading="lazy"
            className="iframe"></iframe>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="iframeContainer">
          <ul>
            <li>Tacos Los Panchos</li>
            <li>
              <i className="fa-solid fa-location-dot"></i> 915 N. Main St,
              Fillmore, UT 84631
            </li>
            <li>
              <i className="fa-solid fa-phone"></i> Tel: (435) 287-7219
            </li>
            <li>
              <i className="fa-solid fa-clock"></i> Monday to Saturday 11:00AM
              to 9:00PM
            </li>
            <li>
              <i className="fa-solid fa-calendar-xmark"></i> Sunday Closed
            </li>
          </ul>
        </motion.div>
      </div>
      <section className="contactBox">
        <motion.h2
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          style={{ color: "#d3462e" }}>
          Contact Us
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, x: 75 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="contact-box">
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="input-field"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              className="input-field"
            />

            <textarea
              type="text"
              name="message"
              placeholder="Your Message"
              cols="30"
              rows="10"
              required
              className="input-field textarea"></textarea>
            <button type="submit" className="formBtn">
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
