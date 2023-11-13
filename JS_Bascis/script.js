const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 8350,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

// const newData = {
//   name: "Ashish",
//   ...data,
// };

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
// const book = getBook(5);
// // const title = book.title;
// // title;

// // Object Destructing

// // const { title, author } = data[2];
// const { title, author, genres } = book;
// console.log(title, author, genres);

// // array destructring

// const [primary, secondary, ...otherGeners] = genres;
// console.log(primary, secondary, otherGeners);

// newData;
// console.log(newData[1].title);

// // template literal

// const template = `${title} is a ${book.pages} long book which is written by ${author} and published on  ${book.publicationDate}`;

// template;

// // ternary operator
// const pagesRange =
//   book.pages > 1000 ? "Over a thousand pages" : "less than a thousand pages";
// pagesRange;

// // arrow functions
// const getYear = (str) => str.split("-")[0];
// console.log(getYear(data[0].publicationDate));

// // short circuiting - in some case the operator returns the first value it doesn't even look at all the values
// /**
//  * && Operator
//  * in case of && operator short circuiting happens if the first value is falsy value
//  * falsy value: false , 0 , null, ''
//  */

// console.log(true && "short");
// console.log(false && "circuiting");

// // in case of AND operator if the first value is true it will return immediately and if it is false then it will check till the value is true

// console.log(true || "some string");
// console.log(false || "some String" || "etc");

// // Nullish operator ?? - it only return the second value only when the first value is null or undefined not 0 or an empty string

// // Optional chaining - if it sees a value is not present, it will return undefined and does not give the error

// const reviewss = data[2].reviews.librarything?.reviewsCount ?? 0;
// console.log(reviewss);

// in this librarything is not presnt so we use nullish operator to give it a defualt value

// Map function
// const books = getBooks();

// const x = [1, 2, 3, 4, 5, 6, 7, 8, 8].map((ele) => ele * 2);
// // console.log(x);

// const titels = books.map((book) => book.title);
// // console.log(titels);

// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author,
//   };
// });

// // console.log(essentialData);

// // Filter Function
// const longBooks = books
//   .filter((book) => book.pages > 500)
//   .filter((book) => book.reviews.librarything);
// console.log(longBooks);

// const adventureBooks = books
//   .filter((books) => books.genres.includes("adventure"))
//   .map((book) => book.title);
// console.log(adventureBooks);

// // reduce method

// const totalPagesCount = books.reduce((acc, book) => acc + book.pages, 0);
// console.log(totalPagesCount);

// Fetch functions

// 'https://jsonplaceholder.typicode.com/todos
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));
