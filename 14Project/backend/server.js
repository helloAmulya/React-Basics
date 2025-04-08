import express from 'express';
// import cors from "cors";


const app = express();
// app.use(cors());

// app.get('/', (req, res) => {
//     res.send("Server is ready")
// });

/*
    we will use proxy else it will cause cors error, we could have used cors package
    but we will use proxy instead
    in vite.config.js we will add the following code

    server: {
    proxy: {
        '/api': 'http://localhost:3000',
        }
    }

    this is beacause the browser will think that the request is coming from the same origin
 */

// get a list of 5 jokes
        
app.get('/api/jokes', (req, res) => {
    const jokes = [
        { id: 1, title: "A first Joke", content: "Why did the chicken cross the road? To get to the other side!" },
        { id: 2, title: "A Second Joke", content: "Why don't scientists trust atoms? Because they make up everything!" },
        { id: 3, title: "A Third Joke", content: "Why did the scarecrow win an award? Because he was outstanding in his field!" },
        { id: 4, title: "A Fourth Joke", content: "Why don't skeletons fight each other? They don't have the guts!" },
        { id: 5, title: "A Fifth Joke", content: "What do you call fake spaghetti? An impasta!" }
    ];
    res.json(jokes);
})

const port = process.env.PORT || 3000;
app.listen(port, () => {

    console.log(`Serve at http://localhost:${port}`);
})