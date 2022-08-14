import { FastifyReply, FastifyRequest } from 'fastify';

async function routes(fastify: any, options: any) {
	// const collection = fastify.mongo.db.collection('test_collection');

	fastify.route({
		method: 'POST',
		url: '/word',
		schema: {
			body: {
				userEmail: { type: 'string' },
				opponentEmail: { type: 'string' },
				word: { type: 'string' },
			},
			response: {
				200: {
					type: 'object',
					properties: {
						message: { type: 'string' },
					},
				},
			},
		},
		handler: function (_request: FastifyRequest, reply: FastifyReply) {
			reply.send({ message: 'Game was created' });
		},
	});
}

export default routes;
