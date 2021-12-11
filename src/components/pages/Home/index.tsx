import {connect} from 'react-redux';
import Home from '../../templates/Home';
import store from '../../../../store';

const mapStateToProps = () => ({
  user: store.getState().user,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
