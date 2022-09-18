import Actions from './Actions';

const FORM_HANDLER = (state, action) => {
  switch (action.type) {
    case Actions.ON_CHANGE: return {
      ...state,
      data: {
        ...state.data,
        [action.name]: action.value,
      },
      validation: {
        ...state.validation,
        [action.name]: !action.value || action.value.length < 2 ? 'warning' : 'success',
      },
    };
    case Actions.UPDATE_FORM: return {
      ...state,
      data: {
        ...state.data,
        inputs: { ...state.data.inputs, [action.name]: action.value },
      },
      validation: {
        ...state.validation,
        inputs: { ...state.data.inputs, [action.name]: !action.value || action.value.length < 2 ? 'warning' : 'success' },
      },
    };
    case Actions.REMOVE_KEY: return {
      ...state,
      data: {
        ...state.data,
        [action.name]: '',
      },
      validation: {
        ...state.validation,
        [action.name]: '',
      },
    };
    case Actions.ON_BLUR: return {
      ...state,
      validation: {
        ...state.validation,
        [action.name]: !action.value ? 'invalid' : 'success',
      },
    };
    case Actions.ON_FOCUS: return {
      ...state,
      validation: {
        ...state.validation,
        [action.name]: !action.value ? 'warning' : 'success',
      },
    };
    case Actions.RECEIVE_DATA: return {
      ...state,
      data: {
        ...action.value,
      },
      validation: {
        ...state.validation,
      },
    };
    case Actions.BUTTON_STATUS: return {
      ...state,
      disabled: action.value,
    };
    case Actions.SUBMIT: return {
      ...state,
      formFeedback: action.value,
    };
    default: return state;
  }
};
export default FORM_HANDLER;
