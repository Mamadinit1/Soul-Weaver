import { useState } from "react";
import SelectClass from "./SelectClass";
import Weapons from "./Weapons";

function Main() {
  const characterData = {
    warrior: {
      name: "Warrior",
      icon: "⚔️",
      image: `${import.meta.env.BASE_URL}images/warrior.png`,
      color: "#e85d3a",
      accent: "#c2472b",
      description:
        "Iron-clad berserker. Crushes foes with raw strength and ancient steel.",
      weapons: [
        {
          title: "Longsword of Ash",
          icon: "🗡️",
          damage: "45-60",
          speed: "Medium",
          image: `${import.meta.env.BASE_URL}images/LongswordOfAsh.png`,
        },
        {
          title: "Berserker Axe",
          icon: "🪓",
          damage: "55-75",
          speed: "Slow",
          image: `${import.meta.env.BASE_URL}images/BerserkerAxe.png`,
        },
        {
          title: "Twin Mace",
          icon: "🔨",
          damage: "60-80",
          speed: "Slow",
          image: `${import.meta.env.BASE_URL}images/TwinMace.png`,
        },
        {
          title: "Piercing Spear",
          icon: "⚔️",
          damage: "35-50",
          speed: "Fast",
          image: `${import.meta.env.BASE_URL}images/PiercingSpear.png`,
        },
        {
          title: "Bulwark Blade",
          icon: "🛡️",
          damage: "30-45",
          speed: "Medium",
          image: `${import.meta.env.BASE_URL}images/BulwarkBlade.png`,
        },
        {
          title: "War Hammer",
          icon: "🔨",
          damage: "70-90",
          speed: "Very Slow",
          image: `${import.meta.env.BASE_URL}images/WarHammer.png`,
        },
      ],
    },
    mage: {
      name: "Mage",
      icon: "🔮",
      image: `${import.meta.env.BASE_URL}images/mage.png`,
      color: "#9b6bbf",
      accent: "#7b4fa0",
      description:
        "Keeper of forbidden sorcery. Bends elements to their indomitable will.",
      weapons: [
        {
          title: "Fire Staff",
          icon: "🔥",
          damage: "50-70",
          speed: "Fast",
          image: `${import.meta.env.BASE_URL}images/FireStaff.png`,
        },
        {
          title: "Tome of Frost",
          icon: "📖",
          damage: "40-60",
          speed: "Medium",
          image: `${import.meta.env.BASE_URL}images/TomeOfFrost.png`,
        },
        {
          title: "Storm Orb",
          icon: "⚡",
          damage: "60-80",
          speed: "Slow",
          image: `${import.meta.env.BASE_URL}images/StormOrb.png`,
        },
        {
          title: "Arcane Rod",
          icon: "✨",
          damage: "45-65",
          speed: "Medium",
          image: `${import.meta.env.BASE_URL}images/ArcaneRod.png`,
        },
        {
          title: "Wind Talisman",
          icon: "🌪️",
          damage: "35-55",
          speed: "Fast",
          image: `${import.meta.env.BASE_URL}images/WindTalisman.png`,
        },
        {
          title: "Void Crystal",
          icon: "💎",
          damage: "70-90",
          speed: "Very Slow",
          image: `${import.meta.env.BASE_URL}images/VoidCrystal.png`,
        },
      ],
    },
    assassin: {
      name: "Assassin",
      icon: "🗡️",
      image: `${import.meta.env.BASE_URL}images/assassin.png`,
      color: "#8b9db5",
      accent: "#5a6b7d",
      description:
        "Shadow-walker. Strikes from darkness with venom-tipped precision.",
      weapons: [
        {
          title: "Venom Dagger",
          icon: "🗡️",
          damage: "35-50",
          speed: "Very Fast",
          image: `${import.meta.env.BASE_URL}images/VenomDagger.png`,
        },
        {
          title: "Shadow Katana",
          icon: "🔪",
          damage: "45-60",
          speed: "Fast",
          image: `${import.meta.env.BASE_URL}images/ShadowKatana.png`,
        },
        {
          title: "Shuriken Ring",
          icon: "⭐",
          damage: "20-35",
          speed: "Very Fast",
          image: `${import.meta.env.BASE_URL}images/ShurikenRing.png`,
        },
        {
          title: "Hidden Claws",
          icon: "🐾",
          damage: "30-45",
          speed: "Fast",
          image: `${import.meta.env.BASE_URL}images/HiddenClaws.png`,
        },
        {
          title: "Poison Bow",
          icon: "🏹",
          damage: "40-55",
          speed: "Medium",
          image: `${import.meta.env.BASE_URL}images/PoisonBow.png`,
        },
        {
          title: "Umbral Blade",
          icon: "🌑",
          damage: "50-70",
          speed: "Fast",
          image: `${import.meta.env.BASE_URL}images/UmbralBlade.png`,
        },
      ],
    },
    archer: {
      name: "Archer",
      icon: "🏹",
      image: `${import.meta.env.BASE_URL}images/archer.png`,
      color: "#5b9b7a",
      accent: "#3d7a5a",
      description:
        "Hawkeye ranger. Death from afar with unmatched accuracy and grace.",
      weapons: [
        {
          title: "Longbow",
          icon: "🏹",
          damage: "40-55",
          speed: "Medium",
          image: `${import.meta.env.BASE_URL}images/Longbow.png`,
        },
        {
          title: "Heavy Crossbow",
          icon: "🎯",
          damage: "55-70",
          speed: "Slow",
          image: `${import.meta.env.BASE_URL}images/HeavyCrossbow.png`,
        },
        {
          title: "Composite Bow",
          icon: "🏹",
          damage: "45-60",
          speed: "Fast",
          image: `${import.meta.env.BASE_URL}images/CompositeBow.png`,
        },
        {
          title: "Serpent Arrow",
          icon: "☠️",
          damage: "30-45",
          speed: "Fast",
          image: `${import.meta.env.BASE_URL}images/SerpentArrow.png`,
        },
        {
          title: "Flame Arrow",
          icon: "🔥",
          damage: "50-65",
          speed: "Medium",
          image: `${import.meta.env.BASE_URL}images/FlameArrow.png`,
        },
        {
          title: "Elven Bow",
          icon: "🧝",
          damage: "35-50",
          speed: "Very Fast",
          image: `${import.meta.env.BASE_URL}images/ElvenBow.png`,
        },
      ],
    },
    healer: {
      name: "Healer",
      icon: "💚",
      image: `${import.meta.env.BASE_URL}images/healer.png`,
      color: "#c9a24e",
      accent: "#8b6914",
      description:
        "Bearer of sacred light. Mends the broken and shields the faithful.",
      weapons: [
        {
          title: "Healing Staff",
          icon: "✨",
          damage: "15-25",
          speed: "Medium",
          image: `${import.meta.env.BASE_URL}images/HealingStaff.png`,
        },
        {
          title: "Prayer Book",
          icon: "📖",
          damage: "10-20",
          speed: "Fast",
          image: `${import.meta.env.BASE_URL}images/PrayerBook.png`,
        },
        {
          title: "Sacred Bell",
          icon: "🔔",
          damage: "20-30",
          speed: "Slow",
          image: `${import.meta.env.BASE_URL}images/SacredBell.png`,
        },
        {
          title: "Nature Wand",
          icon: "🌿",
          damage: "15-25",
          speed: "Medium",
          image: `${import.meta.env.BASE_URL}images/NatureWand.png`,
        },
        {
          title: "Light Orb",
          icon: "☀️",
          damage: "25-35",
          speed: "Fast",
          image: `${import.meta.env.BASE_URL}images/LightOrb.png`,
        },
        {
          title: "Guardian Staff",
          icon: "🛡️",
          damage: "10-15",
          speed: "Medium",
          image: `${import.meta.env.BASE_URL}images/GuardianStaff.png`,
        },
      ],
    },
  };

  const [targetClass, setTargetClass] = useState("");
  const classCharacter = targetClass ? characterData[targetClass] : null;

  return (
    <main>
      <div className="container">
        <SelectClass
          targetClass={targetClass}
          setTargetClass={setTargetClass}
        />
        <Weapons classCharacter={classCharacter} />
      </div>
    </main>
  );
}

export default Main;
