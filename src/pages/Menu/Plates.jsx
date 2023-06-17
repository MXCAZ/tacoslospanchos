import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Menu.css";

import tacoAsada from "../../components/images/asada.jpeg";
import tacoCamaron from "../../components/images/camaron.jpeg";
import tacoAdobada from "../../components/images/adobada.jpeg";
import allPlates from "../../components/images/all-plates.jpeg";
import shrimpBurrito from "./images/shrimpBurrito.jpeg";
import adobadaBurrito from "./images/adobadaBurrito.jpeg";
import asadaBurrito from "./images/asadaBurrito.jpeg";
import veggieBurrito from "./images/veggieBurrito.jpeg";
import quesabirrias from "./images/quesabirrias.jpeg";
import coctelCam from "./images/coctelCam.jpeg";
import flautas from "./images/flautas.jpeg";
import friedTacos from "./images/friedTacos.jpeg";
import greenEnchiladas from "./images/greenEnchiladas.jpeg";
import redEnchiladas from "./images/redEnchiladas.jpeg";
import summerSalad from "./images/summerSalad.jpeg";

const Plates = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prevScale) => prevScale + 0.01);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prevScale) => prevScale - 0.04);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="menuContainer">
      <h1 style={{ textAlign: "center", color: "#d3462e" }}>Our Best Plates</h1>
      <br />

      <h2 style={{ textAlign: "center", color: "#d3462e" }}>
        Best Tacos in Utah
      </h2>
      <br />

      <motion.div
        className="platesContainer"
        initial={{ opacity: 0, scale: 0, x: 200 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}>
        <div className="firstImageContainer">
          <div className="firstLaneImage">
            <div className="cardFood">
              <div className="imgbox">
                <img
                  src={allPlates}
                  alt="taco"
                  style={{ transform: `scale(${scale})` }}
                />
              </div>

              <div className="content">
                <h3 style={{ color: "#fff", textAlign: "center" }}>
                  All Our Plates
                </h3>
                <p style={{ textAlign: "center" }}>
                  Welcome to Tacos Los Panchos, where a world of exceptional
                  Mexican cuisine awaits you right here in Utah. Step into our
                  vibrant and inviting restaurant, where the tantalizing aromas
                  of traditional spices and savory delights envelop you from the
                  moment you arrive. Prepare to embark on a culinary adventure
                  that will transport your taste buds to the heart of Mexico
                </p>
              </div>
            </div>
          </div>

          <div className="firstLaneSecondImage">
            <div className="cardFood">
              <div className="imgbox">
                <img src={tacoAsada} alt="taco" />
              </div>
              <div className="content">
                <h2 style={{ color: "#fff", textAlign: "center" }}>
                  Taco Asada
                </h2>
                <p style={{ textAlign: "center" }}>
                  "Asada, expertly grilled to perfection, nestled on a bed of
                  soft, golden Corn Tortillas. As you take your first bite, the
                  succulent flavors of the juicy Asada dance across your palate,
                  tantalizing your senses. The vibrant medley of fresh cilantro
                  and finely diced onions adds a delightful crunch and a burst
                  of herbaceous aroma.",
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="secondImageContainer">
          <div className="firstLaneSecondImage">
            <div className="cardFood">
              <div className="imgbox">
                <img src={tacoAdobada} alt="taco" />
              </div>
              <div className="content">
                <h2 style={{ color: "#fff", textAlign: "center" }}>
                  Taco Pastor
                </h2>
                <p style={{ textAlign: "center" }}>
                  "Tender Adobada, marinated to perfection, nestled on a bed of
                  warm, soft Corn Tortillas. The aroma of freshly chopped
                  cilantro and onions dances in the air, inviting you to take a
                  bite. Each savory mouthful is a symphony of flavors, as the
                  rich, succulent Adobada harmonizes with the vibrant freshness
                  of cilantro and onions. Brace yourself for a sensory adventure
                  that will transport you to the streets of Mexico."
                </p>
              </div>
            </div>
          </div>
          <div className="firstLaneImage">
            <div className="cardFood">
              <div className="imgbox">
                <img
                  src={tacoCamaron}
                  alt="taco"
                  style={{ transform: `scale(${scale})` }}
                />
              </div>
              <div className="content">
                <h2 style={{ color: "#fff", textAlign: "center" }}>
                  Taco Camaron
                </h2>
                <p style={{ textAlign: "center" }}>
                  "Delight your senses as succulent shrimp, perfectly cooked to
                  tender perfection, grace a bed of warm, soft Corn Tortillas.
                  The vibrant green of fresh cilantro and the crisp bite of
                  diced onions add a delightful freshness that elevates each
                  bite. But that's not all—prepare for a burst of creamy
                  indulgence as ripe avocado lends its velvety texture to these
                  delectable tacos. With every mouthful, you'll be transported
                  to coastal shores",
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <br />
      <h2 style={{ textAlign: "center", color: "#d3462e", margin: "50px" }}>
        Specialty Plates
      </h2>
      <br />

      <motion.div
        className="platesContainer"
        initial={{ opacity: 0, scale: 0, x: 200 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}>
        <div className="firstImageContainer">
          <div className="firstLaneImage">
            <div className="cardFood">
              <div className="imgbox">
                <img
                  src={coctelCam}
                  alt="taco"
                  style={{ transform: `scale(${scale})` }}
                />
              </div>

              <div className="content">
                <h2 style={{ color: "#fff", textAlign: "center" }}>
                  Shrimp Cocktail
                </h2>
                <p style={{ textAlign: "center" }}>
                  Indulge in the refreshing and tantalizing flavors of our
                  Shrimp Cocktail, a delightful seafood appetizer that will
                  transport your taste buds to the seaside. This culinary
                  masterpiece begins with plump, succulent shrimp that are
                  expertly cooked to perfection, resulting in a tender texture
                  and a burst of natural sweetness. The shrimp are then
                  delicately arranged in a glass, nestled in a bed of crisp
                  iceberg lettuce. Our signature cocktail sauce adds a tangy and
                  slightly spicy kick, perfectly complementing the sweetness of
                  the shrimp.
                </p>
              </div>
            </div>
          </div>

          <div className="firstLaneSecondImage">
            <div className="cardFood">
              <div className="imgbox">
                <img src={quesabirrias} alt="taco" />
              </div>
              <div className="content">
                <h2
                  style={{
                    color: "#fff",
                    textAlign: "center",
                  }}>
                  QuesaBirrias
                </h2>

                <p style={{ textAlign: "center" }}>
                  "A true delight for taco enthusiasts. Our quesabirrias are a
                  tantalizing fusion of Mexican flavors, featuring tender,
                  slow-cooked beef that melts in your mouth. Prepared with a
                  blend of aromatic spices and seasonings, the meat is then
                  expertly shredded and tucked into a warm tortilla. But the
                  magic doesn't stop there. Our quesabirrias are elevated to a
                  whole new level of indulgence with a generous amount of melted
                  cheese, creating a mouthwatering combination of savory beef
                  and gooey, golden goodness."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="secondImageContainer">
          <div className="firstLaneSecondImage">
            <div className="cardFood">
              <div className="imgbox">
                <img src={flautas} alt="taco" />
              </div>
              <div className="content">
                <h2 style={{ color: "#fff", textAlign: "center" }}>Flautas</h2>
                <p style={{ textAlign: "center" }}>
                  "A delightful Mexican dish that will tantalize your taste
                  buds. Crispy and golden, flautas are rolled tortillas filled
                  with a savory mixture of tender, seasoned meat or flavorful
                  vegetables. These little delights are expertly fried to
                  perfection, creating a satisfying crunch with every bite. each
                  flauta is bursting with delicious flavors and textures. Join
                  us and indulge in the irresistible allure of flautas, a
                  delightful treat that will leave you craving for more."
                </p>
              </div>
            </div>
          </div>
          <div className="firstLaneImage">
            <div className="cardFood">
              <div className="imgbox">
                <img
                  src={friedTacos}
                  alt="taco"
                  style={{ transform: `scale(${scale})` }}
                />
              </div>
              <div className="content">
                <h2 style={{ color: "#fff", textAlign: "center" }}>
                  Fried Tacos
                </h2>
                <p style={{ textAlign: "center" }}>
                  "Savor the irresistible crunch and delectable flavors of our
                  Fried Tacos with Rice and Beans, a mouthwatering feast that
                  will satisfy your cravings for Mexican comfort food. These
                  golden and crispy fried tacos are filled with a savory
                  combination of seasoned ground meat, perfectly cooked until
                  juicy and flavorful. Each bite is a delightful explosion of
                  textures, as the crispy shell gives way to the succulent and
                  seasoned filling. ",
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="firstImageContainer">
          <div className="firstLaneImage">
            <div className="cardFood">
              <div className="imgbox">
                <img
                  src={greenEnchiladas}
                  alt="taco"
                  style={{ transform: `scale(${scale})` }}
                />
              </div>

              <div className="content">
                <h2 style={{ color: "#fff", textAlign: "center" }}>
                  Green Enchiladas
                </h2>
                <p style={{ textAlign: "center" }}>
                  "Indulge in the mouthwatering flavors of our Chicken Green
                  Enchiladas, a delightful Mexican dish that will take your
                  taste buds on a flavorful journey. These enchiladas are filled
                  with tender, seasoned shredded chicken, expertly cooked to
                  perfection. Each tortilla is carefully rolled and smothered in
                  a vibrant and tangy green enchilada sauce, made from a
                  delightful blend of tomatillos, green chilies, and aromatic
                  spices. The sauce imparts a zesty and refreshing flavor that
                  perfectly complements the savory chicken."
                </p>
              </div>
            </div>
          </div>

          <div className="firstLaneSecondImage">
            <div className="cardFood">
              <div className="imgbox">
                <img src={redEnchiladas} alt="taco" />
              </div>
              <div className="content">
                <h3 style={{ color: "#fff", textAlign: "center" }}>
                  Red Enchiladas
                </h3>
                <p style={{ textAlign: "center" }}>
                  "Delight in the bold and comforting flavors of our Red Cheese
                  Enchiladas. These enchiladas are a celebration of rich, gooey
                  cheese wrapped in a blanket of warm, flavorful red enchilada
                  sauce. The tortillas are filled with a delectable blend of
                  melted cheeses, such as cheddar, Monterey Jack, or queso
                  fresco, which creates a creamy and indulgent filling. ",
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <br />
      <h2 style={{ textAlign: "center", color: "#d3462e", margin: "50px" }}>
        Our Famous Burritos
      </h2>
      <br />

      <motion.div
        className="platesContainer"
        initial={{ opacity: 0, scale: 0, x: 200 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.6 }}>
        <div className="firstImageContainer">
          <div className="firstLaneImage">
            <div className="cardFood">
              <div className="imgbox">
                <img
                  src={shrimpBurrito}
                  alt="taco"
                  style={{ transform: `scale(${scale})` }}
                />
              </div>

              <div className="content">
                <h2 style={{ color: "#fff", textAlign: "center" }}>
                  Shrimp Burrito
                </h2>
                <p style={{ textAlign: "center" }}>
                  our Shrimp Burrito, a seafood lover's dream wrapped in a
                  tortilla. This delectable creation features succulent,
                  perfectly seasoned shrimp as the star ingredient. Each shrimp
                  is tenderly cooked to perfection, boasting a delicate texture
                  and a burst of savory flavors. Wrapped in a warm flour
                  tortilla, the shrimp is accompanied by a delightful medley of
                  fresh ingredients, including crisp lettuce, juicy tomatoes,
                  and creamy avocado. Drizzled with a zesty sauce and topped
                  with a sprinkle of cilantro
                </p>
              </div>
            </div>
          </div>

          <div className="firstLaneSecondImage">
            <div className="cardFood">
              <div className="imgbox">
                <img src={asadaBurrito} alt="taco" />
              </div>
              <div className="content">
                <h3
                  style={{
                    color: "#fff",
                    textAlign: "center",
                  }}>
                  Burrito Asada
                </h3>

                <p style={{ textAlign: "center" }}>
                  "Treat yourself to the mouthwatering flavors of our Asada
                  Burrito, a true delight for meat lovers. This culinary
                  masterpiece showcases tender and perfectly grilled steak as
                  its centerpiece. Each succulent bite of the marinated steak is
                  bursting with smoky, savory goodness that will leave you
                  craving more. The rich flavors of the steak harmonize with the
                  vibrant accents of the accompanying toppings, creating a
                  symphony of tastes with every bite. satisfied."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="secondImageContainer">
          <div className="firstLaneSecondImage">
            <div className="cardFood">
              <div className="imgbox">
                <img src={adobadaBurrito} alt="taco" />
              </div>
              <div className="content">
                <h3 style={{ color: "#fff", textAlign: "center" }}>
                  Burrito al Pastor
                </h3>
                <p style={{ textAlign: "center" }}>
                  "Experience the tantalizing flavors of our Al Pastor Burrito,
                  a culinary journey inspired by traditional Mexican cuisine.
                  Our Al Pastor Burrito showcases tender and marinated pork that
                  has been slow-roasted to perfection, resulting in juicy,
                  flavorful meat that melts in your mouth. Each bite is a
                  harmony of smoky, sweet, and savory notes that will transport
                  you to the streets of Mexico. Wrapped in a warm flour
                  tortilla, the succulent pork is complemented by a colorful
                  medley of toppings"
                </p>
              </div>
            </div>
          </div>
          <div className="firstLaneImage">
            <div className="cardFood">
              <div className="imgbox">
                <img
                  src={veggieBurrito}
                  alt="taco"
                  style={{ transform: `scale(${scale})` }}
                />
              </div>
              <div className="content">
                <h2 style={{ color: "#fff", textAlign: "center" }}>
                  Vegetarian Burrito
                </h2>
                <p style={{ textAlign: "center" }}>
                  "Delight in the wholesome flavors of our Vegetarian Burrito, a
                  delicious choice for plant-based enthusiasts and flavor
                  seekers alike. This delightful creation features a vibrant
                  assortment of fresh vegetables, carefully selected and
                  prepared to perfection. Every bite of our Vegetarian Burrito
                  is a celebration of crisp bell peppers, tender zucchini,
                  flavorful onions, and a medley of other seasonal vegetables,
                  all sautéed to retain their natural textures and flavors. ",
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Plates;
