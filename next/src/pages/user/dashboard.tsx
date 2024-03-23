// Design:
//   Website: https://docs.boom.pagekey.io/architecture/user/index.html#dashboard-page
//   Source:  docs/architecture/user/index.md

import AppTitle from "@/components/AppTitle";
import { useAuth } from "@/context/AuthContext";
import { redirectIfNotLoggedIn } from "@/util/redirect";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DashboardPage() {
    const auth = useAuth();
    const router = useRouter();
    useEffect(() => redirectIfNotLoggedIn(router, auth), [auth]);
    
    return (
        <>
            <AppTitle hideTitle={true}>Dashboard</AppTitle>
            <div>
                Welcome to Boom Languages!
            </div>
        </>
    )
}
