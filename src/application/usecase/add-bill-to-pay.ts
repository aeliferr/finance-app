import { BillToPay } from "@/domain/bill-to-pay/bill-to-pay"
import BillToPayRepository from "./repository/bill-to-pay-repository"

export default class AddBillToPay {
	/**
     *
     */
	constructor(readonly billToPayRepository: BillToPayRepository) {
        
	}

	async execute(input: Input): Promise<Output> {
		const billToPay = BillToPay.create(input.value, input.due_date)
		await this.billToPayRepository.save(billToPay)
		return {
			id: billToPay.id
		}
	}
}

type Input = {
    value: number
    due_date: string
}

type Output = {
    id: string
}