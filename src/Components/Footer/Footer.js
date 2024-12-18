import React from 'react'
import log from './images/logo.jpeg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
       <div className='container-fluid foot text-white p-5  mt-2 rounded-2'>
        <div className='row footer'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 fw-bold mb-3'>
           <h5 className='fw-bold'>SuperMarket</h5>
         <p> <NavLink className="nav-link" to="/aboutus">About Us</NavLink></p>
         <p>Become A SuperMarket Rider</p>
         <p>In News</p>
         <p>Green SuperMarket</p>
         <p>Privacy Policy</p>
         <p>Terms and Conditions</p>
         <p>Careers At SuperMarket</p>
         <p>super market Instant</p>
         <p>super market Daily</p>
         <p>super market Blog</p>
         <p>super marketnow</p>

            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 fw-bold mb-3'>
                <h5>Help</h5>
                <p> FAQs </p>
                <p> Contact Us </p>
                <p> SuperMarket Wallet FAQs </p>
                <p> SuperMarket Wallet T&Cs </p>
                <p>Vendor Connect</p>

            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 fw-bold mb-3 '>
                <h5> <NavLink className="nav-link" to="/aboutus">About Us</NavLink></h5>
                
                <p> Contact Us </p>
               

            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 text-center mb-3'>
                <img src={log} className='rounded-5 img-fluid' alt='log'/>
                <div className=' m-5'>
               <h3 className='bi bi-facebook'> <span className='bi bi-instagram'> <span className='bi bi-twitter'><span className='bi bi-youtube'> <span className='bi bi-whatsapp'></span></span></span></span> </h3>
            
               </div>
            </div>

        </div>
        <div>
        <h5 className='text-center'>Cities We Serve</h5>
        <p className='text-center'>Abohar
|
Abu Road
|
Achampet
|
Achrol
|
Adampur
|
Addanki
|
Addateegala
|
Adilabad
|
Adimali
|
Adoni
|
Adoor
|
Afzalpur
|
Agali
|
AGARTALA
|
Agra
|
Ahmedabad-Gandhinagar
|
Aizawl
|
Ajeetgarh
|
Ajmer
|
Ajnala
|
Akaloor
|
Akbarpur
|
Akbarpur-UP
|
Aklera
|
Akola
|
Alair
|
Alakode
|
Aland
|
Alappuzha
|
Aliganj
|
Aligarh
|
Aligarh District
|
ALIPURDUAR
|
Alirajpur
|
Allagadda
|
Allahabad
|
Alleppey
|
Almora
|
ALNAVAR
|
Alote
|
Alur
|
Aluva
|
Alwar
|
Amalapuram
|
Amangal
|
Amanganj
|
Amarapuram
|
Amaravathi
|
Amarpatan
|
Amarwara
|
Ambala
|
Ambasamudram
|
Ambuj Nagar
|
Ambur
|
Amethi District
|
Amiliya
|
Amla
|
Amravati
|
Amreli
|
Amritsar
|
Amritsar
|
Amroha District
|
Anand
|
Anandnagar
|
Anandpur Sahib
|
Anantapur District
|
Anantnag
|
Andaman and Nicobar
|
Angul
|
Angul
|
Anjumoorthy
|
Ankleshwar
|
Ankola
|
Annur
|
Anpara
|
Anthiyour
|
Anuppur
|
Anupshahar
|
Aonla
|
Arakkonam
|
Araku
|
Arambag
|
Arani
|
Araria
|
Areacode
|
Arimbur
|
Ariyalur
|
Armoor
|
ARRAH
|
Arsikere
|
Aruppukkottai
|
ARWAL
|
Asansol
|
Ashok Nagar
|
Ashta
|
Asifabad
|
ASIKA
|
Asind
|
Assaigoli
|
ASTARANGA
|
Aswaraopeta
|
Atarra
|
Athagad
|
Athani
|
Atmakur
|
Atmakur-AP
|
Atmakur-TS
|
Attingal
|
Attur
|
AUL
|
Aunrihar
|
Aurad
|
Auraiya
|
Aurangabad
|
Aurangabad(BH)
|
Avanigadda
|
Avinashi
|
Ayodhya District
|
Ayoor
|
Azamgarh
|
Azhagappapuram
|
B Kothakota
|
Babasagar
|
Baberu
|
Babrala
|
BABUJANG
|
BACHHRAWAN
|
BADAGADA
|
BADAMBA
|
Badami
|
Baddi
|
Badlapur
|
Badnagar
|
Badnaur
|
Badvel
|
Bagalkot
|
Bagepalli
|
Bageshwar
|
Baghpat District
|
BAGNAN
|
Bagru
|
Bagula
|
Bahadurgarh
|
Bahal
|
Baheri
|
BAHRAICH
|
BAIHATA
|
Baijnath-UK
|
Bailhongal
|
Bajag
|
Bajore
|
Bakewar
|
Bakhtiarpur
|
Balaghat
|
Balangir
|
Balaran
|
Balasore
|
Balesar
|
Baleswar
|
Ballia
|
BALLIGUDA
|
Balotra
|
BALRAMPUR
|
Balussery
|
BAMRA
|
Banda
|
Bandikui
|
Bangalore
|
Bangalore Rural
|
Bangana
|
Bangaon
|
Bangarmau
|
Bangarpet
|
Banka
|
Bankapura
|
Bankura
|
Bansi
|
Banswada
|
Banswara
|
Bantwal
|
Bapatla
|
Barabanki District
|
Barakar
|
Baran
|
Baraut
|
Bardhaman
|
Bardoli
|
Bareilly
|
Bareja
|
Bareli
|
Bargarh
|
Barh
|
Barhaj
|
Barhalganj
|
Barhi
|
Bari Sadri
|
Baripada
|
Bariya
|
Barmer
|
Barnala
|
Barodia
|
BARPETA
|
Barwani
|
Basavakalyan
|
Basavana Bagewadi
|
Basirhat
|
BASIRHAT
|
Bassi
|
BassiRJ
|
Bastar
|
Basti
|
Batala
|
Bathinda
|
Bavla
|
Bayana
|
Beawar
|
Begowal
|
Begumganj
|
Begusarai
|
BEHRAMPUR
|
Bejjanki
|
Belgaum
|
Bellampalli
|
Bellary
|
Belthangady
|
Belur
|
BENIPATTI
|
BENIPUR
|
Beohari
|
Berachampa
|
Berasia
|
Berhampur
|
Berinag
|
Betamcherla
|
Bethamangala
|
Bettiah
|
Betul
|
Bhadaur
|
Bhaderwah
|
Bhadohi
|
Bhadrachalam
|
Bhadradri Kothagudem District
|
Bhadrak
|
Bhadrak District
|
BHAGALPUR
|
Bhagpat
|
Bhainsa
|
Bhalki
|
Bhandara
|
Bhangar
|
BHANJANAGAR
|
Bhanpura
|
Bharuch
|
BHARWARA
|
Bhatewar
|
Bhathat
|
Bhatkal
|
Bhavnagar
|
Bhawani Mandi
|
Bheemunipatnam
|
Bhilwara
|
Bhimadole
|
Bhimavaram
|
Bhimtal
|
Bhind
|
Bhinga
|
Bhinmal
|
Bhiwadi
|
Bhiwani
|
Bhogapuram
|
Bhojpur
|
Bhojpur
|
Bhongir
|
Bhopal
|
Bhopal Rural
|
BHORE
|
BHUBAN
|
Bhubaneshwar-Cuttack
|
Bhubaneswar Rural
|
Bhupalpally
|
Bhuvanagiri
|
Bichhiya
|
Bidar District
|
Bidhuna
|
Bihar Sharif
|
Bihta
|
Bijainagar
|
Bijapur
|
BIJNOR
|
Bijpur
|
Bikaner
|
Bikkavolu
|
Bilara
|
Bilaspur(CGH)
|
Bilaspur-HP
|
Bilaspur-HR
|
Bilaspur-UP
|
Bilimora
|
Billawar
|
Bina
|
Binaganj
|
Birbhum
|
BIRPARA
|
Bisalpur
|
Bishnupur
|
Boath Buzurg
|
Bobbili
|
Bodhan
|
BOKAKHAT
|
Bokaro
|
Bolpur
|
Bonakal
|
BONGAIGAON
|
BONGAON
|
Bonli
|
Borsad
|
Botad
|
Boudh
|
BRAHMAPUR
|
BRAJRAJNAGAR
|
Brijmanganj
|
Budaun
|
Buhana
|
Bulandshahr
|
Bulandshahr District
|
Bundi
|
Burhanpur
|
Butibori
|
Buxar
|
Byadagi
|
Byadgi
|
Byndoor
|
Cachar
|
Canning
|
Chagalamarri
|
ChakiaUP
|
Chaklasi
|
Chaksu
|
Chalakudy
|
Challakere
|
Chamarajanagar
|
Chameli
|
Chamoli
|
Champhai
|
CHANDANKIYARI
|
Chandauli
|
Chandausi
|
CHANDBALI
|
Chanderi
|
Chandigarh Tricity
|
CHANDIKHOL
|
Chandpur
|
Chandrapur
|
Chandur Bazar
|
Changanacherry
|
Changlang
|
Channagiri
|
Channapatna
|
Channarayapatna
|
Channarayapattana
|
Charkhi Dadri
|
Chatra
|
Chaumahla
|
Chavassery
|
Chengannur
|
Chennai
|
Chennai Rural
|
Cherial
|
CHERLA
|
Cherpulassery
|
Chetpet
|
Cheyyar
|
CHHAPRA
|
Chhatarpur
|
CHHENDIPADA
|
Chhibramau
|
Chhindwara
|
Chhoti Sadri
|
Chhutmalpur
|
CHIKITI
|
Chikkaballapura District
|
Chikkamagalur
|
Chikkanayakanahalli
|
Chikodi
|
Chilakaluripet
|
Chimakurthy
|
Chincholi
|
Chingavanam
|
Chinhat
|
Chinnasalem
|
Chinnur
|
Chintalpudi
|
Chintamani
|
Chintapalli
|
Chintoor
|
Chintpurni
|
Chirala
|
Chiramanangad
|
Chirgaon
|
Chitradurga
|
Chitrakoot
|
Chittapur
|
Chittaranjan
|
Chittaurgarh
|
Chittoor District
|
Chittor District
|
Chodavaram
|
Cholapur
|
Chomu
|
Chopan
|
Choppadandi
|
Chotila
|
Choutuppal
|
chungatra
|
Chunnar
|
Churu
|
Cochin
|
Coimbatore
|
Coimbatore Rural
|
Colonejganj
|
COOCHBEHAR
|
Coonoor
|
Cuddalore
|
Cuddapah
|
Cumbum
|
CumbumAP
|
Cuttack
|
Dabaspete
|
Dabra
|
Dadri
|
Dahegam
|
Dahegaon
|
Dalhousie
|
Daman
|
Damoh
|
Dandeli
|
Dantewada
|
Danthalapally
|
Darbhanga
|
Dariyabad
|
Darjiling
|
Darrang
|
Daryapur Banosa
|
DASPALLA
|
Dasuya
|
Dataganj
|
Dausa
|
Davangere
|
Debagarh
|
Deesa
|
Degana
|
DehraDun
|
Delhi
|
Denkanikottai
|
DeogarhRJ
|
Deoghar
|
Deoli-RJ
|
Deoria
|
Deosar
|
Deotalab
|
Dera Bassi
|
Devadurga
|
Devarakonda
|
Dewas
|
DHAKA
|
DHAKUAKHANA
|
Dhalai
|
Dhamnod
|
Dhampur
|
Dhamtari
|
Dhanbad
|
Dhandhuka
|
Dhanghata
|
Dhar
|
Dharamkot
|
Dharampur
|
Dharapuram
|
Dharchula
|
Dhariyawad
|
Dharmapuri-TS
|
Dharwad
|
Dhaurahara
|
Dhemaji
|
Dhenkanal
|
DHOLI
|
Dholka
|
Dholpur
|
Dhone
|
Dhubri
|
Dhuri
|
Dibai
|
DIBRUGARH
|
Didihat
|
Didwana
|
DIGAPAHANDI
|
DIGBOI
|
Dildar Nagar
|
Dimapur
|
Dinanagar
|
DINARA
|
Dindigul
|
DINHATA
|
Doddaballapura
|
Doiwala
|
Domariyaganj
|
DOOMDOOMA
|
Doranala
|
Dostpur
|
Draksharamam
|
Dudhinagar
|
Dudu
|
Dulchehra
|
DULIAJAN
|
Dullahpur
|
Dumka
|
Dumraon
|
Dungarpur
|
Durg
|
Dwarahat
|
Dwaraka Tirumala
|
East Champaran
|
East Garo Hills
|
East Godavari District
|
East Kameng
|
East Khasi Hills
|
East Midnapore
|
East Siang
|
East Sikkim
|
East Singhbhum
|
East-Godavari-2
|
Edappal
|
Edavanna
|
Eedu
|
EKMA
|
Eluru
|
Eral
|
Erode
|
Etah
|
Etawah
|
Ezhupunna
|
Faizabad
|
Falna
|
Faridabad
|
Faridkot
|
Faridpur
|
Farrukhabad
|
Fatehabad
|
Fatehgarh
|
Fatehgarh Sahib District
|
Fatehnagar
|
Fatehpur
|
Fatehpur-RJ
|
Fazilka
|
Firozabad
|
Firozpur
|
Gadag
|
Gadarwara
|
Gadwal
|
Gahmar
|
Gairsain
|
Gajapati
|
Gajapatinagaram
|
Gajraula
|
Galiveedu
|
GALLERI
|
Ganga Nagar
|
Gangapur City
|
Gangapur-RJ
|
Gangavathi
|
Ganj Basoda
|
Ganjam
|
Ganjam
|
Ganjdundwara
|
Gannavaram
|
Garhshanker
|
Garhwa
|
Gariaband
|
Garividi
|
GARJANPUR
|
Garkha
|
Garoth
|
Gauribidanur
|
Gautam Buddha Nagar District
|
Gaya
|
Gaya
|
Ghanpur
|
Ghansali
|
Gharsana
|
Ghatampur
|
Ghati Billan
|
Ghator
|
Ghaziabad
|
Ghazipur
|
Ghosi
|
Ghughus
|
Ghugri
|
Ghumarwin
|
Giddarbaha
|
Giridh
|
Goa
|
Goalpara
|
Gobichettipalayam
|
Godda
|
Godhra
|
GOGAMUKH
|
Gogunda
|
Gohana
|
Gokak
|
Gokavaram
|
GOLAGHAT
|
Gonda District
|
Gondia
|
Gonikoppal
|
Gooty
|
GOPALAPUR
|
Gopalganj
|
Gopalganj
|
GOPALNAGAR
|
Gopiganj
|
Gorakhpur
|
Gorantla
|
Gotan
|
Gudalur
|
Gudivada
|
Gudiyatham
|
Gudiyattam
|
Gudur
|
Gudur-TS
|
Gulbaraga
|
Gulbarga
|
GUMIA
|
Gumkhal
|
Gumla
|
Gummudipoondi
|
Guna
|
Gundlupet
|
Guntakal
|
Guntur
|
Guntur-Rural
|
Gurdaspur
|
Gurgaon
|
Gurmatkal
|
Gursahaiganj
|
Gurugram Rural
|
Guruvayoor
|
Guskhara
|
Guwahati
|
Guwahati Rural
|
Gwalior
|
Habra
|
Hagaribommanahalli
|
Haidargarh
|
Hailakandi
|
HAJIPUR
|
Hajipur
|
Haldia
|
Haldwani
|
Halflong
|
Haliyal
|
Hamirpur
|
Hamirpur-UP
|
Hanamkonda
|
Hangal
|
Hansi
|
HANSKHALI
|
Hanskhali
|
Hanumangarh
|
Hanur
|
Hapur
|
Harda
|
Hardoi
|
Haridwar
|
Harihara
|
Haripad
|
Haripal
|
Haripurdhar
|
Harpanahalli
|
Harur
|
Haryana
|
HARYANA_3PL
|
Hasanpur
|
Hasnabad
|
Hassan
|
Hathras
|
Hatta
|
Haveri
|
Hayathnagar
|
Hazaribag
|
HELENCHA
|
Herbertpur
|
HILSA
|
Himachal Pradesh
|
HIMACHAL PRADESH_3PL
|
Himatnagar
|
Hindaun
|
Hindupur
|
HINGALGANJ
|
HINJILICUT
|
Hiranagar
|
Hirekerur
|
Hiriyur
|
Hisar
|
Holenarasipur
|
Honnali
|
Honnavar
|
Hooghly
|
Hooghly District
|
Hoovina Hadagali
|
Hosadurga
|
Hosanagar
|
Hoshangabad
|
Hoshiarpur
|
Hospet
|
Hosur
|
Howrah
|
Howrah
|
Hubli
|
Huliyar
|
Humnabad
|
Hunsur
|
Husnabad
|
Huzur Nagar
|
Huzurabad
|
Hyderabad
|
Hyderabad Rural
|
Ichchapuram
|
Ichoda
|
Iddukki
|
Ikauna
|
ILIPUR
|
Ilkal
|
IMAMGANJ
|
Imphal West
|
Indi
|
Indore
|
Indore Rural
|
Irinjalakuda
|
Itarsi
|
Itava
|
Itawa
|
Itia Thok
|
Jabalpur
|
Jadcherla
|
Jagaluru
|
JAGANNATHPRASAD
|
Jagatsinghapur
|
Jagatsinghpur
|
JAGDISHPUR
|
JAGDISHPUR
|
Jagdishpur-UP
|
Jagraon
|
Jagtial
|
Jahangirabad
|
Jahu
|
JAIGAON
|
Jainoor
|
Jaintia Hills
|
Jaipur
|
Jaipur Rural
|
Jaisalmer
|
Jaisinghnagar
|
Jaitwara
|
Jajapur
|
Jajpur
|
Jakh
|
Jalalabad
|
Jalalpur
|
Jalalpur-UP
|
Jalandhar
|
Jalaun
|
Jalesar
|
Jalore
|
JALPAIGURI
|
Jamkhandi
|
Jammikunta
|
JAMMU & KASHMIR_3PL
|
Jammu Kashmir
|
Jamshedpur
|
Jamtara
|
Jamui
|
Jamuria
|
Jangaon
|
Jangareddygudem
|
Janjgir-champa
|
Jannaram
|
Jaora
|
Jashpur
|
Jatara
|
Jaunpur
|
Jawad
|
Jayankondam
|
Jehanabad
|
Jehanabad
|
Jewar
|
Jewargi
|
Jhabua
|
Jhadol
|
Jhajjar
|
Jhalawar
|
JHANJHARPUR
|
Jhansi
|
Jharsuguda
|
Jharsuguda
|
Jhunjhunu
|
Jhunku
|
Jiyanpur
|
Jodhpur
|
Joginder Nagar
|
Jogipet
|
JORHAT
|
Joshimath
|
Jubbal
|
Jukhala
|
Junnardeo
|
Kadaba
|
Kadapa
|
Kadi
|
Kadiri
|
KADOBAHAL
|
Kadpadi
|
Kadur
|
Kaghaznagar
|
Kaikaluru
|
Kaimur (Bhabua)
|
Kaithal
|
Kakinada
|
Kalaburagi
|
Kalahandi
|
Kalasa
|
Kalghatgi
|
Kalinga Nagar
|
Kallakurichi
|
Kallikkad
|
Kalluru
|
Kalmeshwar
|
Kalna
|
Kalol
|
KalolHP
|
Kalpetta
|
Kalwakurthy
|
Kalyandurg
|
KALYANI
|
KAMAKHYANAGAR
|
Kamareddy District
|
Kambadur
|
Kamptee
|
Kamrup
|
Kanakapura
|
Kanchipuram
|
Kandhamal
|
Kandukur
|
Kangan
|
Kangeyam
|
Kangra
|
Kanigiri
|
Kanjarakatte
|
Kanjiramattom
|
Kanker
|
Kannapuram
|
Kannauj
|
Kannur
|
Kanpur
|
Kanthi
|
Kapadvanj
|
Kapasan
|
Kaptanganj
|
Kapurthala
|
Karaikal
|
Karaikudi
|
Karauli
|
Karbi Anglong
|
Karera-MP
|
Karim Nagar
|
Karimba
|
Karimganj
|
Karimnagar
|
Karkala
|
Karnal
|
Karsog
|
Karukachal
|
Karur
|
Karwar
|
Kasaragod
|
Kasganj
|
Kashipur
|
Katangi
|
Kathipudi
|
Kathua
|
Katihar
|
Katni
|
Katol
|
Kattappana
|
Katwa
|
Kauriram
|
Kavali
|
Kawardha
|
Kayamkulam
|
Kazipet
|
Kekri
|
Kelwara
|
KENDRAPARA
|
Kendrapara
|
Kendujhar
|
Kerakat
|
Kerur
|
Kesali
|
Keshoraipatan
|
Keylong
|
Khadda
|
Khagaria
|
Khairabad
|
Khajuraho
|
KHALARI-JR
|
Khalilabad
|
Khambhat
|
Khammam
|
Khanapur
|
Khanapur-TS
|
Khandela
|
Khandwa
|
Khanna
|
Khanpur
|
Kharagpur
|
Khargone
|
Khatauli
|
Khategaon
|
Khatima
|
Khatu Khurd
|
Kheda
|
Kheragarh
|
Khergam
|
Kheri
|
Kherwara
|
Khimsar
|
Khinwara
|
KHIZASARAI
|
KHODAGANJ
|
Khorda
|
Khordha
|
KHUNTI
|
Khurai
|
Khutar
|
Kilimanoor
|
Kinnaur
|
Kiphire
|
Kishanganj
|
Kishangarh
|
Kishni
|
Kittur
|
Kochi
|
Kochi Rural
|
Kodad
|
Kodaikanal
|
KODALA
|
Koderma
|
Kodumudi
|
Kodungallur
|
Koduru
|
Kokrajhar
|
kolar
|
Kolasib
|
Kolayat
|
Kolhapur
|
Kolhar
|
Kolkata
|
Kolkata Rural
|
Kollam
|
Kollapur
|
Kollegala
|
KONARK
|
Konaseema District
|
Konch
|
Kondapi
|
Koothattukulam
|
Koppal
|
Koraput
|
Koratagere
|
Koratla
|
Korba
|
Koriya
|
Koruprolu
|
Kosgi
|
Kota
|
Kotagiri
|
Kotdwara
|
Kothagudem
|
Kothapalli
|
Kotkapura
|
Kotma
|
Kotputli
|
Kottarakkara
|
Kottayam
|
Kotturu
|
Kotturu-AP
|
Kovilpatti
|
Kovvur
|
Kowthal
|
Koyilandy
|
Koyyuru
|
Kozhenchery
|
Kozhikode
|
Krishna District
|
Krishnagiri
|
Krishnarajanagara
|
Krishnarajngr
|
Krishnarajpet
|
KUCHAIKOTE
|
Kuchaman City
|
KUCHINDA
|
Kudair
|
Kudligi
|
Kukanoor
|
Kukshi
|
Kumarganj
|
Kumbakonam
|
Kumily
|
Kumta
|
Kundapura
|
Kundli
|
Kunigal
|
Kuppam
|
Kurnool
|
Kurugodu
|
Kurukshetra
|
Kurupam
|
Kushalnagar
|
Kushinagar
|
Kushtagi
|
Kusumanchi
|
Kuthumkal
|
Kuthuparamba
|
Kuttiady
|
Kuttikol
|
Ladakh
|
Ladwa
|
Lahar
|
Lakheri
|
Lakhimpur
|
Lakhimpur
|
Lakhisarai
|
Lakhnadon
|
Laksar
|
Lal Gopalganj
|
Lalitpur
|
Lalsot
|
Lambhua
|
Latehar
|
Lavkush Nagar
|
Lawngtlai
|
Laxmangarh
|
Laxmangarh-RJ
|
Linga
|
Lingasugur
|
Lohaghat
|
Lohardaga
|
Lohit
|
Longleng
|
Lower Dibang Valley
|
Lower Subansiri
|
Lucknow
|
Lucknow Rural
|
Lucknow-Kanpur
|
Ludhiana
|
Ludhiana
|
Ludhiana District
|
Lunawada
|
Lunglei
|
Lunkaransar
|
Luxettipet
|
Macherla
|
Machhiwara
|
Machilipatnam
|
Madakasira
|
Madanapalle
|
Madanapalli
|
Madanpur
|
Maddur
|
Madgulapally
|
Madhepura
|
Madhoganj
|
Madhubani
|
Madhubani
|
Madhugiri
|
MADHYA PRADESH_3PL
|
Madikeri
|
Madurai
|
Madwas
|
Magadi
|
Mahabubabad
|
Mahabubnagar
|
Mahadevpur
|
Mahalingpur
|
Maharajapuram
|
MAHARAJGANJ-BH
|
Mahasamund
|
Mahe
|
Mahendragarh-HR
|
Maheshwar
|
Mahoba
|
Maholi
|
Mahrauni
|
Mahwa
|
Maihar
|
Mainpuri
|
MAIRWA
|
Majhgawa
|
MAKHDUMPUR
|
Makrana
|
Maksudangarh
|
Makthal
|
Malanjkhand
|
Malappuram
|
Malavalli
|
MALDA
|
Malerkotla
|
Malhera
|
Malihabad
|
Malkangiri
|
Mallapur
|
Malmaliya
|
MALMALIYA
|
Malout
|
Malpura
|
Malsisar
|
Malur
|
Mammit
|
Manali
|
Manamelkudi
|
Mananthavadi
|
Manasa
|
Manawar
|
Mancherial
|
Manda
|
Mandalgarh
|
Mandapeta
|
Mandi Dabwali
|
Mandideep
|
Mandla
|
Mandphiya
|
Mandsaur
|
Mandya
|
MANGALDOI
|
Mangalore
|
Manipal
|
Manjeshwar
|
Manopad
|
Mansa
|
Manthani
|
Manuguru
|
Manvi
|
MARHOWARAH
|
Mariahu
|
Marigaon
|
Markapur
|
Marthandam
|
Martur
|
Marwar Junction
|
MASAURHI
|
Masrakh
|
Mathania
|
Mathura
|
Mau
|
Mauranipur
|
Mayiladuthurai
|
Mayurbhanj
|
Mecheda
|
Medak District
|
Medinipur
|
Meerut
|
Meerut District
|
Meham
|
Mehmedabad
|
Mehsana
|
Melur
|
Memari
|
Menhdawal
|
Merta
|
Metpally
|
Mettala
|
Mettupalayam
|
Mettur
|
Mhow
|
Milak
|
MINAKHAN
|
MIRGANJ
|
Miryalaguda
|
Mirzapur
|
Miyanganj
|
Modasa
|
Modinagar District
|
Moga
|
Mogullapally
|
Mohali
|
Mohammadabad
|
Mohammadi
|
MOHAMMADPUR
|
MOHANA
|
Mokama
|
Mokokchung
|
Molakalmuru
|
Mominpet
|
Moodabidri
|
Moradabad
|
Morena
|
Morshi
|
Motebeennura
|
Mothkur
|
Motihari
|
Mudarangady
|
Muddebihal
|
Mudhol
|
Mudigere
|
Mudigubba
|
Mughal Sarai
|
Muktsar
|
Mulbagal
|
Multai
|
Mulugu
|
Mumbai
|
Mumbai Rural
|
Mundakayam
|
Mundgod
|
Mungaoli
|
Munger
|
Munger
|
Mungra Badshahpur
|
Munnar
|
Munuvalli
|
Muradnagar
|
Murshidabad
|
Muskara
|
Mussoorie
|
Muthukulathur
|
Muvattupuzha
|
Muzaffarnagar District
|
Muzaffarpur
|
Muzaffarpur
|
Muzzafarpur
|
Mysore
|
Mysore Rural
|
Nabadwip
|
Nabarangapur
|
Nabha
|
Nadaun
|
Nadia
|
Nadia
|
Nadiad
|
Nadoti
|
Nagamangala
|
Nagaon
|
Nagapattinam
|
Nagari
|
Nagarkurnool
|
Nagaur
|
Nagda
|
Nagercoil
|
Nagina
|
Nagod
|
Nagpur
|
Nagpur Rural
|
Nahan
|
Naharlagun
|
Naidupeta
|
Naina Devi
|
Naini
|
Nainital
|
Nainwa
|
Najibabad
|
NAKASHIPARA
|
Nakerakal
|
Nakodar
|
Nalanda
|
Nalbari
|
Nalgonda
|
Nallajerla
|
Namakkal
|
Nandikotkur
|
Nandyal
|
Nanjangud
|
Nanpara
|
Narasannapeta
|
Narasaraopet
|
NARASINGHPUR
|
Narayankhed
|
Narayanpet
|
NARAYANPUR
|
Narikkuni
|
Narketpalle
|
Narmetta
|
Narnaul
|
Narsampet
|
Narsapur
|
Narsapur-TS
|
Narsinghgarh
|
Narsinghpur
|
Narsipatnam
|
Nashik
|
Nasirabad
|
Naugarh
|
Nautanwa
|
Navalgund
|
Navipet
|
Navsari
|
Nawabganj
|
Nawabganj-UP
|
Nawada
|
Nawada
|
Nawalgarh
|
Nawanshahr
|
Nayagarh
|
Nayagarh
|
NAZIRA
|
NAZIRPUR
|
Nedumangad
|
Nedumkandam
|
Neem ka Thana
|
Neemuch
|
Nellore
|
Nenmara
|
Nepanagar
|
Nereducharla
|
Neyyattinkara
|
Nichlaul
|
Nighasan
|
Nileshwar
|
NIMAPARA
|
Nimbahera
|
Nipani
|
Nirmal
|
Nizamabad District
|
Nizamabad-UP
|
Nohar
|
Noida Rural
|
Noida-Ghaziabad
|
Nokha
|
North 24 Parganas
|
North 24 Parganas
|
North Cachar Hills
|
North Dinajpur
|
NORTH LAKHIMPUR
|
North Paravur
|
North Sikkim
|
North Tripura
|
Nuapada
|
NULL
|
Nuzvid
|
Oddanchatram
|
Ongole
|
Ooty
|
Orai
|
Ottapidaram
|
Pachore
|
PadampurRJ
|
Paderu
|
Padmajiwadi
|
Padrauna
|
Paithani
|
Pakala
|
PAKRIBARWAN
|
Pakur
|
Pakyong
|
Palacode
|
Palakkad
|
Palakollu
|
Palakonda
|
Palamaner
|
Palamau
|
Palani
|
Palanpur
|
Palasa
|
Pali Birsinghpur
|
Palitana
|
Palladam
|
Palwal
|
Pamarru
|
Pamuru
|
Panchkula
|
Pandhurna
|
Pandikkad
|
Pandua
|
Pangodu
|
Panipat
|
Panja
|
Panna
|
Pansemal
|
Panvel
|
Paonta Sahib
|
Paota
|
Papum Pare
|
Paramakudi
|
Parappa
|
Parasia
|
Pardi
|
Parippally
|
Parkal
|
Parvathipuram
|
Parwanoo
|
Paschim Bardhaman
|
Patan
|
Patancheru
|
Pathanamthitta
|
Pathankot
|
Pathapatnam
|
Patiala
|
Patna
|
Patna Rural
|
Patran
|
Patti
|
Patti-UP
|
Pattukkottai
|
Pauri
|
Pavagada
|
PAVAPURI
|
Pawai
|
Pazhayannur
|
Pedabayalu
|
Pedapadu
|
PEDDAPALLI
|
Pehowa
|
Pench
|
Pendra
|
Pennadam
|
Pennagaram
|
Penugonda
|
Peralam
|
Perambalur
|
Perambra
|
Perinthalmanna
|
Perumbavoor
|
Perunali
|
Perundurai
|
PETERBAR
|
Petlad
|
Petlawad
|
Phagwara
|
Phalodi
|
Phalsund
|
Phek
|
Phephna
|
Phulera
|
PHUSRO
|
Pichhore
|
Piduguralla
|
Pihani
|
Pilakhua District
|
Pilani
|
Pileru
|
Pilibanga
|
Pilibhit
|
Pilkhuwa
|
Pindwara
|
Piparcity
|
Pipariya
|
PIPILI
|
Piriyapatna
|
PIRO
|
Pithampur
|
Pithoragarh
|
PLASSEY
|
Podili
|
Poinachi
|
Pokhran
|
Polay Kalan
|
Pollachi
|
Polur
|
Ponnamaravathi
|
Pooh
|
Poonch
|
Poonchh
|
Prakasam
|
Prakasam District
|
Pratapgarh District
|
Pratapgarh-RJ
|
Pregnapur
|
Prithvipur
|
Proddatur
|
Puducherry
|
Pudukkottai
|
Pukhrayan
|
Pulivendula
|
Pulpally
|
Pune
|
Pune Rural
|
Punganur
|
Punjab
|
PUNJAB_3PL
|
Puranpur
|
Purba Bardhaman
|
Puri
|
Puri
|
Puruliya
|
Pushpavanam
|
Puthukkad
|
Puttaparthi
|
Puttur
|
Puttur-AP
|
Raebareli District
|
RAGHUNATHPUR-BR
|
Rahatgarh
|
Raibag
|
Raichur
|
Raigarh
|
Raikot
|
Raila
|
Raipur
|
Raipur Karchulion
|
Raipur-RJ
|
Raipura
|
RAIRAKHOL
|
Raisen
|
Raisinghnagar
|
Rajahmundry
|
Rajamahendravaram
|
Rajampet
|
Rajapalayam
|
RAJASTHAN_3PL
|
Rajesultanpur
|
RAJGANJ
|
Rajgarh
|
Rajgarh-HP
|
Rajgarh-MP
|
RAJGIR
|
Rajkot
|
Rajnandgaon
|
Rajpipla
|
Rajsamand
|
Ramagundam
|
Ramanagara
|
Ramanathapura
|
Ramanathapuram
|
Ramannapeta
|
Ramdurg
|
Rameswaram
|
Ramganj Mandi
|
Ramgarh
|
Ramgarh-RJ
|
Ramnagar
|
Rampachodavaram
|
Rampur
|
Rampur Naikin
|
Rampura Phul
|
Ramtek
|
Ranchha
|
Ranchi
|
Ranebennur
|
RANGPO
|
Ranihati
|
Ranikhet
|
Ranipet
|
Raniwara
|
Ranni
|
Ras
|
Rasipuram
|
Rasulabad
|
Ratangarh
|
Ratangarh-MP
|
Ratanpura
|
Rath
|
Ratia
|
Ratlam
|
Rawatbhata
|
Rawatsar
|
Rayachoti
|
Rayadurgam
|
Rayagada
|
Rayaparthi
|
Razole
|
Reckong Peo
|
Reengus
|
Rehli
|
Renigunta
|
Renukoot
|
Renwal
|
Reodar
|
Repalle
|
Rewa
|
Rewari
|
Ri Bhoi
|
Rishikesh
|
Robertsganj
|
Robertsonpet
|
Rohtak
|
Rohtas
|
Rona
|
Roorkee
|
Rourkela
|
RS Pura
|
Rudauli
|
Rudhauli
|
Rudrangi
|
Rudraprayag
|
Rudrapur
|
RUNNISAIDPUR
|
RUNNISAIDPUR
|
Rupnagar
|
S Kota
|
Sabalgarh
|
Sagar
|
Sagara
|
Sagwara
|
Saharanpur District
|
Saharsa
|
Sahaswan
|
Sahibganj
|
Saidabad
|
Saiha
|
Sakleshpur
|
Salcete
|
Salem
|
Salempur
|
SALIPUR
|
Salumbar
|
Salur
|
Samarlakota
|
Samastipur
|
Sambalpur
|
Sambalpur
|
Sambhal District
|
Sanawad
|
Sanchore
|
Sandur
|
Sangareddy
|
Sangareddy District
|
Sangaria
|
Sangrur
|
Sankaramangalam
|
Sankarankovil
|
Sankarapuram
|
Sankari
|
Santipur
|
Saoner
|
Sarada
|
SARAIYA
|
Saran
|
Saran
|
Sardarshahr
|
Sarni
|
Sasaram
|
Sathupally
|
Sathyamangalam
|
Satna
|
Sattur
|
Saundatti
|
Sausar
|
Savadatti
|
Sawai Madhopur
|
Sedam
|
Seetharampram
|
Sehore
|
Semariya
|
Sendhwa
|
Seoni
|
Seraikela-kharsawan
|
Serchhip
|
Sewarhi
|
Shadnagar
|
Shahabad Markanda
|
Shahabad-UP
|
Shahapur
|
Shahdol
|
Shaheed Bhagat Singh Nagar
|
Shahganj
|
Shahgarh
|
Shahjahanpur
|
Shahpura
|
ShahpuraMP
|
Shajapur
|
Shambhu
|
Shamli
|
Shanivarasanthe
|
Sheikhpura
|
SHEOHAR
|
SHEONAR
|
Sheopur
|
Shiggaon
|
Shikaripur
|
Shikohabad
|
SHILLONG
|
Shilong
|
Shimla
|
Shimoga
|
Shiralakoppa
|
Shivpuri
|
Sholinghur
|
Shoranur
|
Shorapur
|
SHRAVASTI
|
Shri Dungargarh
|
Shrimadhopur
|
Shujalpur
|
Sibsagar
|
Siddapur
|
Siddhpur
|
Siddipet District
|
Sidhauli
|
Sidhi
|
Sidlaghatta
|
Sihor
|
Sihora
|
Sikandrabad
|
Sikar
|
Sikriganj
|
SILCHAR
|
Siliguri
|
Silvassa
|
Silwani
|
Simalwara
|
Simdega
|
Sindagi
|
Sindhanur
|
Sindudurg
|
Singarayakonda
|
SINGHIA
|
Singrauli
|
Sira
|
Sirathu
|
Sircilla District
|
SIRDALA
|
Sirikonda
|
Sirkazhi
|
Sirohi
|
Sirsa
|
Sirsi
|
Siruguppa
|
Sirvella
|
Sitamarhi
|
Sitamarhi
|
Sitapur
|
Sitarganj
|
Sivaganga
|
Sivakasi
|
SIVASAGAR
|
Siwan
|
Siwan
|
Siwani
|
Siyana
|
Sleemnabad
|
Sohagi
|
Sojat
|
Someshwar
|
Sompeta
|
Sonapur
|
SONBARSA
|
Sonepur
|
Songadh
|
Sonipat
|
Sonitpur
|
Soraba
|
Soraon
|
Soro
|
South 24 Parganas
|
South 24 Parganas District
|
South Dinajpur
|
South Garo Hills
|
South Sikkim
|
South Tripura
|
Sri City
|
Sri Hargobindpur
|
Srikakulam Disctrict
|
Srikalahasti
|
Srinagar
|
Srinagar-UK
|
Sringeri
|
Srinivaspur
|
Sriperumbudur
|
Srirangapatna
|
Srisailam
|
Srivijaynagar
|
Sujangarh
|
Sullia
|
Sullurupeta
|
Sultan Bathery
|
Sultana
|
SULTANGANJ
|
Sultanpur District
|
Sultanpur Lodhi
|
Sumerpur
|
Sunam
|
Sundar Nagar
|
Sundergarh
|
Sundla
|
Supaul
|
SURAJGARHA
|
Surajpur jhikla
|
Surat
|
Surat Rural
|
Suratgarh
|
Surathkal
|
Surguja
|
Suryapet District
|
SWARUPNAGAR
|
Tadepalligudem
|
Tadipatri
|
Tadoor
|
Tadvai
|
Taherpur
|
Tahliwal
|
Talbahat
|
Talikoti
|
Tamluk
|
Tanakpur
|
Tanda
|
Tandur-TL
|
Tanuku
|
Tarakeswar
|
Tarana
|
Taranagar
|
Tarn Taran Sahib
|
Tarsikka
|
Tawang
|
Tehri
|
Tekkali
|
Tenali
|
Tendukheda
|
Tenkasi
|
Tezpur
|
Thachanattukara
|
Thakurnagar
|
Thalassery
|
Thalavadi
|
Thamarassery
|
Thanesar
|
Thanjavur
|
Tharali
|
Theni
|
Theog
|
Thikri
|
Thirthahalli
|
Thirumalagiri
|
Thiruthuraipoondi
|
Thiruttani
|
Thiruvadanai
|
Thiruvananthapuram
|
Thiruvarur
|
Thisayanvilai
|
Thodupuzha
|
Thoubal
|
Thrissur
|
Thuckalay
|
Thuraiyur
|
Tijara
|
Tikamgarh
|
Tindivanam
|
Tinsukia
|
Tiptur
|
Tirap
|
Tirora
|
Tiruchendur
|
Tiruchengode
|
Tiruchi
|
Tirunelveli
|
Tirupati
|
Tirupattur
|
Tiruppur
|
Tirur
|
Tiruvalla
|
Tiruvallur District
|
Tiruvannamalai
|
Tirwanganj
|
Tiryani
|
Tonk
|
Tribeni
|
Trichy
|
Tripura
|
Tuensang
|
Tumakuru
|
Tundla
|
Tungaturthi
|
Tuni
|
Turuvukere
|
Tuticorin
|
Udaipura
|
Udaipurwati
|
Udayagiri
|
Udgir
|
Udham-Singh-Nagar
|
Udhampur
|
Udumalaipettai
|
Ugar
|
Ujjain
|
Ukhra
|
Ullal
|
ULUBERIA
|
Umaria
|
Umreth
|
Una-HP
|
Unjha
|
UNNAO
|
Upper Siang
|
Upper Subansiri
|
Uravakonda
|
Usilampatti
|
Uthangarai
|
Utnoor
|
UTTAR PRADESH_3PL
|
UTTARAKHAND_3PL
|
Uttarkashi
|
Vadakara
|
Vadipatti
|
Vadodara
|
Vadodara Rural
|
Vaidpura
|
Vaishali
|
Valanchery
|
Vallioor
|
Valsad
|
Vandavasi
|
Vaniyambadi
|
Vapi
|
Varanasi
|
Veenavanka
|
Velgodu
|
Vellakovil
|
Vellore
|
Velur
|
Vempalli
|
Venjaramoodu
|
Venkatagirikota
|
Venkatgiri
|
Vidisha
|
Vidyanagar
|
Vijapur
|
Vijayapura
|
Vijayawada-Guntur
|
Vijayraghavgarh
|
Vikarabad
|
Vilathikulam
|
Viluppuram
|
Vinukonda
|
Virajpet
|
Viratnagar
|
Virudhachalam
|
Virudhunagar
|
Visakhapatnam
|
Visakhapatnam District
|
Visnagar
|
Vissannapetaa
|
Vitla
|
Vizag Rural
|
Vizianagaram
|
Vizianagaram Disctrict
|
Vuyyuru
|
Vyara
|
Wadala
|
Wanaparthy
|
Wani
|
Warangal
|
Waraseoni
|
Wardha
|
Warora
|
Warud
|
WAZIRGANJ
|
Weir
|
West Champaran
|
West Garo Hills
|
West Godavari District
|
West Kameng
|
West Khasi Hills
|
West Midnapore
|
West Siang
|
West Sikkim
|
West Singhbhum
|
West Tripura
|
West-Godavari
|
Wyra
|
Yadgir
|
Yamuna Nagar
|
Yanam District
|
Yaragatti
|
Yavatmal
|
Yelburga
|
Yellamanchili
|
Yellandu
|
Yellapur
|
Yellare
|
Yellareddipet
|
Yellareddy
|
Yemmiganur
|
Yerragonda Palem
|
Yerravaram
|
Zahirabad
|
Zira
|
Zirakpur
|
Zunhebotto</p>
       </div>

       </div>
       <div className='contaiiner-fluid p-2 text-center text-white footbg'>
        <h6 className='bi bi-email'>Copyright KiranRayapudi © 2023-2025 Supermarket Grocery Supplies Pvt Ltd</h6>
       </div>
       
    </div>
  )
}

export default Footer
