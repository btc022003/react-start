import { Link, Route, Switch } from 'react-router-dom';
import Counter from './components/Counter';
import Home from './pages/Home';
import List from './pages/List';
import User from './pages/User';
import PageNotFound from './pages/PageNotFound';
function App() {
  return (
    <div className='App'>
      <h1>Hello World!</h1>
      {/* <p>My name is Arivin</p> */}
      <Counter step={2} />
      <hr />
      <Link to='/'>【Home】</Link>
      <Link to='/list'>【List】</Link>
      <Link to='/user'>【User】</Link>
      <Link to='/hot'>【Hot】</Link>
      <hr />
      <Switch>
        {/* Route是组件 path表示匹配的地址，子节点就是要展示的内容 */}
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/list'>
          <List />
        </Route>
        <Route path='/user'>
          <User />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
