import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PROJECTS_BEGIN,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };

    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    case GET_PROJECTS_BEGIN:
      return { ...state, projects_loading: true };

    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects_loading: false,
        projects: action.payload.projects,
        categories: action.payload.allCategories,
      };

    case GET_PROJECTS_ERROR:
      return { ...state, projects_loading: false, projects_error: true };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
