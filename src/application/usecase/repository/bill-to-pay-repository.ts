import { BillToPay } from '@/domain/bill-to-pay/bill-to-pay'

export default interface BillToPayRepository {
	get(id: string): Promise<BillToPay>
    save(billToPay: BillToPay): Promise<void>
}