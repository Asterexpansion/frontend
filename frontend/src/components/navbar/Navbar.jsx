import styles from "./Navbar.module.scss";
import { NavLink, Link } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

import { useState } from "react";
import useClickOutside from "../../customHooks/ClickOutside";

const Navbar = ({ BurgerColour }) => {
  const MenuLink = ({ url, path }) => {
    return (
      <li className={styles.navlink}>
        <NavLink
          to={`/${url}`}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {`${path}`}
        </NavLink>
      </li>
    );
  };

  const [isNavOpen, setisNavOpen] = useState(false);
  let domNode = useClickOutside(() => {
    setisNavOpen(false);
  });

  return (
    <div className={styles.navbar_container}>
      <nav>
        {/* LOGO */}
        <div className={styles.brand_logo}>
          <Link to="/">Aster Expansión</Link>
        </div>

        {/* NAV-BURGER */}
        <div
          className={styles.mobile_menu}
          style={{ color: BurgerColour }}
          onClick={() => setisNavOpen(!isNavOpen)}
        >
          <FaBars />
        </div>

        {/* NAV */}
        <ul
          className={`${isNavOpen ? styles.ul_active : undefined} ${
            styles.navbar_ul
          }`}
          ref={domNode}
        >
          <div
            className={styles.mobile_close}
            onClick={() => setisNavOpen(!isNavOpen)}
          >
            <FaTimes />
          </div>
          <MenuLink url="" path="Inicio" />
          <MenuLink url="buy" path="Proyectos" />
          <MenuLink url="buy" path="Blog" />
          <MenuLink url="buy" path="Membresía" />
          <a href="https://wa.me/524779083304" target="noopener">✆477 921 10 59</a>
          <Link to="/auth" className={styles.login}>
            <span>Login</span>
          </Link>
        </ul>

        {/* Login */}
        <Link to="/auth" className={styles.login_container}>
          <span style={{ color: BurgerColour }}>Login</span>
          <BsArrowRight style={{ color: BurgerColour }} />
        </Link>
      </nav>
    </div>
  );
};

Navbar.defaultProps = {
  BurgerColour: "rgb(26, 55, 58)",
};
export default Navbar;
