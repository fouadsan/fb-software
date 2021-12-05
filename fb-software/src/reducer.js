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

const reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };

    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    case MODAL_OPEN:
      return {
        ...state,
        isModalOpen: true,
        modal_content: action.payload.message,
        modal_content_type: action.payload.type,
      };

    case MODAL_CLOSE:
      return {
        ...state,
        isModalOpen: false,
        modal_content: "",
        modal_content_type: "",
      };

    case GET_PROJECTS_BEGIN:
      return { ...state, projects_loading: true };

    case GET_PROJECTS_SUCCESS:
      return {
        ...state,
        projects_loading: false,
        projects: action.payload.items,
        categories: action.payload.allCategories,
      };

    case GET_PROJECTS_ERROR:
      return { ...state, projects_loading: false, projects_error: true };

    case GET_SERVICES_BEGIN:
      return { ...state, services_loading: true };

    case GET_SERVICES_SUCCESS:
      return {
        ...state,
        services_loading: false,
        services: action.payload,
      };

    case GET_SERVICES_ERROR:
      return { ...state, services_loading: false, services_error: true };

    case GET_TECHNOLOGIES_BEGIN:
      return { ...state, technologies_loading: true };

    case GET_TECHNOLOGIES_SUCCESS:
      return {
        ...state,
        technologies_loading: false,
        technologies: action.payload,
      };

    case GET_TECHNOLOGIES_ERROR:
      return {
        ...state,
        technologies_loading: false,
        technologies_error: true,
      };

    case GET_EXPERIENCES_BEGIN:
      return { ...state, experiences_loading: true };

    case GET_EXPERIENCES_SUCCESS:
      return {
        ...state,
        experiences_loading: false,
        experiences: action.payload,
      };

    case GET_EXPERIENCES_ERROR:
      return {
        ...state,
        experiences_loading: false,
        experiences_error: true,
      };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
