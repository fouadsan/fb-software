import React, { useContext, useReducer, useEffect } from "react";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

import reducer from "./reducer";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PROJECTS_BEGIN,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
} from "./actions";

const initialState = {
  isSidebarOpen: false,
  projects_loading: false,
  projects_error: false,
  projects: [],
  allCategories: [],
  // experiences: [],
  // experiences_loading: false,
  // experiences_error: false,
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProjects = async () => {
    dispatch({ type: GET_PROJECTS_BEGIN });
    let projects = [];

    try {
      const querySnapshot = await getDocs(collection(db, "references"));
      querySnapshot.forEach((doc) => {
        projects.push({ id: doc.id, ...doc.data() });
      });

      const allCategories = [
        "all",
        ...new Set(projects.map((project) => project.category)),
      ];
      dispatch({
        type: GET_PROJECTS_SUCCESS,
        payload: { projects, allCategories },
      });
    } catch (error) {
      dispatch({ type: GET_PROJECTS_ERROR });
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};
