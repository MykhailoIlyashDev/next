# CI/CD Test Project

Цей проект створено для тестування автоматичного деплою у Vercel.

## Налаштування Vercel

1. Перейдіть на [vercel.com](https://vercel.com)
2. Увійдіть через GitHub
3. Натисніть "New Project"
4. Виберіть репозиторій `MykhailoIlyashDev/next`
5. Налаштування:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (залишити як є)
   - **Build Command**: `npm run build` (залишити як є)
   - **Output Directory**: `.next` (залишити як є)
6. Натисніть "Deploy"

## Тестування CI/CD

Після налаштування Vercel:
- Кожен push до `main` гілки автоматично запускає новий деплой
- Зміни з'являються на сайті протягом 1-2 хвилин
- В панелі Vercel можна відстежувати статус деплоїв

## Локальний запуск

```bash
npm install
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

## Структура проекту

- `src/app/` - App Router сторінки
- `vercel.json` - конфігурація Vercel
- `package.json` - залежності та скрипти