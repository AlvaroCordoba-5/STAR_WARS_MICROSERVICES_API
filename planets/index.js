const server = require("./src/server");

const PORT = 8003;

server.listen(PORT,()=>{
    console.log(`planets service listening on port ${PORT}`)
});
