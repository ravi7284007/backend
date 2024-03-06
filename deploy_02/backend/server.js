import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// get a list of 5 jokes
const jokes = [
  {
    type: "programming",
    setup: "Why do C# and Java developers keep breaking their keyboards?",
    punchline: "Because they use a strongly typed language.",
    id: 74,
  },
  {
    type: "general",
    setup: "What did the scarf say to the hat?",
    punchline: "You go on ahead, I am going to hang around a bit longer.",
    id: 185,
  },
  {
    type: "programming",
    setup: "['hip', 'hip']",
    punchline: "(hip hip array)",
    id: 27,
  },
  {
    type: "general",
    setup: "Where do you learn to make banana splits?",
    punchline: "At sundae school.",
    id: 293,
  },
  {
    type: "general",
    setup: "did you know the first French fries weren't cooked in France?",
    punchline: "they were cooked in Greece",
    id: 32,
  },
  {
    type: "general",
    setup: "Why did the coffee file a police report?",
    punchline: "It got mugged.",
    id: 325,
  },
  {
    type: "general",
    setup: "What did the pirate say on his 80th birthday?",
    punchline: "Aye Matey!",
    id: 183,
  },
  {
    type: "general",
    setup: "What do you call a dictionary on drugs?",
    punchline: "High definition.",
    id: 202,
  },
  {
    type: "general",
    setup: "Is the pool safe for diving?",
    punchline: "It deep ends.",
    id: 148,
  },
  {
    type: "general",
    setup: "What do you call a fat psychic?",
    punchline: "A four-chin teller.",
    id: 208,
  },
];
app.get("/api/jokes", (req, res) => {
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Serve at ${port}`);
});
