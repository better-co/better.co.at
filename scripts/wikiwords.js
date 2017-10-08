const path = require('path')
const fs = require('fs-extra')
const frontmatter = require('front-matter')

const contentDir = path.resolve(__dirname, '../content')
const index = {}
let dryRun = false

async function buildIndex () {
  const dir = path.resolve(contentDir, 'kb')
  const files = await fs.readdir(dir)

  for (file of files) {
    const content = await fs.readFile(path.resolve(dir, file))
    const data = frontmatter(content.toString())
    const permalink = `/kb/${path.basename(file, '.md')}`

    index[data.attributes.title] = permalink
  }
}

(async function main () {
  for (arg of process.argv.slice(2)) {
    if (arg === '--dry-run') {
      dryRun = true
    }
  }

  if (dryRun) {
    console.log('DRY RUN')
  }

  await buildIndex()

  const words = Object.keys(index)
  words.sort((a, b) => {
    if (a.length < b.length) {
      return -1
    }
    if (a.length > b.length) {
      return 1
    }

    // Lenghts are the same
    if (a < b) {
      return -1
    }

    if (a > b) {
      return 1
    }

    return 0
  })
  words.reverse()

  fs.removeSync(path.resolve(contentDir, '.temp'))

  for (dir of ['articles', 'guides']) {
    let files = await fs.readdir(path.resolve(contentDir, dir))
    files = files.filter((file) => {
      return file.match(/\.md$/)
    })

    for (file of files) {
      const filePath = path.resolve(contentDir, dir, file)
      const content = (await fs.readFile(filePath)).toString()
      const data = frontmatter(content)
      let body = data.body

      for (word of words) {
        const expr = new RegExp(`(\\s+)(${word})([\\s\\.\\,]+)`, 'g')
        body = body.replace(expr, `$1[${word}](${index[word]})$3`)
      }

      if (body !== data.body) {
        console.log(`[Change] ${filePath}`)
      }

      if (!dryRun && body !== data.body) {
        try {
          await fs.unlink(filePath + '.un~')
        } catch (e) {}
        await fs.rename(filePath, filePath + '.un~')

        try {
          await fs.writeFile(filePath, [
            '---',
            data.frontmatter,
            '---',
            body
          ].join("\n"))
        } catch (e) {
          await fs.rename(filePath + '.un~', filePath)
        }
      }
    }
  }
})()
