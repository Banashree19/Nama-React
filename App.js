const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an H1 tage"),
    React.createElement("h2", {}, "I am an H2 tage"),
  ])
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
