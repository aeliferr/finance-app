import UsecaseFactory from './application/factory/usecase-factory'
import PgAdapter from './infra/database/PgAdapter'
import RepositoryFactoryDatabase from './infra/factory/repository-factory-database'
import BillToPayController from './infra/http/controllers/bill-to-pay-controller'
import FastifyAdapter from './infra/http/fastify-adapter'

const httpServer = new FastifyAdapter()
const databaseConnection = new PgAdapter()
const repositoryFactory = new RepositoryFactoryDatabase(databaseConnection)
const usecaseFactory = new UsecaseFactory(repositoryFactory)
new BillToPayController(httpServer, usecaseFactory)
httpServer.listen(3000)