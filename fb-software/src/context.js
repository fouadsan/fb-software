import React, { useContext, useReducer, useEffect, useCallback } from "react";
import db from "./firebase";
import { collection, getDocs } from "firebase/firestore";

import reducer from "./reducer";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  MODAL_OPEN,
  MODAL_CLOSE,
  GET_PROJECTS_BEGIN,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
  GET_SERVICES_BEGIN,
  GET_SERVICES_SUCCESS,
  GET_SERVICES_ERROR,
  GET_TECHNOLOGIES_BEGIN,
  GET_TECHNOLOGIES_SUCCESS,
  GET_TECHNOLOGIES_ERROR,
  GET_EXPERIENCES_BEGIN,
  GET_EXPERIENCES_SUCCESS,
  GET_EXPERIENCES_ERROR,
} from "./actions";

const initialState = {
  isSidebarOpen: false,
  isModalOpen: true,
  modal_content: "",
  projects_loading: false,
  projects_error: false,
  projects: [],
  allCategories: [],
  services_loading: false,
  services_error: false,
  services: [],
  technologies_loading: false,
  technologies_error: false,
  technologies: [],
  experiences: [],
  experiences_loading: false,
  experiences_error: false,
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

  const openModal = (message) => {
    dispatch({ type: MODAL_OPEN, payload: message });
  };

  const closeModal = () => {
    dispatch({ type: MODAL_CLOSE });
  };

  const fetchData = async (actions, coll) => {
    dispatch({ type: actions.begin });
    let items = [];

    try {
      const querySnapshot = await getDocs(collection(db, coll));
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });

      if (coll === "references") {
        const allCategories = [
          "all",
          ...new Set(items.map((items) => items.category)),
        ];
        dispatch({
          type: actions.success,
          payload: { items, allCategories },
        });
      } else {
        dispatch({ type: actions.success, payload: items });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: actions.error });
    }
  };

  const fetchProjects = useCallback(() => {
    const projActions = {
      begin: GET_PROJECTS_BEGIN,
      success: GET_PROJECTS_SUCCESS,
      error: GET_PROJECTS_ERROR,
    };
    fetchData(projActions, "references");
  }, []);

  const fetchServices = useCallback(() => {
    const servActions = {
      begin: GET_SERVICES_BEGIN,
      success: GET_SERVICES_SUCCESS,
      error: GET_SERVICES_ERROR,
    };
    fetchData(servActions, "services");
  }, []);

  const fetchTechnologies = useCallback(() => {
    const servActions = {
      begin: GET_TECHNOLOGIES_BEGIN,
      success: GET_TECHNOLOGIES_SUCCESS,
      error: GET_TECHNOLOGIES_ERROR,
    };
    fetchData(servActions, "technologies");
  }, []);

  const fetchExperiences = useCallback(() => {
    const expActions = {
      begin: GET_EXPERIENCES_BEGIN,
      success: GET_EXPERIENCES_SUCCESS,
      error: GET_EXPERIENCES_ERROR,
    };
    fetchData(expActions, "experiences");
  }, []);

  useEffect(() => {
    fetchProjects();
    fetchServices();
    fetchTechnologies();
    fetchExperiences();
  }, [fetchProjects, fetchServices, fetchTechnologies, fetchExperiences]);

  useEffect(() => {}, [fetchServices]);

  useEffect(() => {
    fetchServices();
  }, [fetchServices]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openModal,
        closeModal,
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
