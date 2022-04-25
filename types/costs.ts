interface costInfo {
  name: string;
  color: colors;
  description: string;
  entity?: string;
  element: elements;
}

enum elements {
  //classical
  Fire = "Passion, Assertiveness, Heat", //red
  Water = "Healing, Cold, Disease", //blue
  Earth = "Healing, Nature, Stubborness", //green
  Air = "Expansiveness, Freedom, Escape", //white

  //belief
  Void = "Omnipresense, Emptiness, Darkness", //black
  Aether = "Light, Speed, Illumination", //violet
  Faith = "Spirituality, Belief, Group Thought ", //white

  //cosmic
  Chaos = "Variance, Individualism, Self-Determination", //black
  Order = "Truth, Uniformity, Equality", //white
}

enum humors {
  Blood = "Sanguine, Friendly,  Unassuming", //red, air, warm, moist
  Yellow = "Angered, Crazed, Adventurous", //yellow/green, fire, warm, dry
  Black = "Melancholy, Lathargy, Corruption", //black, earth, cold, dry
  Phlegm = "Aged, Calm, Knowledgeable", //white, water, cold, moise
}

enum colors {
  //warm
  Red = "#B22222",
  Yellow = "#FFDB58",
  Orange = "#EF5200",

  //cool
  Blue = "#0000CD",
  Indigo = "#4B0082",
  Green = "#038B22",

  //light
  Violet = "#CF9FFF",
  White = "#FFFFF0",

  //dark
  Brown = "#3F001F",
  Black = "#262626",

  //neutral
  Gray = "#a1a1a1",
}

const zodiac: costInfo[] = [
  {
    name: "Aries",
    color: colors.Red,
    description:
      "adventurous, energetic, pioneering, courageous,enthusiastic, confident,dynamic, quick-witted,selfish, quick-tempered,impulsive, impatient ,foolhardy, daredevil",
    entity: "Dragon",
    element: elements.Fire,
  },
  {
    name: "Taurus",
    color: colors.Green,
    description:
      "patient, reliable, warmhearted, loving, persistent, determined, placid, security loving, jealous, possessive, resentful, inflexible, self-indulgent, greedy",
    entity: "Dryad",
    element: elements.Earth,
  },
  {
    name: "Gemini",
    color: colors.Yellow,
    description:
      "adaptable, versatile, communicative, witty, intellectual, eloquent youthful, lively, nervous, tense superficial, inconsistent cunning, inquisitive",
    entity: "Fairy",
    element: elements.Air,
  },
  {
    name: "Cancer",
    color: colors.White,
    entity: "Crab, Wolf",
    description:
      "emotional, loving, intuitive, imaginative, shrewd, cautious, protective, sympathetic, changeable, moody, overemotional, touchy, clinging, unable to let go",
    element: elements.Water,
  },
  {
    name: "Leo",
    color: colors.Orange,
    entity: "Sphinx",
    description:
      "generous, warmhearted creative, enthusiastic, broad-minded, expansive, faithful, loving, pompous, patronizing, bossy, interfering, dogmatic, intolerant",
    element: elements.Fire,
  },
  {
    name: "Virgo",
    color: colors.Brown,
    entity: "Unicorn",
    description:
      "modest, shy, meticulous, reliable, practical, diligent, intelligent, analytical, fussy, worrying, overcritical, harsh, perfectionist, conservative",
    element: elements.Earth,
  },
  {
    name: "Libra",
    color: colors.Violet,
    entity: "Sylph",
    description:
      "diplomatic, urbane, romantic, charming, easygoing, sociable, idealistic, peaceable, indecisive, changeable, gullible, easily influenced, flirtatious, self-indulgent",
    element: elements.Air,
  },
  {
    name: "Scorpio",
    color: colors.Black,
    entity: "Phoenix, Scoprion",
    description:
      "determined, forceful, emotional, intuitive, powerful, passionate, exciting, magnetic, jealous, resentful compulsive, obsessive, secretive, obstinate",
    element: elements.Water,
  },
  {
    name: "Sagittarius",
    color: colors.Indigo,
    entity: "Centaur",
    description:
      "optimistic, freedom-loving, jovial, good-humored, honest, straightforward, intellectual, philosophical, blindly optimistic, careless, irresponsible, superficial, tactless, restless",
    element: elements.Fire,
  },
  {
    name: "Capricorn",
    color: colors.Gray,
    entity: "Elf",
    description:
      "practical, prudent, ambitious, disciplined, patient, careful, humorous, reserved, pessimistic, fatalistic, miserly, grudging",
    element: elements.Earth,
  },
  {
    name: "Aquarius",
    entity: "Undine",
    color: colors.Blue,
    description:
      "friendly, humanitarian, honest, loyal, original, inventive, independent, intellectual, intractable, contrary, perverse, unpredictable, unemotional, detached",
    element: elements.Air,
  },
  {
    name: "Pisces",
    entity: "Mer",
    color: colors.Green,
    description:
      "imaginative, sensitive, compassionate, kind, selfless, unworldly, intuitive, sympathetic, escapist, idealistic, secretive, vague, weak-willed, easily led",
    element: elements.Water,
  },
];

//human element of magic. Contained from within
const chakras: costInfo[] = [
  //Brown
  {
    name: "Prithi (Root)",
    color: colors.Red,
    element: elements.Earth,
    description: "Stability, Grounding, Physical Identity",
  },
  {
    name: "Vayu (Heart)",
    color: colors.Green,
    element: elements.Air,
    description: "Compassion, Love",
  },

  //Yellow
  {
    name: "Agni (Solar)",
    color: colors.Yellow,
    element: elements.Fire,
    description: "Self Esteem, Confidence",
  },

  //Blue
  {
    name: "Jala (Sacral)",
    color: colors.Orange,
    element: elements.Water,
    description: "Creativity, Self Worth",
  },
  {
    name: "Vishu (Throat)",
    color: colors.Blue,
    element: elements.Void,
    description: "Communication",
  },

  //Violet/Indigo
  {
    name: "Ajna (Eye)",
    color: colors.Indigo,
    element: elements.Aether,
    description: "Intuition, Imagination",
  },
  {
    name: "Saha (Crown)",
    color: colors.Violet,
    element: elements.Faith,
    description: "Awareness, Intelligence",
  },
];
