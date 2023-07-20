const fs = require("node:fs/promises");

// (async () => {
//     const blog = await fs.open('./index.html', 'r')
//
//     const blogStream = blog.createReadStream()
//
//     blogStream.on('data', chunk => {
//         console.log(chunk)
//     })
//
// })()

(async () => {


        let content
        await fs.readFile('./index.html')
            .then(data => {
                content = data.toString('utf-8')
                console.log(content)
            })
            .catch(err => {
                console.log(err)
            })
        // extracting main from html string
        let res
        let firstMainTag = content.indexOf('<main')
        let lastMainTag = content.indexOf('</main>')
        res = content.substring(firstMainTag, lastMainTag + 7)
        let db = await require('./blog.json')
        db.body = res
        console.log(db)
        await fs.writeFile('./blog.json', JSON.stringify(db))
    }

)()

