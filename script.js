const translations = {
    en: {
        "status": "Available for connections",
        "greeting": "Hello, I'm",
        "role": "Bridging <span class=\"highlight\">IT Systems</span> & <span class=\"highlight\">Marine Engineering</span>",
        "location": "Made in Italy",
        "bio": "I navigate the intersection of digital technology and complex mechanical systems. Currently ensuring comfort and safety at sea as an <strong>HVAC & Refrigeration Engineer</strong> at Carnival Cruise Line.",
        "about_title": "<i class=\"fa-solid fa-user-astronaut\"></i> About Me",
        "edu_title": "IT & Telecommunications",
        "edu_desc": "High School Diploma. While this is my formal degree, it hasn't stopped me from growing. I am a lifelong learner, constantly studying and always open to new challenges.",
        "work_title": "Carnival Cruise Line",
        "work_desc": "HVAC & Refrigeration Engineer. Managing large-scale systems in a dynamic marine environment.",
        "dev_title": "Full Stack Development",
        "dev_desc": "My creative outlet. Building modern web applications and exploring the latest frameworks as a passionate hobbyist.",
        "lab_title": "Home Lab & Infrastructure",
        "lab_desc": "Tinkering with the metal. Orchestrating Proxmox, VMs, Docker, and Kubernetes. Automating life with custom IoT solutions.",
        "miami_title": "Miami State of Mind",
        "miami_desc": "In love with the tropical vibe, palms, and neon lights. Miami's energy fuels my creativity and style.",
        "space_title": "Cosmic Explorer",
        "space_desc": "Fascinated by the universe and its mysteries. Astronomy reminds me that the sky is not the limit, it's just the beginning.",
        "connect_title": "<i class=\"fa-solid fa-link\"></i> Connect",
        "footer": "&copy; 2025 Matteo Raciti. Built with <i class=\"fa-solid fa-bolt\"></i> & <i class=\"fa-solid fa-code\"></i>"
    },
    it: {
        "status": "Disponibile per connessioni",
        "greeting": "Ciao, sono",
        "role": "Un ponte tra <span class=\"highlight\">Sistemi IT</span> & <span class=\"highlight\">Ingegneria Navale</span>",
        "location": "Made in Italy",
        "bio": "Navigo l'intersezione tra tecnologia digitale e sistemi meccanici complessi. Attualmente garantisco comfort e sicurezza in mare come <strong>1&#176; Ufficiale di Macchina - HVAC & Refrigerazione</strong> presso Carnival Cruise Line.",
        "about_title": "<i class=\"fa-solid fa-user-astronaut\"></i> Chi Sono",
        "edu_title": "IT & Telecomunicazioni",
        "edu_desc": "Diploma di Maturità. Sebbene sia il mio titolo formale, non mi ha impedito di crescere. Sono uno studente a vita, studio costantemente e sono sempre aperto a nuove sfide.",
        "work_title": "Carnival Cruise Line",
        "work_desc": "1&#176; Ufficiale di Macchina - HVAC (Riscaldamento, Ventilazione ed Aria Condizionata) & Refrigerazione. Gestione di sistemi su larga scala in un ambiente marittimo dinamico.",
        "dev_title": "Sviluppo Full Stack",
        "dev_desc": "Il mio sbocco creativo. Costruire moderne applicazioni web ed esplorare gli ultimi framework come hobby appassionato.",
        "lab_title": "Home Lab & Infrastruttura",
        "lab_desc": "Smanettare con il ferro. Orchestrare Proxmox, VM, Docker e Kubernetes. Automatizzare la vita con soluzioni IoT personalizzate.",
        "miami_title": "Miami State of Mind",
        "miami_desc": "Innamorato dell'atmosfera tropicale, delle palme e delle luci al neon. L'energia di Miami alimenta la mia creatività e il mio stile.",
        "space_title": "Esploratore Cosmico",
        "space_desc": "Affascinato dall'universo e dai suoi misteri. L'astronomia mi ricorda che il cielo non è il limite, è solo l'inizio.",
        "connect_title": "<i class=\"fa-solid fa-link\"></i> Connettiti",
        "footer": "&copy; 2025 Matteo Raciti. Costruito con <i class=\"fa-solid fa-bolt\"></i> & <i class=\"fa-solid fa-code\"></i>"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');
    let currentLang = 'en';

    langBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'it' : 'en';
        updateLanguage(currentLang);
        langBtn.textContent = currentLang === 'en' ? 'IT' : 'EN';
    });

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    }
});
