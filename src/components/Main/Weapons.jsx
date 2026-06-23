import React from "react";

function Weapons({ classCharacter }) {
  if (!classCharacter) {
    return (
      <div className="empty-state">
        Select a class to reveal their legendary armaments
      </div>
    );
  }
  return (
    <div id="contentArea">
      <div
        className="class-info"
        style={{ borderColor: classCharacter.accent }}
      >
        <img className="class-icon" src={classCharacter.image} />
        <div>
          <div className="class-name" style={{ color: classCharacter.color }}>
            {classCharacter.name}
          </div>
          <div className="class-desc">{classCharacter.description}</div>
        </div>
      </div>
      <div className="weapons-section-title">
        ▸ Armaments of the {classCharacter.name}
      </div>
      <div className="weapons-grid">
        {classCharacter.weapons.map((w) => {
          return (
            <div
              className="weapon-card"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${w.image}")`,
              }}
            >
              <div className="weapon-name">{w.title}</div>
              <div className="weapon-stats">
                <span className="stat damage">{w.damage} DMG</span>
                <span className="stat speed">{w.speed}</span>
              </div>
              <div
                className="ember-line"
                style={{
                  background: classCharacter.color,
                  color: classCharacter.color,
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Weapons;
