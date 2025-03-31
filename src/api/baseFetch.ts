const API_BASE_URL : string = process.env.NEXT_PUBLIC_API_BACKEND_URL!; // URL API của FastAPI

export const baseFetch = async (
    endpoint: string,
    options: RequestInit = {}
) => {
    console.log('API_BASE_URL', API_BASE_URL);
    
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        credentials: "include", // QUAN TRỌNG để gửi cookie
        headers: {
            // "Content-Type": "application/json",
            ...(options.headers || {}),
        },
    }); 

    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json();
};
