import UsecaseFactory from "@/application/factory/usecase-factory"
import PgAdapter from "@/infra/database/PgAdapter"
import RepositoryFactoryDatabase from "@/infra/factory/repository-factory-database"

export default function makeAddBillToPay() {
	const databaseConnection = new PgAdapter()
	const repositoryFactory = new RepositoryFactoryDatabase(databaseConnection)
	const useCaseFactory = new UsecaseFactory(repositoryFactory)
	return useCaseFactory.createAddBillToPay()
}