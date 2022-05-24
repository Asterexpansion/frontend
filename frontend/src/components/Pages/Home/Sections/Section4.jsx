import styles from "./Section4.module.scss";
import building9 from "../../../../assets/building9.jpg";

const Section4 = () => {
  return (
    <section className={styles.section_4}>
      <div className={styles.section_4_title}>
        <h1>
          Ayudando a las personas a cumplir su sueños desde hace más de 15 años.
        </h1>
      </div>
      <div className={styles.section_4_content}>
        <div className={styles.image_container}>
          <img src={building9} alt="building" />
        </div>
        <div className={styles.info}>
          <p>
            Encuentra la propiedad de tus sueños, nos enfocamos crecimiento del ser en todos los aspectos, integrando una comunidad que aporta un valor agregado.
          </p>
          <div className={styles.rows}>
            {/* ROW1 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>444</h2>
                <h3>Propiedades vendidas</h3>
              </div>

              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>287</h2>
                <h3>Clientes</h3>
              </div>
            </div>

            {/* ROW2 */}
            <div className={styles.row_1}>
              {/* FACT1 */}
              <div className={styles.fact}>
                <h2>40</h2>
                <h3>Miembros del equipo</h3>
              </div>

              {/* FACT2 */}
              <div className={styles.fact}>
                <h2>$88´385,044</h2>
                <h3>Mdd generados</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
