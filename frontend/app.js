// const heading = React.createElement(
//   "h1",
//   { id: "head" },
//   "Hello World from react"
// );
// console.log(heading);

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
