const { frontFile, createSong, updateSong, deleteSong, getSongs } = require('../../controllers/frontController')

const filesRouter = require('express').Router()

filesRouter.get('/', frontFile)

filesRouter.get('/canciones', getSongs)

filesRouter.post('/canciones', createSong)

filesRouter.put('/canciones/:id', updateSong)

filesRouter.delete('/canciones/:id', deleteSong)


module.exports = filesRouter