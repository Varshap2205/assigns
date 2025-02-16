import { Router } from "express";
import Flashcard from "../models/Flashcard.js";
const router = Router();

// Add new flashcard
router.post("/", async (req, res) => {
    const { question, answer } = req.body;
    const flashcard = new Flashcard({ question, answer });
    await flashcard.save();
    res.json(flashcard);
});

// Get all flashcards
router.get("/", async (req, res) => {
    const flashcards = await Flashcard.find();
    res.json(flashcards);
});

// Update flashcard (move to next box or reset)
router.put("/:id", async (req, res) => {
    const { correct } = req.body;
    const flashcard = await Flashcard.findById(req.params.id);

    flashcard.box = correct ? Math.min(flashcard.box + 1, 5) : 1;
    flashcard.nextReviewDate = new Date(Date.now() + flashcard.box * 24 * 60 * 60 * 1000);
    await flashcard.save();
    res.json(flashcard);
});

// Delete flashcard
router.delete("/:id", async (req, res) => {
    await Flashcard.findByIdAndDelete(req.params.id);
    res.json({ message: "Flashcard deleted" });
});

export default router;
