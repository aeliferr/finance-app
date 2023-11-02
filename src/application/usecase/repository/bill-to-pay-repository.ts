import { BillToPay } from "@/domain/bill-to-pay/bill-to-pay"

export default interface BillToPayRepository {
	list(): Promise<BillToPay[]>
	get(id: string): Promise<BillToPay>
    save(billToPay: BillToPay): Promise<void>
}