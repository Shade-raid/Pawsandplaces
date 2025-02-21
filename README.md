# Dog spotter

Dog Spotter

Ümumi Baxış

Dog Spotter istifadəçilərə küçədə rast gəldikləri sahibsiz itlərin şəkillərini yükləməyə və onların yerini paylaşmağa imkan verən bir veb tətbiqdir. Bu layihə şəhər mühitində sahibsiz itlərin izlənməsi və onlara dəstək olmaq məqsədilə hazırlanmışdır.

Xüsusiyyətlər

📸 Şəkil Yükləmə: İstifadəçilər küçədə gördükləri sahibsiz itlərin şəkillərini yükləyə bilərlər.

🌍 Xəritə İnteqrasiyası: Yüklənmiş itlərin yerləri OpenStreetMap-də işarələnir.

📍 Coğrafi Məkan Dəstəyi: İstifadəçilər xəritəyə klikləməklə dəqiq yerləri qeyd edə bilərlər.

🔎 Axtarış Funksiyası: Yerlərə görə sahibsiz itləri asanlıqla tapın.

🖼 Qalereya Görünüşü: Yüklənmiş it şəkillərini və onların təsvirlərini görüntüləyin.

🚀 Sürətli və Mobil Uyğun: Həm masaüstü, həm də mobil cihazlar üçün optimallaşdırılmışdır.


Texnologiyalar

Frontend (React.js)

React.js və Vite

React-Leaflet (interaktiv xəritələr üçün)

Material UI (UI komponentləri üçün)


Backend (Node.js & Express.js)

Express.js (API üçün)

Multer (fayl yükləmə üçün)

MongoDB & Mongoose (verilənlər bazası üçün)

CORS (çox-mənşəli sorğular üçün)


Digər Alətlər

OpenStreetMap (xəritələmə üçün)

Docker (opsional konteynerizasiya üçün)



---

Quraşdırma və Konfiqurasiya

1️⃣ Repositoriyanı Klonlayın


2️⃣ Backend-i Quraşdırın

cd backend
 npm install

.env faylı yaradın və aşağıdakıları daxil edin:

MONGO_URI=mongodb://localhost:27017/dogspotter
PORT=5000

Backend serverini başladın:

npm start


3️⃣ Frontend-i Quraşdırın

cd frontend
 npm install
 npm start


---

API End nöqtələri

İtlər üçün API Sorğuları

İt yükləmək üçün nümunə sorğu:

POST /api/dogs
Content-Type: multipart/form-data


---

Yayım (Deployment)

Backend-i Docker ilə yerləşdirə bilərsiniz:

docker build -t dog-spotter-backend .
docker run -p 5000:5000 dog-spotter-backend

Frontend üçün:

docker build -t dog-spotter-frontend .
docker run -p 3000:3000 dog-spotter-frontend


---

Gələcək İnkişaflar

✅ İstifadəçi Girişi - İstifadəçilərin hesab yaradıb öz töhfələrini izləməsi.
✅ Admin Panel - Yüklənmiş şəkillərin idarə olunması və moderasiyası.
✅ AI İt Tanıma - Süni intellektlə it cinslərinin müəyyən edilməsi.


---

Layihəyə Dəstək

İstənilən səhvləri və ya təklifləri GitHub-da paylaşa bilərsiniz. Reponu fork edib dəyişikliklər edərək Pull Request göndərin! 🚀


---

Lisenziya

Bu layihə MIT Lisenziyası altında paylanır.

