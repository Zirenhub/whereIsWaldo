import { db } from '../Firebase';
import { getDocs, collection } from 'firebase/firestore';

const getLeaderboard = async (levelLeaderboard) => {
  const querySnapshot = await getDocs(collection(db, `${levelLeaderboard}`));

  const data = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    data.push(doc.data());
  });

  return data;
};

export default getLeaderboard;
