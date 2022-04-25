interface costInfo {
  name: string;
  color: colors;
  element: string;
  description: string;
  traits: string;
}

enum colors {
  Red = "#B22222",
  Orange = "#EF5200",
  Blue = "#0000CD",
  Green = "#43E595",
  Indigo = "#5C0082",
  Violet = "#CF9FFF",
  White = "#FFFFF0",
  Brown = "#3F001F",
  Black = "#262626",
  //Yellow = "#FFDB58",
  //Gray = "#a1a1a1",
}

const manaTypes: costInfo[] = [
  {
    name: "",
    color: colors.Brown,
    element: "Earth",
    description: "stability, grounding, stubborness, consistency, growth",
    traits:
      "patient, reliable, warmhearted, loving, persistent, determined, placid, security loving, jealous, possessive, resentful, inflexible, self-indulgent, greedy",
  },
  {
    name: "",
    color: colors.Green,
    element: "Air",
    description: "Compassion, Love, Expansiveness, Freedom, Escape",
    traits:
      "diplomatic, urbane, romantic, charming, easygoing, sociable, idealistic, peaceable, indecisive, changeable, gullible, easily influenced, flirtatious, self-indulgent adaptable, versatile, communicative, witty, intellectual, eloquent, youthful, lively, nervous, tense, superficial, inconsistent cunning, inquisitive",
  },
  {
    name: "Agni",
    color: colors.Red,
    element: "Fire",
    description: "self-esteem, confidence, passion, assertiveness, aggression",
    traits:
      "adventurous, energetic, pioneering, courageous,enthusiastic, confident, dynamic, quick-witted,selfish, quick-tempered,impulsive, impatient ,foolhardy, daredevil, optimistic, freedom-loving, jovial, good-humored, honest, straightforward, intellectual, philosophical, blindly optimistic, careless, irresponsible, superficial, tactless, restless",
  },
  {
    name: "Jala",
    color: colors.Blue,
    element: "Water",
    description: "Creativity, Self Worth, Healing, Cold, Disease",
    traits:
      "emotional, loving, intuitive, imaginative, shrewd, cautious, protective, sympathetic, changeable, moody, overemotional, touchy, clinging, unable to let go,imaginative, sensitive, compassionate, kind, selfless, unworldly, intuitive, sympathetic, escapist, idealistic, secretive, vague, weak-willed, easily led",
  },
  {
    name: "Vishu",
    color: colors.Indigo,
    element: "Void",
    description: "Communication, Omnipresense, The Unknown, Limitations",
    traits:
      "modest, shy, meticulous, reliable, practical, diligent, intelligent, analytical, fussy, worrying, overcritical, harsh, perfectionist, conservative",
  },
  {
    name: "Ajna",
    color: colors.Violet,
    element: "Aether",
    description: "Intuition, Imagination, Light, Speed, Illumination",
    traits:
      "generous, warmhearted creative, enthusiastic, broad-minded, expansive, faithful, loving, pompous, patronizing, bossy, interfering, dogmatic, intolerant",
  },

  {
    name: "Saha",
    color: colors.Orange,
    element: "Faith",
    description:
      "Awareness, Intelligence, Spirituality, Belief, Group Thought ",
    traits:
      "friendly, humanitarian, honest, loyal, original, inventive, independent, intellectual, intractable, contrary, perverse, unpredictable, unemotional, detached",
  },

  {
    name: "Aedara",
    color: colors.White,
    element: "Order",
    description: "Collectivism, Truth, Truth, Uniformity, Equality",
    traits:
      "practical, prudent, ambitious, disciplined, patient, careful, humorous, reserved, pessimistic, fatalistic, miserly, grudging",
  },

  {
    name: "Dondru",
    color: colors.Black,
    element: "Chaos",
    description: "Variance, Individualism, Self-Determination",
    traits:
      "determined, forceful, emotional, intuitive, powerful, passionate, exciting, magnetic, jealous, resentful compulsive, obsessive, secretive, obstinate",
  },
];
