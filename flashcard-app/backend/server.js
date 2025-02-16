import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Dummy flashcards array (acts as the database)
let flashcards = [
  { id: 1, question: "What is React?", answer: "A JavaScript library for building UIs", box: 1 },
  { id: 2, question: "What is Node.js?", answer: "A runtime for executing JavaScript outside the browser", box: 1 },
  { id: 3, question: "What is Express.js?", answer: "A web framework for Node.js", box: 1 },
  { id: 4, question: "What is MongoDB?", answer: "A NoSQL database for scalable applications", box: 1 },
  { id: 5, question: "What is useState in React?", answer: "A Hook that lets you add state to function components", box: 1 },
  { id: 6, question: "What is a REST API?", answer: "An API that follows RESTful principles for web services", box: 1 },
  { id: 7, question: "What is JWT?", answer: "JSON Web Token, a compact, self-contained way to store authentication info", box: 1 },
  { id: 8, question: "What is TypeScript?", answer: "A superset of JavaScript that adds static typing", box: 1 },
  { id: 9, question: "What is the Virtual DOM?", answer: "A lightweight copy of the real DOM used in React for better performance", box: 1 },
  { id: 10, question: "What is middleware in Express?", answer: "Functions that execute during request-response cycle", box: 1 },
  { id: 11, question: "What is Git?", answer: "A version control system for tracking changes in code", box: 1 },
  { id: 12, question: "What is a Promise in JavaScript?", answer: "An object representing the eventual completion of an async operation", box: 1 },
  { id: 13, question: "What is an arrow function?", answer: "A shorthand function expression introduced in ES6", box: 1 },
  { id: 14, question: "What is the difference between == and === in JavaScript?", answer: "`==` checks value, `===` checks value and type", box: 1 },
  { id: 15, question: "What is an event loop?", answer: "A mechanism that handles async operations in JavaScript", box: 1 },
];

// Get all flashcards
app.get("/flashcards", (req, res) => {
  res.json(flashcards);
});

// Add a new flashcard
app.post("/flashcards", (req, res) => {
  const { question, answer } = req.body;
  const newCard = { id: flashcards.length + 1, question, answer, box: 1 };
  flashcards.push(newCard);
  res.status(201).json(newCard);
});

// Update a flashcard (move to the next box)
app.put("/flashcards/:id", (req, res) => {
  const { id } = req.params;
  const cardIndex = flashcards.findIndex(card => card.id === parseInt(id));

  if (cardIndex !== -1) {
    flashcards[cardIndex].box += 1;  // Move to the next box
    res.json(flashcards[cardIndex]);
  } else {
    res.status(404).json({ error: "Flashcard not found" });
  }
});

// Delete a flashcard
app.delete("/flashcards/:id", (req, res) => {
  const { id } = req.params;
  flashcards = flashcards.filter(card => card.id !== parseInt(id));
  res.json({ message: "Flashcard deleted" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
