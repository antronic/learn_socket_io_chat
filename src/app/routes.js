export default (app) => {
  app.get('/', (req, res) => {
    //res.sendFile("index.html")
    console.log('Homepage')
  })
}
