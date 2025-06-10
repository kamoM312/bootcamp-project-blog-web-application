import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

// app.use( function( req, res, next ) {
//     // this middleware will call for each requested
//     // and we checked for the requested query properties
//     // if _method was existed
//     // then we know, clients need to call DELETE request instead
//     if ( req.query._method == 'DELETE' ) {
//         // change the original METHOD
//         // into DELETE method
//         req.method = 'DELETE';
//         // and set requested url to /user/12
//         req.url = req.path;
//     }       
//     next(); 
// });

// import methodOverride from method-override;
// app.use(methodOverride('_method'));


const posts = [];

// function createCard() {
//   // const container
//   const title = document.createElement("h3");
//   title.classList.add("mb-0");

//   const text = document.createElement("p");
//   text.classList.add("mb-auto");


//     <div class="col-md-6">
//     <div
//       class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
//     >
//       <div class="col p-4 d-flex flex-column position-static">
//         <strong class="d-inline-block mb-2 text-success-emphasis"
//           >Design</strong
//         >
//         <h3 class="mb-0">Post title</h3>
//         <div class="mb-1 text-body-secondary">Nov 11</div>
//         <p class="mb-auto">
//           This is a wider card with supporting text below as a natural lead-in
//           to additional content.
//         </p>
//         <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
//           Continue reading
//           <svg class="bi" aria-hidden="true">
//             <use xlink:href="#chevron-right"></use>
//           </svg>
//         </a>
//       </div>
//       <div class="col-auto d-none d-lg-block">
//         <svg
//           aria-label="Placeholder: Thumbnail"
//           class="bd-placeholder-img"
//           height="250"
//           preserveAspectRatio="xMidYMid slice"
//           role="img"
//           width="200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <title>Placeholder</title>
//           <rect width="100%" height="100%" fill="#55595c"></rect>
//           <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
//         </svg>
//       </div>
//     </div>
//   </div>
// }


app.get('/', (req, res) => {
    res.render('index.ejs', { posts });
});

app.post("/submit", (req, res) => {
    const title = req.body['title'];
    const date = req.body['date'];
    const text = req.body['text'];
    const image = req.body['image'];

    const id = Math.floor(Math.random() * 1000);

    const post = {
      title: title,
      date: date,
      text: text,
      image: image,
      id:id

    }

    posts.push(post);

    res.redirect("/");
});

// app.delete("views/index.js/delete", (req, res) => {
//   const deleteId = req.body['id'];
//   posts.filter((e) => {
//     e.id !== deleteId;
//   })

//   res.render("index.ejs", { posts });
// });

app.delete('/post/:id', (req, res) => {
  const id = parseInt(req.params.id); // Parse ID from URL parameter
  const index = posts.findIndex(item => item.id === id);

  // Check if data exists for the ID
  if (index === -1) {
    return res.status(404).send("Data not found");
  }

  // Remove data from the array using splice
  posts.splice(index, 1);

  res.json({ message: "Data deleted successfully" });
});

app.patch("/update", (req, res) => {
  console.log("updating")
});


app.listen(PORT, () => {
    console.log(`Connected to server on Port: ${PORT}.`);
});