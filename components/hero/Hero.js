import { Button } from "@components/index";
import s from "./Hero.module.scss";
export const Hero = () => {
  return (
    <section className="section">
      <div className={s.hero}>
        <h1>
          Jag heter <span className="linearGradient">Markus</span>
        </h1>
        <p>
          Jag är en Front-End utvecklare som jobbar idag hos Garrion Consulting
          AB. Jag är en driven person som älskar att utveckla och utvecklas och
          är inte rädd för att testa på något nytt.
        </p>
        <p>Om du/ni undrar över något, tveka inte med att kontakta mig</p>
        <div className={s.hero_buttonsContainer}>
          <Button
            text="Läs min blogg"
            color="--text-primaryDark"
            backgroundShadow="true"
          />
          <Button text="Läs mer om mig" color="--text-primaryDark" />
        </div>
        <div className={s.hero_socialIcons}>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </section>
  );
};
