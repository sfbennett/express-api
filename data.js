// Hardcoded JSON data for responses, animals, and programming facts //

const responses = [
  { id: 1, message: "Hello, world!" },
  { id: 2, message: "Testing out an Express API" },
  {
    id: 3,
    message:
      "Check it out to find some cool facts about animals and programming",
  },
];

const animals = [
  {
    id: 1,
    name: "Glass Frog",
    diet: ["Crickets", "Moths", "Flies", "Spiders"],
    habitat: "Central and South America",
    quirk: "Have translucent skin, allowing you to see their internal organs",
  },
  {
    id: 2,
    name: "Penguin",
    diet: ["Krill", "Squids", "Fishes"],
    habitat: "Antartica",
    quirk:
      "Penguins often search for the perfect pebble to present to their chosen mate as a gift during courtship rituals, symbolizing their commitment",
  },
  {
    id: 3,
    name: "Leafy Sea Dragon",
    diet: ["Mysid shrimp", "Small Crustaceans", "Plankton", "Larval fishes"],
    habitat: "Southern and Western Coasts of Australia",
    quirk:
      "Leafy sea dragons are masters of camouflage, resembling floating seaweed or kelp. They use their leaf-like appendages to blend into their surroundings and avoid predators",
  },
  {
    id: 4,
    name: "Elephant",
    diet: ["Grasses", "Leaves", "Shrubs", "Fruits", "Roots"],
    habitat: "Subtropical regions of Africa and Asia",
    quirk:
      "Elephants are the only mammals that can't jump. Despite their size and strength, their anatomy doesn't allow them to lift all four feet off the ground at once",
  },
  {
    id: 5,
    name: "Ostriches",
    diet: [
      "Leafy greens",
      "Flowering plants",
      "Roots",
      "Grasses",
      "Succulents",
    ],
    habitat: "Southern and Eastern Africa",
    quirk:
      "Ostriches have the largest eyes of any land animal, measuring about 2 inches in diameter. They also have the strongest kick of any bird, which can be deadly to predators",
  },
  {
    id: 6,
    name: "Hippopotamus",
    diet: ["Plants", "Grass"],
    habitat: "Sub-Saharan Africa",
    quirk:
      "Hippos produce a reddish sweat that acts as a natural sunscreen and moisturizer for their skin. It also has antibacterial properties that protect them from infections",
  },
  {
    id: 7,
    name: "Koala",
    diet: ["Eucalyptus leaves", "Other plant species"],
    habitat: "Southeasten and Eastern Australia",
    quirk:
      "Koalas have fingerprints that are nearly indistinguishable from humans. Their unique fingerprints have even led to mistaken identity in crime scenes!",
  },
  {
    id: 8,
    name: "Sloth",
    diet: ["Leaves", "Fruit", "Bird's eggs", "Lizards", "Insects"],
    habitat: "Central America and Northern South America, Brazil, Peru",
    quirk:
      "Sloths have an extremely slow metabolism, so slow that algae can grow on their fur, providing them with excellent camouflage in the trees",
  },
  {
    id: 9,
    name: "Honeybees",
    diet: ["Pollen", "Nectar"],
    habitat: "Worldwide, except Antartica",
    quirk:
      "Perform a unique waggle dance to communicate the location of food sources to other members of their hive. The angle and duration of the dance convey information about the direction and distance of the food",
  },
];

const facts = [
  {
    id: 1,
    fact: "Ada Lovelace is often credited as the world's first computer programmer. In the mid-1800s, she wrote an algorithm for Charles Babbage's early mechanical general-purpose computer, the Analytical Engine.",
  },
  {
    id: 2,
    fact: "The term bug in computer programming comes from an actual bug. In 1947, computer scientist Grace Hopper found a moth trapped in a relay of the Harvard Mark II computer, causing an error. She documented the incident as the first actual case of bug being found.",
  },
  {
    id: 3,
    fact: "The QWERTY keyboard layout was designed in the 1870s to prevent typewriter jams by spacing out commonly used letter pairings.",
  },
  {
    id: 4,
    fact: "The first known computer virus, called Creeper, was created in the early 1970s as an experiment. It simply displayed the message: I'm the creeper: catch me if you can.",
  },
  {
    id: 5,
    fact: "The 404 Not Found error message is named after Room 404 at CERN, where the original World Wide Web servers were located. This room housed the database that managed web pages.",
  },
  {
    id: 6,
    fact: "The HTTP status code 418 stands for I'm a teapot. It was defined in RFC 2324 as an April Fools' joke in 1998 and is part of the Hyper Text Coffee Pot Control Protocol (HTCPCP)",
  },
  {
    id: 7,
    fact: "Programmers sometimes debug their code by explaining it, line by line, to an inanimate object like a rubber duck. This process, known as rubber duck debugging, often helps them identify and solve problems",
  },
  {
    id: 8,
    fact: "The World Wide Web was invented by British computer scientist Tim Berners-Lee in 1989. It revolutionized the way information is accessed and shared on the internet",
  },
  {
    id: 9,
    fact: "Margaret Hamilton is an American computer scientist known for her work on the Apollo space program. She led the team that developed the onboard flight software for the Apollo missions, including the software that guided the Apollo 11 lunar module to the moon's surface",
  },
  {
    id: 10,
    fact: "Swift was developed by Apple engineers Chris Lattner and others in the early 2010s as a modern replacement for Objective-C. It was designed to be safer, faster, and more expressive than Objective-C and is now the primary programming language for iOS, macOS, watchOS, and tvOS development",
  },
];

module.exports = { responses, animals, facts };
