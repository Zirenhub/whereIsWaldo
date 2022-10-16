import { db } from '../Firebase';
import { doc, getDoc } from 'firebase/firestore';
import isCharacterWithinRadius from './isCharacterWithinRadius';

const checkIfInputValid = async (x, y, characters, setCharacters, level) => {
  let docSnap;
  try {
    const docRef = doc(db, 'locations', `${level}`);
    docSnap = await getDoc(docRef);
  } catch (error) {
    console.log(error);
  }

  if (docSnap.exists() && characters) {
    const data = docSnap.data();
    characters.forEach((character) => {
      if (!character.found) {
        const characterName = character.name;
        const charCoordsFromDB = data.characters[characterName];
        const charX = charCoordsFromDB[0];
        const charY = charCoordsFromDB[1];

        if (isCharacterWithinRadius(x, y, charX, charY)) {
          const newState = characters.map((obj) => {
            if (obj.name === characterName) {
              return { ...obj, found: true, position: [charX, charY] };
            }

            return obj;
          });

          setCharacters(newState);
        }
      }
    });
  } else {
    console.log('document does not exist');
  }
};

export default checkIfInputValid;
