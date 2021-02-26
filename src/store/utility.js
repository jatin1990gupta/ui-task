export const updateOject = (oldState, updatedState) => {
  return {
    ...oldState,
    ...updatedState,
  };
};
