var movies = [
  {
    id: 1,
    title: "Skazani na Shawshank (1994)",
    originTitle: "The Shawshank Redemption",
    director: "Frank Darabont",
    poster: "./images/1.jpg"
  },
  {
    id: 2,
    title: "Nietykalni (2011)",
    originTitle: "Intouchables ",
    director: "Olivier Nakache, Eric Toledano",
    poster: "./images/2.jpg"
  },
  {
    id: 3,
    title: "Zielona mila (1999)",
    originTitle: "The Green Mile",
    director: "Frank Darabont",
    poster: "./images/3.jpg"
  },
  {
    id: 4,
    title: "Ojciec chrzestny (1972)",
    originTitle: "The Godfather",
    director: "Francis Ford Coppola",
    poster: "./images/4.jpg"
  },
  {
    id: 5,
    title: "Dwunastu gniewnych ludzi (1957)",
    originTitle: "12 Angry Men",
    director: "Sidney Lumet",
    poster: "./images/5.jpg"
  }
];
var moviesElements = movies.map(function(movie) {
  return React.createElement(
    "li",
    { key: movie.id },
    React.createElement("img", { src: movie.poster }),
    React.createElement("h2", {}, movie.title),
    React.createElement("p", {}, movie.originTitle),
    React.createElement("p", {}, movie.director),
    React.createElement("hr", {})
  );
});
var element = React.createElement(
  "div",
  {},
  React.createElement("h1", {}, "Lista filmów"),
  React.createElement("ol", {}, moviesElements)
);
ReactDOM.render(element, document.getElementById("app"));
