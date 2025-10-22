// <div id="parent">
//    <div id="child">
//       <h1>I am h1 tag</h1>
//       <h2>I am h2 tag</h2>
//    </div>
//     <div id="child">
//       <h1>I am h1 tag</h1>
//       <h2>I am h2 tag</h2>
//    </div>
// </div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 Tag"),
    React.createElement("h2", {}, "I am h2 Tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from REACT"
// );

// console.log(heading); =>(object)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // render function converts the react object to HTML tags when it somes to rendering on DOM.
