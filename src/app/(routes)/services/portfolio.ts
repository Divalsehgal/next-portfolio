import { fetchWithRetry } from "@/app/utils/fetchWithRetry";

// Fetch GitHub JSON config
const getPortfolioConfig = async () => {
    const res = await fetchWithRetry(() =>
        fetch("https://raw.githubusercontent.com/Divalsehgal/portfolio-config/main/config.json", {
            next: { revalidate: 60 },
        })
    );

    if (!res.ok) {
        console.error("GitHub fetch failed:", res.status, res.statusText);
        throw new Error("Failed to fetch GitHub JSON");
    }

    return { config: await res.json() };
}


export { getPortfolioConfig };