
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../components/Game/Main';
import DrawingPage from '../components/pages/DrawingPage';
import TRexGamePage from '../components/pages/TRexGamePage';

function Routes() {
	return (
		<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Main}></Route>
			<Route path="/trex" exact component={TRexGamePage}></Route>
			<Route path="/drawing" exact component={DrawingPage}></Route>
		</Switch>
		</BrowserRouter>
	)
}

export default Routes;