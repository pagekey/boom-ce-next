// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#route-response
//   Source:  docs/architecture/user/index.md

export default interface RouteResponse {
    status: 'success'|'error'
    message: string
}
