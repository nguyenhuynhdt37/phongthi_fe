import { baseFetch } from "./baseFetch";

export const loginAsync = async ({ email, password }: ILogin) => {
    return await baseFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
    });
};
export const upload_excel_async = async (files: File[]) => {
    var formData = new FormData()
    files.forEach((file: File) => {
        console.log('file', file);
        
        formData.append('files', file); // Key là 'files'
      });
    return await baseFetch("/excel/upload", {
        method: "POST",
        body: formData,
    });
};
