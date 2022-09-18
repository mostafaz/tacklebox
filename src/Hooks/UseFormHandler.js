import { useEffect, useReducer } from 'react';

import { Actions, Reducer } from '@/Store';

function useFormEvents(initState) {
  const [state, dispatch] = useReducer(Reducer, { ...initState });
  const { validation } = state;

  const validations = Object.values(validation);
  const status = validations.every((val) => val === 'success');

  useEffect(() => {
    dispatch({ type: Actions.BUTTON_STATUS, value: !status });
  }, [status]);

  const changeEvent = ({ target: { name, value } }) => dispatch(
    { type: Actions.ON_CHANGE, name, value },
  );
  const focusEvent = ({ target: { name, value } }) => dispatch(
    { type: Actions.ON_FOCUS, name, value },
  );
  const blurEvent = ({ target: { name, value } }) => dispatch(
    { type: Actions.ON_BLUR, name, value },
  );

  return {
    state,
    formDispatch: dispatch,
    changeEvent,
    focusEvent,
    blurEvent,
  };
}

export default useFormEvents;
