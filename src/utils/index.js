// EMPTY ARRAY TO STORE DATA
const movieArr = [];

// CREATE MOVIE CLASS FOR TITLE AND ACTOR OBJECT
// 'this' KEYWORD REFERS TO THE OBJECT IT FIT INTO
class Movie {
    constructor(title, actor = "Not specified") {
        this.title = title;
        this.actor = actor;

    }
    add() {
        movieArr.push(this)
    }
};

module.exports = {Movie, movieArr};