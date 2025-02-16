import { Schema, model } from "mongoose";

const FlashcardSchema = new Schema({
    question: String,
    answer: String,
    box: { type: Number, default: 1 },
    nextReviewDate: { type: Date, default: Date.now }
});

export default model("Flashcard", FlashcardSchema);
