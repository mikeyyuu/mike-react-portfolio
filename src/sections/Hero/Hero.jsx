import styles from "./HeroStyles.module.css";
import { useTheme } from "../../common/ThemeContext";

import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="It's me." />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Night mode"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className="section-title">Mike yu</h1>
        <h2>Front-end Developer(Learning)</h2>
        <span>
          <a href="#" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="#" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="#" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className="style.description">
          正在自學前端技術，往React前端工程師的路上
        </p>
      </div>
    </section>
  );
}

export default Hero;
