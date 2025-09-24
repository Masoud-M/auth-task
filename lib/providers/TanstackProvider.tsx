"use client";

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function TanstackProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 1000,
        refetchInterval: 30 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
