import './App.css';
import { Button } from './button/Button'
import PropTypes from 'prop-types';

const fruits = ['apple', 'pineapple', 'pear', 'orange', 'plum']


function App({test}) {
  const info = "Register"
  return (
    <div className="App">
      <ul>
        {
          fruits.map((fruit) => {
            return <li>{fruit}</li>
          })
        }
      </ul>
      <Button text={info} message="Hello world"/>
      <p>{test}</p>
    </div>
  );
}

App.propTypes = {
  test: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired
}

export default App;
