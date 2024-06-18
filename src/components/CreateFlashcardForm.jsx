import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateFlashcardForm() {
  const [foreign_word, setForeignWord] = useState('');
  const [english_word, setEnglishWord] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/api/v1/flashcards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // For now, setting userid as 1 and category_id as 1
      body: JSON.stringify({
        flashcard: {
        foreign: foreign_word,
        maternal: english_word,
        categories: [1],
        },
       }),
      }
    )
    .then(() => {
      navigate('/flashcards')
   })
    .catch((error) => {
     console.error('Error:', error)
   });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Word in Foreign Language:
        <input
          type="text"
          value={foreign_word}
          onChange={(event) => setForeignWord(event.target.value)}
        />
      </label>
      <label>
        Word in English:
        <input
          type="text"
          value={english_word}
          onChange={(event) => setEnglishWord(event.target.value)}
        />
      </label>
      <button type="submit">Create Flashcard</button>
    </form>
  );
}

export default CreateFlashcardForm;
