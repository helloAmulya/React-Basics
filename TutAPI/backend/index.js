import express, { response } from "express"

const app = express();

app.get('/api/products', (req, res) => {
    const products = [
        { id: 1, name: 'table wooden', price: 200, image: "https://unsplash.com/s/photos/wooden-table" },
        { id: 2, name: 'phone', price: 14000, image: "https://pexels.com/search/smartphone/" },
        { id: 3, name: 'butter', price: 340, image: "https://pixabay.com/images/search/butter/" },
        { id: 4, name: 'steel bottle', price: 799, image: "https://unsplash.com/s/photos/steel-bottle" },
        { id: 5, name: 'notebook hardcover', price: 180, image: "https://pexels.com/search/notebook%20hardcover/" }
    ]

    // if (req.query.search) {
    //     const filterValue = products.filter(product => product.name.includes(req.query.search))
    //     res.send(filterValue)
    //     return;
    // }

    // https://localhost:3000/api/products?search=bottle ,, searching specific product with the bottle in it

    if (req.query.search) {
        const filterValue = products.filter(product => product.name.includes(req.query.search))
        res.send(filterValue)
        return;
    }


    // the above filter code  can be used in content search and sorting also
    setTimeout(() => { res.send(products) }, 3000)
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})