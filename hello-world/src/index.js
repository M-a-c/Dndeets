import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import blanksheet from './blankRecord'

var ProperListRender = React.createClass({
    render: function() {

        console.log(this.props.data);
    
        function test(){

            return <div>dog</div>
        }

        return (
          <div>
          {test()}
          </div>
        )
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(<ProperListRender data={blanksheet}/>, document.getElementById('info'));
