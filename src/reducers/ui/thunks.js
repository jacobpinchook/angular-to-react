import { setPicture } from "./actionCreators";
let counter = 0;

// Mocking async call to get new source for picture
export const getPicture = () => async dispatch => {
  counter++;
  const resp = await Promise.resolve(
    `https://source.unsplash.com/random/20${counter}x20${counter}`
  );
  dispatch(setPicture(resp));
};
