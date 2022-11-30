import { connect } from "react-redux";
import { setGreen, setRed } from "../../../reducers/ui/actionCreators";
import { getPicture } from "../../../reducers/ui/thunks";
const mapStateToProps = state => ({
  color: state.ui.color,
  picture: state.ui.picture
});

export default connect(
  mapStateToProps,
  { onClickSetGreen: setGreen, onClickSetRed: setRed, getPicture }
);
