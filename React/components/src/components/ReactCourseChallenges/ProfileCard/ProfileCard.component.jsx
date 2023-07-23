import React from "react";

export function ProfileCard({ tags, name, description, img }) {
  const skills = [
    { color: "rgba(0, 0, 255, 0.7)", skillName: "JavasScript" },
    { color: "rgba(4, 4, 4, 0.7)", skillName: "HTML-CSS" },
    { color: "rgba(255, 0, 0, 0.7)", skillName: "Full-stack" },
    {color:"rgba(0, 255, 0, 0.7)", skillName: "Web development"},
  ];

  return (
    <div className="card--container">
      <div className="card">
        <img src={img} alt={`${name} photo`}></img>

        <div className="card-content">
          <h2 className="card-name">{name}</h2>
          <p className="card-description">{description}</p>
          <div className="tags-container">
            {skills.map((skill, index) => (
              <p
                className="tag"
                style={{ backgroundColor: `${skill.color}` }}
              >
                {skill.skillName}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
