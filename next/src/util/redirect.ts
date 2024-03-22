import { AuthInfo } from "@/context/AuthContext";
import { NextRouter } from "next/router";

export const redirectIfNotLoggedIn = (router: NextRouter, auth: AuthInfo) => {
    if (!auth.loading && !auth.loggedIn) {
        router.replace('/user/login');
    }
};

export const redirectIfAlreadyLoggedIn = (router: NextRouter, auth: AuthInfo) => {
    if (!auth.loading && auth.loggedIn) {
        router.replace('/user/dashboard');
    }
};
