import UUIDGenerator from "@/domain/identity/UUIDGenerator"

export class BillToPay {
	constructor(readonly id: string, readonly value: number, readonly due_date: string) {
		this.value = Number(value)
		if (isNaN(new Date(due_date).getTime())) throw new Error("invalid date")
	}

	static create(value: number, due_date: string): BillToPay {
		return new BillToPay(UUIDGenerator.create(), value, due_date)
	}
}