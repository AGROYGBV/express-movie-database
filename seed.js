const {sequelize} = require('./db')
const {Movie, Cast, Crew} = require('./models/index')


const seedMovie =  [{
    title: 'Get Out',
    //image: DataTypes.STRING,
    year: 2017,
    rated: "R",
    length_inMinutes: 104,
    rating: 4.2,
    genre: "thriller"
}]

const seedCast =  [{
    name: "Daniel Kaluuya",
    //image: DataTypes.STRING,
    dob: '1989-02-24',
    role: "Chris Washington",
    //awards: DataTypes.STRING,
    film_credits: 48,
    MovieId: 1
}]

const seedCrew =  [{
    name: "Jordan Peele",
    //image: DataTypes.STRING,
    dob: '1979-02-21',
    role: "Director, Writer",
    //awards: DataTypes.STRING,
    film_credits: 18,
    MovieId: 1
}]


const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Movie.bulkCreate(seedMovie, {validate: true})
    await Cast.bulkCreate(seedCast, {validate: true})
    await Crew.bulkCreate(seedCrew, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh noes! Something went wrong!')
      console.error(err)
    })