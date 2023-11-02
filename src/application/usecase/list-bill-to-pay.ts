import BillToPayRepository from "./repository/bill-to-pay-repository"

export default class ListBillToPay {
	/**
     *
     */
	constructor(readonly billToPayRepository: BillToPayRepository) {
        
	}

	async execute(): Promise<Output> {
		const billsToPay = await this.billToPayRepository.list()
		return {
			data: billsToPay
		}
	}
}


type Output = {
    data: { id: string, value: number, due_date: string }[]
}