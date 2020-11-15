import express, { Request, Response } from 'express'
import request from 'superagent'
const router = express.Router()



router.get('/fox', (req: Request, res: Response) => {
    return request('https://randomfox.ca/floof/')
        .then(data => {
            res.json(data.body)
        })
})



export default router