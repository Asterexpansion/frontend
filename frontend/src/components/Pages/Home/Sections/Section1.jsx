import styles from "./Section1.module.scss";
import Navbar from "../../../navbar/Navbar";
import { useState } from "react";
import building1 from "../../../../assets/building1.jpg";
//import debounce from "lodash.debounce";

const Section1 = () => {
  const [price, setPrice] = useState("<100k");
  const [location, setLocation] = useState("");

  return (
    <section className={styles.section_1}>
      {/* NAVBAR */}
      <div className={styles.Navbar}>
        <Navbar BurgerColour={"whitesmoke"} />
      </div>

      {/* BACKGROUND IMAGES */}
      <div className={styles.img}></div>

      {/* SECTION 1 CONTENT */}
      <div className={styles.section_1_content}>
        {/* SLOGAN */}
        <div className={styles.slogan}>
          <h1>Easy Way To Find Your Dream House</h1>
          <p>
            Encuentra la propiedad de tus sueños en las mejores ubicaciones de México.
          </p>

          {/* SEARCH BOX */}
          <div className={styles.search_container}>
            {/* LOCATION */}
            <div className={styles.location_container}>
              <span>Location</span>
              <input
                type="text"
                placeholder="Enter a Location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            {/* PRICE RANGE */}
            <div className={styles.price_container}>
              <span>Price Range</span>
              <select
                name="Price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              >
                <option value="<100k">{`<100k`}</option>
                <option value="100k-200k">100k-200k</option>
                <option value="200k-500k">200k-500k</option>
                <option value=">500k">{`>500k`}</option>
              </select>
            </div>

            {/* SEARCH BUTTON */}
            <button className={styles.btn_search}>
              <a href="https://wa.me/524779083304?text=Me%20interesa%20asesoria%20personalizada%20por%20un%20consultor%20de%20Asterexpansion.com" target="noopener">Contáctanos</a>
            </button>
          </div>
        </div>

        {/* BUILDING IMAGE */}
        <div className={styles.slogan_image}>
          <img src={building1} alt="building" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
