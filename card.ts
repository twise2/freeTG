//mana/exhaust/etc symbol mappings
enum symbols {
  //specific color mana
  White = "",
  Red = "",
  Violet = "",
  Green = "",
  Orange = "",
  Blue = "",
  Black = "",
  Indigo = "",
  Brown = "",
  //generic or any color works
  _1 = "",
  _2 = "",
  _3 = "",
  _4 = "",
  _5 = "",
  _6 = "",
  _7 = "",
  _8 = "",
  _9 = "",
  _X = "",
  //costs,
  Exhaust = "",
}

//once per turn, place a card face down and put a mana token on it.
//this card stays face down unless shuffled and is treated as a
//conduit of that cards color
enum actions {
  Play = "When a card leaves a players hand",
  Place = "Play a card without playing it for purposes of interaction",
  Exhaust = "Turn a card sideways. Cards cannot take actions while exhausted",
  Dispell = "When a player plays a card. Cancel any effects as if the card is not resolved and destroy the card.",
  Destroy = "Send a card to the cemetary.",
  Banish = "Send a card to the void",
  Discard = "Remove cards from a players hand",
  Withdraw = "Send a card from the battlefield to the owners hand",
}

enum type {
  entity = "Card type that are not limited to being played once per turn",
  //if a card type is not designated, it is considered an entity
  event = "Card type that is limited to being played once per game",
  conduit = "Card type that is limitted to playing one per turn. Event cards cannot be dispelled",
  counter = "Card type that can be played in response to any action. Not just on your turn.",
}

interface ability {
  cost: (symbols | string)[];
  text: string;
}

interface card {
  asciiName: string;
  types: type[]; //types that have special rules
  subtypes: string[]; //types that are just for the terms
  cost: symbols[]; //string for types, number for generics
  passives?: string[];
  actives: ability[];
  strength: number;
  vitality: number;
}
