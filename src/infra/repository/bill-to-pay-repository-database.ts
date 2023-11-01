import BillToPayRepository from "@/application/usecase/repository/bill-to-pay-repository"
import { BillToPay } from "@/domain/bill-to-pay/bill-to-pay"
import DatabaseConnection from "../database/database-connection"

export default class BillToPayRepositoryDatabase implements BillToPayRepository {
	/**
     *
     */
	constructor(readonly connection: DatabaseConnection) {
        
	}

	async get(id: string): Promise<BillToPay> {
		const [billToPay] = await this.connection.query<BillToPay[]>("select * from bill_to_pay where id = $1", [id])
		
		return new BillToPay(billToPay.id, billToPay.value, billToPay.due_date)
	}
	
	async save(billToPay: BillToPay): Promise<void> {
		await this.connection.query("insert into bill_to_pay (id, value, due_date) values ($1, $2, $3)", [billToPay.id, billToPay.value, billToPay.due_date])
	}

}