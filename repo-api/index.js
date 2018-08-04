const fs = require(`fs`)

const uriPath = `./data/repository.json`
const readURI = JSON.parse(fs.readFileSync(uriPath, 'utf8'))

const sendErrorMsg = () => {
    res.status(404).send({
        message: `Repository not found!`
    });
}

const repository = {
    show: (req, res) => {
        res.status(200).send(readURI)
    },

    // Add data via API using POST method
    add: (req, res) => {
        if (req.body.fullRepoName && req.body.httpURL) {

            const repo = {
                id: ++readURI.counter,
                "fullRepoName": req.body.fullRepoName,
                "httpURL": req.body.httpURL,
                "sshURL": req.body.sshURL
            };

            readURI.repository.push(repo)

            const beReadable = JSON.stringify(readURI, null, 2) //JSON.stringify have 3 parameter.
            fs.writeFileSync(uriPath, beReadable, 'utf8')
            res.status(201).send(repo)
        } else {
            res.status(417).send({
                message: "Expect input with format JSON in the body and with the same key"
            })
        }
    },

    repoById: (req, res) => {
        const repo = readURI.repository.find(item => {
            return item.id === Number(req.params.id)
        })

        repo ? res.status(200).send(repo) : sendErrorMsg()
    },

    search: (req, res) => {
        const repo = req.query.fullRepoName
        const keyword = readURI.repository.filter(item => {
            return item.fullRepoName.toLowerCase().includes(repo.toLowerCase())
        })

        keyword ? res.status(200).send(keyword) : sendErrorMsg()
    },
}

module.exports = repository;