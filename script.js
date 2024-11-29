<!---// Features data
const features = [
    {
        name: 'Programming Fundamentals',
        description: 'Master the basics of programming with C, C++, and Java.',
        icon: `<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>`
        
    },
    {
        name: 'Database Management',
        description: 'Learn SQL, database design, and management systems.',
        icon: `<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S4 5 4 7zm12 0v10c0 2 1.5 3 3.5 3s3.5-1 3.5-3V7c0-2-1.5-3-3.5-3S16 5 16 7z" />
        </svg>`
    },
    {
        name: 'Web Development',
        description: 'Create modern websites with HTML, CSS, and JavaScript.',
        icon: `<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>`
    },
    {
        name: 'Computer Networks',
        description: 'Understand networking concepts and protocols.',
        icon: `<svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>`
    }
];

// Subjects data
const subjects = [
    {
        name: 'Python Lab',
        semester: '4st Semester',
        image: 'python.webp',
    },
    {
        name: 'Nano Technology',
        semester: '4st Semester',
        image: 'Nano Technology.jpg',
    },
    {
        name: 'Andriod Lab',
        semester: '4st Semester',
        image: 'Andriod Lab.webp',
    },
    {
        name: 'Cyber Security',
        semester: '4st Semester',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
];

// Render features
const featuresContainer = document.querySelector('#features-container');
features.forEach((feature, index) => {
    const featureElement = document.createElement('div');
    featureElement.className = 'feature-card relative animate-fade-in';
    featureElement.style.animationDelay = `${index * 0.1}s`;
    featureElement.innerHTML = `
        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
            ${feature.icon}
        </div>
        <div class="ml-16">
            <h3 class="text-lg leading-6 font-medium text-gray-900">${feature.name}</h3>
            <p class="mt-2 Ftext-base text-gray-500">${feature.description}</p>
        </div>
    `;
    featuresContainer.appendChild(featureElement);
});

// Render subjects
const subjectsContainer = document.querySelector('#subjects-container');
subjects.forEach((subject, index) => {
    const subjectElement = document.createElement('div');
    subjectElement.className = 'subject-card flex flex-col overflow-hidden rounded-lg shadow-lg animate-fade-in';
    subjectElement.style.animationDelay = `${index * 0.1}s`;
    subjectElement.innerHTML = `
        <div class="flex-shrink-0">
            <img class="h-48 w-full object-cover" src="${subject.image}" alt="${subject.name}">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
                <p class="text-sm font-medium text-blue-600">${subject.semester}</p>
                <div class="mt-2">
                    <p class="text-xl font-semibold text-gray-900">${subject.name}</p>
                </div>
            </div>
            <div class="mt-6">
                <button class="btn-primary w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700">
                    Comming Soon...
                </button>
            </div>
        </div>
    `;
    subjectsContainer.appendChild(subjectElement);
});

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();
--->