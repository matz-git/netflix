import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {

    let isMounted = true;

    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        if (isMounted)
         setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
    return () => { isMounted = false };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { [target]: content };
}
