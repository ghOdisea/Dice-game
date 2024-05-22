import express from 'express'
const app = express()
const PORT : string | number = process.env.PORT ?? 3000

app.get('/', (_, res) => {
    res.status(200).send('Welcome to this new game of Rolling - Dices!')
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})



