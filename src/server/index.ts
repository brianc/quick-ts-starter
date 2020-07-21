import express from 'express'
import devMiddleware from 'webpack-dev-middleware'
import webpack from 'webpack'
import fs from 'fs'
import config from '../../webpack.config'

const app = express()


app.use(devMiddleware(webpack(config)))

app.get('/', (req, res) => {
  const html = `
  <!DOCTYPE html>
  <html>
    <body>
      <div id="root" />
      <script type="text/javascript" src="./bundle.js"></script>
    </body>
  </html
  `

  res.send(html)
})

app.get('/some-data', (req, res) => {
  res.send({ payload: `hello-world - it is ${new Date().toISOString()}` })
})

const port = parseInt(process.env.PORT) || 3000

app.listen(port, () => {
  console.log('listening on', port)
})
