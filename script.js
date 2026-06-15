document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------
    // 1. Projects Data Injection
    // --------------------------------------------------------
    const projectsData = [
        {
            title: '🏗️ NATCO National Conference Website',
            badge: '⭐ Featured Project',
            description: 'Official website developed for NATCO, one of the largest and most prestigious national conferences organized by AIESEC. The platform was designed to deliver an immersive digital experience inspired by a World Cup atmosphere, featuring dynamic animations, interactive storytelling, 3D elements, conference music integration, and a highly engaging user interface.<br><br>The website successfully managed more than 700 participant registrations, providing attendees with detailed conference information, schedules, event experiences, registration workflows, and event updates. The project demonstrates my ability to build high-impact platforms that combine scalability, performance, creativity, and exceptional user experience.<br><br><strong>Highlights:</strong><br>• 700+ registrations handled<br>• Advanced UI/UX design<br>• Interactive 3D elements<br>• World Cup-inspired event experience<br>• Fully responsive architecture<br>• Production-ready deployment<br>• High-performance modern frontend',
            tech: ['Next.js', 'Framer Motion', '3D UI', 'Vercel'],
            demoLink: 'https://natco-website-two.vercel.app/',
            githubLink: '#',
            image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: '🎓 Faculty Student Mentoring Platform',
            description: 'A comprehensive academic mentoring platform developed to bridge the gap between students and faculty members. The system facilitates mentorship requests, communication, appointment coordination, and academic support through a modern and user-friendly interface.<br><br>The platform was designed to improve student engagement while providing educators with efficient tools for mentorship management and academic collaboration.<br><br><strong>Highlights:</strong><br>• Student-faculty collaboration<br>• Mentorship workflow management<br>• Responsive user interface<br>• Modern academic platform design<br>• Improved communication experience',
            tech: ['HTML', 'CSS', 'JavaScript'],
            demoLink: 'https://arfaouisabeur.github.io/Faculty-Student-Mentoring-Website-Frontend/Code%20source%20sprint%202/index.html',
            githubLink: '#',
            image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: '🎉 Event Management Platform',
            description: 'A complete event management solution created to simplify event organization, promotion, and participant engagement. The platform provides an intuitive environment for managing event information while delivering a seamless experience for attendees.<br><br>The project showcases my ability to create structured and visually appealing platforms that support real-world event operations.<br><br><strong>Highlights:</strong><br>• Event presentation system<br>• Registration-oriented workflow<br>• Responsive design<br>• User-centered experience<br>• Modern event showcase interface',
            tech: ['HTML', 'CSS', 'JavaScript'],
            demoLink: 'https://arfaouisabeur.github.io/Event-Management-Website/',
            githubLink: '#',
            image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: '❤️ CASA NGO Platform',
            description: 'A dedicated digital platform developed for an NGO focused on supporting homeless individuals and vulnerable communities. The website aims to increase awareness, promote social impact initiatives, and connect supporters with the organization\'s mission.<br><br>Special attention was given to accessibility, storytelling, and user engagement to effectively communicate the NGO\'s values and humanitarian efforts.<br><br><strong>Highlights:</strong><br>• Social impact focused platform<br>• NGO awareness and outreach<br>• Community engagement experience<br>• Accessible and inclusive design<br>• Mission-driven storytelling',
            tech: ['HTML', 'CSS', 'JavaScript'],
            demoLink: 'https://arfaouisabeur.github.io/CASA/',
            githubLink: '#',
            image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: '🚀 IMC Club Website',
            description: 'Official digital platform for the IMC Club, designed to showcase activities, events, achievements, and community initiatives. The website serves as a central hub for members and visitors, helping strengthen the club\'s visibility and digital presence.<br><br>The project combines modern design with intuitive navigation to create an engaging community experience.<br><br><strong>Highlights:</strong><br>• Club branding and visibility<br>• Event promotion<br>• Community engagement<br>• Responsive user experience<br>• Modern organizational website',
            tech: ['HTML', 'CSS', 'JavaScript'],
            demoLink: 'https://arfaouisabeur.github.io/imc/index.html',
            githubLink: '#',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: '🌍 Global Village Platform',
            description: 'An interactive platform developed to showcase cultural diversity and international exchange opportunities through the Global Village initiative. The website highlights different cultures, activities, and participant experiences while encouraging cross-cultural understanding and global citizenship.<br><br>The project reflects my ability to create engaging platforms for international and multicultural audiences.<br><br><strong>Highlights:</strong><br>• International event showcase<br>• Cultural diversity promotion<br>• Interactive user experience<br>• Modern visual storytelling<br>• Community-focused platform',
            tech: ['HTML', 'SASS', 'JavaScript'],
            demoLink: 'https://arfaouisabeur.github.io/Global-Village/index.html',
            githubLink: '#',
            image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: '📄 Medina Resume Maker',
            description: 'A professional resume-building application designed to help users create polished and visually appealing resumes quickly and efficiently. The platform simplifies the resume creation process through an intuitive interface and structured workflow.<br><br>The project demonstrates practical problem-solving by transforming a traditionally complex task into a streamlined digital experience.<br><br><strong>Highlights:</strong><br>• Resume generation system<br>• User-friendly workflow<br>• Professional document creation<br>• Dynamic form management<br>• Productivity-focused solution',
            tech: ['HTML', 'CSS', 'JavaScript'],
            demoLink: 'https://arfaouisabeur.github.io/Medina-Resume-Maker/index.html',
            githubLink: '#',
            image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            title: '🧮 Multi Calculator Platform',
            description: 'A freelance project developed for StatBid, a Search Marketing Agency based in the United States. The platform provides a collection of specialized calculators designed to help users perform accurate calculations efficiently while improving operational productivity.<br><br>This project demonstrates my ability to deliver client-focused solutions, understand business requirements, and develop practical tools tailored to real-world professional needs.<br><br><strong>Highlights:</strong><br>• Freelance project for a US company<br>• Client-oriented development<br>• Productivity-focused tools<br>• Responsive and intuitive design<br>• Business-driven solution',
            tech: ['JavaScript', 'HTML5', 'CSS3'],
            demoLink: 'https://arfaouisabeur.github.io/Calculators-Project/',
            githubLink: '#',
            image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        }
    ];

    const projectsContainer = document.getElementById('projects-container');
    
    projectsData.forEach((proj, index) => {
        const techTags = proj.tech.map(t => `<span>${t}</span>`).join('');
        const badge = proj.badge ? `<span class="project-badge">${proj.badge}</span>` : '';
        // Create a short description for the card (first 150 characters)
        const shortDesc = proj.description.replace(/<br>/g, ' ').replace(/<[^>]*>/g, '').substring(0, 150) + '...';
        
        const cardHTML = `
            <div class="project-card interactable-card" data-index="${index}">
                <div class="project-img-wrapper">
                    <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy">
                    <div class="project-overlay">
                        <button class="btn btn-primary interactable view-project-btn">View Details</button>
                    </div>
                </div>
                <div class="project-content">
                    ${badge}
                    <h3>${proj.title}</h3>
                    <p class="project-desc">${shortDesc}</p>
                </div>
            </div>
        `;
        projectsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });

    // --------------------------------------------------------
    // 2. Custom Cursor Logic - DISABLED (Normal cursor now)
    // --------------------------------------------------------
    // Custom cursor removed as requested

    // --------------------------------------------------------
    // 3. Theme Switcher Logic
    // --------------------------------------------------------
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const htmlElement = document.documentElement;
    
    // Force dark mode always
    htmlElement.classList.add('dark-theme');
    htmlElement.classList.remove('light-theme');
    themeIcon.classList.add('ph-sun');
    themeIcon.classList.remove('ph-moon');
    
    themeToggle.addEventListener('click', () => {
        if (htmlElement.classList.contains('dark-theme')) {
            htmlElement.classList.replace('dark-theme', 'light-theme');
            themeIcon.classList.replace('ph-sun', 'ph-moon');
            localStorage.setItem('theme', 'light');
            showToast('Light mode enabled', 'ph-sun');
        } else {
            htmlElement.classList.replace('light-theme', 'dark-theme');
            themeIcon.classList.replace('ph-moon', 'ph-sun');
            localStorage.setItem('theme', 'dark');
            showToast('Dark mode enabled', 'ph-moon');
        }
    });

    // --------------------------------------------------------
    // 4. Scroll Animations & Progress
    // --------------------------------------------------------
    const scrollProgress = document.getElementById('scroll-progress');
    const navbar = document.getElementById('navbar');
    const reveals = document.querySelectorAll('.reveal');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section, header');

    window.addEventListener('scroll', () => {
        // Progress Bar
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        scrollProgress.style.width = `${progress}%`;

        // Navbar Sticky effect
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link Highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for Reveal Animations
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
            
            // Trigger counters if in this section
            if(entry.target.querySelector('.counter')) {
                startCounters(entry.target.querySelectorAll('.counter'));
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealObserver.observe(reveal);
    });

    function startCounters(counters) {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const isFloat = !Number.isInteger(target);
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = isFloat ? current.toFixed(1) : Math.ceil(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target;
                }
            };
            updateCounter();
        });
    }

    // --------------------------------------------------------
    // 5. Command Palette (Ctrl + K)
    // --------------------------------------------------------
    const cmdOverlay = document.getElementById('cmd-overlay');
    const cmdInput = document.getElementById('cmd-input');
    const openCmdBtn = document.getElementById('open-cmd');
    const cmdItems = document.querySelectorAll('.cmd-item');

    if (cmdOverlay && cmdInput && openCmdBtn) {
        function toggleCmdPalette() {
            cmdOverlay.classList.toggle('active');
            if (cmdOverlay.classList.contains('active')) {
                setTimeout(() => cmdInput.focus(), 100);
                document.body.style.overflow = 'hidden';
            } else {
                cmdInput.value = '';
                filterCmdItems('');
                document.body.style.overflow = '';
            }
        }

        // Event listener for Ctrl+K
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                toggleCmdPalette();
            }
            if (e.key === 'Escape' && cmdOverlay.classList.contains('active')) {
                toggleCmdPalette();
            }
        });

        openCmdBtn.addEventListener('click', toggleCmdPalette);
        cmdOverlay.addEventListener('click', (e) => {
            if (e.target === cmdOverlay) toggleCmdPalette();
        });

        // Command searching
        cmdInput.addEventListener('input', (e) => {
            filterCmdItems(e.target.value.toLowerCase());
        });

        function filterCmdItems(query) {
            cmdItems.forEach(item => {
                const text = item.innerText.toLowerCase();
                if (text.includes(query)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Action execution for Command Palette
        cmdItems.forEach(item => {
            item.addEventListener('click', (e) => {
                if (item.id === 'cmd-theme-toggle') {
                    themeToggle.click();
                } else if (item.getAttribute('href')) {
                    // Let normal link behavior happen, just close modal
                }
                toggleCmdPalette();
            });
        });
    }

    // --------------------------------------------------------
    // 6. Project Modal Logic
    // --------------------------------------------------------
    const projectModalOverlay = document.getElementById('project-modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const modalCloseBtn = document.getElementById('modal-close');

    if (projectsContainer && projectModalOverlay && modalContent && modalCloseBtn) {
        // Use event delegation for dynamically injected project cards
        projectsContainer.addEventListener('click', (e) => {
            console.log('Click detected on:', e.target);
            
            const btn = e.target.closest('.view-project-btn');
            console.log('Button found:', btn);
            
            if (btn) {
                const card = btn.closest('.project-card');
                console.log('Card found:', card);
                
                if (card) {
                    const index = parseInt(card.getAttribute('data-index'));
                    console.log('Opening project index:', index);
                    openProjectModal(projectsData[index]);
                }
            }
        });

        function openProjectModal(project) {
            const techTags = project.tech.map(t => `<span class="skill-tag">${t}</span>`).join('');
            
            modalContent.innerHTML = `
                <div class="modal-img-container">
                    <img src="${project.image}" alt="${project.title}" class="modal-img">
                </div>
                <div class="modal-body">
                    ${project.badge ? `<div class="project-badge" style="margin-bottom: 15px;">${project.badge}</div>` : ''}
                    <h2 class="modal-title gradient-text">${project.title}</h2>
                    <div class="skill-tags" style="margin-bottom: 20px;">
                        ${techTags}
                    </div>
                    <div style="color: var(--text-secondary); font-size: 1.05rem; line-height: 1.8; margin-bottom: 30px;">
                        ${project.description}
                    </div>
                    <div class="modal-links">
                        <a href="${project.demoLink}" target="_blank" class="btn btn-primary interactable" style="flex: 1.5; font-size: 1.05rem; padding: 15px;">
                            Visit Site <i class="ph ph-arrow-square-out"></i>
                        </a>
                        ${project.githubLink !== '#' ? `
                        <a href="${project.githubLink}" target="_blank" class="btn btn-secondary interactable" style="flex: 1;">
                            GitHub Repo <i class="ph ph-github-logo"></i>
                        </a>
                        ` : ''}
                    </div>
                </div>
            `;
            
            projectModalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeProjectModal() {
            projectModalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        modalCloseBtn.addEventListener('click', closeProjectModal);
        projectModalOverlay.addEventListener('click', (e) => {
            if (e.target === projectModalOverlay) closeProjectModal();
        });
    }

    // --------------------------------------------------------
    // 7. Toast Notifications System
    // --------------------------------------------------------
    const toastContainer = document.getElementById('toast-container');
    
    function showToast(message, icon = 'ph-info') {
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="ph ${icon}"></i> <span>${message}</span>`;
        
        toastContainer.appendChild(toast);
        
        // Trigger reflow for animation
        setTimeout(() => toast.classList.add('show'), 10);
        
        // Remove after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Form Submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = 'Sending... <i class="ph ph-spinner ph-spin"></i>';
            btn.disabled = true;
            
            // Simulate network request
            setTimeout(() => {
                showToast('Message sent successfully!', 'ph-check-circle');
                contactForm.reset();
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }

    // --------------------------------------------------------
    // 8. Tooltips System
    // --------------------------------------------------------
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);

    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    if (!isMobile) {
        tooltipElements.forEach(el => {
            el.addEventListener('mouseenter', (e) => {
                const text = el.getAttribute('data-tooltip');
                tooltip.innerText = text;
                tooltip.style.opacity = '1';
                
                const rect = el.getBoundingClientRect();
                tooltip.style.top = `${rect.top - 30 + window.scrollY}px`;
                tooltip.style.left = `${rect.left + (rect.width/2) - (tooltip.offsetWidth/2)}px`;
            });
            
            el.addEventListener('mouseleave', () => {
                tooltip.style.opacity = '0';
            });
        });
    }

    // --------------------------------------------------------
    // 9. Mobile Menu
    // --------------------------------------------------------
    // 9. Mobile Menu
    // --------------------------------------------------------
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        function toggleMobileMenu() {
            mobileMenu.classList.toggle('open');
            if (mobileMenu.classList.contains('open')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
        closeMenuBtn.addEventListener('click', toggleMobileMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', toggleMobileMenu);
        });
    }

});
