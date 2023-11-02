import AddBillToPay from "../usecase/add-bill-to-pay"
import GetBillToPay from "../usecase/get-bill-to-pay"
import ListBillToPay from "../usecase/list-bill-to-pay"
import RepositoryFactory from "./repository-factory"

export default class UsecaseFactory {
	
	
	constructor(readonly repositoryFactory: RepositoryFactory) {
        
	}

	createAddBillToPay() {
		return new AddBillToPay(this.repositoryFactory.createBillToPayRepository())
	}

	createListBillToPay() {
		return new ListBillToPay(this.repositoryFactory.createBillToPayRepository())
	}

	createGetBillToPay() {
		return new GetBillToPay(this.repositoryFactory.createBillToPayRepository())
	}
}