import { doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import formatTime from './formatTime';
import { v4 as uuidv4 } from 'uuid';

const addUserToLeaderboard = async (
  userID,
  time,
  userName,
  levelLeaderboard
) => {
  const formatedTime = formatTime(time);
  const key = uuidv4();

  try {
    await setDoc(doc(db, `${levelLeaderboard}`, `${userID}`), {
      name: userName,
      time: formatedTime,
      key: key,
    });
  } catch (error) {
    console.log(error);
  }
};

export default addUserToLeaderboard;
