import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SIDEBAR_OPEN:
      return { ...state, isSidebarOpen: true };

    case SIDEBAR_CLOSE:
      return { ...state, isSidebarOpen: false };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
};

export default reducer;
