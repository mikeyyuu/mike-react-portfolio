import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="section-title">Skill</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
    </section>
  );
}

export default Skills;
