
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../components/Game/Main';
import DrawingPage from '../components/pages/DrawingPage';

function Routes() {
	return (
		<BrowserRouter>
		<Switch>
			<Route path="/" exact component={Main}></Route>
			<Route path="/drawing" exact component={DrawingPage}></Route>
			
		</Switch>
		</BrowserRouter>
	)
}

export default Routes;