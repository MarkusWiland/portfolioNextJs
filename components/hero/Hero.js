import { Button } from "@components/index";

import s from "./Hero.module.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Tooltip from "@components/tooltip/Tooltip";
export const Hero = () => {
  return (
    <section className={`${s.main} section`}>
      <div className={s.hero}>
        <h1>
          Jag heter <span className="linearGradient">Markus Wiland</span>
        </h1>
        <span>
          Jag är en Front-End utvecklare som jobbar idag hos{" "}
          <Tooltip
            content={
              <span>
                Jag jobbar som konsult hos Garrison Consuleting AB. Garrison
                finns i Stockholm och Göteborg (där jag jobbar).
              </span>
            }
          >
            Garrion Consuleting AB.
          </Tooltip>{" "}
          Jag är en driven person som älskar att utveckla och utvecklas och är
          inte rädd för att testa på något nytt.
        </span>
        <p>Om du/ni undrar över något, tveka inte med att kontakta mig</p>
        <div className={s.hero_buttonsContainer}>
          <Button
            text="Läs min blogg"
            color="--text-primaryDark"
            backgroundShadow="true"
            href="blogg"
          />

          <Button
            text="Läs mer om mig"
            color="--text-primaryDark"
            href="about"
          />
        </div>
        <div className={s.hero_socialIcons}>
          <a href="#">
            <FaLinkedin size={30} color="#0A66C2" />
          </a>
          <a href="#">
            <FaGithub size={30} color="#171515" />
          </a>
        </div>
      </div>
    </section>
  );
};
