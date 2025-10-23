import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900">
      <div className="flex min-h-screen items-center justify-center p-8">
        <main className="w-full max-w-4xl">
          {/* Header with animated logo */}
          <div className="text-center mb-12">
            <div className="inline-block animate-bounce mb-6">
              <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={120}
                height={24}
                priority
              />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              🚀 CI/CD Test Project
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Автоматичний деплой з Vercel - кожна зміна в коді миттєво оновлює сайт!
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Швидкий деплой</h3>
              <p className="text-gray-600 dark:text-gray-300">Автоматичне розгортання за лічені секунди</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Автоматизація</h3>
              <p className="text-gray-600 dark:text-gray-300">Кожен push запускає новий деплой</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Моніторинг</h3>
              <p className="text-gray-600 dark:text-gray-300">Відстеження статусу деплоїв у реальному часі</p>
            </div>
          </div>

          {/* Status section */}
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center mb-8">
            <div className="text-4xl mb-4">✅</div>
            <h2 className="text-2xl font-bold mb-2">Система працює!</h2>
            <p className="text-lg opacity-90">
              Останнє оновлення: {new Date().toLocaleString('uk-UA')}
            </p>
            <p className="text-sm opacity-75 mt-2">
              Ця сторінка автоматично оновлюється при кожному деплої
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              className="flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Перейти до Vercel
            </a>
            
            <a
              className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 dark:text-gray-300 dark:border-gray-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              href="https://github.com/MykhailoIlyashDev/next"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub репозиторій
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
