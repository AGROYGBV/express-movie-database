const express = require('express')
const path = require('path')
const {Movie, Cast, Crew} = require('./models/index')

const app = express()
const port = 3000

app.use(express.json())


//movie & movie params get paths
app.get('/movies', async (req, res) => {
    const allMovies = await Movie.findAll()
    res.json(allMovies)
})
app.get('/movies/:id', async (req, res) => {
    const thisMovie = await Movie.findByPk(req.params.id)
    res.json(thisMovie)
})
app.get('/movie-title/:title', async (req, res) => {
    const thisMovie = await Movie.findOne({where:{title: req.params.title}})
    res.json(thisMovie)
})
//movie post, delete, put paths
app.post('/movies', async (req, res) => {
    let newMovie = await Movie.create(req.body)
    res.send(newMovie ? "Movie Created" : "Movie Creation Failed")
})
// app.put('/movies/:id', async (req, res) => {
//     let updateMovie = await Movie.update(req.body, {
//         where : {id: req.params.id}
//     })
//     res.send(updateMovie ? "Movie Updated" : "Movie Update Failed")
// })
// app.delete('/movies/:id', async (req,res) => {
//     const deletedMovie = await Movie.destroy({
//         where: {id: req.params.id}
//     })
//     res.send(deletedMovie ? "Deleted Movie" : "Movie Deletion Failed")
// })

//cast & cast params get paths
app.get('/cast', async (req, res) => {
    const allCast = await Cast.findAll()
    res.json(allCast)
})
app.get('/cast/:id', async (req, res) => {
    const thisCast = await Cast.findByPk(req.params.id)
    res.json(thisCast)
})
app.get('/cast-name/:name', async (req, res) => {
    const thisCast = await Cast.findOne({where:{name: req.params.name}})
    res.json(thisCast)
})

//crew & crew params get paths
app.get('/crew', async (req, res) => {
    const allCrew = await Crew.findAll()
    res.json(allCrew)
})
app.get('/crew/:id', async (req, res) => {
    const thisCrew = await Crew.findByPk(req.params.id)
    res.json(thisCrew)
})
app.get('/crew-name/:name', async (req, res) => {
    const thisCrew = await Crew.findOne({where:{name: req.params.name}})
    res.json(thisCrew)
})

//listener
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})