const {sequelize} = require('./db');
const {Movie, Cast, Crew} = require('./models/index')


describe('Movie Database', () => {
   
    beforeAll(async () => {
      
        await sequelize.sync({ force: true });
       
        const movie =  Movie.create({
            title: 'Get Out',
            //image: DataTypes.STRING,
            year: 2017,
            rated: "R",
            length_inMinutes: 104,
            rating: 4.2,
            genre: "thriller",
        })
       
        const cast =  Cast.create({
            name: "Daniel Kaluuya",
            //image: DataTypes.STRING,
            dob: '1989-02-24',
            role: "Chris Washington",
            //awards: DataTypes.STRING,
            film_credits: 48
        })

        const crew =  Crew.create({
            name: "Jordan Peele",
            //image: DataTypes.STRING,
            dob: '1979-02-21',
            role: "Director, Writer",
            //awards: DataTypes.STRING,
            film_credits: 18
        })

        await Movie.create(movie)
        await Cast.create(cast)
        await Crew.create(crew)
    })
    

    //test Movie
    test('can create a movie', async () => {
        const movie = await Movie.findOne({where: {title: 'Get Out'}});
        expect(movie.id).toBe(1)
    })
    test('movie has title', async () => {
        const movie = await Movie.findOne({where: {title: 'Get Out'}});
        expect(movie.title).toBe('Get Out')
    })
    test('movie has year made', async () => {
        const movie = await Movie.findOne({where: {title: 'Get Out'}});
        expect(movie.year).toEqual(2017)
    })
    test('movie has run time', async () => {
        const movie = await Movie.findOne({where: {title: 'Get Out'}});
        expect(movie.length_inMinutes).toEqual(104)
    })
    test('movie is rated', async () => {
        const movie = await Movie.findOne({where: {title: 'Get Out'}});
        expect(movie.rated).toBe("R")
    })
    test('movie has a review rating', async () => {
        const movie = await Movie.findOne({where: {title: 'Get Out'}});
        expect(movie.rating).toEqual(4.2)
    })
    test('movie has a genre', async () => {
        const movie = await Movie.findOne({where: {title: 'Get Out'}});
        expect(movie.genre).toBe('thriller')
    })


    //test cast
    test('can create a cast member', async () => {
        const cast = await Cast.findOne({where: {name: "Daniel Kaluuya"}});
        expect(cast.id).toBe(1)
    })
    test('cast has name', async () => {
        const cast = await Cast.findOne({where: {name: "Daniel Kaluuya"}});
        expect(cast.name).toBe("Daniel Kaluuya")
    })
    test('cast has date of birth', async () => {
        const cast = await Cast.findOne({where: {name: "Daniel Kaluuya"}});
        expect(cast.dob).toBe('1989-02-24')
    })
    test('cast has film role', async () => {
        const cast = await Cast.findOne({where: {name: "Daniel Kaluuya"}});
        expect(cast.role).toBe("Chris Washington")
    })
    test('cast can have a number of film credits for acting roles', async () => {
        const cast = await Cast.findOne({where: {name: "Daniel Kaluuya"}});
        expect(cast.film_credits).toBe(48)
    })


    //test crew
    test('can create a crew member', async () => {
        const crew = await Crew.findOne({where: {name: "Jordan Peele"}});
        expect(crew.id).toBe(1)
    })
    test('crew member has a name', async () => {
        const crew = await Crew.findOne({where: {name: "Jordan Peele"}});
        expect(crew.name).toBe("Jordan Peele")
    })
    test('crew member has a date of birth', async () => {
        const crew = await Crew.findOne({where: {name: "Jordan Peele"}});
        expect(crew.dob).toBe('1979-02-21')
    })
    test('crew member has a film credits for crew roles', async () => {
        const crew = await Crew.findOne({where: {name: "Jordan Peele"}});
        expect(crew.role).toBe("Director, Writer")
    })
    test('can create a crew member', async () => {
        const crew = await Crew.findOne({where: {name: "Jordan Peele"}});
        expect(crew.film_credits).toEqual(18)
    })


    //test association cast to movie
    test('movies can have many cast', async()=> {
        const testMovie = await Movie.findOne({where: {title: 'Get Out'}});
        const testCast = await Cast.findOne({where: {name: "Daniel Kaluuya"}})
        await testMovie.addCast(testCast)
        const castList = await testMovie.getCasts()
        expect(castList.length).toBe(1)
        expect(castList[0] instanceof Cast).toBeTruthy()
        expect(castList[0].name).toMatch("Daniel Kaluuya")

    })

    //test association crew to movie
    test('movies can have many crew', async()=> {
        const testMovie = await Movie.findOne({where: {title: 'Get Out'}});
        const testCrew = await Crew.findOne({where: {name: "Jordan Peele"}})
        await testMovie.addCrew(testCrew)
        const crewList = await testMovie.getCrews()
        expect(crewList.length).toBe(1)
        expect(crewList[0] instanceof Crew).toBeTruthy()
        expect(crewList[0].name).toMatch("Jordan Peele")
    })

    //close sequelize
    afterAll(async()=> {
        // await sequelize.sync({force:true})
        sequelize.close()
    })

})