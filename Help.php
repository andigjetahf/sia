<?php
#**************************************************************************
#  SIA - Sistemi Informativ Shkollor (bazuar në openSIS)
#  Open Solutions for Education, Inc. web: www.os4ed.com
#
#  SIA është i bazuar në ueb, me burim të hapur dhe i pasur me veçori që
#  përfshijnë të dhëna demografike të nxënësve, oraret, regjistrin e notave,
#  vijueshmërinë, dëftesat, kualifikimin, transkriptet, portalin e prindërve,
#  portalin e nxënësve dhe më shumë.
#
#  Ky program lëshohet sipas kushteve të Licencës së Përgjithshme Publike GNU (GPLv2).
#  Shih license.txt.
#***************************************************************************************
include('RedirectRootInc.php'); 
include 'Warehouse.php';
$url=validateQueryString(curPageURL());
if($url===FALSE)
 {
 header('Location: index.php');
 }
// DEFAULT
if(User('PROFILE')=='admin')
	$help['default'] = '<p><strong>Paneli i Kontrollit SIA (Sistemi Inteligjences Arsimore)</strong></p><p>Paneli i kontrollit është faqja juaj kryesore standarde dhe ofron qasje në njoftimet e rëndësishme kur hyni në sistem. Paneli i SIA shfaq të gjitha njoftimet më të fundit të kalendarit, shënimet e portalit dhe njoftimet për mësimdhënësit që nuk kanë regjistruar mungesat. Kur hyni për herë të parë, ekrani do të jetë i zbrazët. Ai do të plotësohet me regjistrimet ditore gjatë përdorimit të sistemit. Si administrator, ju mund të konfiguroni shkollat në këtë sistem, të menaxhoni nxënësit dhe përdoruesit, si dhe të hapni raportet kryesore të nxënësve.</p><p>Ju keni qasje në çdo shkollë të sistemit. Për të zgjedhur një shkollë për të punuar, përzgjidheni atë nga menyja rënëse në krye. Programi do të rifreskohet automatikisht me shkollën e re në hapësirën e punës. Në të njëjtën mënyrë mund të ndryshoni vitin shkollor dhe periudhën aktuale të vlerësimit.</p><p>Gjithashtu, mund të qaseni me shpejtësi te të dhënat demografike të nxënësit nga skeda \'Nxënësit\'.</p><p>Në mënyrë të ngjashme, për të parë të dhënat e përdoruesve klikoni në skedën \'Përdoruesit\'.</p><p>Kur klikoni mbi ndonjë nga skedat në menynë kryesore, do të shihni listën e nënmenyve në atë kategori. Klikimi mbi çdo meny hap faqen përkatëse në dritaren kryesore dhe përditëson kornizën e ndihmës për atë seksion.</p><p>Në shumë pjesë të sistemit, të dhënat janë të modifikueshme. Fillimisht klikoni mbi vlerën që dëshironi të ndryshoni për të hapur fushën e modifikimit. Pasi të ndryshoni vlerën dhe ta ruani atë, e dhëna do të përditësohet.</p><p>Mund të dilni nga sistemi në çdo moment duke klikuar lidhjen "Dil" në këndin e djathtë lart të hapësirës suaj të punës.</p>';
elseif(User('PROFILE')=='teacher')
	$help['default'] = '<p><strong>Paneli i Kontrollit</strong></p><p>Paneli i kontrollit është faqja juaj kryesore standarde dhe ofron qasje në njoftimet e rëndësishme kur hyni në sistem. Paneli i SIA shfaq të gjitha ngjarjet e fundit të kalendarit, shënimet e portalit dhe njoftimet për orët mësimore ku mungon regjistrimi i vijueshmërisë. Si mësimdhënës, ju mund të shikoni të dhënat e nxënësve dhe oraret e tyre për lëndët që mësoni, si dhe të regjistroni mungesat, notat dhe aktivitetet jashtëshkollore. Mund të menaxhoni notat nga skeda \'Notat\', nga ku mund të printoni gjithashtu raporte progresi për nxënësit tuaj.</p><p>Për të zgjedhur një orë mësimore, përzgjidheni atë nga menyja rënëse në krye. Hapësira e punës do të rifreskohet automatikisht me orën e re. Në të njëjtën mënyrë mund të ndryshoni edhe vitin shkollor dhe periudhën e vlerësimit.</p><p>Mund të qaseni me shpejtësi te të dhënat demografike të nxënësit nga skeda \'Nxënësit\'.</p><p>Kur klikoni mbi skedat në menynë kryesore, do të shfaqet lista e nënmenyve përkatëse. Klikimi mbi një nënmeny hap faqen përkatëse dhe përditëson ndihmën për atë seksion.</p><p>Në shumë faqe, të dhënat mund të modifikohen drejtpërdrejt duke klikuar mbi vlerën që dëshironi të ndryshoni. Pasi të bëni ndryshimin dhe të klikoni ruaj, e dhëna përditësohet.</p><p>Mund të dilni nga sistemi në çdo moment duke klikuar lidhjen "Dil" në këndin e djathtë lart të hapësirës suaj të punës.</p>';
elseif(User('PROFILE')=='parent')
	$help['default'] = '<p><strong>Paneli i Kontrollit</strong></p><p>Paneli i kontrollit është faqja juaj kryesore standarde dhe ofron qasje në njoftimet e rëndësishme kur hyni në sistem. Paneli shfaq ngjarjet e fundit të kalendarit shkollor, shënimet e portalit dhe informacione të rëndësishme. Si prind, ju mund të ndiqni nga afër të dhënat e fëmijëve tuaj: oraret mësimore, notat, vlerësimet e aktiviteteve dhe vijueshmërinë/mungesat.</p><p>Për të zgjedhur një fëmijë, përzgjidhni emrin e tij nga menyja rënëse në krye. Programi do të rifreskohet automatikisht me të dhënat e fëmijës në hapësirën e punës. Në të njëjtën mënyrë mund të ndryshoni vitin shkollor dhe periudhën e vlerësimit.</p><p>Kur klikoni mbi skedat e menysë, do të shihni nënmenytë përkatëse për të parë oraret, dëftesat dhe mungesat.</p><p>Mund të dilni nga sistemi në çdo moment duke klikuar lidhjen "Dil" në këndin e djathtë lart të hapësirës suaj të punës.</p>';
elseif(User('PROFILE')=='student')
{
	$help['default'] = '<p><strong>Paneli i Kontrollit</strong></p><p>Paneli i kontrollit është faqja juaj kryesore standarde dhe ofron qasje në njoftime të rëndësishme kur hyni në sistem. Paneli shfaq ngjarjet më të fundit të kalendarit shkollor dhe shënimet e shkollës. Si nxënës, ju mund të shikoni të dhënat tuaja të përgjithshme, orarin mësimor, notat, vlerësimet dhe regjistrin e mungesave.</p><p>Mund të ndryshoni vitin shkollor dhe periudhën e vlerësimit nga menyja në kornizën anësore për të parë të dhënat përkatëse të asaj periudhe.</p><p>Kur klikoni mbi skedat në menynë kryesore, do të shfaqet lista e nënmenyve ku mund të zgjidhni seksionin që dëshironi të shihni.</p><p>Mund të dilni nga sistemi në çdo moment duke klikuar lidhjen "Dil" në këndin e djathtë lart të hapësirës suaj të punës.</p>';
	$_openSIS['User'][1]['PROFILE'] = 'parent';
	$student = true;
}
// SCHOOL SETUP ---
if(User('PROFILE')=='admin')
{
            $help['School_Setup/PortalNotes.php'] = '<p><strong>Shënimet e Portalit</strong></p><p>Kjo faqe ju mundëson të shtoni shënime dhe lajmërime në sistem. Shënimet ndihmojnë në informimin e përdoruesve të sistemit për çdo njoftim të ri në shkollë. Mund të zgjidhni periudhën kohore gjatë së cilës shënimi do të jetë i dukshëm për përdoruesit, si dhe të përcaktoni cilat profile përdoruesish kanë të drejtë ta shohin atë.</p><p>Për të modifikuar një shënim, klikoni mbi të dhënat e tij, ndryshoni vlerën dhe klikoni butonin "Ruaj".</p><p>Për të fshirë një shënim, klikoni ikonën e fshirjes (-) pranë shënimit. Do t\'ju kërkohet të konfirmoni fshirjen.</p>';
            $help['School_Setup/Schools.php'] = '<p><strong>Të Dhënat e Shkollës</strong></p><p>Gjatë instalimit krijohet automatikisht një shkollë standarde. Pasi të hyni në sistem, mund të përditësoni të dhënat me informacionin e shkollës suaj: emrin, adresën, numrin e telefonit dhe drejtorin e shkollës nga kjo faqe.</p><p>Për të modifikuar të dhënat e shkollës, klikoni mbi tekstin ekzistues dhe fusha do të bëhet e modifikueshme. Vendosni të dhënat e reja dhe klikoni "Përditëso". Keni gjithashtu mundësinë ta fshini shkollën; megjithatë, nuk mund të fshini një shkollë nëse ka nxënës të regjistruar në të.</p>';
            $help['School_Setup/Schools.php?new_school=true'] = '<p><strong>Shto një Shkollë</strong></p><p>Kjo faqe ju mundëson të shtoni një shkollë të re në sistem. Plotësoni të dhënat e shkollës dhe klikoni butonin "Ruaj".</p><p>Për të kaluar te shkolla e re që sapo shtuat, ndryshoni shkollën në menynë rënëse në krye nga shkolla aktuale te e reja.</p>';
            $help['School_Setup/CopySchool.php'] = '<p><strong>Kopjo Shkollën</strong></p><p>Kjo faqe ju mundëson të bëni një kopje të një shkolle ekzistuese. Të dhënat që kopjohen përfshijnë orët mësimore, periudhat e vlerësimit, kodet e notave të dëftesës, kodet e komenteve të dëftesës, kodet e aktiviteteve jashtëshkollore, kodet e mungesave dhe nivelet e klasave.</p>';
            $help['School_Setup/UploadLogo.php'] = '<p><strong>Ngarko Logon e Shkollës</strong></p><p>Kjo skedë ju mundëson të ngarkoni logon e shkollës suaj në sistemin SIA. Logoja që vendosni këtu do të shfaqet në të gjitha raportet dhe dokumentet e printueshme nga sistemi (p.sh. Dëftesa Notash, Transkripte, Raporte të Avancuara, Raporte Oraresh, etj.).</p><p>Ruani fillimisht logon e shkollës në kompjuterin tuaj, zgjidhni skedarin përmes opsionit përkatës dhe klikoni "Ngarko".</p>';
            $help['School_Setup/SystemPreference.php'] = '<p><strong>Preferencat e Sistemit</strong></p><p>Kjo faqe përmban opsione të ndryshme konfigurimi që ju lejojnë të përshtatni sjelljen e sistemit sipas kërkesave të institucionit tuaj.</p>';
            $help['School_Setup/SystemPreference.php?page_display=SystemPreference'] = '<p><strong>Caktimi i minutave për gjysmë-dite dhe ditë të plotë</strong></p><p>Ky opsion ju mundëson të përcaktoni kohëzgjatjen në minuta për gjysmë-dite dhe ditë të plotë mësimore. Mund t\'i ndryshoni minutat sipas nevojës dhe të klikoni mbi butonin përkatës për ruajtje.</p>';
            $help['School_Setup/SystemPreference.php?page_display=FAILURE'] = '<p><strong>Kufiri i provave të dështuara të hyrjes</strong></p><p>Ky opsion përcakton numrin e lejuar të përpjekjeve të pasuksesshme të hyrjes me fjalëkalim të pasaktë, pas të cilave llogaria bllokohet për arsye sigurie. Vetëm një administrator mund ta zhbllokojë llogarinë. Nëse nuk dëshironi këtë kufizim, mund ta çaktivizoni.</p>';
            $help['School_Setup/SystemPreference.php?page_display=INACTIVITY'] = '<p><strong>Ditët e lejuara të pasivitetit të përdoruesit</strong></p><p>Ky opsion vendos numrin maksimal të ditëve gjatë të cilave një përdorues mund të qëndrojë pa hyrë në sistem. Nëse përdoruesi nuk hyn për periudhën e caktuar (p.sh. 30 ditë), llogaria bllokohet automatikisht dhe kërkon zhbllokim nga administratori.</p>';
            $help['School_Setup/SystemPreference.php?page_display=MAINTENANCE'] = '<p><strong>Vendos Sistemin në Modalitet Mirëmbajtjeje</strong></p><p>Ky opsion i lejon administratorit të vendosë një njoftim të rëndësishëm gjatë kohës që po kryhet mirëmbajtja teknike e sistemit. Gjatë kësaj kohe asnjë përdorues i thjeshtë nuk do të mund të hyjë në sistem dhe në ekranin e hyrjes do të shfaqet njoftimi i vendosur.</p>';
            $help['School_Setup/SystemPreference.php?page_display=CURRENCY'] = '<p><strong>Përcakto Monedhën</strong></p><p>Ky opsion ju mundëson të zgjidhni monedhën zyrtare të përdorur në sistem sipas nevojave të shkollës dhe ta ruani atë.</p>';
            $help['School_Setup/MarkingPeriods.php'] = '<p><strong>Periudhat e Vlerësimit</strong></p><p>Faqja e periudhave të vlerësimit përdoret për të konfiguruar semestrat, tremujorët dhe periudhat e notimit për një vit shkollor. Gjatë instalimit krijohen katër nivele: Viti, Semestrat, Tremujorët dhe Periudhat e Progresit. Mund të shtoni, modifikoni apo fshini periudha sipas strukturës së shkollës suaj.</p><p>Për të shtuar një periudhë, klikoni butonin Shto (+) në kolonën përkatëse, plotësoni të dhënat dhe klikoni "Ruaj".</p><p>Për të modifikuar një periudhë, klikoni mbi të, ndryshoni vlerën dhe klikoni "Ruaj".</p><p>Për të fshirë një periudhë, përzgjidheni atë nga lista dhe klikoni "Fshij". Kujdes: Nuk mund të fshini një periudhë vlerësimi nëse ka nxënës të caktuar në lëndë brenda asaj periudhe.</p><p>Kini parasysh se datat e dy periudhave të të njëjtit nivel nuk mund të mbivendosen.</p>';
            $help['School_Setup/Calendar.php'] = '<p><strong>Kalendari Shkollor</strong></p><p>Kjo faqe ju mundëson të konfiguroni kalendarin shkollor për të gjithë vitin. Kalendari shfaq muajin aktual si parazgjedhje. Muaji dhe viti mund të ndryshohen në menynë rënëse në krye duke klikuar më pas "Përditëso".</p><p>Për ditët me orar të plotë, kutia në këndin e sipërm djathtas të ditës duhet të jetë e shënuar. Për ditët me orar të shkurtuar, hiqni shënimin dhe shënoni minutat mësimore në kutinë përkatëse. Për ditët e pushimit, kutia duhet të jetë e pashënuar dhe fusha e minutave bosh. Klikoni "Përditëso" pasi të bëni ndryshimet.</p><p>Për të inicializuar kalendarin në fillim të vitit, përdorni funksionin "Krijo kalendarin e këtij viti". Kjo ju mundëson të caktoni intervalin kohor të vitit shkollor dhe ditët e javës kur mbahet mësimi.</p><p>Kalendari shërben gjithashtu për paraqitjen e ngjarjeve shkollore (trajnime, aktivitete sportive, festa, etj.), të cilat janë të dukshme për administratorët, mësimdhënësit dhe prindërit.</p><p>Për të shtuar një ngjarje, klikoni ikonën (+) në këndin e poshtëm majtas të datës përkatëse, plotësoni të dhënat në dritaren kërcyese dhe klikoni "Ruaj".</p><p>Për të modifikuar një ngjarje, klikoni mbi të dhe ndryshoni të dhënat në dritaren kërcyese, pastaj klikoni "Ruaj".</p>';
            $help['School_Setup/Periods.php'] = '<p><strong>Orët Mësimore</strong></p><p>Kjo faqe ju lejon të konfiguroni orët individuale të mësimit në shkollën tuaj (p.sh. Ora 1, Ora 2, etj.). Për të shtuar një orë të re, plotësoni titullin, emrin e shkurtuar, radhën e renditjes dhe kohëzgjatjen në minuta në fushat bosh në fund të listës dhe klikoni "Ruaj".</p><p>Për të modifikuar një orë, klikoni mbi të dhënat e saj, ndryshoni vlerën dhe klikoni "Ruaj". Për ta fshirë, klikoni ikonën e fshirjes (X) pranë orës përkatëse.</p>';
            $help['School_Setup/GradeLevels.php'] = '<p><strong>Nivelet e Klasave</strong></p><p>Kjo faqe ju mundëson të konfiguroni nivelet e klasave në shkollën tuaj (p.sh. Klasa 1 deri Klasa 12). Për të shtuar një nivel klase, plotësoni titullin, emrin e shkurtuar, radhën e renditjes dhe klasën pasardhëse në fushat në fund të listës dhe klikoni "Ruaj". Fusha "Klasa Tjetër" përcakton nivelin ku nxënësit do të kalojnë në vitin e ardhshëm shkollor.</p><p>Për të modifikuar një nivel klase, klikoni mbi vlerën që dëshironi të ndryshoni dhe klikoni "Ruaj". Për ta fshirë, klikoni ikonën (X) pranë saj.</p>';
            $help['School_Setup/Rollover.php'] = '<p><strong>Bartja në Vitin e Ri Shkollor (Rollover)</strong></p><p>Faqja e bartjes kopjon të dhënat e vitit aktual shkollor në vitin e ardhshëm. Nxënësit regjistrohen në klasën pasardhëse dhe të dhënat e konfigurimit të shkollës transferohen për vitin e ri.</p><p>Të dhënat që kopjohen përfshijnë orët mësimore, periudhat e vlerësimit, përdoruesit, lëndët, regjistrimet e nxënësve, kodet e notave, kodet e regjistrimit, kodet e mungesave dhe aktivitetet jashtëshkollore.</p>';
            $help['School_Setup/Courses.php'] = '<p><strong>Menaxhimi i Lëndëve</strong></p><p>Kjo faqe ju mundëson të krijoni dhe menaxhoni fushat lëndore, lëndët dhe orët mësimore të lëndëve. Duke klikuar mbi shenjën (+) ose "Shto një fushë lëndore", mund të krijoni lëndët dhe më pas orët mësimore për secilën lëndë. Këtu caktoni emrin e shkurtuar, mësimdhënësin, shkallën e notimit, periudhën e vlerësimit etj., dhe klikoni ruaj. Pasi të caktoni nxënës në një orë lëndore, nuk mund ta fshini më atë lëndë pa hequr më parë orarin.</p>';
            $help['School_Setup/CourseCatalog.php'] = '<p><strong>Katalogu i Lëndëve</strong></p><p>Ky opsion ju jep pasqyrën e plotë të lëndëve në formë tabele. Këtu paraqiten të gjitha informacionet mbi fushat mësimore, lëndët, periudhat e vlerësimit, orët, ditët kur zhvillohet mësimi, klasa (salla) dhe mësimdhënësi përkatës. Faqja ofron filtra kërkimi sipas periudhës dhe lëndës, si dhe mundësinë për të printuar të gjitha të dhënat.</p>';
            $help['School_Setup/PrintCatalog.php'] = '<p><strong>Printo Katalogun sipas Periudhës</strong></p><p>Ky opsion ju mundëson të shihni dhe printoni katalogun e lëndëve sipas periudhës së zgjedhur.</p>';
            $help['School_Setup/PrintAllCourses.php'] = '<p><strong>Printo të Gjitha Lëndët</strong></p><p>Ky opsion ju mundëson të printoni listën e plotë të të gjitha lëndëve së bashku me orët dhe të dhënat përkatëse mësimore.</p>';
            $help['School_Setup'] = $help['School_Setup/Calendar.php'];
}
else
{
            $help['School_Setup/Schools.php'] = '<p><strong>Të Dhënat e Shkollës</strong></p><p>Shfaq emrin, adresën, numrin e kontaktit dhe drejtorin e shkollës aktuale.</p>';
            $help['School_Setup/Calendar.php'] = '<p><strong>Kalendari Shkollor</strong></p><p>Kalendari pasqyron ngjarjet e shkollës, detyrat mësimore dhe regjistrin ditor të zhvillimit të mësimit. Si parazgjedhje, shfaqet muaji aktual. Ngjarjet e shkollës dhe detyrat shfaqen në kutinë e çdo date përkatëse. Ditët me mësim të plotë shënohen me një shenjë të gjelbër, ndërsa ditët me orar të pjesshëm tregojnë numrin e minutave.</p>';
            $help['School_Setup/MarkingPeriods.php'] = '<p><strong>Periudhat e Vlerësimit</strong></p><p>Shfaq periudhat zyrtare të vlerësimit të vitit shkollor (semestrat, tremujorët dhe periudhat e notimit).</p>';
            $help['School_Setup'] = $help['School_Setup/Calendar.php'];
}

// STUDENTS ---
if(User('PROFILE')=='admin')
{
            $help['Students/Student.php'] = '<p><strong>Të Dhënat e Nxënësit</strong></p><p>Ky opsion ju jep të gjitha të dhënat e nevojshme për një nxënës të caktuar. Pasi të kërkoni dhe përzgjidhni një nxënës nga lista, do të hapen të dhënat e tij të detajuara.</p>';
            $help['Students/Student.php?include=GeneralInfoInc?student_id=new'] = '<p><strong>Shto Nxënës</strong></p><p>Duke klikuar këtu hapet një formular i zbrazët ku plotësoni të dhënat e nevojshme të nxënësit dhe klikoni "Ruaj". Vetëm fushat e shënuara me yll (*) janë të detyrueshme. Keni gjithashtu mundësinë të ngarkoni fotografinë e nxënësit, të regjistroni adresën, kontaktet e emergjencës, të dhënat mjekësore, komentet dhe synimet.</p>';
            $help['Students/Student.php?include=GeneralInfoInc'] = '<p><strong>Të Dhënat e Përgjithshme</strong></p><p>Kjo faqe paraqet të dhënat themelore të nxënësit: datëlindjen, numrin personal, përkatësinë, gjininë, vendlindjen dhe klasën.</p>';
            $help['Students/Student.php?include=Address'] = '<p><strong>Adresat dhe Kontaktet</strong></p><p>Paraqet adresën e banimit dhe informacionin e kontaktit të nxënësit. Çdo nxënës duhet të ketë një adresë kryesore dhe të paktën dy kontakte emergjence.</p>';
            $help['Students/Student.php?include=Medical'] = '<p><strong>Të Dhënat Mjekësore</strong></p><p>Skeda \'Mjekësore\' shfaq informacionin shëndetësor të nxënësit: mjekun familjar, numrin e telefonit, spitalin e preferuar, vërejtjet mjekësore, vaksinimet, kontrollet periodike dhe alergjitë ose sëmundjet e veçanta. Mund të shtoni, modifikoni ose fshini të dhëna mjekësore dhe t\'i ruani ato me butonin "Ruaj".</p>';
            $help['Students/Student.php?include=Enrollment'] = '<p><strong>Regjistrimi dhe Çregjistrimi</strong></p><p>Kjo faqe përdoret për të regjistruar ose çregjistruar një nxënës nga shkolla. Një nxënës mund të ketë vetëm një regjistrim aktiv në një moment të caktuar. Për të çregjistruar një nxënës, vendosni datën dhe arsyen e largimit dhe klikoni "Ruaj". Për ta riregjistruar, plotësoni datën dhe kodin e regjistrimit në fund të listës.</p>';
            $help['Students/AssignOtherInfo.php'] = '<p><strong>Caktimi në Grup i të Dhënave të Nxënësve</strong></p><p>Ky mjet ju lejon të modifikoni të dhëna për një grup nxënësish njëherësh. Mund të filtroni nxënësit sipas emrit, mbiemrit, klasës apo aktiviteteve, të përzgjidhni fushat që dëshironi të ndryshoni (të përgjithshme, mjekësore, etj.), të shënoni vlerat e reja, të zgjidhni nxënësit me anë të kutive përzgjedhëse dhe të klikoni "Ruaj".</p>';
            $help['Students/AddUsers.php'] = '<p><strong>Lidh Prindërit me Nxënësit</strong></p><p>Ky opsion ju mundëson të lidhni llogaritë e prindërve me fëmijët e tyre. Pas lidhjes, prindi do të mund të hyjë në sistem me llogarinë e tij dhe të shohë vijueshmërinë, notat, orarin dhe progresin e fëmijës.</p>';
            $help['Students/DataFields.php'] = '<p><strong>Fushat e Personalizuara të të Dhënave</strong></p><p>Kjo faqe ju lejon të krijoni fusha shtesë të personalizuara për ruajtjen e të dhënave të veçanta të nxënësve në skedën "Të Dhëna të Tjera". Mbështeten fusha me tekst, kuti përzgjedhëse (po/jo), data dhe meny rënëse.</p>';
            $help['Students/EnrollmentCodes.php'] = '<p><strong>Kodet e Regjistrimit</strong></p><p>Kjo faqe ju lejon të menaxhoni kodet zyrtare të regjistrimit dhe çregjistrimit të nxënësve (p.sh. Regjistrim i Ri, Transferuar Brenda, Transferuar Jashtë, Çregjistruar). Këto kode aplikohen në të gjithë sistemin shkollor.</p>';
            $help['Students/AdvancedReport.php'] = '<p><strong>Raporte të Avancuara</strong></p><p>Ky funksion ju mundëson të krijoni raporte të personalizuara sipas kritereve të dëshiruara. Mund të filtroni nxënësit sipas klasës, gjinisë apo fushave të tjera, të zgjidhni kolonat që dëshironi të përfshihen (të përgjithshme, adresa, të dhëna mjekësore, orari) dhe të gjeneroni raportin e plotë për nxënësit e përzgjedhur duke klikuar butonin '._createReportForSelectedStudents.'.</p>';
            $help['Students/AddDrop.php'] = '<p><strong>Raporti i Regjistrimeve / Çregjistrimeve</strong></p><p>Gjeneron një raport zyrtar për një periudhë të caktuar kohore që tregon nxënësit e regjistruar dhe ata të çregjistruar nga shkolla, së bashku me datat dhe arsyet përkatëse. Raporti mund të eksportohet edhe në formatin Excel.</p>';
            $help['Students/Letters.php'] = '<p><strong>Printo Letra Zyrtare</strong></p><p>Ju lejon të krijoni dhe printoni letra të personalizuara për prindërit ose nxënësit duke përdorur shabllone me variabla automatikë si __FULL_NAME__, __FIRST_NAME__, __MIDDLE_NAME__, __LAST_NAME__, __STUDENT_ID__, __GRADE_ID__. Letrat mund të gjenerohen së bashku me etiketat postare.</p>';
            $help['Students/MailingLabels.php'] = '<p><strong>Printo Etiketa Postare</strong></p><p>Mundëson krijimin dhe printimin e etiketave postare për nxënësit e përzgjedhur ose kontaktet e tyre emergjente.</p>';
            $help['Students/StudentLabels.php'] = '<p><strong>Printo Etiketa Nxënësish</strong></p><p>Gjeneron etiketa identifikuese për nxënësit, me mundësi përfshirjeje të kujdestarit të klasës dhe sallës përkatëse.</p>';
            $help['Students/PrintStudentInfo.php'] = '<p><strong>Printo të Dhënat e Nxënësve</strong></p><p>Mundëson printimin e skedave individuale me të dhënat e përzgjedhura të nxënësve (të dhëna të përgjithshme, adresa, kontakte, shënime mjekësore, synime).</p>';
            $help['Students/GoalReport.php'] = '<p><strong>Printo Synimet dhe Progresin</strong></p><p>Gjeneron një raport të printueshëm me synimet edukative dhe ecurinë e progresit për nxënësit e përzgjedhur brenda një intervali kohor.</p>';
            $help['Students/StudentFields.php'] = '<p><strong>Kategoritë dhe Fushat e Nxënësit</strong></p><p>Ju lejon të krijoni kategori dhe fusha të reja të personalizuara në profilin e nxënësit, duke përcaktuar llojin e të dhënës, radhën e shfaqjes dhe nëse fusha është e detyrueshme.</p>';
            $help['Students/Upload.php'] = '<p><strong>'._uploadStudentSPhoto.'</strong></p><p>Kjo faqe ju mundëson të ngarkoni fotografinë e nxënësit në kartelën e tij personale në sistem.</p>';
            $help['Students/Upload.php?modfunc=edit'] = '<p><strong>Përditëso Fotografinë e Nxënësit</strong></p><p>Përdoret për të ndryshuar ose përditësuar fotografinë ekzistuese të nxënësit.</p>';
            $help['Students'] = $help['Students/Student.php'];
}

if(User('PROFILE')=='teacher')
{
            $help['Students/Student.php'] = '<p><strong>Të Dhënat e Nxënësit</strong></p><p>Ky opsion ju mundëson të shihni të gjitha të dhënat themelore të nxënësve të lëndëve tuaja.</p>';
            $help['Students/Student.php?include=GeneralInfoInc'] = '<p><strong>Të Dhënat e Përgjithshme</strong></p><p>Paraqet informacionin bazë të nxënësit: datëlindjen, numrin personal, gjininë dhe klasën.</p>';
            $help['Students'] = $help['Students/Student.php'];
}

// USERS
if(User('PROFILE')=='admin')
{
            $help['users/User.php'] = '<p><strong>Të Dhënat e Përdoruesit</strong></p><p>Kjo faqe shfaq informacionin themelor të një përdoruesi: emrin, emrin e përdoruesit (username), fjalëkalimin, profilin e të drejtave, shkollën, adresën e emailit dhe numrin e telefonit. Mund të modifikoni këto të dhëna dhe t\'i ruani me butonin "Ruaj" në fund të faqes.</p>';
            $help['users/User.php?staff_id=new'] = '<p><strong>Shto Përdorues</strong></p><p>Ju mundëson të krijoni një përdorues të ri në sistem (administrator, mësimdhënës ose prind). Plotësoni emrin, emrin e përdoruesit, fjalëkalimin, rolin/profilin, shkollën dhe kontaktet, pastaj klikoni "Ruaj". Vini re: Emri i përdoruesit duhet të jetë unik.</p>';
            $help['users/AddStudents.php'] = '<p><strong>Lidh Nxënësit me Prindërit</strong></p><p>Përdoret për të caktuar fëmijët në llogarinë e prindit. Kërkoni prindin, më pas kërkoni dhe përzgjidhni nxënësit përkatës dhe klikoni "Shto Nxënësit e Përzgjedhur". Nxënësit e lidhur mund të shkëputen në çdo kohë me ikonën (-).</p>';
            $help['users/Preferences.php'] = '<p><strong>Preferencat dhe Lejet</strong></p><p>Kjo faqe ju mundëson të përcaktoni të drejtat e qasjes dhe të modifikimit për çdo modul të sistemit për përdoruesit administrativë.</p>';
            $help['users/TeacherPrograms.php?include=Grades/InputFinalGrades.php'] = '<p><strong>Hedhja e Notave Përfundimtare</strong></p><p>Ju lejon të hidhni notat e periudhave, semestrave dhe provimeve përfundimtare në emër të një mësimdhënësi të caktuar. Mund të përdorni gjithashtu butonin \'Merr Notat nga Regjistri\' për llogaritje automatike.</p>';
            $help['users/TeacherPrograms.php?include=Grades/Grades.php'] = '<p><strong>Notat në Regjistër</strong></p><p>I mundëson administratorit të vendosë notat e detyrave dhe vlerësimeve në emër të një mësimdhënësi.</p>';
            $help['users/TeacherPrograms.php?include=Grades/ProgressReports.php'] = '<p><strong>Raportet e Progresit</strong></p><p>Mundëson gjenerimin e raporteve të progresit të nxënësve në emër të një mësimdhënësi.</p>';
            $help['users/TeacherPrograms.php?include=Attendance/TakeAttendance.php'] = '<p><strong>Regjistro Vijueshmërinë</strong></p><p>I lejon administratorit të regjistrojë mungesat dhe praninë e nxënësve për një orë mësimore në emër të një mësimdhënësi.</p>';
            $help['users/TeacherPrograms.php?include=Attendance/Missing_Attendance.php'] = '<p><strong>Mungesat e Paregjistruara</strong></p><p>Shfaq orët mësimore ku mësimdhënësit nuk kanë plotësuar regjistrin e vijueshmërisë dhe lejon plotësimin e tyre.</p>';
            $help['users/TeacherPrograms.php?include=Eligibility/EnterEligibility.php'] = '<p><strong>Regjistro Aktivitetet Jashtëshkollore</strong></p><p>Mundëson vlerësimin javor të kualifikimit të nxënësve në aktivitete jashtëshkollore në emër të mësimdhënësit.</p>';
            $help['users/Profiles.php'] = '<p><strong>Profilet e Përdoruesve</strong></p><p>Këtu menaxhoni rolet dhe lejet e qasjes për secilin profil në sistem.</p>';
            $help['users/Exceptions.php'] = '<p><strong>Përjashtimet e Lejeve të Përdoruesit</strong></p><p>Ju lejon të vendosni të drejta të personalizuara qasjeje për përdorues të veçantë jashtë profilit të tyre standard.</p>';
            $help['users/UserFields.php'] = '<p><strong>Fushat e Përdoruesve</strong></p><p>Mundëson krijimin e fushave të personalizuara për të dhënat e stafit dhe përdoruesve.</p>';
            $help['users'] = $help['users/User.php'];
}

if(User('PROFILE')=='teacher')
{
            $help['users/User.php'] = '<p><strong>Të Dhënat e Përdoruesit</strong></p><p>Shfaq të dhënat tuaja personale: emrin, emrin e përdoruesit, shkollën, emailin dhe numrin e telefonit. Mund të përditësoni të dhënat dhe të ruani ndryshimet me butonin "Ruaj".</p>';
            $help['users'] = $help['users/User.php'];
}

// SCHEDULING
if(User('PROFILE')=='admin')
{
            $help['Scheduling/Schedule.php'] = '<p><strong>Orari i Nxënësit</strong></p><p>Kjo faqe ju mundëson të menaxhoni dhe modifikoni orarin lëndor të një nxënësi. Mund të shtoni lëndë, të hiqni lëndë ose të ndryshoni orën dhe mësimdhënësin. Të gjitha ndryshimet regjistrohen pasi të përcaktoni datën e hyrjes në fuqi dhe të klikoni "Ruaj".</p>';
            $help['scheduling/ViewSchedule.php'] = '<p><strong>Shiko Orarin</strong></p><p>Ju lejon të shikoni orarin e plotë të një nxënësi në formë tabele apo kalendari, me filtra sipas datës dhe periudhës, si dhe mundësi printimi të orarit.</p>';
            $help['scheduling/Requests.php'] = '<p><strong>Kërkesat e Nxënësit për Lëndët</strong></p><p>Përdoret për të regjistruar paraprakisht lëndët që nxënësi dëshiron të ndjekë në vitin e ardhshëm shkollor. Këto kërkesa përdoren nga gjeneruesi automatik i orarit (Scheduler).</p>';
            $help['scheduling/MassRequests.php'] = '<p><strong>Kërkesa në Grup</strong></p><p>Mundëson shtimin e një kërkese lënde për një grup të tërë nxënësish në një veprim të vetëm.</p>';
            $help['scheduling/MassSchedule.php'] = '<p><strong>Planifikim në Grup i Orarit</strong></p><p>Mundëson regjistrimin e një grupi nxënësish në një orë lëndore të caktuar me një veprim të vetëm.</p>';
            $help['scheduling/MassDrops.php'] = '<p><strong>Heqje në Grup nga Orari</strong></p><p>Mundëson heqjen e një grupi nxënësish nga një orë lëndore në një veprim të vetëm.</p>';
            $help['scheduling/ScheduleReport.php'] = '<p><strong>Raporti i Orarit të Nxënësve</strong></p><p>Shfaq pasqyrën e nxënësve të planifikuar në çdo lëndë, numrin e vendeve të lira dhe kërkesat e paplotësuara sipas fushave lëndore dhe orëve mësimore.</p>';
            $help['scheduling/RequestsReport.php'] = '<p><strong>Raporti i Kërkesave të Nxënësve</strong></p><p>Tregon numrin e përgjithshëm të nxënësve që kanë kërkuar çdo lëndë, çka ndihmon në përcaktimin e numrit të nevojshëm të klasave dhe orëve paralele.</p>';
            $help['scheduling/PrintSchedules.php'] = '<p><strong>Printo Oraret e Nxënësve</strong></p><p>Mundëson gjenerimin dhe printimin e orareve në format PDF për çdo grup nxënësish.</p>';
            $help['scheduling/PrintRequests.php'] = '<p><strong>Printo Kërkesat e Nxënësve</strong></p><p>Gjeneron fletët e kërkesave të lëndëve të nxënësve në format PDF të printueshëm.</p>';
            $help['scheduling/PrintClassLists.php'] = '<p><strong>Printo Listat e Klasave</strong></p><p>Gjeneron listat zyrtare të nxënësve sipas klasave dhe orëve lëndore në format PDF.</p>';
            $help['scheduling/PrintClassPictures.php'] = '<p><strong>Printo Fotografitë e Klasës</strong></p><p>Mundëson printimin e albumit me fotografitë dhe emrat e nxënësve të klasës.</p>';
            $help['scheduling/UnfilledRequests.php'] = '<p><strong>Kërkesa të Paplotësuara të Orarit</strong></p><p>Shfaq kërkesat e lëndëve që nuk u realizuan për shkak të mungesës së vendeve të lira gjatë gjenerimit automatik të orarit.</p>';
            $help['scheduling/IncompleteSchedules.php'] = '<p><strong>Oraret e Paplotësuara</strong></p><p>Paraqet listën e nxënësve që kanë orë të paplotësuara në orarin e tyre mësimor për t\'i caktuar manualisht.</p>';
            $help['scheduling/AddDrop.php'] = '<p><strong>Raporti i Shtimit / Heqjes nga Lëndët</strong></p><p>Gjeneron raportin historik të hyrjeve dhe daljeve të nxënësve nga lëndët mësimore brenda një periudhe kohore.</p>';
            $help['scheduling/Courses.php'] = '<p><strong>Konfigurimi i Lëndëve</strong></p><p>Mundëson konfigurimin e fushave mësimore, lëndëve, koeficientëve dhe orëve lëndore.</p>';
            $help['scheduling/Scheduler.php'] = '<p><strong>Gjenerimi Automatik i Orarit (Scheduler)</strong></p><p>Algoritmi automatik që vendos oraret e të gjithë nxënësve në bazë të kërkesave lëndore të regjistruara dhe kapaciteteve të sallave e mësimdhënësve.</p>';
            $help['scheduling'] = $help['scheduling/Schedule.php'];
}
elseif(User('PROFILE')=='parent')
{
    if($student==true)
    {
            $help['scheduling/Schedule.php'] = '<p><strong>Orari Im Mësimor</strong></p><p>Paraqet orarin tënd të lëndëve dhe orëve mësimore për periudhën aktuale.</p>';
            $help['scheduling/PrintRequests.php'] = '<p><strong>Printo Kërkesat e Mia</strong></p><p>Mundëson shkarkimin dhe printimin në format PDF të kërkesave të tua për lëndët.</p>';
    }
    else
    {
            $help['scheduling/Schedule.php'] = '<p><strong>Orari Mësimor</strong></p><p>Paraqet orarin e lëndëve dhe orëve mësimore për fëmijën tuaj.</p>';
            $help['scheduling/PrintRequests.php'] = '<p><strong>Printo Kërkesat</strong></p><p>Mundëson shkarkimin dhe printimin në format PDF të kërkesave të lëndëve për fëmijën tuaj kur klikoni butonin "Dërgo".</p>';
    }
            $help['scheduling'] = $help['scheduling/Schedule.php'];
}
else
{
            $help['scheduling/Schedule.php'] = '<p><strong>Orari i Nxënësit</strong></p><p>Paraqet orarin e lëndëve të nxënësit. Fillimisht kërkoni nxënësin nga ekrani i kërkimit për të parë orarin e tij.</p>';
            $help['scheduling/PrintSchedules.php'] = '<p><strong>Raporti i Orareve të Nxënësve</strong></p><p>Ky raport ju lejon të printoni oraret e lëndëve për nxënësit e përzgjedhur në format PDF.</p>';
            $help['scheduling/PrintClassLists.php'] = '<p><strong>Printo Listat e Klasave</strong></p><p>Ky raport ju lejon të printoni listat e nxënësve sipas klasave dhe orëve lëndore në format PDF.</p>';
            $help['scheduling'] = $help['scheduling/Schedule.php'];
}

// GRADES
if(User('PROFILE')=='admin')
{
            $help['Grades/ReportCards.php'] = '<p><strong>Dëftesat e Notave</strong></p><p>Ky mjet ju mundëson të gjeneroni dhe printoni dëftesat zyrtare të notave për nxënësit e përzgjedhur në format PDF. Mund të filtroni sipas klasës, lëndës, notës mesatare (GPA) ose renditjes, si dhe të zgjidhni periudhat e vlerësimit që do të shfaqen në dëftesë.</p>';
            $help['Grades/CalcGPA.php'] = '<p><strong>Llogarit Mesataren (GPA) dhe Renditjen</strong></p><p>Ky funksion llogarit dhe ruan notën mesatare (GPA) dhe renditjen e çdo nxënësi në shkollë në bazë të notave të semestrit, qoftë me mesatare standarde apo të ponderuar (me koeficientë peshe).</p>';
            $help['Grades/Transcripts.php'] = '<p><strong>Vërtetimet / Transkriptet e Notave</strong></p><p>Gjeneron transkriptin zyrtar të notave me të gjitha periudhat dhe lëndët për nxënësit e zgjedhur në format të printueshëm PDF.</p>';
            $help['Grades/TeacherCompletion.php'] = '<p><strong>Raporti i Plotësimit të Notave nga Mësimdhënësit</strong></p><p>Tregon mësimdhënësit që nuk i kanë hedhur ende notat për periudhën aktuale të vlerësimit, të shënuar me shenjë të kuqe.</p>';
            $help['Grades/GradeBreakdown.php'] = '<p><strong>Shpërndarja e Notave</strong></p><p>Paraqet një analizë statistikore mbi shpërndarjen e notave të dhëna nga çdo mësimdhënës për lëndët dhe periudhat e zgjedhura.</p>';
            $help['Grades/FinalGrades.php'] = '<p><strong>Notat Përfundimtare të Nxënësve</strong></p><p>Ju mundëson të shihni dhe të printoni listat e notave përfundimtare për nxënësit e një klase të caktuar.</p>';
            $help['Grades/ReportCards.php?modfunc=gradelist'] = '<p><strong>Raporti i Notave të Nxënësve</strong></p><p>Shfaq listën e të gjitha notave të marra nga nxënësit sipas lëndëve dhe periudhave të vlerësimit.</p>';
            $help['Grades/GPARankList.php'] = '<p><strong>Lista e Notës Mesatare dhe Renditjes</strong></p><p>Raport që pasqyron notën mesatare të thjeshtë, të ponderuar dhe renditjen e secilit nxënës në klasë dhe në shkollë.</p>';
            $help['Grades/HonorRoll.php'] = '<p><strong>Bordi i Nderit</strong></p><p>Mundëson gjenerimin e listës së nxënësve të dalluar në Bordin e Nderit, si dhe printimin e certifikatave përkatëse.</p>';
            $help['Grades/ReportCardGrades.php'] = '<p><strong>Shkalla e Notimit të Dëftesës</strong></p><p>Përdoret për të konfiguruar shkallën zyrtare të notave (notat, vlerat numerike GPA, pragjet e përqindjeve dhe përshkrimet).</p>';
            $help['Grades/ReportCardComments.php'] = '<p><strong>Komentet e Dëftesës</strong></p><p>Ju lejon të krijoni komente të gatshme vlerësuese që mësimdhënësit mund t\'i përzgjedhin gjatë plotësimit të dëftesave për lëndë specifike ose për të gjitha lëndët.</p>';
            $help['Grades/HonorRollSetup.php'] = '<p><strong>Konfigurimi i Bordit të Nderit</strong></p><p>Përcakton kriteret dhe pragjet minimale të notës mesatare për kualifikimin e nxënësve në nivelet e Bordit të Nderit.</p>';
            $help['Grades/FixGPA.php'] = '<p><strong>Rillogarit Mesataren e Notave</strong></p><p>Rillogarit automatikisht mesataret e nxënësve për një periudhë të zgjedhur në rast se janë bërë korrigjime të mëvonshme notash.</p>';
            $help['Grades/EditReportCardGrades.php'] = '<p><strong>Modifiko Notat e Dëftesës (Të Dhëna Historike)</strong></p><p>Përdoret për të regjistruar dhe modifikuar notat e viteve të mëparshme për nxënësit e ardhur me transferim nga një shkollë tjetër.</p>';
            $help['Grades/EditHistoryMarkingPeriods.php'] = '<p><strong>Modifiko Periudhat Historike të Vlerësimit</strong></p><p>Krijon periudha vlerësimi historike për të ruajtur të dhënat arsimore të mëparshme të nxënësve të transferuar.</p>';
            $help['Grades/ReportCardCodes.php'] = '<p><strong>Kodet e Dëftesës së Notave</strong></p><p>Përcakton kodet e shkronjave të notave dhe komentet standarde që përdoren nga mësimdhënësit gjatë hedhjes së notave përfundimtare.</p>';
            $help['Grades'] = $help['Grades/ReportCards.php'];
}
elseif(User('PROFILE')=='parent')
{
    if($student==true)
    {
            $help['Grades/ReportCards.php'] = '<p><strong>Dëftesat e Notave</strong></p><p>Ky modul ju mundëson të shihni dhe printoni dëftesën tuaj të notave për periudhat e vlerësimit.</p>';
            $help['Grades/Transcripts.php'] = '<p><strong>Transkripti i Notave</strong></p><p>Ju lejon të shikoni dhe printoni transkriptin tuaj zyrtar të notave.</p>';
            $help['Grades/ReportCards.php?modfunc=gradelist'] = '<p><strong>Notat e Mia</strong></p><p>Kjo faqe paraqet notat e marra në secilën lëndë për periudhat e zgjedhura.</p>';
            $help['Grades/GPARankList.php'] = '<p><strong>Nota Mesatare dhe Renditja</strong></p><p>Raport që tregon notën tuaj mesatare dhe renditjen në klasë.</p>';
    }
    else
    {
            $help['Grades/ReportCards.php'] = '<p><strong>Dëftesat e Notave</strong></p><p>Ky modul ju mundëson të shihni dhe printoni dëftesën e notave të fëmijës suaj për periudhat e vlerësimit.</p>';
            $help['Grades/Transcripts.php'] = '<p><strong>Transkripti i Notave</strong></p><p>Ju lejon të shikoni dhe printoni transkriptin zyrtar të notave të fëmijës suaj.</p>';
            $help['Grades/ReportCards.php?modfunc=gradelist'] = '<p><strong>Notat e Nxënësit</strong></p><p>Kjo faqe paraqet notat e marra nga fëmija juaj për periudhat e zgjedhura të vlerësimit.</p>';
            $help['Grades/GPARankList.php'] = '<p><strong>Nota Mesatare dhe Renditja</strong></p><p>Raport që tregon notën mesatare dhe renditjen e fëmijës suaj në klasë.</p>';
    }
            $help['Grades/InputFinalGrades.php'] = '<p><strong>Hedhja e Notave Përfundimtare</strong></p><p>Ju mundëson të vendosni notat e periudhës dhe komentet përkatëse për nxënësit tuaj në orën mësimore aktuale.</p>';
            $help['Grades/Configuration.php'] = '<p><strong>Konfigurimi i Regjistrit të Notave</strong></p><p>Përcakton rregullat e rrumbullakimit të pikëve, pragjet e notave dhe përqindjet e peshave të vlerësimit.</p>';
            $help['Grades/Assignments.php'] = '<p><strong>Detyrat dhe Vlerësimet</strong></p><p>Ju lejon të krijoni kategori vlerësimi (detyra shtëpie, teste, projekte) dhe detyra individuale me pikët përkatëse.</p>';
            $help['Grades/Grades.php'] = '<p><strong>Regjistri i Notave</strong></p><p>Faqja kryesore ku mësimdhënësi hedh pikët dhe notat e detyrave për secilin nxënës të orës mësimore.</p>';
            $help['Grades/ProgressReports.php'] = '<p><strong>Raportet e Progresit</strong></p><p>Mundëson printimin e njoftimeve periodike të ecurisë dhe progresit mësimor për nxënësit.</p>';
            $help['Grades'] = $help['Grades/ReportCards.php'];
}
if(User('PROFILE')=='teacher')
{
            $help['Grades/ReportCards.php'] = '<p><strong>Dëftesat e Notave</strong></p><p>Ky mjet ju mundëson të printoni dëftesat e notave për nxënësit e lëndëve tuaja për periudhat e zgjedhura të vlerësimit.</p>';
            $help['Grades'] = $help['Grades/ReportCards.php'];
}

// ATTENDANCE
if(User('PROFILE')=='admin')
{
            $help['Attendance/Administration.php'] = '<p><strong>Administrimi i Vijueshmërisë</strong></p><p>Kjo faqe ju lejon të shikoni dhe modifikoni regjistrimet e vijueshmërisë dhe mungesave të nxënësve për çdo ditë dhe orë mësimore. Mund të filtroni nxënësit sipas kodeve të mungesave dhe të përditësoni statusin e tyre.</p>';
            $help['Attendance/AddAbsences.php'] = '<p><strong>Regjistro Mungesa në Grup</strong></p><p>Mundëson regjistrimin e njëkohshëm të mungesave për një grup nxënësish (p.sh. për ekskursione, aktivitete sportive apo arsye shëndetësore) duke caktuar kodin, arsyen dhe orët përkatëse.</p>';
            $help['Attendance/AttendanceData.php?list_by_day=true'] = '<p><strong>Raportet e Vijueshmërisë</strong></p><p>Gjeneron një raport të detajuar të pranisë dhe mungesave të nxënësve për një periudhë të zgjedhur kohore.</p>';
            $help['Attendance/Percent.php'] = '<p><strong>Raporti i Përqindjes Ditore të Vijueshmërisë</strong></p><p>Paraqet numrin e nxënësve, ditët e mundshme mësimore, ditët e pranisë, ditët e mungesave dhe përqindjen mesatare ditore të vijueshmërisë sipas klasave.</p>';
            $help['Attendance/Percent.php?list_by_day=true'] = '<p><strong>Vijueshmëria Mesatare Ditore sipas Ditëve</strong></p><p>Raport që pasqyron përqindjen ditore të pranisë të ndarë ditë pas dite për çdo nivel klase.</p>';
            $help['Attendance/DailySummary.php'] = '<p><strong>Përmbledhja Ditore e Vijueshmërisë</strong></p><p>Raport me ngjyra që tregon gjendjen ditore të secilit nxënës: kuti e gjelbër (i pranishëm gjithë ditën), kuti e verdhë (mungesë gjysmë-dite) dhe kuti e kuqe (mungesë gjithë ditën).</p>';
            $help['Attendance/StudentSummary.php'] = '<p><strong>Përmbledhja e Mungesave të Nxënësit</strong></p><p>Tregon datat dhe orët e sakta mësimore ku një nxënës i caktuar ka munguar gjatë periudhës së zgjedhur.</p>';
            $help['Attendance/TeacherCompletion.php'] = '<p><strong>Raporti i Regjistrimit të Vijueshmërisë nga Mësimdhënësit</strong></p><p>Tregon mësimdhënësit që nuk kanë plotësuar regjistrin e vijueshmërisë për datën dhe orën përkatëse.</p>';
            $help['Attendance/FixDailyAttendance.php'] = '<p><strong>Rillogarit Vijueshmërinë Ditore</strong></p><p>Rillogarit automatikisht të dhënat e pranisë ditore të nxënësve pas modifikimeve apo korrigjimeve të bëra në mungesa.</p>';
            $help['Attendance/DuplicateAttendance.php'] = '<p><strong>Fshij Mungesat e Dyfishuara</strong></p><p>Fshin regjistrimet e dyfishuara të mungesave të hedhura gabimisht më shumë se një herë për të njëjtën orë mësimore.</p>';
            $help['Attendance/AttendanceCodes.php'] = '<p><strong>Kodet e Vijueshmërisë dhe Mungesave</strong></p><p>Përcakton kodet e mungesave (Me Arsye, Pa Arsye, Me Vonesë, Prezent, etj.), tipin e tyre dhe nëse mësimdhënësi mund t\'i përzgjedhë në regjistër.</p>';
            $help['Attendance'] = $help['Attendance/Administration.php'];
}
elseif(User('PROFILE')=='parent')
{
    if($student==true)
    {
            $help['Attendance/DailySummary.php'] = '<p><strong>Përmbledhja Ditore e Vijueshmërisë</strong></p><p>Raport që tregon gjendjen tuaj të pranisë dhe mungesave për çdo ditë dhe orë mësimore.</p>';
    }
    else
    {
            $help['Attendance/DailySummary.php'] = '<p><strong>Përmbledhja Ditore e Vijueshmërisë</strong></p><p>Raport që tregon gjendjen e pranisë dhe mungesave të fëmijës suaj për çdo ditë dhe orë mësimore gjatë periudhës së zgjedhur.</p>';
    }
            $help['Attendance'] = $help['Attendance/DailySummary.php'];
}
if(User('PROFILE')=='teacher')
{
            $help['Attendance/TakeAttendance.php'] = '<p><strong>Regjistro Vijueshmërinë</strong></p><p>Ju lejon të regjistroni praninë, vonesat dhe mungesat për të gjithë nxënësit e orës suaj mësimore. Pasi të përzgjidhni kodin përkatës për secilin nxënës, klikoni "Ruaj".</p>';
            $help['Attendance/DailySummary.php'] = '<p><strong>Përmbledhja Ditore e Vijueshmërisë</strong></p><p>Raport që shfaq statusin ditor të vijueshmërisë së nxënësve me kode ngjyrash për çdo datë të periudhës.</p>';
            $help['Attendance/StudentSummary.php'] = '<p><strong>Përmbledhja e Mungesave të Nxënësit</strong></p><p>Tregon ditët dhe orët mësimore kur një nxënës i caktuar ka shënuar mungesë.</p>';
            $help['Attendance'] = $help['Attendance/TakeAttendance.php'];
}

// ELIGIBILITY
if(User('PROFILE')=='admin')
{
            $help['Eligibility/Student.php'] = '<p><strong>Aktivitetet e Nxënësit</strong></p><p>Shfaq aktivitetet jashtëshkollore dhe vlerësimin javor të kualifikimit të nxënësit. Ju mundëson gjithashtu të shtoni ose të hiqni aktivitete për nxënësin.</p>';
            $help['Eligibility/AddActivity.php'] = '<p><strong>Shto Aktivitet në Grup</strong></p><p>Mundëson regjistrimin e një grupi nxënësish në një aktivitet të caktuar shkollor me një veprim të vetëm.</p>';
            $help['Eligibility/Activities.php'] = '<p><strong>Aktivitetet</strong></p><p>Kjo faqe ju lejon të konfiguroni aktivitetet jashtëshkollore, sportive dhe kulturore të shkollës suaj me datat e fillimit dhe mbarimit.</p>';
            $help['Eligibility/EntryTimes.php'] = '<p><strong>Afatet e Regjistrimit</strong></p><p>Përcakton intervalin javor kohor brenda të cilit mësimdhënësit duhet të hedhin vlerësimet e kualifikimit për nxënësit në aktivitete.</p>';
            $help['Eligibility/StudentList.php'] = '<p><strong>Lista e Nxënësve sipas Aktiviteteve</strong></p><p>Raport që shfaq çdo lëndë dhe vlerësim kualifikimi për nxënësit e përfshirë në aktivitete.</p>';
            $help['Eligibility/TeacherCompletion.php'] = '<p><strong>Raporti i Plotësimit të Aktiviteteve nga Mësimdhënësit</strong></p><p>Tregon mësimdhënësit që nuk kanë hedhur vlerësimin e kualifikimit për aktivitetet brenda afatit javor.</p>';
            $help['Eligibility'] = $help['Eligibility/Student.php'];
}
elseif(User('PROFILE')=='parent')
{
    if($student==true)
    {
            $help['Eligibility/Student.php'] = '<p><strong>Aktivitetet e Mia</strong></p><p>Paraqet aktivitetet tuaja shkollore dhe statusin e vlerësimit javor të kualifikimit.</p>';
            $help['Eligibility/StudentList.php'] = '<p><strong>Lista e Aktiviteteve</strong></p><p>Raport që shfaq lëndët dhe statusin e kualifikimit tuaj në aktivitete.</p>';
    }
    else
    {
            $help['Eligibility/Student.php'] = '<p><strong>Aktivitetet e Fëmijës</strong></p><p>Paraqet aktivitetet shkollore të fëmijës suaj dhe statusin e vlerësimit javor të kualifikimit.</p>';
            $help['Eligibility/StudentList.php'] = '<p><strong>Lista e Aktiviteteve</strong></p><p>Raport që shfaq lëndët dhe statusin e kualifikimit për fëmijën tuaj në aktivitete.</p>';
    }
            $help['Eligibility'] = $help['Eligibility/Student.php'];
}
if(User('PROFILE')=='teacher')
{
            $help['Eligibility/EnterEligibility.php'] = '<p><strong>Regjistro Vlerësimin e Aktiviteteve</strong></p><p>Ju lejon të regjistroni statusin javor të kualifikimit për nxënësit tuaj në aktivitete jashtëshkollore.</p>';
            $help['Eligibility'] = $help['Eligibility/EnterEligibility.php'];
}

// TOOLS
if(User('PROFILE')=='admin')
{
            $help['tools/LogDetails.php'] = '<p><strong>Regjistri i Hyrjeve në Sistem</strong></p><p>Ky opsion ju jep pasqyrën e plotë të historikut të hyrjeve në sistem (hyrje të suksesshme dhe përpjekje të dështuara), së bashku me përdoruesit, adresat IP dhe datat.</p>';
            $help['tools/DeleteLog.php'] = '<p><strong>Fshij Regjistrin e Hyrjeve</strong></p><p>Ju mundëson të fshini të dhënat e regjistrit të hyrjeve për një interval të caktuar kohor.</p>';
            $help['tools/Rollover.php'] = '<p><strong>Bartja në Vitin e Ri Shkollor (Rollover)</strong></p><p>Kjo skedë ju lejon të kryeni bartjen e plotë të të dhënave të shkollës në vitin e ardhshëm shkollor. Pasi të konfirmoni bartjen, do t\'ju kërkohet të hyni përsëri në sistem.</p>';
            $help['tools/Backup.php'] = '<p><strong>Kopje Rezervë e Bazës së të Dhënave (Backup)</strong></p><p>Kjo vegël gjeneron një kopje të plotë rezervë (backup) të bazës së të dhënave së bashku me strukturën e tabelave, e përshtatshme për ruajtje dhe restaurim në rast nevoje.</p>';
            $help['tools'] = $help['tools/LogDetails.php'];
}

if(strpos($_SERVER['PHP_SELF'],'Help.php'))
{
	switch(User('PROFILE'))
	{
		case 'admin':
			$title = 'Administratorit';
		break;

		case 'teacher':
			$title = 'Mësimdhënësit';
		break;

		case 'parent':
			if($student==true)
				$title = 'Nxënësit';
			else
				$title = 'Prindit';
		break;
	}

	$handle = PDFStart();
	Warehouse('header');
	echo '<TABLE><TR><TD><IMG SRC=assets/logo.gif></TD><TD><h1>Manuali i '.$title.'<BR><small>Versioni 1.5</small></h1></TD></TR></TABLE><div class=break></div><!-- NEW PAGE -->';

	foreach($help as $program=>$value)
	{
		if(strpos($program,'/'))
		{
			$modcat = str_replace('_',' ',substr($program,0,strpos($program,'/')));
			if($modcat!=$old_modcat)
				echo '<!-- NEW PAGE --><TABLE border=0><TR><TD><IMG SRC=assets/icons/'.str_replace(' ','_',$modcat).'.gif></TD><TD><h1><font color=#333366>'.$modcat.'</font></h1></TD></TR></TABLE><div class=break></div>';
			$old_modcat = $modcat;
		}
		echo '<h2><font color=#333366>';
		$_REQUEST['modname'] = $program;
		if($program=='default')
			echo 'SIA (Sistemi Inteligjences Arsimore) | Manuali i '.$title.'<BR><small>Versioni 1.5</small>';
		else
			echo ProgramTitle();
		echo '</font></h2>';
		echo '<TABLE border=0 bgcolor=#DDDDDD width=100%><TR><TD>';
		echo $value;
		echo '</TD></TR></TABLE><BR>';
	}
	Warehouse('footer_plain');
	PDFStop($handle);
}
?>