import React, {Component} from 'react';
import SearchForm from './components/SearchForm';
import Title from './components/Title';


class App extends Component{

  render(){
    return (
      <div className="wrapper">
        <div className="main">
          <Title />
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default App;
