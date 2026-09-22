const TELEGRAM_URL = "https://t.me/TipsToOdds";


const translations = {

  en: {

    navNews:"News",
    navAnalysis:"Analysis",
    navSports:"Sports",
    navTelegram:"Telegram",

    telegram:"Telegram",

    heroBadge:"LATEST SPORTS UPDATES",

    heroTitle1:"Stay ahead of",
    heroTitle2:"the sports world",

    heroText:
      "Sports news, match analysis, live updates and important developments in one place.",

    joinTelegram:"Join Telegram",

    explore:"Explore More",

    followers:"Followers",
    updated:"Updates",

    daily:"Daily",
    content:"New Content",

    sportsLabel:"SPORTS",

    sportsTitle1:"Follow the sports",
    sportsTitle2:"you care about",

    football:"Football",

    footballText:
      "Transfers, matches, teams and the latest developments.",

    basketball:"Basketball",

    basketballText:
      "NBA, EuroLeague and news from the basketball world.",

    tennis:"Tennis",

    tennisText:
      "Tournaments, players and important matches.",

    dailyLabel:"EVERY DAY",

    newsTitle1:"Follow sports",
    newsTitle2:"in one place",

    dailyNews:"Daily News",

    dailyNewsText:
      "Keep up with important developments from the sports world.",

    matchAnalysis:"Match Analysis",

    matchAnalysisText:
      "Explore analysis of the day's important matches.",

    liveUpdates:"Live Updates",

    liveUpdatesText:
      "Stay informed about important moments and developments.",

    notifications:"Latest Notifications",

    notificationsText:
      "Follow the updates you do not want to miss.",

    analysisLabel:"MATCH ANALYSIS",

    analysisTitle1:"Follow today's",
    analysisTitle2:"important matches",

    analysisText:
      "Team form, match schedules and important details from the sports world.",

    telegramChannel:"Telegram Channel",

    today:"TODAY",

    teamA:"Team A",
    teamB:"Team B",

    freeJoin:"JOIN FOR FREE",

    telegramTitle1:"Don't miss",
    telegramTitle2:"the action",

    telegramText:
      "Join our Telegram channel for daily sports news, analysis and important updates.",

    free:"Free to join",

    dailyContent:"Daily content",

    mobileFriendly:"Mobile friendly",

    disclaimer:
      "18+ | For informational purposes only."

  },


  fr: {

    navNews:"Actualités",
    navAnalysis:"Analyse",
    navSports:"Sports",
    navTelegram:"Telegram",

    telegram:"Telegram",

    heroBadge:"DERNIÈRES ACTUALITÉS SPORTIVES",

    heroTitle1:"Restez au cœur de",
    heroTitle2:"l'actualité sportive",

    heroText:
      "Actualités sportives, analyses de matchs, informations en direct et événements importants au même endroit.",

    joinTelegram:"Rejoindre Telegram",

    explore:"Découvrir",

    followers:"Abonnés",
    updated:"Mises à jour",

    daily:"Chaque jour",
    content:"Nouveau contenu",

    sportsLabel:"SPORTS",

    sportsTitle1:"Suivez les sports",
    sportsTitle2:"qui vous intéressent",

    football:"Football",

    footballText:
      "Transferts, matchs, équipes et dernières actualités.",

    basketball:"Basketball",

    basketballText:
      "NBA, EuroLeague et actualités du monde du basketball.",

    tennis:"Tennis",

    tennisText:
      "Tournois, joueurs et rencontres importantes.",

    dailyLabel:"CHAQUE JOUR",

    newsTitle1:"Suivez le sport",
    newsTitle2:"au même endroit",

    dailyNews:"Actualités quotidiennes",

    dailyNewsText:
      "Suivez les informations importantes du monde sportif.",

    matchAnalysis:"Analyse des matchs",

    matchAnalysisText:
      "Découvrez les analyses des rencontres importantes du jour.",

    liveUpdates:"Actualités en direct",

    liveUpdatesText:
      "Restez informé des moments et événements importants.",

    notifications:"Dernières notifications",

    notificationsText:
      "Suivez les informations que vous ne voulez pas manquer.",

    analysisLabel:"ANALYSE DES MATCHS",

    analysisTitle1:"Suivez les",
    analysisTitle2:"rencontres importantes",

    analysisText:
      "Forme des équipes, calendrier des matchs et informations importantes du monde sportif.",

    telegramChannel:"Chaîne Telegram",

    today:"AUJOURD'HUI",

    teamA:"Équipe A",
    teamB:"Équipe B",

    freeJoin:"REJOIGNEZ GRATUITEMENT",

    telegramTitle1:"Ne manquez pas",
    telegramTitle2:"l'action",

    telegramText:
      "Rejoignez notre chaîne Telegram pour les actualités sportives, analyses et informations importantes.",

    free:"Accès gratuit",

    dailyContent:"Contenu quotidien",

    mobileFriendly:"Compatible mobile",

    disclaimer:
      "18+ | À titre informatif uniquement."

  },


  ar: {

    navNews:"الأخبار",
    navAnalysis:"التحليلات",
    navSports:"الرياضات",
    navTelegram:"تيليجرام",

    telegram:"تيليجرام",

    heroBadge:"أحدث الأخبار الرياضية",

    heroTitle1:"ابقَ على اطلاع",
    heroTitle2:"بعالم الرياضة",

    heroText:
      "أخبار رياضية وتحليلات للمباريات وتحديثات مباشرة وأهم التطورات في مكان واحد.",

    joinTelegram:"انضم إلى تيليجرام",

    explore:"اكتشف المزيد",

    followers:"متابعون",
    updated:"تحديثات",

    daily:"يومياً",
    content:"محتوى جديد",

    sportsLabel:"الرياضات",

    sportsTitle1:"تابع الرياضات",
    sportsTitle2:"التي تهمك",

    football:"كرة القدم",

    footballText:
      "الانتقالات والمباريات والفرق وآخر التطورات.",

    basketball:"كرة السلة",

    basketballText:
      "أخبار NBA وEuroLeague وعالم كرة السلة.",

    tennis:"التنس",

    tennisText:
      "البطولات واللاعبون وأهم المواجهات.",

    dailyLabel:"كل يوم",

    newsTitle1:"تابع أخبار الرياضة",
    newsTitle2:"في مكان واحد",

    dailyNews:"أخبار يومية",

    dailyNewsText:
      "تابع أهم التطورات في عالم الرياضة.",

    matchAnalysis:"تحليل المباريات",

    matchAnalysisText:
      "اطلع على تحليلات أهم مباريات اليوم.",

    liveUpdates:"تحديثات مباشرة",

    liveUpdatesText:
      "ابقَ على اطلاع بأهم اللحظات والتطورات.",

    notifications:"آخر التنبيهات",

    notificationsText:
      "تابع الأخبار التي لا تريد تفويتها.",

    analysisLabel:"تحليل المباريات",

    analysisTitle1:"تابع",

    analysisTitle2:"أهم مباريات اليوم",

    analysisText:
      "مستوى الفرق ومواعيد المباريات وأهم التفاصيل من عالم الرياضة.",

    telegramChannel:"قناة تيليجرام",

    today:"اليوم",

    teamA:"الفريق A",
    teamB:"الفريق B",

    freeJoin:"انضم مجاناً",

    telegramTitle1:"لا تفوّت",
    telegramTitle2:"الأحداث",

    telegramText:
      "انضم إلى قناتنا على تيليجرام للحصول على الأخبار الرياضية والتحليلات وأهم التحديثات اليومية.",

    free:"انضمام مجاني",

    dailyContent:"محتوى يومي",

    mobileFriendly:"متوافق مع الهاتف",

    disclaimer:
      "18+ | لأغراض إعلامية فقط."

  },


  pt: {

    navNews:"Notícias",
    navAnalysis:"Análises",
    navSports:"Esportes",
    navTelegram:"Telegram",

    telegram:"Telegram",

    heroBadge:"ÚLTIMAS NOTÍCIAS ESPORTIVAS",

    heroTitle1:"Fique à frente",
    heroTitle2:"do mundo dos esportes",

    heroText:
      "Notícias esportivas, análises de partidas, atualizações ao vivo e informações importantes em um só lugar.",

    joinTelegram:"Entrar no Telegram",

    explore:"Explorar",

    followers:"Seguidores",
    updated:"Atualizações",

    daily:"Diário",
    content:"Novo conteúdo",

    sportsLabel:"ESPORTES",

    sportsTitle1:"Acompanhe os esportes",
    sportsTitle2:"que você gosta",

    football:"Futebol",

    footballText:
      "Transferências, partidas, equipes e as últimas novidades.",

    basketball:"Basquete",

    basketballText:
      "NBA, EuroLeague e notícias do mundo do basquete.",

    tennis:"Tênis",

    tennisText:
      "Torneios, jogadores e confrontos importantes.",

    dailyLabel:"TODOS OS DIAS",

    newsTitle1:"Acompanhe o esporte",
    newsTitle2:"em um só lugar",

    dailyNews:"Notícias diárias",

    dailyNewsText:
      "Acompanhe os principais acontecimentos do mundo dos esportes.",

    matchAnalysis:"Análise de partidas",

    matchAnalysisText:
      "Confira análises dos principais jogos do dia.",

    liveUpdates:"Atualizações ao vivo",

    liveUpdatesText:
      "Fique informado sobre momentos e acontecimentos importantes.",

    notifications:"Últimas notificações",

    notificationsText:
      "Acompanhe as novidades que você não quer perder.",

    analysisLabel:"ANÁLISE DE PARTIDAS",

    analysisTitle1:"Acompanhe os",

    analysisTitle2:"jogos importantes",

    analysisText:
      "Momento das equipes, calendário de partidas e informações importantes do mundo dos esportes.",

    telegramChannel:"Canal do Telegram",

    today:"HOJE",

    teamA:"Equipe A",
    teamB:"Equipe B",

    freeJoin:"ENTRE GRÁTIS",

    telegramTitle1:"Não perca",
    telegramTitle2:"a ação",

    telegramText:
      "Entre no nosso canal do Telegram para receber notícias esportivas, análises e atualizações importantes.",

    free:"Entrada gratuita",

    dailyContent:"Conteúdo diário",

    mobileFriendly:"Compatível com celular",

    disclaimer:
      "18+ | Apenas para fins informativos."

  }

};


/* COUNTRY GROUPS */

const englishCountries = new Set([
  "US","GB","AU","NZ","IE","ZA","JM","TT","BB","BS",
  "BZ","GY","AG","DM","GD","KN","LC","VC","FJ","PG",
  "SB","VU","WS","TO","FM","MH","PW","NR","KI","UG",
  "KE","TZ","ZM","ZW","GH","NG","SL","LR","GM","MT",
  "SG","PH"
]);


const frenchCountries = new Set([
  "FR","BE","CH","LU","MC","SN","CI","CM","CD","CG",
  "BJ","BF","NE","ML","GN","TD","TG","MG","RW","BI",
  "DJ","HT"
]);


const arabicCountries = new Set([
  "SA","AE","QA","KW","BH","OM","YE","JO","LB","SY",
  "IQ","EG","LY","TN","DZ","MA","SD","MR","SO","DJ",
  "KM","PS"
]);


const portugueseCountries = new Set([
  "BR","PT","AO","MZ","CV","GW","ST","TL"
]);


/* BROWSER LANGUAGE */

function languageFromLocale(locale){

  const value =
    (locale || "").toLowerCase();

  if(value.startsWith("fr")){
    return "fr";
  }

  if(value.startsWith("ar")){
    return "ar";
  }

  if(value.startsWith("pt")){
    return "pt";
  }

  return "en";
}


/* COUNTRY LANGUAGE */

function languageFromCountry(country,locale){

  const c =
    (country || "").toUpperCase();

  const browserLanguage =
    languageFromLocale(locale);


  if(englishCountries.has(c)){
    return "en";
  }


  if(frenchCountries.has(c)){
    return "fr";
  }


  if(arabicCountries.has(c)){
    return "ar";
  }


  if(portugueseCountries.has(c)){
    return "pt";
  }


  return browserLanguage;
}


/* APPLY LANGUAGE */

function applyLanguage(lang){

  const safeLanguage =
    translations[lang]
      ? lang
      : "en";


  document.documentElement.lang =
    safeLanguage;


  document.documentElement.dir =
    safeLanguage === "ar"
      ? "rtl"
      : "ltr";


  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;

      if(translations[safeLanguage][key]){

        element.textContent =
          translations[safeLanguage][key];

      }

    });


  document
    .querySelectorAll('a[href*="t.me/"]')
    .forEach(link => {

      link.href =
        TELEGRAM_URL;

    });


  const currentLanguage =
    document.getElementById("currentLanguage");


  if(currentLanguage){

    currentLanguage.textContent =
      safeLanguage.toUpperCase();

  }


  localStorage.setItem(
    "tipstoodds_language",
    safeLanguage
  );

}


/* LANGUAGE DROPDOWN */

function setupLanguageSelector(){

  const button =
    document.getElementById(
      "languageButton"
    );

  const menu =
    document.getElementById(
      "languageMenu"
    );


  if(!button || !menu){
    return;
  }


  button.addEventListener(
    "click",
    function(event){

      event.stopPropagation();

      menu.classList.toggle(
        "active"
      );

    }
  );


  menu
    .querySelectorAll(
      "[data-language]"
    )
    .forEach(languageButton => {

      languageButton.addEventListener(
        "click",
        function(){

          const language =
            this.dataset.language;


          applyLanguage(
            language
          );


          menu.classList.remove(
            "active"
          );

        }
      );

    });


  document.addEventListener(
    "click",
    function(){

      menu.classList.remove(
        "active"
      );

    }
  );

}


/* AUTOMATIC LANGUAGE DETECTION */

async function detectLanguage(){

  const savedLanguage =
    localStorage.getItem(
      "tipstoodds_language"
    );


  const browserLocale =
    navigator.language ||
    "en-US";


  /*
    If the visitor has manually
    selected a language before,
    keep that language.
  */

  if(savedLanguage){

    applyLanguage(
      savedLanguage
    );

    return;

  }


  /*
    Try to detect country automatically.
  */

  try{

    const response =
      await fetch(
        "https://ipapi.co/json/",
        {
          cache:"no-store"
        }
      );


    if(response.ok){

      const data =
        await response.json();


      const language =
        languageFromCountry(
          data.country_code,
          browserLocale
        );


      applyLanguage(
        language
      );


      return;

    }

  }catch(error){

    console.log(
      "Automatic language detection failed."
    );

  }


  /*
    Browser language fallback.
  */

  applyLanguage(
    languageFromLocale(
      browserLocale
    )
  );

}


/* START */

document.addEventListener(
  "DOMContentLoaded",
  function(){

    setupLanguageSelector();

    detectLanguage();

  }
);
