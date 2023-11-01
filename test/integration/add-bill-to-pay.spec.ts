import { describe, expect, it } from "vitest"
import makeBillToPay from "../factories/make-bill-to-pay"
import makeAddBillToPay from "../factories/make-add-bill-to-pay"

describe("add bill to pay tests", () => {
	it("should add a bill to pay", async () => {
		const { due_date, value } = makeBillToPay()

		const addBillToPay = makeAddBillToPay()

		const createdBillToPay = await addBillToPay.execute({ dueDate: due_date, value})

		expect(createdBillToPay.id).toBeDefined()
	})
})