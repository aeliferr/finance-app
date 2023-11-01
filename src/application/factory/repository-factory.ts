import BillToPayRepository from '../usecase/repository/bill-to-pay-repository'

export default interface RepositoryFactory {
    createBillToPayRepository(): BillToPayRepository
}