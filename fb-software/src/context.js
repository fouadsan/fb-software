import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";

import reducer from "./reducer";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PROJECTS_BEGIN,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
} from "./actions";
import { projects_url as url } from "./utils/constants";

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

  const fetchProjects = async (url) => {
    dispatch({ type: GET_PROJECTS_BEGIN });
    try {
      const response = await axios.get(url);
      const projects = response.data;
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
    fetchProjects(url);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </AppContext.Provider>
  );
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};
