import fastify from 'fastify';
import routes from './routes';

const server = fastify();

server.register(require('fastify-cors'), {
	origin: "*",
	methods: ["POST"]
});


server.get('/', async (request, reply) => {
	return 'Socker-be-fastify';
});

server.listen(8080, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});

server.register(routes);
