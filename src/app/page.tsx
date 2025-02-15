import { Aboreto } from "next/font/google";

const aboreto = Aboreto({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-between">
      {/* Фоновое изображение */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/laptop-guy.jpg')" }}
      />

      {/* Градиент поверх изображения */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#151515]" />

      <div></div>

      {/* Контент (должен быть выше градиента) */}
      <div className="relative flex flex-col items-center text-center text-[35px] z-10">
        <h1 className={`text-white ${aboreto.className}`}>FARID ISKAKOV</h1>
        <h1 className={`text-gray-300 ${aboreto.className}`}>WEB/SOFTWARE DEVELOPER</h1>
      </div>

      <div className="relative flex-col items-center text-center text-white z-10 pb-8">
        <h1>Contacts:</h1>
        <a href="mailto:fara.ot.ferrari@gmail.com" className="text-blue-400 underline hover:text-blue-300">
          fara.ot.ferrari@gmail.com
        </a>
      </div>
    </div>
  );
}

