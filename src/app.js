const yargs = require("yargs");

const { Movie, movieArr } = require("./utils/index.js")

console.log(yargs.argv)

const app = (yargsObj) => {
    if(yargsObj.add) {
        const movie = new Movie(yargsObj.title, yargsObj.actor);
        movie.add();
        console.log(movieArr);
    } else {
        console.log("incorrect Command")
    }
}

app(yargs.argv)

// node src/app.js --add --title="pulp fiction" --actor="Samuel Jackson" (IN TERMINAL)