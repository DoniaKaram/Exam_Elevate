import Elevate_Pic from '../../../../public/assets/bro.png'
import Image from 'next/image';

type AuthLayoutProp={
    children:React.ReactNode;
}
export default function AuthLayout({children}:AuthLayoutProp){
    return(
        <main className="grid grid-cols-2 h-screen">
            
            <section className="bg-[#F0F4FC] flex flex-col justify-center rounded-tr-3xl rounded-br-3xl px-28">
              <h1 className='text-3xl py-2 font-bold'>
                Welcome to<br/>
               <span className='text-[#122D9C] font-bold'>Elevate</span>
              </h1>
              <p className='py-5 font-bold'>Quidem autem voluptatibus qui quaerat aspernatur<br/>architecto natus</p>
              <Image src={Elevate_Pic} alt="" className='py-3'></Image>
            </section>
            
            {children}
        </main>
    );

}