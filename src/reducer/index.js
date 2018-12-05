
const initialState = { 
  counterSum: 0,
  counterItems: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "COUNTERSUM":
      return { counterSum: state.counterSum + action.payload };
    case "GENERATE_COUNTERS":
      return {counterItems: new Array(action.payload)
        .fill(0)
        .map(() => ({ count: 0, id: generateID() }))};
    default:
      return state;
  }
};

const generateID = () => {
  return new Date().getTime() + Math.random();
};

