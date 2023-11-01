import BillToPayRepository from '@/application/usecase/repository/bill-to-pay-repository'
import DatabaseConnection from '../database/database-connection'
import BillToPayRepositoryDatabase from '../repository/bill-to-pay-repository-database'

export default class RepositoryFactoryDatabase {
	
	constructor(readonly connection: DatabaseConnection) {
        
	}

	createBillToPayRepository(): BillToPayRepository {
		return new BillToPayRepositoryDatabase(this.connection)
	}
}