import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

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
    res.render('index.ejs');
});

app.post("/submit", (req, res) => {
    const title = req.body['title'];
    const date = req.body['date'];
    const text = req.body['text'];
    const image = req.body['image'];

    const post = {
      title: title,
      date: date,
      text: text,
      image: image
    }

    posts.push(post);

    res.render("index.ejs", {posts})
});


app.listen(PORT, () => {
    console.log(`Connected to server on Port: ${PORT}.`);
});