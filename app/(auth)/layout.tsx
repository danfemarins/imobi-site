"use client";  // Adicionando a diretiva "use client"

import { useState } from "react";
import Image from "next/image";
import Logo from "@/components/ui/logo";
import TestImage from "@/public/images/auth-bg.svg"; // A simple test image

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Estado para controlar a opacidade da imagem
  const [imageLoaded, setImageLoaded] = useState(false);

  // Função chamada após a imagem carregar
  const handleImageLoad = () => {
    setImageLoaded(true); // A opacidade vai para 100% após a imagem ser carregada
  };

  return (
    <>
      <header className="absolute z-30 w-full">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Site branding */}
            <div className="mr-4 shrink-0">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="relative flex grow">
        <div
          className="pointer-events-none absolute bottom-0 left-0 -translate-x-1/3"
          aria-hidden="true"
        >
          <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px]"></div>
        </div>

        {/* Content */}
        <div className="w-full">
          <div className="flex h-full flex-col justify-center before:min-h-[4rem] before:flex-1 after:flex-1 md:before:min-h-[5rem]">
            <div className="px-4 sm:px-6">
              <div className="mx-auto w-full max-w-sm">
                <div className="py-16 md:py-20">{children}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side with property purchase illustration */}
        <div className="relative my-6 mr-6 hidden w-[572px] shrink-0 overflow-hidden rounded-2xl lg:block">
          {/* Background */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -ml-24 -translate-x-1/2 -translate-y-1/2 bg-blue-50"
            aria-hidden="true"
          >
            <Image
              src={TestImage} // A simple test image
              className={`max-w-none object-cover transition-opacity duration-1000 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} // Aplica o fade-in com transição de opacidade
              width={985}
              height={1284}
              alt="Property buyer with ImobiGestor"
              onLoadingComplete={handleImageLoad} // Dispara a mudança de opacidade após a imagem carregar
            />
          </div>
        </div>
      </main>
    </>
  );
}
