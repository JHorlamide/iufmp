import { useState, useEffect } from "react";
import { fetchState, fetchLga } from "api/stateLga";
import toast from "react-hot-toast";

export interface StateType {
  capital: string;
  deputy: string;
  governor: string;
  id: string;
  name: string;
  region: string;
  slogan: string;
  uri: string;
}

const useStateLGA = (stateToFetchLGA: string = "lagos") => {
  const [statesList, setStateList] = useState<StateType[]>([]);
  const [LGAsList, setLGAsList] = useState<string[]>([]);
  const [loadingStates, setLoadingState] = useState(false);
  const [loadingLGAs, setLoadingLGAs] = useState(false);

  useEffect(() => {
    setLoadingLGAs(true);

    fetchLga(stateToFetchLGA)
      .then((data) => {
        setLoadingLGAs(false);
        setLGAsList([...data.lgas]);
      })
      .catch((error) => {
        toast.error(`Error fetching LGA: ${error.message}`);
      });
  }, [stateToFetchLGA]);

  useEffect(() => {
    setLoadingState(true);

    //This will cancel the request when the component unmount
    const controller = new AbortController();
    const { signal } = controller;

    fetchState({ signal })
      .then((data) => {
        setLoadingState(false);
        setStateList([...data]);
      })
      .catch((error) => {
        setLoadingState(false);
        if (signal.aborted) return;
        toast.error(`Error fetching states: ${error.message}`);
      });
  }, []);

  return {
    statesList,
    LGAsList,
    loadingLGAs,
    loadingStates
  };
};

export default useStateLGA;
