import { useMessages, NextIntlClientProvider } from 'next-intl';
import NextAuthProvider from './components/next-auth-provider';

type ProviderProps = {
  children: React.ReactNode;
};

function Providers({ children }: ProviderProps) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <NextAuthProvider>{children}</NextAuthProvider>
    </NextIntlClientProvider>
  );
}

export default Providers;