import { BillToPay } from "@/domain/bill-to-pay/bill-to-pay"
import { describe, expect, it } from "vitest"
import { faker } from "@faker-js/faker"

describe("bill to pay tests", () => {
	it("should create a new bill to pay", () => {
		const value = faker.number.float({ min: 0})
		const dueDate = faker.date.future({ years: 1 }).toISOString()
		const billToPay = BillToPay.create(value, dueDate)
        
		expect(billToPay.id).toBeDefined()
		expect(billToPay.due_date).toBe(dueDate)
		expect(billToPay.value).toBe(value)
	})
})