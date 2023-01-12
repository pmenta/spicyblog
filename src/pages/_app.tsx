import { QueryClient, QueryClientProvider } from "react-query";
import * as timeago from 'timeago.js';
import ptBR from 'timeago.js/lib/lang/pt_BR';

import type { AppProps } from "next/app";
import "../styles/globals.scss";

timeago.register('pt-BR', ptBR);
const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
