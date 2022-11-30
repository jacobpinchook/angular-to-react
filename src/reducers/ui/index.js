const ui = (
  state = {
    color: "peru",
    picture: "https://source.unsplash.com/random/201X201"
  },
  action
) => {
  switch (action.type) {
    case "SET_PICTURE":
      return { ...state, picture: action.src };
    case "SET_GREEN":
      return { ...state, color: "green" };
    case "SET_RED":
      return { ...state, color: "red" };
    default:
      return state;
  }
};

export default ui;
