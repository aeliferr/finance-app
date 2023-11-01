import { BillToPay } from "@/domain/bill-to-pay/bill-to-pay"
import { faker } from "@faker-js/faker"


export default function makeBillToPay() {
	const number = faker.number.float({ min: 0})
	const dueDate = faker.date.future({ years: 1 }).toISOString()
	return BillToPay.create(number, dueDate)
}