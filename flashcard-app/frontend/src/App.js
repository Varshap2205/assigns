import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState({});

    useEffect(() => {
        fetchFlashcards();
    }, []);

    const fetchFlashcards = async () => {
        const res = await axios.get("http://localhost:5000/flashcards");
        setFlashcards(res.data);
    };

    const addFlashcard = async () => {
        if (!question || !answer) return;
        await axios.post("http://localhost:5000/flashcards", { question, answer });
        setQuestion("");
        setAnswer("");
        fetchFlashcards();
    };

    const updateFlashcard = async (id, correct) => {
        await axios.put(`http://localhost:5000/flashcards/${id}`, { correct });
        fetchFlashcards();
    };

    const deleteFlashcard = async (id) => {
        await axios.delete(`http://localhost:5000/flashcards/${id}`);
        fetchFlashcards();
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Flashcard Learning App</h1>

            {/* Add Flashcard Form */}
            <div style={styles.formContainer}>
                <h2 style={styles.formTitle}>Add New Flashcard</h2>
                <div style={styles.inputGroup}>
                    <input 
                        type="text" 
                        placeholder="Enter Question" 
                        value={question} 
                        onChange={(e) => setQuestion(e.target.value)} 
                        style={styles.inputField}
                    />
                    <input 
                        type="text" 
                        placeholder="Enter Answer" 
                        value={answer} 
                        onChange={(e) => setAnswer(e.target.value)} 
                        style={styles.inputField}
                    />
                    <button onClick={addFlashcard} style={styles.addBtn}>
                        Add Flashcard
                    </button>
                </div>
            </div>

            {/* Flashcards Grid */}
            <div style={styles.flashcardGrid}>
                {flashcards.map((card) => (
                    <div key={card._id} style={styles.flashcard}>
                        <p style={styles.flashcardQuestion}>{card.question}</p>
                        {showAnswer[card._id] && (
                            <p style={styles.flashcardAnswer}>{card.answer}</p>
                        )}
                        <button 
                            onClick={() => setShowAnswer({ ...showAnswer, [card._id]: !showAnswer[card._id] })} 
                            style={styles.showAnswerBtn}
                        >
                            {showAnswer[card._id] ? "Hide Answer" : "Show Answer"}
                        </button>
                        
                        {/* Buttons */}
                        <div style={styles.buttonGroup}>
                            <button onClick={() => updateFlashcard(card._id, true)} style={styles.correctBtn}>
                                Got it ✔
                            </button>
                            <button onClick={() => updateFlashcard(card._id, false)} style={styles.wrongBtn}>
                                Wrong ❌
                            </button>
                        </div>
                        
                        {/* Delete Button */}
                        <button onClick={() => deleteFlashcard(card._id)} style={styles.deleteBtn}>
                            ✖
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#121212",
        color: "white",
        minHeight: "100vh"
    },
    title: {
        fontSize: "32px",
        fontWeight: "bold",
        color: "#4facfe",
        marginBottom: "20px"
    },
    formContainer: {
        background: "#1e1e1e",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(255, 255, 255, 0.1)",
        maxWidth: "400px",
        margin: "auto",
        marginBottom: "20px"
    },
    formTitle: {
        fontSize: "20px",
        marginBottom: "15px"
    },
    inputGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    },
    inputField: {
        padding: "12px",
        border: "1px solid #333",
        borderRadius: "5px",
        background: "#333",
        color: "white",
        fontSize: "16px"
    },
    addBtn: {
        background: "#007bff",
        color: "white",
        border: "none",
        padding: "10px",
        fontSize: "16px",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "0.3s",
        marginTop: "10px"
    },
    addBtnHover: {
        background: "#0056b3"
    },
    flashcardGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "15px",
        maxWidth: "800px",
        margin: "auto"
    },
    flashcard: {
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        borderRadius: "8px",
        padding: "15px",
        textAlign: "center",
        transition: "transform 0.3s",
        position: "relative"
    },
    flashcardQuestion: {
        fontSize: "18px",
        fontWeight: "bold",
        marginBottom: "10px"
    },
    flashcardAnswer: {
        fontSize: "16px",
        color: "#222",
        background: "white",
        padding: "10px",
        borderRadius: "5px",
        marginTop: "10px"
    },
    showAnswerBtn: {
        background: "none",
        color: "#fff",
        border: "none",
        fontSize: "14px",
        cursor: "pointer",
        marginTop: "5px",
        textDecoration: "underline"
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px"
    },
    correctBtn: {
        backgroundColor: "#28a745",
        padding: "8px 12px",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
        border: "none",
        transition: "0.3s"
    },
    wrongBtn: {
        backgroundColor: "#dc3545",
        padding: "8px 12px",
        color: "white",
        borderRadius: "5px",
        cursor: "pointer",
        border: "none",
        transition: "0.3s"
    },
    deleteBtn: {
        position: "absolute",
        top: "10px",
        right: "10px",
        background: "#444",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "14px"
    }
};

export default App;
