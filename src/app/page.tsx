import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 bg-white text-black">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 sm:mt-8">aicel</h1>

      <div className="relative flex place-items-center my-4 sm:my-8">
        <Image
          src="/Painting.svg"
          alt="aicel working.."
          width={300}
          height={300}
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80"
          priority
        />
      </div>

      <p className="text-lg sm:text-xl md:text-2xl text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-4 sm:mb-8">
        The next generation chatbot<br/>Coming soon to ai-celerate your conversations.
      </p>
    </main>
  )
}

