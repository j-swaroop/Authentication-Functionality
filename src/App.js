import {Route, Switch} from 'react-router-dom'


import LoginForm from './components/Login'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import ProtectedRoute from "./components/ProtectedRoute"

const App = () => (
    <Switch>
        <Route exact path="/login" component={LoginForm} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/about" component={About} />
        <Route component={NotFound}/>
    </Switch>
)

export default App
