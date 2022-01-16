import fastify from 'fastify';

const server = fastify();

server.register(require('fastify-cors'), {
	origin: "*",
	methods: ["POST"]
});

server.get('/hello', async (request, reply) => {
	return 'Hello World!';
});

server.listen(8080, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});
