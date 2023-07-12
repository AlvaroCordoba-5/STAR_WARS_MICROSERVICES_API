const server = require("./src/server");

const { Character , Film , Planet} = require("./src/database");

//  Planet.get(5).then((res) => console.log(res));
//  Planet.list().then((res) => console.log(res));

// Film.create({
//     _id: "10004",
//     title: "the movie",
// }).then((res) => console.log(res));

const PORT = 8004;

server.listen(PORT,()=>{
    console.log(`Database service listening on port ${PORT}`)
});
