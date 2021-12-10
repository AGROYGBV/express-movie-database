const express = require('express')
const {Movie, Cast, Crew} = require('./models/index')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


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
app.put('/movies/:id', async (req, res) => {
    let updateMovie = await Movie.update(req.body, {
        where : {id: req.params.id}
    })
    res.send(updateMovie ? "Movie Updated" : "Movie Update Failed")
})
app.delete('/movies/:id', async (req,res) => {
    const deletedMovie = await Movie.destroy({
        where: {id: req.params.id}
    })
    res.send(deletedMovie ? "Deleted Movie" : "Movie Deletion Failed")
})

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
//cast post, delete, put paths
app.post('/cast', async (req, res) => {
    let newCast = await Cast.create(req.body)
    res.send(newCast ? "Cast Created" : "Cast Creation Failed")
})
app.put('/cast/:id', async (req, res) => {
    let updateCast = await Cast.update(req.body, {
        where : {id: req.params.id}
    })
    res.send(updateCast ? "Cast Updated" : "Cast Update Failed")
})
app.delete('/cast/:id', async (req,res) => {
    const deletedCast = await Cast.destroy({
        where: {id: req.params.id}
    })
    res.send(deletedCast ? "Deleted Cast" : "Cast Deletion Failed")
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
//crew post, put, delete routes
app.post('/crew', async (req, res) => {
    let newCrew = await Crew.create(req.body)
    res.send(newCrew ? "Crew Created" : "Crew Creation Failed")
})
app.put('/crew/:id', async (req, res) => {
    let updateCrew = await Crew.update(req.body, {
        where : {id: req.params.id}
    })
    res.send(updateCrew ? "Crew Updated" : "Crew Update Failed")
})
app.delete('/crew/:id', async (req,res) => {
    const deletedCrew = await Crew.destroy({
        where: {id: req.params.id}
    })
    res.send(deletedCrew ? "Deleted Crew" : "Crew Deletion Failed")
})

//listener
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})