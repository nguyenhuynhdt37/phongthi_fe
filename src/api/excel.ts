import { baseFetch } from "./baseFetch";

export const loginAsync = async ({email, password}: ILogin) => {
    return await baseFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    }); 
};

export const get_info_user = async () => {
    return await baseFetch("/auth/get-info", { method: "GET" });
};
            