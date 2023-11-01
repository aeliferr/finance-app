// ISP - Interface Segregation Principle a partir da camada de Interface Adapters
export default interface DatabaseConnection {
	query<T> (statement: string, params: any): Promise<T>;
	close (): Promise<void>;
}