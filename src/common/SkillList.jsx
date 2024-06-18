import React from "react";

function SkillList({ src, skill }) {
  return (
    <div>
      <span>
        <img src={src} alt="CheckMark icon" />
        <p>{skill}</p>
      </span>
    </div>
  );
}

export default SkillList;
