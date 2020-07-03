/**
 * Custom Hook to get list of all Collections
 * @param {Object} firebase.collection - Collection function in firebase provides access to collection in db
 * @param {Object} collectionPath - Path to collection or doc in firebase ex: COLLECTION_NAME/DOC_ID
 * @returns {isLoading: boolean, isError: Object, data: Strings[]} - returns loading boolean, error Object and an Array of questions
 */

import { useEffect, useState } from "react";

const useCollections = (collectionPath, firebase) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      /* Make a firebase query to get details about 
            the collection or questions Such as name and description
            */
      const getCollections = await firebase
        .collection(collectionPath)
        .orderBy("id")
        .onSnapshot(
          snapshot => {
            if (snapshot.size) {
              const data = [];
              snapshot.forEach(doc =>
                data.push({ ...doc.data(), uid: doc.id })
              );
              setData(data);
              setIsLoading(false);
            } else {
              setIsLoading(false);
            }
            /* Unsubscribe from firebase on unmount */
          },
          error => setIsError(error.message)
        );
      return () => {
        getCollections();
      };
    })();
  }, [collectionPath, firebase]);

  return { isLoading, isError, data };
};
export default useCollections;
