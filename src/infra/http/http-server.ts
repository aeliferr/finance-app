/* eslint-disable @typescript-eslint/ban-types */
export default interface HttpServer {
    onGetOn (url: string, callback: Function): void
    onPostOn (url: string, callback: Function): void
    onPutOn (url: string, callback: Function): void
    onDeleteOn (url: string, callback: Function): void
    listen (port: number): void
}