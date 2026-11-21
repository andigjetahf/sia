# SIA (Sistemi Inteligjences Arsimore) Classic
**Versioni Community Edition 9.3** | Sistemi Gjithëpërfshirës i Menaxhimit Shkollor  
Bazuari në themelet e teknologjisë [OS4ED](https://www.os4ed.com/) dhe i përshtatur plotësisht në gjuhën shqipe.

---

SIA (Sistemi Inteligjences Arsimore) është një platformë e avancuar dhe e lehtë për t'u përdorur për organizimin e të dhënave të nxënësve dhe operacioneve administrative arsimore, e projektuar posaçërisht për të rritur efiçencën në arsimin parauniversitar (shkollat fillore, 9-vjeçare dhe të mesme), shkollat profesionale dhe institucionet e arsimit të lartë.

## Karakteristikat Kryesore

- **Menaxhimi i të Dhënave të Nxënësve (Studentët)**: Regjistrimi demografik, të dhënat mjekësore, kontaktet prindërore, adresa, historia akademike dhe ngarkimi i fotove.
- **Menaxhimi i Stafit dhe Mësuesve**: Profilet e punonjësve, oraret mësimore, caktimi i roleve dhe niveleve të autorizimit.
- **Konfigurimi Shkollor**: Menaxhimi i viteve shkollore, shënimi i periudhave të notimit (semestra, tremujorë), dhomat/klasat, kalendari shkollor dhe lëndët.
- **Menaxhimi i Kurseve dhe Periudhave**: Krijimi i lëndëve, caktimi i kurseve dhe mësuesve përgjegjës, si dhe kufizimet e vendeve në klasë.
- **Planifikimi dhe Oraret (Scheduling)**: Planifikimi automatik dhe manual i orareve, orari javor dhe kërkesat e lëndëve.
- **Regjistrimi i Prezencës (Attendance)**: Ndjekja ditore dhe sipas periudhave, kategoritë e mungesave (të arsyeshme/të paarsyeshme), dhe raportet përmbledhëse.
- **Notimi dhe Ditari i Mësuesit (Grades & Gradebook)**: Regjistrimi i notave të vazhdueshme, detyrave, provimeve dhe llogaritja e notave përfundimtare e mesatares (GPA).
- **Raportet e Progresit dhe Dëftesat (Report Cards & Progress Reports)**: Gjenerimi i dëftesave të notave zyrtare në PDF për printim me format zyrtar.
- **Vërtetimet dhe Transkriptet (Transcripts)**: Transkriptet e plota akademike me historikun e notave sipas viteve shkollore.
- **Portali i Nxënësve dhe Prindërve**: Qasje e sigurt në kohë reale për nxënësit dhe prindërit për të parë oraret, prezencën dhe vlerësimet.
- **Importi dhe Eksporti Masiv i të Dhënave**: Vegla për ngarkimin e nxënësve dhe stafit me skedarë Excel/CSV.

---

## Kërkesat e Sistemit

Për ekzekutimin e SIA (Sistemi Inteligjences Arsimore) nevojiten:
- **Server Uebi**: Apache 2.4 ose më i lartë (me mod_rewrite të aktivizuar)
- **Baza e të Dhënave**: MySQL 8.0 ose MariaDB 10.4+
- **Gjuha e Programimit**: PHP 8.2 ose PHP 8.3 (me modulet: `mysqli`, `gd`, `curl`, `mbstring`, `xml`, `zip`)

---

## Nisja me Docker Compose

Sistemi përfshin konfigurimin e plotë me Docker për një nisje të menjëhershme:

```bash
# Nisja e të gjitha shërbimeve (Aplikacioni, MySQL, phpMyAdmin opsionale)
docker compose up -d

# Shikimi i gjendjes së kontejnerëve
docker compose ps

# Ndalimi i shërbimeve
docker compose down
```

Pasi shërbimet të jenë aktive:
- **SIA Paneli**: [http://localhost:8080](http://localhost:8080)
- **phpMyAdmin** (nëse aktivizohet me profilin `admin`): [http://localhost:8081](http://localhost:8081)

---

## Njoftim Sigurie për PHP

Sigurohuni që versioni i PHP-së në serverin tuaj të jetë i përditësuar me arnat më të fundit të sigurisë për mbrojtje maksimale:
- PHP 8.3.36 ose më i ri
- PHP 8.4.27 ose më i ri
- PHP 8.5.12 ose më i ri

Për më shumë informacion, referojuni [uebsajtit zyrtar të PHP](https://www.php.net/).

---

## Licenca

SIA (Sistemi Inteligjences Arsimore) bazohet mbi platformën me burim të hapur dhe licencohet sipas [GNU General Public License v2](http://www.gnu.org/licenses/gpl.html).
