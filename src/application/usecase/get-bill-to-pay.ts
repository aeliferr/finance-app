import BillToPayRepository from "./repository/bill-to-pay-repository"

export default class GetBillToPay {
	/**
     *
     */
	constructor(readonly billToPayRepository: BillToPayRepository) {
        
	}

	async execute(input: Input): Promise<Output> {
		const billToPay = await this.billToPayRepository.get(input.id)
		return {
			id: billToPay.id,
			value: billToPay.value,
			due_date: billToPay.due_date
		}
	}
}

type Input = {
    id: string
}

type Output = {
    id: string
	value: number
    due_date: string
}