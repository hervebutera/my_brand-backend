import queryService from '../services/query.service'
import {querySchema} from '../validations/query.validation'


const {addQuery, getQuery} = queryService

const createQuery = async (req, res) => {
    const {error} = await querySchema.validate(req.body)
    if(error) {
          res.status(422).send({message:error.details[0].message})
    }
    addQuery(req.body)
    res.status(201).send({message:`${req.body.senderName}, your message was successfully sent`})
}

const retrieveQueries = async (req, res) => {
    const query = await getQuery()
    res.status(200).json({data:query})
}

export default {createQuery, retrieveQueries}