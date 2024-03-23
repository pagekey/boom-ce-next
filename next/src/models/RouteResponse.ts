// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#route-response
//   Source:  docs/architecture/user/index.md

export default interface RouteResponse<T = any> {
    status: 'success'|'error'
    message: string
    data?: T
}
