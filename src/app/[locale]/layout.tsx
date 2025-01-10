import { locale, routing } from "@/i18n/routing";
import {notFound} from 'next/navigation'
import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { useMessages } from "next-intl";
type localLayoutProps={
  children: React.ReactNode;
 
}& Pick<BaseParams,"params">;
 
export default function LocaleLayout({params:{locale},children}:localLayoutProps){
  if (!routing.locales.includes(locale as locale)) {
    notFound();
  }
  setRequestLocale(locale)
  const messages = useMessages();
 return(
  <html lang={locale} dir={locale==='ar'?"rtl":"ltr"}>
  <body>
   
  <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
  </NextIntlClientProvider>
    
  </body>
</html>
 );


}
