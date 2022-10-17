import { db } from '../Firebase';
import { doc, getDoc } from 'firebase/firestore';

const getCharacters = async (level) => {
  const docRef = doc(db, 'locations', level);
  const docSnap = await getDoc(docRef);

  let loadedCharacters;

  if (docSnap.exists()) {
    const { characters } = docSnap.data();
    loadedCharacters = Object.keys(characters).map((character) => {
      const obj = {
        name: character,
        found: false,
      };
      return obj;
    });
  } else {
    console.log('document does not exist');
  }

  return loadedCharacters;
};

export default getCharacters;
