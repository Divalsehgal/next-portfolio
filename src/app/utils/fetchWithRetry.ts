import { APIResponseError } from "@notionhq/client";

const fetchWithRetry = async <T>(
    operation: () => Promise<T>,
    retryCount = 0,
    maxRetries = 3,
    initialRetryDelay = 1000 // 1 second
): Promise<T> => {
    try {
        return await operation();
    } catch (error) {
        if (
            error instanceof APIResponseError &&
            error.code === "rate_limited" &&
            retryCount < maxRetries
        ) {
            // Exponential backoff with jitter
            const delay = initialRetryDelay * Math.pow(2, retryCount) +
                Math.random() * 1000;
            console.log(`Rate limited. Retrying in ${Math.round(delay / 1000)}s...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            return fetchWithRetry(operation, retryCount + 1);
        }
        throw error;
    }
}

export { fetchWithRetry };