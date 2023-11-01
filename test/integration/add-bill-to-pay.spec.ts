import { describe, expect, it } from "vitest"
import makeBillToPay from "../factories/make-bill-to-pay"
import makeAddBillToPay from "../factories/make-add-bill-to-pay"
import AddBillToPay from "@/application/usecase/add-bill-to-pay"
import BillToPayRepository from "@/application/usecase/repository/bill-to-pay-repository"
import { BillToPay } from "@/domain/bill-to-pay/bill-to-pay"

describe("add bill to pay tests", () => {
	it("should add a bill to pay", async () => {
		const { due_date, value } = makeBillToPay()

		const billToPayRepository: BillToPayRepository = {
			save(billToPay: BillToPay) {
				
			},
		} as BillToPayRepository

		const addBillToPay = new AddBillToPay(billToPayRepository)

		const createdBillToPay = await addBillToPay.execute({ dueDate: due_date, value})

		expect(createdBillToPay.id).toBeDefined()
	})
})