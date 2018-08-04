const express = require(`express`)
const bodyParser = require(`body-parser`)
const colors = require(`colors`)

const repo = require(`../../repo-api`)

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get(`/`, repo.show)
app.post(`/repository`, repo.add)
app.get(`/repository/search`, repo.search)
app.get(`/repository/:id`, repo.repoById)

// app.delete(`repository/delete`,repo.deleteRepo)
app.listen(3000, () => console.log(colors.green(`
        Server listening on port ${port}
        `)))