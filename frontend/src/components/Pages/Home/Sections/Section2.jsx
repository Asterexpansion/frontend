import styles from "./Section2.module.scss";
import building2 from "../../../../assets/building2.jpg";
import { ArrowButton } from "../../../buttons/Buttons";

const Section_2 = () => {
  return (
    <section className={styles.section_2}>
      <div className={styles.section_2_image_container}>
        <img src={building2} alt="building2" />
      </div>
      <div className={styles.section_2_slogan}>
        <h1>
          "Aster Expansión, tu universo de posibilidades."
        </h1>
      </div>
      <div className={styles.selection}>
        <div className={styles.buy}>
          <h3>Compra tu próximo hogar</h3>
          <p>
            El compromiso de Aster Expansión es con el ser, su crecimiento en todos los aspectos.
          </p>
          <ArrowButton text="Buscar casa" path="buy" />
        </div>
        <div className={styles.rent}>
          <h3>¿Buscas rentabilidad?</h3>
          <p>
            ROI 30% + ANUAL
          </p>
          <ArrowButton text="Buscar opciones" path="buy" />
        </div>

        <div className={styles.sell}>
          <h3>Se parte del equipo</h3>
          <p>
             Forma parte del equipo más revolucionario de México en Bienes raíces. 
          </p>
          <ArrowButton text="Contáctanos" path="buy" />
        </div>
      </div>
    </section>
  );
};

export default Section_2;
