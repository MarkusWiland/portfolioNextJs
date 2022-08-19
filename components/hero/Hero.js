import { Button } from "@components/index";
import { FaArrowDown } from "react-icons/fa";
import s from "./Hero.module.scss";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Tooltip from "@components/tooltip/Tooltip";
export const Hero = () => {
  return (
    <section className={`${s.main} section`}>
      <article className={s.hero}>
        <h1>
          Hej, <br /> Jag heter{" "}
          <span className="linearGradient">Markus Wiland</span>
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
            color="--btn"
            backgroundShadow="true"
            href="blogg"
          />

          <Button text="Läs mer om mig" color="--btn" href="about" />
        </div>
        <div className={s.hero_socialIcons}>
          <a href="#">
            <FaTwitter size={20} />
            <span>@MarkusWiland</span>
          </a>
          <a href="#">
            <FaLinkedin size={20} />
            <span>@MarkusWiland</span>
          </a>
          <a href="#">
            <FaGithub size={20} />
            <span>@MarkusWiland</span>
          </a>
        </div>
      </article>
      <a className={s.btnAbsolute} href="/#intro">
        <FaArrowDown size={30} className={s.animateBounce} />
      </a>
    </section>
  );
};
