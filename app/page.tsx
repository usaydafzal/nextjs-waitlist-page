import EmailForm from "@/components/EmailFom";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster />

      <section className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center items-center md:h-full h-80 bg-[#000000] relative">
          <Image
            src="/mobile-app.png"  
            alt="Mobile App Screenshots"
            layout="fill"  // Changed from 'fill' to 'fixed' if you need the image size to be constant
            className="object-contain"  // You can remove `object-bottom` and other position-related classes if not necessary
          />
        </div>

        <main className="flex flex-col gap-8 mt-8 justify-center px-6 pb-10">
          <h1 className="font-semibold tracking-tight text-zinc-900 text-3xl leading-tight md:text-4xl max-w-lg">
            Gear Up for the Launch: Join the Revolution in Streetwear!
          </h1>
          <p className="text-gray-500">
            Sign up to get the drop on our official launch and latest collections!
          </p>

          <EmailForm />
        </main>
      </section>
    </>
  );
}
