const translations = {
    en: {
        title: "Online Voting System",
        subtitle: "Your vote matters. Secure, simple, and fair.",
        home: "Home",
        help: "Help",
        about: "About Us",
        contact: "Contact",
        result:"Result",
        login: "Log In",
        election: "Upcoming Election: 2024 National Elections",
        message: "Participate in the upcoming elections and have your voice heard! Register today and get ready to cast your vote for the candidates that represent your vision for the future.",
        register: "Registration",
        footer: "Online Voting System © 2024 - All Rights Reserved"
    },
    hi: {
        title: "ऑनलाइन वोटिंग सिस्टम",
        subtitle: "आपका वोट मायने रखता है। सुरक्षित, सरल और निष्पक्ष।",
        home: "मुख्य पृष्ठ",
        help: "मदद",
        about: "हमारे बारे में",
        contact: "संपर्क करें",
        result:"निकाल",
        login: "लॉग इन",
        election: "आगामी चुनाव: 2024 राष्ट्रीय चुनाव",
        message: "आगामी चुनावों में भाग लें और अपनी आवाज़ सुनाएँ! आज ही पंजीकरण करें और अपने भविष्य की दृष्टि का प्रतिनिधित्व करने वाले उम्मीदवारों को अपना वोट देने के लिए तैयार हो जाएं।",
        register: "पंजीकरण",
        footer: "ऑनलाइन वोटिंग सिस्टम © 2024 - सर्वाधिकार सुरक्षित"
    },
    mr: {
        title: "ऑनलाइन मतदान प्रणाली",
        subtitle: "तुमचा मतदान महत्त्वाचा आहे. सुरक्षित, सोपी आणि निष्पक्ष.",
        home: "मुख्यपृष्ठ",
        help: "मदत",
        about: "आमच्याबद्दल",
        contact: "संपर्क साधा",
        result:"निकाल",
        login: "लॉग इन",
        election: "आगामी निवडणूक: 2024 राष्ट्रीय निवडणुका",
        message: "आगामी निवडणुकांमध्ये सहभागी व्हा आणि तुमचा आवाज ऐका! आजच नोंदणी करा आणि तुमच्या दृष्टिकोनाचे प्रतिनिधित्व करणाऱ्या उमेदवारांना तुमचा मतदान करण्यासाठी तयार व्हा.",
        register: "नोंदणी",
        footer: "ऑनलाइन मतदान प्रणाली © 2024 - सर्व हक्क राखीव"
    }
};

// Function to change language and save it in local storage
function changeLanguage() {
    const language = document.getElementById('language').value;
    localStorage.setItem('selectedLanguage', language); // Save language to local storage
    applyLanguage(language);
}

// Function to apply the selected language
function applyLanguage(language) {
    const content = translations[language];
    document.getElementById('main-title').textContent = content.title;
    document.getElementById('main-subtitle').textContent = content.subtitle;
    document.getElementById('nav-home').textContent = content.home;
    document.getElementById('nav-help').textContent = content.help;
    document.getElementById('nav-about').textContent = content.about;
    document.getElementById('nav-contact').textContent = content.contact;
    document.getElementById('nav-result').textContent = content.result;
    document.getElementById('nav-login').textContent = content.login;
    document.getElementById('upcoming-election').textContent = content.election;
    document.getElementById('participate-msg').textContent = content.message;
    document.getElementById('btn-register').textContent = content.register;
    document.getElementById('footer-msg').textContent = content.footer;
}

// Apply saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to English
    document.getElementById('language').value = savedLanguage; // Set dropdown value
    applyLanguage(savedLanguage);
});
//help 
const translationsHelp = {
    en: {
        header: "Help & FAQ",
        helpSectionTitle: "Need Help?",
        helpSectionContent: `If you are experiencing any issues or have any questions regarding the online voting process, you’ve come to the right place! Below you will find answers to common questions as well as contact information if you need further assistance. We are here to ensure your voting experience is smooth and secure.`,
        faqSectionTitle: "Frequently Asked Questions",
        faqItems: [
            {
                question: "1. How do I register for voting?",
                answer: `To register for voting, click on the "Register" button on the homepage. Fill in your personal details, such as name, email address, and a password. Once submitted, you will receive a confirmation email. Follow the instructions in the email to complete your registration.`
            },
            {
                question: "2. How do I cast my vote?",
                answer: `Once logged in, navigate to the "Vote" page. Select the candidate or option you want to vote for, and then click the "Submit Vote" button. Your vote will be securely processed and you will receive a confirmation message once your vote is successfully submitted.`
            },
            {
                question: "3. Can I change my vote after submission?",
                answer: `Unfortunately, once your vote has been submitted, it cannot be changed. Please ensure your choice is correct before submitting your vote.`
            },
            {
                question: "4. Is my vote anonymous?",
                answer: `Yes, your vote is completely anonymous. We use encryption to ensure that your vote cannot be traced back to you.`
            },
            {
                question: "5. How do I know my vote was counted?",
                answer: `After you submit your vote, you will receive a confirmation message. You can also check the "Vote History" section of your account to ensure that your vote was successfully recorded.`
            },
            {
                question: "6. What should I do if I forget my password?",
                answer: `If you forget your password, click the "Forgot Password" link on the login page. Enter your email address and follow the instructions to reset your password.`
            },
            {
                question: "7. Who can I contact for further help?",
                answer: `If you need further assistance, please contact our support team via email at support@onlinevoting.com, or call us at 1-800-VOTE-NOW. We are available 24/7 to assist you.`
            }
        ],
        footer: "Online Voting System © 2024. All Rights Reserved."
    },
    hi: {
        header: "मदद और सामान्य प्रश्न",
        helpSectionTitle: "मदद चाहिए?",
        helpSectionContent: `यदि आपको ऑनलाइन मतदान प्रक्रिया से संबंधित किसी भी समस्या का सामना करना पड़ रहा है या आपके पास कोई प्रश्न है, तो आप सही जगह पर हैं! नीचे आपको सामान्य प्रश्नों के उत्तर और संपर्क जानकारी मिलेगी। हम यह सुनिश्चित करने के लिए यहां हैं कि आपका मतदान अनुभव सुगम और सुरक्षित हो।`,
        faqSectionTitle: "अक्सर पूछे जाने वाले प्रश्न",
        faqItems: [
            {
                question: "1. मैं मतदान के लिए पंजीकरण कैसे करूं?",
                answer: `मतदान के लिए पंजीकरण करने के लिए, होमपेज पर "पंजीकरण करें" बटन पर क्लिक करें। अपना नाम, ईमेल पता और पासवर्ड जैसी व्यक्तिगत जानकारी भरें। सबमिट करने के बाद, आपको एक पुष्टिकरण ईमेल प्राप्त होगा। पंजीकरण पूरा करने के लिए ईमेल में दिए गए निर्देशों का पालन करें।`
            },
            // Add remaining FAQs here in Hindi...
        ],
        footer: "ऑनलाइन वोटिंग सिस्टम © 2024. सभी अधिकार सुरक्षित।"
    },
    mr: {
        header: "मदत व वारंवार विचारले जाणारे प्रश्न",
        helpSectionTitle: "मदत हवी आहे?",
        helpSectionContent: `जर तुम्हाला ऑनलाइन मतदान प्रक्रियेबद्दल काही समस्या येत असतील किंवा काही प्रश्न असतील, तर तुम्ही योग्य ठिकाणी आला आहात! खाली तुम्हाला सामान्य प्रश्नांची उत्तरे आणि संपर्क माहिती मिळेल. तुमचा मतदानाचा अनुभव गोड आणि सुरक्षित होण्यासाठी आम्ही येथे आहोत.`,
        faqSectionTitle: "वारंवार विचारले जाणारे प्रश्न",
        faqItems: [
            {
                question: "1. मतदानासाठी मी कसे नोंदणी करू शकतो?",
                answer: `मतदानासाठी नोंदणी करण्यासाठी, होमपेजवरील "नोंदणी करा" बटणावर क्लिक करा. तुमचे नाव, ईमेल पत्ता आणि पासवर्ड यांसारखी वैयक्तिक माहिती भरा. सबमिट केल्यानंतर, तुम्हाला पुष्टीकरण ईमेल मिळेल. नोंदणी पूर्ण करण्यासाठी ईमेलमधील सूचना पाळा.`
            },
            // Add remaining FAQs here in Marathi...
        ],
        footer: "ऑनलाइन मतदान प्रणाली © 2024. सर्व अधिकार राखीव."
    }
};

