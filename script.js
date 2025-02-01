const comments = document.querySelectorAll('.comment-box');
let anotherIndex = 0;

function showNextComment() {
    const currentComment = comments[anotherIndex];
    currentComment.classList.add('active');

    setTimeout(() => {
        currentComment.classList.remove('active');
        currentComment.classList.add('exit');

        setTimeout(() => {
            currentComment.classList.remove('exit');
            anotherIndex = (anotherIndex + 1) % comments.length;
            showNextComment();
        }, 1000);
    }, 7000);
}

showNextComment();



let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

// Initial display
showSlide(currentIndex);

// Change slide every 3 seconds
setInterval(nextSlide, 3000);





function toggleContent() {
    const moreText = document.getElementById("moreText");
    const toggleButton = document.getElementById("toggleButton");

    // Toggle display of additional content
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        toggleButton.innerText = "Read Less";
    } else {
        moreText.style.display = "none";
        toggleButton.innerText = "Read More";
    }
}








// Chaguo la fomati ya saa
const formats = ['24', '12', 'ms']; // Fomati zinazopatikana
let currentFormatIndex = 0; // Fomati ya kwanza ni '24'

function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    let formattedTime = '';
    const format = formats[currentFormatIndex]; // Fomati ya sasa

    if (format === '24') {
        formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else if (format === '12') {
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // 12-hour format logic
        formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;
    } else if (format === 'ms') {
        formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
    }

    // Weka muda kwenye div ya saa
    document.getElementById('clock').textContent = formattedTime;
}

// Badilisha fomati ya saa
function toggleFormat() {
    currentFormatIndex = (currentFormatIndex + 1) % formats.length; // Hamia fomati inayofuata
}

// Saa inayojiendesha kila millisecond
setInterval(updateClock, 10);

// Anza saa mara moja
updateClock();


function goToCourse(link) {
    // Fungua kiungo cha kozi katika tabo mpya
    window.location.href = link;
}


    // JavaScript to add visible class when elements are in the viewport
    const courseBoxes = document.querySelectorAll('.course-box');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the box is visible
    });

    courseBoxes.forEach(box => observer.observe(box));


    const matukio = [
    
        { title: "Uzinduzi wa Mafunzo ya Kompyuta", date: "2025-02-10", description: "Uzinduzi wa mafunzo mapya ya kompyuta utakaofanyika tarehe 10 Februari." },
        { title: "Kongamano la Afya ya Jamii", date: "2025-03-05", description: "Kongamano linalohusu masuala ya afya ya jamii litafanyika katika ukumbi wa mihadhara." },
        { title: "Warsha ya Ubunifu", date: "2025-04-15", description: "Warsha ya ubunifu kwa wanafunzi wa mwaka wa pili." },
        { title: "Mkutano wa Wanafunzi Wapya", date: "2025-05-20", description: "Mkutano kwa wanafunzi wapya ulioandaliwa na bodi ya wanafunzi." },
        { title: "Siku ya Michezo ya Chuo", date: "2025-06-25", description: "Siku ya michezo itakayofanyika katika viwanja vya chuo." },
        { title: "Mafunzo ya Kiongozi Bora", date: "2025-07-12", description: "Mafunzo kwa viongozi wa klabu za wanafunzi." },
        { title: "Siku ya Wazi ya Chuo", date: "2025-08-18", description: "Fursa ya kuwatambulisha wanafunzi wapya kwa chuo." },
        { title: "Maonyesho ya Sayansi", date: "2025-09-10", description: "Maonyesho ya miradi ya sayansi kutoka kwa wanafunzi wa mwaka wa mwisho." },
        { title: "Semina ya Uchumi", date: "2025-10-05", description: "Semina ya uchumi itakayoendeshwa na wahadhiri wa uchumi." },
        { title: "Tamasha la Utamaduni", date: "2025-11-20", description: "Tamasha la utamaduni litakalohusisha wanafunzi na walimu." },
        { title: "Kipindi cha Maswali na Majibu", date: "2025-12-15", description: "Kipindi cha maswali na majibu kuhusu masuala ya masomo." },
        { title: "Kongamano la Mawasiliano", date: "2026-01-10", description: "Kongamano kuhusu mawasiliano bora miongoni mwa wanafunzi." }
    ];
    
    const container = document.querySelector('.matukio-container');
    
    matukio.forEach(mkutano => {
        const mkutanoDiv = document.createElement('div');
        mkutanoDiv.className = 'matukio';
        mkutanoDiv.innerHTML = `
            <h2>${mkutano.title}</h2>
            <p><strong>Tarehe:</strong> ${mkutano.date}</p>
            <p>${mkutano.description}</p>
        `;
        container.appendChild(mkutanoDiv);
    });
    