import { FastifyReply, FastifyRequest } from "fastify"

async function routes (fastify: any, options: any) {
	const collection = fastify.mongo.db.collection('test_collection')
  
	fastify.post('/game', async (request: FastifyRequest, reply: FastifyReply) => {
	  return { message: 'Game was created.' }
	})
  }
  
  export default routes