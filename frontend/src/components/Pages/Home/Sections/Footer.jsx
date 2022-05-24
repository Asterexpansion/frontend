import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <ul className={styles.brand}>
        <li>
          <span>Aster Expansión</span>
        </li>
        <li>
          <span>Ubicación</span>
        </li>
        <li>
          <span>Contáctanos: +524779083304</span>
        </li>
        <li>
          <div className={styles.socials}>
            <Link to="https://www.instagram.com/asterexpansion">
              <AiOutlineInstagram />
            </Link>
            <Link to="/">
              <AiOutlineFacebook />
            </Link>
            <Link to="/">
              <AiOutlineTwitter />
            </Link>
          </div>
        </li>
      </ul>

      <ul className={styles.services}>
        <li>
          <span>Servicios</span>
        </li>
        <li>
          <Link to="buy">Compra</Link>
        </li>
        <li>
          <Link to="rent">Pre venta</Link>
        </li>
        <li>
          <Link to="search">¿Quiénes somos?</Link>
        </li>
      </ul>

      <ul className={styles.company}>
        <li>
          <span>Compañía</span>
        </li>
        <li>
          <Link to="/about">¿Quiénes somos?</Link>
        </li>
        <li>
          <Link to="/">Contáctanos</Link>
        </li>
        <li>
          <Link to="/">Nuestro equipo</Link>
        </li>
      </ul>

      <ul className={styles.support}>
        <li>
          <span>Support</span>
        </li>
        <li>
          <Link to="/">FAQ's</Link>
        </li>
        <li>
          <Link to="/">Support Center</Link>
        </li>
        <li>
          <Link to="/">Help Center</Link>
        </li>
      </ul>

      <ul className={styles.subscribe}>
        <li>
          <span>Suscríbete</span>
        </li>
        <li>
          <p>Subscríbete para recibir nuestro boletín mensual</p>
        </li>
        <li>
          <div className={styles.subscribe_input}>
            <input type="text" placeholder="E-mail" />
            <button>
              <BsArrowRight />
            </button>
          </div>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
