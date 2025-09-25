export interface DateCardData {
  id: number;
  title: string;
  description: string;
  location: string | null;
  task: { description: string; status: "done" | "notDone" | "notStarted" };
  image: string | null;
  rating?: number;
  date?: string;
}

export const proposals: DateCardData[] = [
  {
    id: 1,
    title: "Spacer po parku",
    description:
      "Spędźcie romantyczny czas na świeżym powietrzu, spacerując po parku przy zachodzie słońca. Cieszcie się chwilą razem, rozmawiając o marzeniach i planach na przyszłość. Czasami proste rzeczy potrafią najbardziej zbliżyć do siebie dwie osoby.",
    task: {
      description:
        "Podczas spaceru na każdej ławeczce (lub innym fajnym miejscu) zatrzymujecie się i robicie jedno zdjęcie, które odzwierciedla Wasze uczucia w danym momencie. Na końcu wybieracie jedno, które najlepiej opisuje Waszą randkę i wymyślacie wspólne, zabawne podpisy do tych zdjęć.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 2,
    title: "Kolacja włoska",
    description:
      "Wybierzcie się do włoskiej restauracji na pyszną pizzę i makaron, gdzie możecie porozmawiać o podróżach, wspólnych planach i... próbowaniu nowych smaków. To świetna okazja, żeby poczuć się jak w romantycznej scenerii z filmu.",
    task: {
      description:
        "Stwórzcie swoje własne hasło reklamowe dla restauracji, w której jesteście. Wymyślcie coś, co byłoby najbardziej zabawne i kreatywne. Może uda się rozbawić kelnerów?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 3,
    title: "Kino domowe - Horror",
    description:
      "Przytulcie się na kanapie, włączcie ulubiony horror i pozwólcie, by dreszczyk emocji dodał pikanterii Waszej randce. Czas na popcorn, śmiech i może nawet kilka przerażających momentów, które zbliżą Was do siebie!",
    task: {
      description:
        "Przez cały film jedno z Was musi grać rolę 'strachliwego' (przesadnie reagować na każdą straszną scenę), a drugie 'bohatera', który stara się być opanowane. Po filmie zmieniacie role i porównujecie, kto lepiej wcielił się w swoją postać.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 4,
    title: "Wystawa sztuki",
    description:
      "Zwiedzanie galerii sztuki to idealna randka dla tych, którzy chcą pogłębić swoje zainteresowanie kulturą. Wspólnie odkrywajcie obrazy, rzeźby i dzieła artystów, które mogą być inspiracją do rozmowy o Waszych marzeniach, pasjach i gustach.",
    task: {
      description:
        "Zatrzymajcie się przy każdym dziele sztuki i wymyślcie, jak wyglądałaby historia związana z tym obrazem. Każde z Was wymyśla po jednej wersji historii. Później głosujecie, która była zabawniejsza.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 5,
    title: "Wspinaczka górska",
    description:
      "Spędźcie aktywną randkę w górach, pokonując szlaki i wspólnie ciesząc się niesamowitymi widokami. Wspinaczka to nie tylko fizyczna aktywność, ale także sposób na wzmocnienie więzi i wzajemne wsparcie.",
    task: {
      description:
        "Kiedy już dojdziecie na szczyt, wybieracie trzy rzeczy, które każdy z Was najbardziej lubi w górach (np. widok, powietrze, spokój) i robicie 'górską obietnicę' - co najmniej raz w roku wracacie w góry razem!",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 6,
    title: "Dzień SPA",
    description:
      "Zrelaksujcie się w SPA, korzystając z masaży, sauny i gorących kąpieli. To idealny sposób, by oderwać się od codziennych stresów i skupić tylko na sobie nawzajem, w pełnym komforcie i intymności.",
    task: {
      description:
        "Zróbcie 'spa challenge' - zamieńcie się w masażystów! Każde z Was przez 5 minut wykonuje prosty masaż dla drugiej osoby. Ocenicie, kto zrobił lepszy masaż - będzie śmiech i relaks na pewno!",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 7,
    title: "Piknik w parku",
    description:
      "Zanurzcie się w atmosferę spokoju i relaksu podczas pikniku na świeżym powietrzu. Zamiast zasiadać w eleganckiej restauracji, wybierzcie koc, kilka przekąsek i cieszcie się chwilą w parku. Idealna randka na słońcu!",
    task: {
      description:
        "Wymyślcie jak najdziwniejsze połączenie smakowe z produktów, które macie w koszyku. Na przykład, makaron z jabłkiem i cynamonem? Dajcie temu szansę i spróbujcie - na pewno będzie to śmieszna sytuacja, a może nawet odkryjecie coś smacznego!",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 8,
    title: "Degustacja win",
    description:
      "Wspólna degustacja win to prawdziwa przyjemność, szczególnie jeśli każdemu z Was zależy na odkrywaniu nowych smaków i aromatów. Usiądźcie przy stole, weźcie kieliszki wina i zanurzcie się w rozmowy o pasjach, podróżach i... winie!",
    task: {
      description:
        "Spróbujcie wymyślić jakąś dziwną nazwę dla swojego 'własnego' wina, które idealnie by do Was pasowało. Może to być coś zupełnie absurdalnego. Kto wymyśli najbardziej szaloną nazwę?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 9,
    title: "Gotowanie na żywo",
    description:
      "Wybierzcie się na warsztaty kulinarne, gdzie razem przygotujecie wykwintne danie. To świetna okazja, by poznać tajniki kuchni, ale także spędzić czas razem, ucząc się i śmiejąc w trakcie gotowania.",
    task: {
      description:
        "Po przygotowaniu dania, zamieńcie się w profesjonalnych szefów kuchni i oceniajcie nawzajem swoje dzieła. Dodatkowo, zróbcie zdjęcie swojego dania i stwórzcie wspólną recenzję - kto lepiej wyczarował kulinarną sztukę?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 10,
    title: "Noc w muzeum",
    description:
      "Zorganizujcie randkę w muzeum, które oferuje nocne zwiedzanie. Spacer po ciemnych salach muzealnych z latarkami doda atmosfery tajemniczości i ekscytacji.",
    task: {
      description:
        "Wybierzcie jedno dzieło sztuki, które najbardziej Was zaskoczyło. Napiszcie własną historię na temat tego obrazu, wymyślając fikcyjną opowieść, która mogłaby się z nim wiązać.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 11,
    title: "Wieczór w teatrze",
    description:
      "Spędźcie wieczór w teatrze na jednym z wyjątkowych przedstawień. Oglądanie sztuki na żywo to doświadczenie, które otworzy Wasze umysły na nowe perspektywy i wzbudzi silne emocje.",
    task: {
      description:
        "Po zakończeniu spektaklu, stwórzcie własną scenkę teatralną opartą na tym, co obejrzeliście. Możecie odtworzyć jedno z najbardziej emocjonujących momentów lub wymyślić swoją wersję wydarzeń.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 12,
    title: "Podróż w czasie - Retro randka",
    description:
      "Zorganizujcie randkę w stylu lat 60-70-80, z odpowiednią muzyką, strojami i atmosferą. Poczujcie się jak para z innej epoki, bawiąc się przy starych hitach i próbując zrobić rzeczy, które były popularne w tamtych czasach.",
    task: {
      description:
        "Każde z Was ma za zadanie nauczyć się jednego tańca z wybranej epoki (np. twist z lat 60., breakdance z lat 80.). Następnie ocenicie nawzajem swoje umiejętności i wybierzecie najlepszego tancerza.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 13,
    title: "Kreatywna randka plastyczna",
    description:
      "Spędźcie dzień w studiu artystycznym, gdzie razem malujecie lub robicie rzeźby. To idealna randka dla osób, które chcą wyjść poza standardowe ramy i oddać się swojej kreatywności.",
    task: {
      description:
        "Zróbcie wspólny obraz lub rzeźbę, ale z jednym ograniczeniem - każdy z Was może dodać tylko jeden element do dzieła w każdej turze. Na końcu ocenicie, czy wasza sztuka wyraża Waszą więź.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 14,
    title: "Zjazd na nartach",
    description:
      "Romantyczna randka na stoku narciarskim - pełna adrenaliny, śmiechu i wspólnego zjazdu w górskich krajobrazach. To idealna okazja, by wspólnie pokonać góry!",
    task: {
      description:
        "Zorganizujcie mały wyścig na nartach lub snowboardzie. Na końcu, osoba, która przegra, przygotowuje coś romantycznego przy ognisku (np. rozgrzewający napój).",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 15,
    title: "Wspólne bieganie po plaży",
    description:
      "Spędźcie dzień na plaży, biegnąc razem przy brzegu morza. To wyjątkowa randka, która łączy sport, naturę i romantyzm nadmorskich widoków.",
    task: {
      description:
        "Po bieganiu, zróbcie sobie sesję zdjęciową na tle zachodzącego słońca, ale zrobicie to w stylu 'tandemowym' - każda osoba ma za zadanie wykonać zdjęcie drugiej i ocenić, kto uchwycił lepszą chwilę.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 16,
    title: "Escape Room",
    description:
      "Zmieńcie swój wieczór w ekscytującą przygodę w escape roomie! Rozwiązujcie zagadki i podejmujcie wyzwania, by uwolnić się z pokoju w wyznaczonym czasie.",
    task: {
      description:
        "Po zakończeniu gry, każdy z Was ma za zadanie stworzyć swoją wersję escape roomu, na podstawie tego, co Wam się podobało w grze. Wymieńcie się pomysłami na najlepsze zagadki.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 17,
    title: "Rejs po jeziorze",
    description:
      "Zorganizujcie romantyczny rejs po jeziorze. W ciszy wody i otoczeniu natury spędźcie czas, relaksując się na łódce, rozmawiając lub po prostu podziwiając widoki.",
    task: {
      description:
        "W czasie rejsu każde z Was ma przygotować jedno pytanie do drugiej osoby, które może dotyczyć marzeń, planów na przyszłość lub wspólnych wspomnień. Zadajcie sobie nawzajem pytania i porozmawiajcie.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 18,
    title: "Nocne obserwacje nieba",
    description:
      "Zorganizujcie randkę pod gwiazdami - zabierzcie koc, termos z herbatą i spędźcie czas na oglądaniu nieba. To idealna okazja do rozmów i po prostu odpoczynku pod nocnym niebem.",
    task: {
      description:
        "Każde z Was ma za zadanie wymyślić najbardziej fantastyczną historię na temat jednego z widocznych obiektów na niebie. Wybierzcie najciekawszą opowieść i zastanówcie się, co by się stało, gdyby ta historia była prawdziwa.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 19,
    title: "Rally samochodowe",
    description:
      "Udział w mini rajdzie samochodowym - idealna randka dla par szukających adrenaliny! Możecie wspólnie rywalizować lub pomagać sobie, by osiągnąć najlepszy czas.",
    task: {
      description:
        "Zanim wsiądziecie do samochodu, zapiszcie wszystkie miejsca, które chcielibyście odwiedzić w danym rajdzie. Kto osiągnie najlepszy czas, ten wybiera jedno z tych miejsc na kolejną randkę.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 20,
    title: "Zajęcia z jogi w parze",
    description:
      "Spędźcie czas na zajęciach jogi, które uczą współpracy, zaufania i synchronizacji. To doskonała randka, która pozwoli zbliżyć Was do siebie na poziomie fizycznym i emocjonalnym.",
    task: {
      description:
        "Podczas ćwiczeń, każda osoba ma za zadanie wymyślić jedno pozytywne zdanie, które po zakończeniu sesji jogi obie osoby powtarzają. Najbardziej motywujące hasło wygrywa!",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 21,
    title: "Zimowa wyprawa",
    description:
      "Zorganizujcie romantyczną zimową randkę w górach lub w lesie. Śnieg, gorąca czekolada i wspólne spędzanie czasu w mroźnej scenerii stworzą wyjątkową atmosferę.",
    task: {
      description:
        "Zróbcie sobie zawody w budowaniu najpiękniejszego bałwana lub lodowego zamku. Wybierzcie, kto z Was stworzył najlepszą wersję śnieżnej rzeźby.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 22,
    title: "Kino - Komedia",
    description:
      "Zasiądźcie wygodnie w kinie na komedii, śmiejąc się do rozpuku z zabawnych sytuacji na ekranie. Idealna randka na relaks i radość.",
    task: {
      description:
        "Spróbujcie wejść na salę z własnym jedzeniem, którego nie można normalnie wnosić (np. jedzenie, które ma charakterystyczny zapach lub jest głośne do jedzenia). Zobaczcie, jak dyskretnie uda się Wam to zrobić. Będziecie musieli być sprytni!",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 23,
    title: "Wspólne gotowanie w domu",
    description:
      "Spędźcie czas razem, gotując coś wyjątkowego w domu. Wybierzcie danie, które oboje uwielbiacie lub takie, którego jeszcze nigdy nie próbowaliście przygotować.",
    task: {
      description:
        "Spróbujcie ugotować jedno danie bez użycia przepisu. Każde z Was wybiera jeden składnik, który musi zostać dodany do potrawy, ale nie mówi o tym drugiej osobie. Na końcu sprawdzicie, jak smakują Wasze 'dziwne' połączenia.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 24,
    title: "Park linowy",
    description:
      "Wybierzcie się na park linowy, gdzie czekają Was przygody pełne adrenaliny i rywalizacji. To świetna okazja, by sprawdzić swoje siły i pomóc sobie nawzajem w pokonywaniu przeszkód.",
    task: {
      description:
        "Po pokonaniu wszystkich tras, stwórzcie własne, jeszcze trudniejsze wyzwanie dla drugiej osoby. Zaprojektujcie tor przeszkód, który oboje muszą przejść. Kto wykona go szybciej?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 25,
    title: "Wspólna sesja zdjęciowa",
    description:
      "Zorganizujcie profesjonalną sesję zdjęciową, gdzie będziecie mogli być modelami przez jeden dzień. Zabierzcie się do tego na poważnie - odpowiednia sceneria i stroje!",
    task: {
      description:
        "Zróbcie jedno zdjęcie, na którym każde z Was będzie musiało wpasować się w najdziwniejszy temat, jaki uda się wymyślić. Np. 'przebudzeni z mroźnej krainy', 'astronauci na misji' - kto stworzy bardziej kreatywny i śmieszny pomysł?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 26,
    title: "Romantyczna kolacja - Włoska",
    description:
      "Wybierzcie się do włoskiej restauracji, gdzie spędzicie czas przy pizzy i makaronie. Idealna randka, aby poczuć się jak w Rzymie, nie wychodząc z miasta.",
    task: {
      description:
        "Wybierzcie jedną włoską piosenkę, którą oboje będziecie musieli nauczyć się śpiewać. Kiedy kelner przyniesie napój lub danie, zaśpiewacie tę piosenkę razem, starając się nie wzbudzać zbyt dużej uwagi.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 27,
    title: "Noc w namiocie - Camping",
    description:
      "Zorganizujcie romantyczną noc pod gwiazdami, spędzając ją w namiocie. Ognisko, pieczenie kiełbasek i relaks pod gołym niebem.",
    task: {
      description:
        "Stwórzcie wspólnie najbardziej absurdalną opowieść o tym, jak spotkaliście się na kampingu. Każde z Was dodaje jedno zdanie, ale historia musi być coraz bardziej zaskakująca i dziwna. Kto doda najbardziej szaloną część?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 28,
    title: "Wspólne tańce - Salsa",
    description:
      "Zarezerwujcie lekcję salsy i nauczcie się kilku podstawowych kroków. To świetna randka, żeby poczuć się pewnie na parkiecie i poczuć rytm latynoskich melodii.",
    task: {
      description:
        "Podczas tańca spróbujcie wymyślić własny, nietypowy ruch salsy, którego nie ma w żadnym podręczniku. Pokażcie go sobie nawzajem - czy będzie to porażka, czy wielki hit?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 29,
    title: "Quiz wiedzy o sobie",
    description:
      "Przygotujcie quiz o sobie nawzajem, który pozwoli wam lepiej poznać swoje zainteresowania i preferencje. To będzie pełna zabawy i rywalizacji randka.",
    task: {
      description:
        "Każde z Was przygotowuje 5 pytań o sobie. Druga osoba musi odpowiedzieć na nie poprawnie. Jeśli odpowiedź jest błędna, musicie wykonać zabawne zadanie, np. zrobić dziwną minę lub tańczyć przez minutę.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 30,
    title: "Paintball lub laser tag",
    description:
      "Spędźcie czas na aktywnej randce, grając w paintball lub laser tag. To świetna zabawa, która zbliży Was do siebie poprzez współpracę, rywalizację i odrobinę adrenaliny.",
    task: {
      description:
        "Podczas gry każda osoba ma jeden ukryty 'strzał', którego nie może użyć na nikim innym oprócz swojego partnera. Kiedy przyjdzie moment, by go użyć, zrobi to w najbardziej niespodziewanym momencie, aby zaskoczyć drugą osobę.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 31,
    title: "Wyprawa na zakupy - Fashion Show",
    description:
      "Wybierzcie się na zakupy, ale zamiast tylko kupować rzeczy, zorganizujcie mini fashion show, gdzie oboje musicie wybrać dla drugiej osoby komplet ubrań, które uważacie za najbardziej stylowe.",
    task: {
      description:
        "Po zakończeniu zakupów i przymierzeniu nowych ubrań, zorganizujcie 'mini pokaz mody' w sklepie, gdzie jedno z Was jest modelem, a drugie projektantem. Później ocenicie swoje stylizacje na szali 'creativity' i 'courage'.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 32,
    title: "Nocny spacer po mieście",
    description:
      "Zorganizujcie nocny spacer po mieście, kiedy ulice są puste, a światła latarni tworzą magiczną atmosferę. To idealny czas na długie rozmowy i spokojne odkrywanie zakątków miasta.",
    task: {
      description:
        "Spróbujcie przejść całą trasę bez mówienia ani słowa. Jedyne, co możecie robić, to gesty i mimika twarzy. Spróbujcie przekazać sobie jak najwięcej, nie używając słów.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 33,
    title: "Picnic w parku",
    description:
      "Zorganizujcie piknik w parku, przygotowując wspólnie jedzenie i relaksując się na świeżym powietrzu.",
    task: {
      description:
        "Zróbcie sobie wspólne zdjęcie, ale warunek jest taki, że każde z Was ma zasłoniętą twarz w najmniej przewidywalny sposób (np. kwiatami, kocem, książką). Kiedy będziecie przeglądać zdjęcia, ocenicie, które zakrycie twarzy było najbardziej kreatywne.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 34,
    title: "Wspólna lekcja tańca",
    description:
      "Zajęcia z tańca, od salsy po tango. Poznajcie rytmy i wzajemnie synchronizujcie swoje ruchy, ucząc się nowych kroków.",
    task: {
      description:
        "Spróbujcie wymyślić własny taniec, który będzie łączył kroki z różnych stylów tańca, ale bez żadnego przygotowania. Zróbcie to na żywo, z muzyką, a później spróbujcie powtórzyć go w tej samej synchronizacji.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 35,
    title: "Karaoke",
    description:
      "Karaoke to świetna zabawa, która nie tylko sprawdzi Wasze umiejętności wokalne, ale również pozwoli się śmiać z siebie nawzajem.",
    task: {
      description:
        "Zróbcie duet z piosenką, ale musicie wymyślić własny, zabawny tekst. Napiszcie go na kartce, a potem wykonajcie piosenkę na żywo przed sobą, nie zdradzając tekstu aż do samego końca.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 36,
    title: "Gra w karty - Inny wymiar",
    description:
      "Grajcie razem w karty, ale każda runda musi mieć nową zasadę, którą wymyślicie wspólnie. Tylko, co ciekawe, nie będzie łatwo! Chodzi o to, by zaskoczyć drugą osobę.",
    task: {
      description:
        "Stwórzcie własne karty z dziwnymi poleceniami - np. 'Przebierz się w coś, co przypomina ci wiosnę' lub 'Zaśpiewaj swoją ulubioną piosenkę jak kot'. Będziecie losować te karty podczas gry.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 37,
    title: "Rally na wózkach",
    description:
      "Wybierzcie się do parku na wyścigi na wózkach, np. na tzw. rolkach lub deskorolkach. Rywalizujcie o najlepszy czas!",
    task: {
      description:
        "Zanim zaczniecie wyścig, zróbcie coś szalonego, np. wymyślcie tajemniczy gest, który będziecie musieli wykonać przed każdą rundą. Na przykład: taniec, zrobienie selfie w dziwnej pozycji. Kto z Was będzie w stanie wytrzymać do końca?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 38,
    title: "Tajemnicze zaproszenie",
    description:
      "Jedno z Was organizuje tajemniczą randkę. Druga osoba nie wie, co się wydarzy, i ma po drodze do odgadnięcia, co się stanie.",
    task: {
      description:
        "Zanim zacznie się randka, przygotujcie się do czegoś dziwnego. Jeden z Was ma zaplanować nietypowe zdarzenie, które będzie musiało się zdarzyć w trakcie. Czy to będzie próba zabawy w detektywa, czy też muszą rozwiązać zagadkę w drodze?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 39,
    title: "Wspólna sesja filmowa",
    description:
      "Stwórzcie razem film, na którym odgrywacie zabawne scenki - scenariusz wymyślcie sami, ale nie zapomnijcie o montażu.",
    task: {
      description:
        "Nagrywając film, musicie wpleść jedną zupełnie dziwną, absurdalną scenę, której nikt się nie spodziewa. Może to być np. taniec w środku akcji, magiczny trik, niewytłumaczalny moment, który wprowadzi zaskoczenie.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 40,
    title: "Odwiedźcie miejsca z przeszłości",
    description:
      "Wybierzcie się na wycieczkę do miejsc, które miały znaczenie w Waszym życiu. To może być miejsce pierwszego spotkania, stara szkoła, ulubiony park czy kawiarnia.",
    task: {
      description:
        "Po odwiedzeniu tych miejsc wymyślcie historię na temat tego, jak te miejsca 'przeżyły' waszą relację i jakie sekrety mogłyby zdradzić. Będzie to wymagało dużo wyobraźni i refleksji.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 41,
    title: "Teatr improwizacji",
    description:
      "Spróbujcie swoich sił w teatrze improwizowanym, tworząc na żywo przedstawienia i odgrywając nieoczekiwane scenki.",
    task: {
      description:
        "Każde z Was losuje jedno słowo, które musi pojawić się w Waszej improwizowanej scenie. Słowo może być zupełnie niepowiązane z tematem i Waszym zadaniem będzie wpleść je w naturalny sposób w fabułę.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 42,
    title: "Mini Safari",
    description:
      "Zorganizujcie własną wersję safari - w miejskim ogrodzie zoologicznym lub w parku. Będziecie szukać zwierząt, ale nie tylko.",
    task: {
      description:
        "Przygotujcie listę zwierząt, które trzeba znaleźć. Każde z Was musi zrobić zdjęcie danemu zwierzęciu, ale zdjęcie musi być w specyficzny sposób - np. naśladować jakąś postawę tego zwierzęcia.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 43,
    title: "Karaoke na żywo",
    description:
      "Wybierzcie się do klubu karaoke, ale zanim zaśpiewacie, będziecie musieli wymyślić, co będzie Waszą piosenką.",
    task: {
      description:
        "Wymyślcie z wyprzedzeniem temat, pod który będą pasować wasze piosenki. Na przykład: zaśpiewajcie piosenkę na temat... nieudanej randki. Każdy z Was będzie musiał zaśpiewać piosenkę pasującą do tematu.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 44,
    title: "Tajemnicza wycieczka",
    description:
      "Jedna osoba przygotowuje tajemniczą podróż, ale druga osoba nie wie, dokąd idą. Wycieczka może mieć temat przewodni - np. szlakiem artystów.",
    task: {
      description:
        "W trakcie wycieczki, każda z Waszych odpowiedzi musi być zagadką. Im bardziej zagmatwana odpowiedź, tym lepiej. Odpowiedzi powinny prowadzić do celu podróży, ale nie mogą być zbyt łatwe do odgadnięcia.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 45,
    title: "Wyzwanie w parku linowym",
    description:
      "Zorganizujcie wspólne pokonanie parku linowego. Zmierzcie się z przeszkodami, wysokością i własnymi lękami.",
    task: {
      description:
        "Po pokonaniu trasy, każde z Was wybiera jedno miejsce, w którym możecie przełamać swoje lęki. Ktoś musi przejść przez bardzo trudną przeszkodę, a druga osoba stanie obok, aby udzielić wsparcia.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 46,
    title: "Piknik z muzyką",
    description:
      "Zorganizujcie piknik z własnym akompaniamentem. Grajcie na instrumentach lub zorganizujcie mały koncert.",
    task: {
      description:
        "W trakcie pikniku, ktoś z Was musi wymyślić piosenkę, która będzie odpowiadała na pytanie: 'Co czułeś w tej chwili, patrząc na swojego partnera?' Kto wymyśli najlepszą melodię?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 47,
    title: "Mini Escape Room",
    description:
      "Stwórzcie własny escape room w domu, gdzie będziecie musieli rozwiązać zagadki, by uwolnić się z jednego pomieszczenia.",
    task: {
      description:
        "Zanim zaczniecie, musicie zapisać 5 rzeczy, które wydają się zupełnie niepowiązane. W trakcie rozwiązywania zagadek, te rzeczy muszą być użyte w kreatywny sposób. Będzie to prawdziwe wyzwanie!",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 48,
    title: "Układanie puzzli",
    description:
      "Zaprojektujcie wspólne puzzle, które później będziecie musieli ułożyć razem.",
    task: {
      description:
        "Spróbujcie stworzyć najbardziej złożoną układankę, której kawałki pasują do siebie tylko w specyficznych warunkach, jak np. pod światło, w nietypowej pozycji.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 49,
    title: "Wspólna podróż w czasie",
    description:
      "Wybierzcie się na wycieczkę do muzeum historii. Wspólnie odkryjcie tajemnice przeszłości.",
    task: {
      description:
        "W trakcie wycieczki, wybierzcie najdziwniejszy eksponat i stwórzcie teorię, która łączy go z Waszą przyszłością. Jak ten przedmiot będzie wyglądał za 100 lat?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 50,
    title: "Odwiedźcie wyspę skarbów",
    description:
      "Zorganizujcie grę terenową w parku lub lesie, gdzie musicie znaleźć ukryty 'skarb' - w tym przypadku zadania i wskazówki prowadzące do celu.",
    task: {
      description:
        "Ukryjcie wskazówki w różnych częściach miejsca, ale muszą być nieoczywiste. Na przykład: zadania typu 'znajdź coś zielonego, które przypomina ci przyjaźń', 'znajdź coś okrągłego, które przypomina ci o wolności'.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 51,
    title: "Zagadki w muzeum",
    description:
      "Wybierzcie się do muzeum, gdzie będziecie musieli odnaleźć najdziwniejsze eksponaty i spróbować rozwiązać zagadki związane z historią.",
    task: {
      description:
        "Znajdźcie jeden eksponat, którego historia wydaje się zupełnie nieprawdopodobna. Wymyślcie do niego alternatywną, absurdalną historię i przedstawcie ją innym odwiedzającym muzeum.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 52,
    title: "Przejażdżka na rowerach",
    description:
      "Zorganizujcie przejażdżkę rowerową po malowniczych okolicach. Ustalcie cel, np. najładniejszy park w okolicy lub najbardziej zaskakującą ulicę.",
    task: {
      description:
        "Na każdym przystanku, który odwiedzicie, musicie znaleźć jeden przedmiot, który idealnie pasuje do waszego stylu. Może to być kamień, kwiat, kawałek drewna - cokolwiek, co przypomina Waszą relację.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 53,
    title: "Wspólne rysowanie",
    description:
      "Siądźcie razem i narysujcie siebie nawzajem w sposób, w jaki widzicie drugą osobę - trochę w stylu 'artysty' i 'modela'.",
    task: {
      description:
        "Podczas rysowania, musicie zamienić się rolami - na przykład najpierw Wy jesteście artystą, a potem modelami. Dodatkowo, spróbujcie narysować siebie nawzajem w stylu, który Was zaskoczy, np. jako superbohaterów.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 54,
    title: "Wyprawa kulinarna",
    description:
      "Wybierzcie się na wspólną wyprawę kulinarną, gdzie każda osoba musi znaleźć jeden składnik do potrawy, ale nie mówi o nim drugiej.",
    task: {
      description:
        "Kiedy wrócicie do domu, zróbcie danie z tych składników, ale wykluczcie wszystko, co może być 'zbyt klasyczne'. Zmodyfikujcie przepis w jak najbardziej kreatywny sposób, włączając w to dziwne składniki.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 55,
    title: "Noc filmowa - Bez ekranu",
    description:
      "Stwórzcie razem wieczór filmowy, ale zamiast oglądać filmy, wymyślcie scenariusz, który potem zaimprowizujecie.",
    task: {
      description:
        "Za pomocą jednego przedmiotu w pokoju, wymyślcie 5 różnych scenek. Muszą być ze sobą związane, ale każda scena ma być inna. Możecie wykorzystywać te same przedmioty, ale w różnych rolach.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 56,
    title: "Zakochana joga",
    description:
      "Spróbujcie razem zrobić jogę, ale z wyzwaniem - nie chodzi o zwykłe pozycje, a o synchronizację.",
    task: {
      description:
        "Stwórzcie wspólnie jedno, bardzo trudne ćwiczenie, które połączy Was w jedną, zgraną figurę. Trzeba będzie dobrze współpracować, bo nie będzie łatwo to wykonać.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 57,
    title: "Gra w detektywa",
    description:
      "Zorganizujcie grę detektywistyczną. Jedna osoba przygotowuje zagadkę, a druga musi ją rozwiązać.",
    task: {
      description:
        "Wymyślcie scenariusz, w którym oboje jesteście detektywami i musicie rozwiązać tajemniczą sprawę. Każde z Was dostaje zagadkę do rozwiązania, ale musicie współpracować, by znaleźć odpowiedzi.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 58,
    title: "Mocny początek dnia",
    description:
      "Zróbcie wspólnie śniadanie na świeżym powietrzu - może być w parku lub na balkonie. To doskonały sposób na rozpoczęcie dnia razem.",
    task: {
      description:
        "Przygotujcie śniadanie z 5 składników, które nie mogą się ze sobą kojarzyć, a później sprawdźcie, czy uda się je połączyć w smaczną całość. Pamiętajcie, żeby robić wszystko razem, od krojenia po układanie na talerzu.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 59,
    title: "Wieczór gier planszowych",
    description:
      "Spędźcie wspólny wieczór, grając w gry planszowe lub karciane.",
    task: {
      description:
        "Wymyślcie własną grę planszową w ciągu 20 minut. Musicie ustalić zasady, cel gry i postacie. Kto wymyśli najciekawszy element?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 60,
    title: "Zróbcie coś szalonego",
    description:
      "Podejmijcie spontaniczne wyzwanie, które może być szalone, ale też w pełni wciągające.",
    task: {
      description:
        "Znajdźcie miejsce, gdzie możecie zrobić coś zabawnego - może to być wspólne bieganie w deszczu, taniec w centrum miasta lub jakiekolwiek wyzwanie, które sprawi, że oboje będziecie się śmiać.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 61,
    title: "Przebieranie się",
    description:
      "Zorganizujcie małą modową zabawę, wybierając dla siebie wzajemnie najdziwniejsze ubrania, jakie tylko znajdziecie.",
    task: {
      description:
        "Przygotujcie 3 różne style ubioru, ale z czymś, co wykracza poza Wasze normalne preferencje. Np. dla jednej osoby elegancki smoking, dla drugiej - najzabawniejszy, najbardziej kolorowy strój, który znajdziecie.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 62,
    title: "Zabawa w poszukiwanie skarbu",
    description:
      "Stwórzcie razem grę polegającą na poszukiwaniach skarbu. Kryjcie wskazówki w nietypowych miejscach.",
    task: {
      description:
        "Każda z osób ukrywa jeden kawałek 'skarbu', ale nie może to być przedmiot, który łatwo znaleźć. Zadanie polega na tym, aby po drodze wymyślać przeszkody lub pytania, które muszą zostać rozwiązane, by dojść do kolejnego kawałka skarbu.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 63,
    title: "Kreatywny kolaż",
    description:
      "Wybierzcie się do sklepu z artykułami plastycznymi, gdzie kupicie różne materiały do stworzenia kolażu.",
    task: {
      description:
        "Stwórzcie kolaż o Waszej relacji, ale każde z Was dodaje tylko jeden element w tym samym czasie. Kiedy skończycie, wymyślcie do niego historię.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 64,
    title: "Randka przy ognisku",
    description:
      "Zorganizujcie romantyczną randkę przy ognisku, piekąc marshmallow i rozmawiając o wszystkim i niczym.",
    task: {
      description:
        "Podczas ogniska, stwórzcie razem historię o tym, co by się stało, gdyby Wasze życie było filmem. Jaka byłaby fabuła i jak potoczyłaby się historia?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 65,
    title: "Wspólne pisanie książki",
    description:
      "Stwórzcie wspólnie książkę - na początek wystarczy opowieść o Waszym życiu, ale z niespodziewanym zakończeniem.",
    task: {
      description:
        "Każda z osób pisze jedno zdanie, ale musi ono kończyć się w kluczowym momencie. Druga osoba musi dodać zakończenie, ale tak, by nie było oczywiste.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 66,
    title: "Ucieczka do lasu",
    description:
      "Zorganizujcie wycieczkę do lasu, gdzie będziecie wspólnie odkrywać tajemnice natury.",
    task: {
      description:
        "Po drodze, musicie odnaleźć jeden przedmiot, który najlepiej opisuje Waszą relację. Może to być kamień, patyk czy liść - po powrocie do domu musicie opowiedzieć, dlaczego ten przedmiot wybrałyście.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 67,
    title: "Kurs tańca",
    description:
      "Wybierzcie się na lekcję tańca - nie musi to być profesjonalny kurs, wystarczy prosta lekcja salsy lub bachaty.",
    task: {
      description:
        "W trakcie tańca, dodajcie coś spontanicznego: np. połączyć dwa style, które nie pasują do siebie, lub zaskoczyć partnera nietypowym ruchem.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 68,
    title: "Stworzenie rzeźby",
    description:
      "Zbierajcie przedmioty w lesie lub w parku i stwórzcie wspólnie rzeźbę.",
    task: {
      description:
        "Z tych przedmiotów, które uda Wam się znaleźć, musicie stworzyć coś, co ma określony kształt lub formę - może to być ptak, serce lub inny obiekt.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 69,
    title: "Dzień stylizacji",
    description:
      "Spędźcie wspólny dzień, wymyślając jak najdziwniejsze stylizacje - na przykład jeden z Was może być elegancki, a drugi rockowy.",
    task: {
      description:
        "W ciągu dnia zmieniajcie stylizacje. Na przykład raz może to być elegancka impreza, raz - stylizacja lat 80. Pamiętajcie, żeby nie zapomnieć o szczegółach.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 70,
    title: "Wieczór karaoke",
    description:
      "Zorganizujcie wspólne karaoke, ale zamiast tradycyjnych piosenek, śpiewajcie te, które są dla Was wyjątkowe.",
    task: {
      description:
        "W trakcie śpiewania wybierzcie sobie nawzajem piosenkę, którą będziecie musieli wykonać na maksymalnym poziomie - tylko Ty i Twój partner.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 71,
    title: "Zbudowanie fortu",
    description:
      "Zbudujcie wspólny fort w salonie z poduszek i koców - stwórzcie miejsce, w którym możecie poczuć się jak dzieci.",
    task: {
      description:
        "Każde z Was ma za zadanie dodać do fortu jeden element, który będzie trochę zaskakujący - może to być coś, co wcale nie pasuje do otoczenia.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 72,
    title: "Spotkanie z przyjaciółmi",
    description:
      "Zorganizujcie spotkanie z przyjaciółmi, ale musicie wymyślić coś wyjątkowego, co będzie angażować wszystkich.",
    task: {
      description:
        "Przygotujcie jedną zabawę lub wyzwanie, które sprawi, że cała grupa będzie się śmiać. To może być coś nietypowego, np. zadanie teatralne lub artystyczne.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 73,
    title: "Poczujcie się jak profesjonaliści",
    description:
      "Wybierzcie się na sesję zdjęciową - może być w parku, w mieście lub nawet w domu.",
    task: {
      description:
        "Po sesji zdjęciowej, wybierzcie jedno zdjęcie, które najbardziej Was zaskoczyło i wymyślcie historię, dlaczego to zdjęcie jest dla Was ważne.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 74,
    title: "Wspólne tworzenie playlisty",
    description:
      "Wybierzcie się na wspólną muzyczną podróż i twórzcie playlistę z Waszymi ulubionymi utworami.",
    task: {
      description:
        "Każdy wybiera jeden utwór, który uważacie za najlepszy kawałek z danego gatunku. Potem stwórzcie z tego wspólną playlistę, której nie usuniecie przez 30 dni.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 75,
    title: "Wspólne gotowanie z niespodzianką",
    description:
      "Stwórzcie wspólną potrawę, ale jednym z Was będzie gotować w ciemno.",
    task: {
      description:
        "Jedna osoba gotuje w ciemno, a druga ma za zadanie wydedukować, co zostało dodane do dania po zapachu i smaku.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 76,
    title: "Wspólne budowanie miasta z klocków",
    description:
      "Wybierzcie się na wspólną zabawę w budowanie miasta z klocków lub innych materiałów.",
    task: {
      description:
        "Stwórzcie razem najdziwniejsze miasto, jakie tylko możecie. Kto zbuduje bardziej kreatywną część, np. najbardziej niezwykłą budowlę?",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 77,
    title: "Zakupy w stylu retro",
    description:
      "Wybierzcie się na zakupy w stylu retro, gdzie możecie znaleźć ubrania lub akcesoria z dawnych lat.",
    task: {
      description:
        "Po zakupach, stwórzcie z tych rzeczy kreatywny outfit, który możecie założyć na jakąś specjalną okazję. Wybierzcie się w tym na randkę lub sesję zdjęciową.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 78,
    title: "Wspólna produkcja filmu",
    description:
      "Zróbcie własny film wideo, który opowiada o Waszej relacji lub jakimś ważnym wspomnieniu.",
    task: {
      description:
        "W trakcie kręcenia filmu wprowadzajcie do niego jak najwięcej absurdalnych elementów, takich jak zmiana scenerii, dziwne kostiumy czy nieoczywiste efekty.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 79,
    title: "Nocny spacer z lampionami",
    description:
      "Wybierzcie się na spacer wieczorem, zabierając ze sobą lampiony lub inne źródła światła.",
    task: {
      description:
        "Na każdym przystanku, wymyślcie małą historyjkę, która nawiązuje do tego, co widzicie wokół. Im bardziej kreatywne, tym lepiej.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 80,
    title: "Wirtualna randka",
    description:
      "Zorganizujcie randkę wirtualną, jeżeli jesteście daleko od siebie. Wspólnie oglądajcie film, rozmawiajcie, grajcie online.",
    task: {
      description:
        "Stwórzcie wspólne zadanie: jedna osoba przygotowuje coś do zjedzenia, a druga musi zgadnąć, co to jest, bazując tylko na zapachu i smaku.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 81,
    title: "Czas na challenge",
    description:
      "Podejmijcie wyzwanie: stwórzcie listę 10 rzeczy, które chcielibyście zrobić, a potem wybierzcie jedno z nich.",
    task: {
      description:
        "W trakcie tego zadania musicie zmieniać decyzję na ostatnią chwilę - np. co 5 minut musicie zmienić pomysł na to, co robicie.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 82,
    title: "Wyzwanie fotograficzne",
    description:
      "Zróbcie sesję zdjęciową w jakimś nietypowym miejscu - może to być las, pusta ulica w nocy lub centrum miasta.",
    task: {
      description:
        "Wybierzcie jedno miejsce, w którym musicie zrobić zdjęcia do 5 różnych kategorii, np. 'Cisza', 'Miłość', 'Duma'.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 83,
    title: "Bungee jumping razem",
    description:
      "Zróbcie coś szalonego, jak bungee jumping, skok na bungee lub inny ekstremalny sport.",
    task: {
      description:
        "Przed skokiem, wymyślcie własną wersję rytuału skokowego, np. przez specjalne hasło lub ruch ręką, aby wzmocnić emocje przed wykonaniem skoku.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 84,
    title: "Wyjątkowy dzień na wsi",
    description:
      "Spędźcie dzień na wsi, zbierając plony lub pomagając przy zwierzętach.",
    task: {
      description:
        "Spróbujcie przygotować posiłek z lokalnych składników, które udało Wam się znaleźć. Każdy z Was dostaje jedno zadanie, np. zrobienie sałatki, pieczenie chleba.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 85,
    title: "Eksperymentalne gotowanie",
    description:
      "Zorganizujcie wieczór eksperymentalnego gotowania - wybierzcie jeden składnik, który będzie głównym elementem posiłku.",
    task: {
      description:
        "Podczas gotowania wymyślcie przepis, który będzie jak najbardziej nietypowy i oryginalny. Możecie wykorzystać składniki, które normalnie się nie łączą.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 86,
    title: "Bieg po parkach",
    description:
      "Wybierzcie się na wspólny bieg po parku, ale z nietypowym zadaniem - w trakcie biegu szukajcie określonych rzeczy.",
    task: {
      description:
        "Stwórzcie listę 5 rzeczy, które musicie znaleźć w parku, np. 'coś, co świeci', 'coś, co przypomina Waszą relację'. Zróbcie to w jak najkrótszym czasie.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 87,
    title: "Wspólne rysowanie na piasku",
    description:
      "Idźcie na plażę lub do parku, aby narysować coś wspólnie na piasku.",
    task: {
      description:
        "W trakcie rysowania, zadbajcie, aby każde z Was dodało jeden element do wspólnej pracy, ale nie możecie widzieć, co dokładnie dodaje druga osoba.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 88,
    title: "Dzień bez technologii",
    description:
      "Spędźcie wspólny dzień bez technologii: żadnych telefonów, komputerów, telewizji.",
    task: {
      description:
        "W tym dniu każdy z Was ma wymyślić jeden sposób, jak spędzić czas bez technologii - może to być gra, spacer, wspólne gotowanie.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 89,
    title: "Tworzenie wideo bloga",
    description:
      "Zróbcie wspólnie vlog o Waszym dniu - zróbcie to w sposób kreatywny i zabawny.",
    task: {
      description:
        "Każde z Was ma przygotować 2 minuty materiału wideo na temat 'Co mnie najbardziej zaskoczyło w naszej relacji'. Po zmontowaniu obejrzycie całość i wymyślicie zakończenie.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 90,
    title: "Zawody w grze planszowej",
    description:
      "Wybierzcie grę planszową, którą jeszcze nigdy nie graliście, i zorganizujcie zawody.",
    task: {
      description:
        "W trakcie gry wprowadzajcie losowe zasady, np. 'po każdym ruchu zróbcie selfie', 'co 10 minut musimy zmienić partnerów'.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 91,
    title: "Relaksująca kąpiel w naturze",
    description:
      "Znajdźcie miejsce w naturze, gdzie możecie się zrelaksować przy gorącej kąpieli, z widokiem na przyrodę.",
    task: {
      description:
        "Podczas kąpieli, wymyślcie 5 rzeczy, które chcielibyście robić razem w przyszłości - nie mogą to być standardowe odpowiedzi!",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 92,
    title: "Tajemniczy list",
    description:
      "Napiszcie do siebie nawzajem list, ale w taki sposób, by nie ujawniać swoich uczuć bezpośrednio.",
    task: {
      description:
        "W trakcie pisania listu, muszą to być tylko metafory i ukryte znaczenia. Po przeczytaniu, wspólnie rozszyfrujcie list i sprawdźcie, czy trafiliście w intencje.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 93,
    title: "Wspólne malowanie na płótnie",
    description:
      "Weźcie płótno, farby i pędzle, aby stworzyć wspólne dzieło sztuki.",
    task: {
      description:
        "Każde z Was ma za zadanie namalować jedną część obrazu, ale nie może zobaczyć, co maluje druga osoba. Na koniec połączcie Wasze dzieła w jedno i oceńcie, co z tego wyszło.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 94,
    title: "Nocny maraton filmowy",
    description:
      "Wybierzcie temat, który Was łączy, np. filmy z dzieciństwa, horror, lub komedie romantyczne, i obejrzyjcie je wszystkie w jednym ciągu.",
    task: {
      description:
        "Po każdym filmie wymyślcie własne zakończenie i wykonajcie małą scenkę, która je przedstawia. Im bardziej szalone, tym lepiej!",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 95,
    title: "Kreatywne pisanie",
    description:
      "Spędźcie wieczór pisząc razem krótką historię. Możecie ją zacząć od jednego zdania, a potem na zmianę dodawać kolejne.",
    task: {
      description:
        "Każdy z Was musi dodać w swojej części tekstu co najmniej jeden element, który całkowicie zmienia przebieg historii. Na końcu wymyślcie nieoczywiste zakończenie.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 96,
    title: "Randka z książką",
    description:
      "Wybierzcie książki, które muszą przeczytać obie osoby, a potem wymieńcie się swoimi refleksjami na ich temat.",
    task: {
      description:
        "Po przeczytaniu każda osoba wybiera jedno zdanie, które mogłoby zainspirować do romantycznego gestu. Zrealizujcie te pomysły w praktyce!",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 97,
    title: "Ucieczka z escape roomu",
    description:
      "Wybierzcie się do escape roomu i spróbujcie rozwiązać zagadki w jak najkrótszym czasie.",
    task: {
      description:
        "Podczas gry, wymyślcie własne zasady: np. każdy z Was może dać drugiemu jedno wskazówkę, ale tylko w przypadku, gdy zgadnie poprawnie jedno z pytań.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 98,
    title: "Nocne zwiedzanie miasta",
    description:
      "Zorganizujcie nocne zwiedzanie miasta, gdzie tylko Wasze światło telefonu będzie wskazywać drogę.",
    task: {
      description:
        "W trakcie zwiedzania róbcie zdjęcia tylko w wyznaczonych kolorach, np. tylko czerwonym, niebieskim lub czarnym. Zobaczycie, jak zmienia się perspektywa!",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 99,
    title: "Zajęcia kulinarne w ciemności",
    description:
      "Wybierzcie się na zajęcia kulinarne, gdzie gotujecie w całkowitej ciemności.",
    task: {
      description:
        "Zadanie polega na tym, żeby podczas gotowania używać tylko dotyku i zapachu, aby nie zobaczyć składników. Po zakończeniu zgadnijcie, co przygotowaliście.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
  {
    id: 100,
    title: "Noc pod gwiazdami",
    description:
      "Zorganizujcie wspólną noc pod gołym niebem, rozkładając namiot lub koc na łące, daleko od miejskich świateł.",
    task: {
      description:
        "Przez noc, napiszcie wspólnie historię, która opowiada o podróży po nieznanym świecie. Możecie korzystać tylko z dźwięków otoczenia, by inspirować się do opowiadania.",
      status: "notStarted",
    },
    location: null,
    image: null,
  },
];
