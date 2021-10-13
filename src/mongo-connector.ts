import fastifyPlugin from 'fastify-plugin'
import fastifyMongo from 'fastify-mongodb'

async function mongoConnector (fastify: any, options: any) {
  fastify.register(fastifyMongo, {
    url: 'mongodb://localhost:27017/test_database'
  })
}

export default fastifyPlugin(mongoConnector)