import React from 'react';
import  ReactDOM  from 'react-dom/client';
const pareent = React.createElement("div",{id: "parent1"},[
    React.createElement(
        "div",
        { id: "head1" },
        [
            ,
      React.createElement(
        "h2",
        { id: "head2" },
        "Hello World from react2"
      ),
      React.createElement(
        "h3",
        { id: "head3" },
        "Hello World from react3"
      )
        ]
      ),
      React.createElement("div",{id: "child2"},[
        ,
      React.createElement(
        "h2",
        { id: "head3" },
        "Hello World from react2"
      ),
      React.createElement(
        "h3",
        { id: "head4" },
        "Hello World from react3"
      )
      ])
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(pareent);
