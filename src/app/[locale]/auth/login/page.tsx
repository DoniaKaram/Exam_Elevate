"use client"
import { useTranslations } from 'use-intl';
import LoginForm from './_components/login-form';
import Header from '../_components/header';
function Page() {
  const t=useTranslations();
  return (
    
    <section className='flex justify-center flex-col p-8 gap-6'>
      <Header/>
      <div className='mt-[110px]'>
      <h2 className='text-xl font-bold '>{t('Sign in')}</h2>
      <LoginForm/>
      </div>
     
    </section>
  );
}

export default Page;
