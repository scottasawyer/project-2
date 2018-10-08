// Dummy user data
// $.post("/api/testuser", {
//   UserName: "ErnestHemingway"
// });
// $.post("/api/testuser", {
//   UserName: "JKRowling"
// });
// $.post("/api/testuser", {
//   UserName: "RayBradbury"
// });
// $.post("/api/testuser", {
//   UserName: "KurtVonnegut"
// });
// $.post("/api/testuser", {
//   UserName: "GeorgeOrwell"
// });

//Dummy post data
//Make sure AuthorID is updated for your database
$.post("/api/testadd", {
  Location: "03825",
  Body: "I just ate a black bean and chicken wrap from the Green Bean. It was positively OK.",
  Tags: JSON.stringify(["Food"]),
  Public: true,
  Rating: 15,
  AuthorID: "0419fa4e-386d-4395-aa88-372b25a11630"
});
$.post("/api/testadd", {
  Location: "03825",
  Body: "I swear, readme files will be the death of me.",
  Tags: JSON.stringify(["Science", "Fiction"]),
  Public: true,
  Rating: 0,
  AuthorID: "a8226b1c-c610-4df8-a6ee-dbe8af3ffc8b"
});
$.post("/api/testadd", {
  Location: "04090",
  Body: "Fortunately the battery in my prius is under warranty, but its going to be about a week before I get my car back.",
  Tags: JSON.stringify(["Big", "Brother"]),
  Public: true,
  Rating: 11111,
  AuthorID: "2dd35564-b41d-4f6a-97c3-b4dd0a893b41"
});
$.post("/api/testadd", {
  Location: "03825",
  Body: "This is another post by Ray Bradbury.",
  Tags: JSON.stringify(["Kill", "Your Parents"]),
  Public: true,
  Rating: 555555,
  AuthorID: "b7dde54b-6c68-45ae-a887-f36b274434ac"
});
$.post("/api/testadd", {
  Location: "04090",
  Body: "This is a post by Kurt Vonnegut.",
  Tags: JSON.stringify(["Sports", "Entertainment"]),
  Public: true,
  Rating: 888888,
  AuthorID: "8d2ffb6c-ccec-4850-a7a8-84ec1fbc30fe"
});
$.post("/api/testadd", {
  Location: "03825",
  Body: "This is another post by Ernest Hemingway.",
  Tags: JSON.stringify(["Sports", "Entertainment"]),
  Public: true,
  Rating: 999999,
  AuthorID: "3bd3732b-7c30-45e1-ad1f-c00b532ece63"
});

// Get by author
$.get("/api/testget/author/63f2297a-1cc6-4bf4-a660-4fb34b486f93").then(data => {
  console.log(data);
});

// Get by rating, descending
$.get("/api/testget/rating").then(data => {
  console.log(data);
});

// Get by location
$.get("/api/testget/location/03825").then(data => {
  console.log(data);
});



