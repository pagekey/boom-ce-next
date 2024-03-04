// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#dashboard-page
//   Source:  docs/architecture/user/index.md

import AppTitle from "@/components/AppTitle";

export default function DashboardPage() {
    return (
        <>
            <AppTitle hideTitle={true}>Dashboard</AppTitle>
            <div>
                Welcome to Boom Languages!
            </div>
        </>
    )
}
