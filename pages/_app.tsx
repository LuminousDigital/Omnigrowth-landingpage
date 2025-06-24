import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        retry: 1, // Retry failed queries once
        staleTime: 5 * 60 * 1000, // Data stays fresh for 5 minutes
      },
      mutations: {
        retry: 1, // Retry failed mutations once
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${geistSans.variable} ${geistMono.variable} font-satoshi`}>
        <Component {...pageProps} />
      </div>
    </QueryClientProvider>
  );
}