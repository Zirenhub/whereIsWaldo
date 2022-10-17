import { db } from '../Firebase';
import { getDocs, collection } from 'firebase/firestore';

const getLeaderboard = async (levelLeaderboard) => {
  let querySnapshot;
  try {
    querySnapshot = await getDocs(collection(db, levelLeaderboard));
  } catch (error) {
    console.log(error);
  }

  if (querySnapshot) {
    const data = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push(doc.data());
    });
    console.log('fetched leaderboard');
    return data;
  } else {
    console.log('something went wrong getting the leaderboard');
  }
};

export default getLeaderboard;
