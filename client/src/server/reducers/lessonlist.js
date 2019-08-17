import { initExPanelState } from './constants';
import * as actionTypes from './actionTypes';

const initState = {
  exPanel: initExPanelState(),
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_EXPANEL_BY_CLASS':
      const exPanelTemp = { ...state.exPanel };
      exPanelTemp[`${action.payload}`] = !state.exPanel[`${action.payload}`];
      return {
        ...state,
        exPanel: exPanelTemp,
      };
    default:
      return state;
  }
};
