import { QueryClient } from "@tanstack/react-query";

/**
 * Throws an error if the response is not OK
 * @param {Response} res - The fetch response object
 * @throws {Error} If the response is not OK
 */
async function throwIfResNotOk(res) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

/**
 * Makes an API request with the specified method, URL, and data
 * @param {string} method - The HTTP method
 * @param {string} url - The URL to request
 * @param {any} [data] - Optional data to send with the request
 * @returns {Promise<Response>} The fetch response
 */
export async function apiRequest(method, url, data) {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

/**
 * Creates a query function for React Query
 * @param {Object} options - Query options
 * @param {('returnNull'|'throw')} options.on401 - Behavior for 401 responses
 * @returns {Function} Query function
 */
export const getQueryFn =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0], {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

// Create and configure the query client
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
