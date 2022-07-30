# Genesis test App
Для запуску програми необхідно мати вільний порт 3000

Усі API Endpoints починаються вiдносно шляху http://localhost:3000/api/
###Повні шляхи API Endpoints:

1. (GET) http://localhost:3000/api/rate
2. (POST) http://localhost:3000/api/subscribe
3. (POST) http://localhost:3000/api/sendEmails

Для запуску docker необхідно віконати комданду docker-compose up --build -d
Для запуску developer mode необхідно виконати docker-compose -f docker-compose.dev.yml up --build -d
