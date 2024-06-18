import { useEffect, useState } from 'react';
function Flashcards() {

  const [flashcards, setFlashcards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/flashcards')
      .then((response) => response.json())
      .then((data) => setFlashcards(data))
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  , []);

  return (
    <div>
      <h1>Flashcards</h1>
      {flashcards.map((flashcard) => {
        return (
          <div key={flashcard.id}>
            <p>
              Foreign language: {flashcard.foreign}
            </p>
            <p>
              Your language: {flashcard.maternal}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Flashcards;
