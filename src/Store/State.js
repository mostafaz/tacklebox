const form = {
  category: '',
  inputs: {},
};
  /// ////////////////////////////////////////////////////////////////////////
function SET_FORM_STATES(INIT_STATE) {
  return {
    data: { ...INIT_STATE },
    validation: { ...INIT_STATE },
    disabled: true,
    formFeedback: { status: '', message: '' },
  };
}
/// ////////////////////////////////////////////////////////////////////////
export default {
  FORM: SET_FORM_STATES(form),
};
