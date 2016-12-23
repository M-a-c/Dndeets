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

        document.title = "Dndeets!";

        return (
          <div>
          {test()}
          </div>
        )
  }
});
//Fyi <App /> is like a funciton call to create the App object as identified above.
ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(<ProperListRender data={blanksheet}/>, document.getElementById('info'));
