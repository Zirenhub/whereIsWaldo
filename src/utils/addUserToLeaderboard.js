import { doc, setDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import formatTime from './formatTime';
import { v4 as uuidv4 } from 'uuid';

const addUserToLeaderboard = async (
  token,
  time,
  userName,
  levelLeaderboard
) => {
  const formatedTime = formatTime(time);
  const key = uuidv4();

  await setDoc(doc(db, `${levelLeaderboard}`, `${token}`), {
    name: userName,
    time: formatedTime,
    key: key,
  });
};

export default addUserToLeaderboard;
