# tigrouuuuu.github.io
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Association des Amis de La Croix | Préservation du patrimoine de La Croix-Valmer</title>
    <meta name="description" content="L'Association des Amis de La Croix œuvre pour l'entretien, la sauvegarde et la mise en valeur des lieux patrimoniaux de La Croix-Valmer.">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        ivory: '#FDFBF7',
                        cream: '#F5F1E8',
                        sand: '#E8DFD0',
                        olive: '#6B7B4F',
                        'olive-light': '#8A9D6B',
                        'olive-dark': '#4A5A36',
                        terracotta: '#C67B5C',
                        gold: '#B8956E',
                        'gold-light': '#D4B896',
                        stone: '#8B8178',
                        'stone-light': '#A9A095',
                    },
                    fontFamily: {
                        serif: ['Playfair Display', 'serif'],
                        sans: ['Inter', 'sans-serif'],
                    },
                }
            }
        }
    </script>
    <style>
        html {
            scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: reduce) {
            html {
                scroll-behavior: auto;
            }
            .animate-on-scroll {
                opacity: 1 !important;
                transform: none !important;
            }
        }
        
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .animate-on-scroll.visible {
            opacity: 1;
            transform: translateY(0);
        }
        
        .hero-gradient {
            background: linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.5) 100%);
        }
        
        .gold-line {
            background: linear-gradient(90deg, transparent, #B8956E, transparent);
        }
        
        .card-hover {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 40px rgba(0,0,0,0.1);
        }
        
        .btn-primary {
            background: linear-gradient(135deg, #B8956E 0%, #C67B5C 100%);
            transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
            background: linear-gradient(135deg, #C67B5C 0%, #B8956E 100%);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(184, 149, 110, 0.4);
        }
        
        .btn-secondary {
            border: 2px solid #B8956E;
            transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
            background: #B8956E;
            color: white;
        }
    </style>
</head>
<body class="bg-ivory font-sans text-stone antialiased">

    <!-- Navigation -->
    <nav class="fixed top-4 left-4 right-4 z-50 bg-ivory/90 backdrop-blur-md rounded-2xl shadow-lg border border-sand/50">
        <div class="max-w-7xl mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <svg class="w-8 h-8 text-olive" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 2L15 8H9L12 2Z" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 8V22" stroke-linecap="round"/>
                        <path d="M8 22H16" stroke-linecap="round"/>
                        <path d="M7 12H17" stroke-linecap="round"/>
                    </svg>
                    <span class="font-serif text-lg font-semibold text-olive-dark">Amis de La Croix</span>
                </div>
                
                <div class="hidden md:flex items-center gap-8">
                    <a href="#mission" class="text-stone hover:text-olive transition-colors duration-200">Notre mission</a>
                    <a href="#projets" class="text-stone hover:text-olive transition-colors duration-200">Projets</a>
                    <a href="#patrimoine" class="text-stone hover:text-olive transition-colors duration-200">Patrimoine</a>
                    <a href="#dons" class="btn-primary text-white px-5 py-2 rounded-full text-sm font-medium cursor-pointer">Faire un don</a>
                </div>
                
                <button id="mobile-menu-btn" class="md:hidden p-2 text-stone hover:text-olive cursor-pointer">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </button>
            </div>
        </div>
        
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden border-t border-sand bg-ivory rounded-b-2xl">
            <div class="px-6 py-4 space-y-4">
                <a href="#mission" class="block text-stone hover:text-olive transition-colors duration-200">Notre mission</a>
                <a href="#projets" class="block text-stone hover:text-olive transition-colors duration-200">Projets</a>
                <a href="#patrimoine" class="block text-stone hover:text-olive transition-colors duration-200">Patrimoine</a>
                <a href="#dons" class="btn-primary inline-block text-white px-5 py-2 rounded-full text-sm font-medium cursor-pointer">Faire un don</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070" 
                 alt="Paysage méditerranéen de La Croix-Valmer" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div class="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
            <div class="animate-on-scroll">
                <p class="text-gold-light text-sm tracking-[0.3em] uppercase mb-6">La Croix-Valmer • Var</p>
                <h1 class="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6">
                    Association des Amis de La Croix
                </h1>
                <div class="h-px w-24 mx-auto gold-line mb-6"></div>
                <p class="text-xl md:text-2xl font-light text-white/90 mb-10">
                    Préserver et valoriser le patrimoine de La Croix-Valmer
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#dons" class="btn-primary text-white px-8 py-4 rounded-full text-lg font-medium cursor-pointer">
                        Faire un don
                    </a>
                    <a href="#mission" class="btn-secondary text-gold px-8 py-4 rounded-full text-lg font-medium cursor-pointer">
                        Découvrir notre mission
                    </a>
                </div>
            </div>
        </div>
        
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
        </div>
    </section>

    <!-- Presentation Section -->
    <section class="py-24 md:py-32 bg-ivory">
        <div class="max-w-4xl mx-auto px-6">
            <div class="animate-on-scroll text-center">
                <div class="h-px w-16 mx-auto gold-line mb-8"></div>
                <p class="font-serif text-2xl md:text-3xl text-olive-dark leading-relaxed mb-8">
                    L'Association des Amis de La Croix œuvre pour l'entretien, la sauvegarde et la mise en valeur des lieux patrimoniaux de La Croix-Valmer. À travers ses actions, elle contribue à préserver des bâtiments, monuments et symboles qui font partie de l'histoire et de l'identité du village.
                </p>
                <div class="h-px w-16 mx-auto gold-line"></div>
            </div>
        </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="py-24 md:py-32 bg-cream">
        <div class="max-w-6xl mx-auto px-6">
            <div class="animate-on-scroll text-center mb-16">
                <p class="text-gold text-sm tracking-[0.2em] uppercase mb-4">Ce que nous faisons</p>
                <h2 class="font-serif text-4xl md:text-5xl text-olive-dark mb-4">Notre mission</h2>
                <div class="h-px w-24 mx-auto gold-line"></div>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="animate-on-scroll bg-ivory p-8 rounded-2xl card-hover border border-sand cursor-pointer">
                    <div class="w-14 h-14 bg-olive/10 rounded-xl flex items-center justify-center mb-6">
                        <svg class="w-7 h-7 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                        </svg>
                    </div>
                    <h3 class="font-serif text-xl text-olive-dark mb-3">L'église de La Croix-Valmer</h3>
                    <p class="text-stone leading-relaxed">Un lieu central de mémoire, de rassemblement et de patrimoine, dont l'entretien nécessite une attention constante.</p>
                </div>
                
                <div class="animate-on-scroll bg-ivory p-8 rounded-2xl card-hover border border-sand cursor-pointer">
                    <div class="w-14 h-14 bg-olive/10 rounded-xl flex items-center justify-center mb-6">
                        <svg class="w-7 h-7 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2L15 8H9L12 2Z"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8V22"/>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 22H16"/>
                        </svg>
                    </div>
                    <h3 class="font-serif text-xl text-olive-dark mb-3">La Croix de Constantin</h3>
                    <p class="text-stone leading-relaxed">Un symbole historique important de La Croix-Valmer, à préserver comme témoin du passé local.</p>
                </div>
                
                <div class="animate-on-scroll bg-ivory p-8 rounded-2xl card-hover border border-sand cursor-pointer">
                    <div class="w-14 h-14 bg-olive/10 rounded-xl flex items-center justify-center mb-6">
                        <svg class="w-7 h-7 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                        </svg>
                    </div>
                    <h3 class="font-serif text-xl text-olive-dark mb-3">Le patrimoine local</h3>
                    <p class="text-stone leading-relaxed">Au-delà des monuments emblématiques, l'association accompagne la sauvegarde des éléments qui participent à l'âme du village.</p>
                </div>
                
                <div class="animate-on-scroll bg-ivory p-8 rounded-2xl card-hover border border-sand cursor-pointer">
                    <div class="w-14 h-14 bg-olive/10 rounded-xl flex items-center justify-center mb-6">
                        <svg class="w-7 h-7 text-olive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </div>
                    <h3 class="font-serif text-xl text-olive-dark mb-3">Transmission</h3>
                    <p class="text-stone leading-relaxed">Préserver ces lieux pour les générations futures, afin qu'elles puissent découvrir et appreciate l'histoire locale.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projets" class="py-24 md:py-32 bg-ivory">
        <div class="max-w-6xl mx-auto px-6">
            <div class="animate-on-scroll text-center mb-16">
                <p class="text-gold text-sm tracking-[0.2em] uppercase mb-4">Actions concrètes</p>
                <h2 class="font-serif text-4xl md:text-5xl text-olive-dark mb-4">Nos projets</h2>
                <div class="h-px w-24 mx-auto gold-line"></div>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8">
                <div class="animate-on-scroll group relative overflow-hidden rounded-2xl cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?q=80&w=800" 
                         alt="Église de La Croix-Valmer" 
                         class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-olive-dark/90 via-olive-dark/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <h3 class="font-serif text-2xl text-white mb-2">L'église de La Croix-Valmer</h3>
                        <p class="text-white/80 text-sm leading-relaxed">Un lieu central de mémoire, de rassemblement et de patrimoine, dont l'entretien nécessite une attention constante.</p>
                    </div>
                </div>
                
                <div class="animate-on-scroll group relative overflow-hidden rounded-2xl cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1504214208698-ea1916a2195a?q=80&w=800" 
                         alt="Croix de Constantin" 
                         class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-olive-dark/90 via-olive-dark/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <h3 class="font-serif text-2xl text-white mb-2">La Croix de Constantin</h3>
                        <p class="text-white/80 text-sm leading-relaxed">Un symbole historique important de La Croix-Valmer, à préserver comme témoin du passé local.</p>
                    </div>
                </div>
                
                <div class="animate-on-scroll group relative overflow-hidden rounded-2xl cursor-pointer">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800" 
                         alt="Patrimoine local" 
                         class="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-olive-dark/90 via-olive-dark/40 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <h3 class="font-serif text-2xl text-white mb-2">Le patrimoine local</h3>
                        <p class="text-white/80 text-sm leading-relaxed">Au-delà des monuments emblématiques, l'association souhaite accompagner la sauvegarde des éléments qui participent à l'âme du village.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Heritage Importance Section -->
    <section id="patrimoine" class="py-24 md:py-32 relative overflow-hidden">
        <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1464822759863-00c3扔6f7c2b?q=80&w=2070" 
                 alt="Patrimoine méditerranéen" 
                 class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-olive-dark/80"></div>
        </div>
        
        <div class="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <div class="animate-on-scroll">
                <p class="text-gold-light text-sm tracking-[0.2em] uppercase mb-6">Notre engagement</p>
                <h2 class="font-serif text-4xl md:text-5xl text-white mb-8">Pourquoi préserver ce patrimoine ?</h2>
                <div class="h-px w-24 mx-auto bg-gold/50 mb-8"></div>
                <p class="text-xl text-white/90 leading-relaxed mb-8">
                    Préserver le patrimoine, c'est protéger une mémoire commune. Chaque bâtiment, chaque pierre et chaque symbole raconte une partie de l'histoire de La Croix-Valmer.
                </p>
                <p class="text-xl text-white/90 leading-relaxed">
                    En les sauvegardant, nous transmettons aux générations futures un héritage vivant, enraciné dans le territoire et dans son histoire.
                </p>
            </div>
        </div>
    </section>

    <!-- Donations Section -->
    <section id="dons" class="py-24 md:py-32 bg-cream">
        <div class="max-w-3xl mx-auto px-6">
            <div class="animate-on-scroll bg-ivory rounded-3xl p-10 md:p-16 border border-sand shadow-xl text-center">
                <div class="w-16 h-16 mx-auto mb-8 bg-gold/20 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                    </svg>
                </div>
                
                <h2 class="font-serif text-4xl md:text-5xl text-olive-dark mb-6">Soutenir l'association</h2>
                <div class="h-px w-24 mx-auto gold-line mb-8"></div>
                
                <p class="text-lg text-stone leading-relaxed mb-8">
                    Vos dons permettent de financer les actions d'entretien, de restauration et de valorisation du patrimoine local. Chaque contribution, quelle que soit sa taille, participe concrètement à la sauvegarde des lieux qui font l'identité de La Croix-Valmer.
                </p>
                
                <a href="#" class="btn-primary inline-block text-white px-10 py-4 rounded-full text-lg font-medium cursor-pointer mb-8">
                    Faire un don
                </a>
                
                <div class="p-6 bg-sand/50 rounded-xl mb-6">
                    <p class="text-stone text-sm mb-2">IBAN de l'association :</p>
                    <p class="font-medium text-olive-dark text-lg">[À AJOUTER]</p>
                </div>
                
                <p class="text-sm text-stone-light italic">
                    L'ensemble des dons est destiné aux projets de préservation et d'entretien portés par l'association.
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-24 md:py-32 bg-ivory">
        <div class="max-w-3xl mx-auto px-6 text-center">
            <div class="animate-on-scroll">
                <p class="text-gold text-sm tracking-[0.2em] uppercase mb-4">Restons en contact</p>
                <h2 class="font-serif text-4xl md:text-5xl text-olive-dark mb-4">Nous contacter</h2>
                <div class="h-px w-24 mx-auto gold-line mb-8"></div>
                
                <p class="text-lg text-stone leading-relaxed mb-8">
                    Pour toute question, proposition ou information complémentaire, vous pouvez contacter l'association.
                </p>
                
                <a href="mailto:contact@amisdelacroix.fr" class="inline-flex items-center gap-3 text-xl text-olive hover:text-olive-dark transition-colors duration-200 cursor-pointer">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    contact@amisdelacroix.fr
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 bg-olive-dark text-white">
        <div class="max-w-6xl mx-auto px-6">
            <div class="grid md:grid-cols-3 gap-12 mb-12">
                <div>
                    <div class="flex items-center gap-3 mb-6">
                        <svg class="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M12 2L15 8H9L12 2Z" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M12 8V22" stroke-linecap="round"/>
                            <path d="M8 22H16" stroke-linecap="round"/>
                        </svg>
                        <span class="font-serif text-xl font-semibold">Amis de La Croix</span>
                    </div>
                    <p class="text-white/70">Association des Amis de La Croix</p>
                    <p class="text-white/70">La Croix-Valmer, Var</p>
                </div>
                
                <div>
                    <h4 class="font-serif text-lg mb-4 text-gold">Navigation</h4>
                    <ul class="space-y-3">
                        <li><a href="#mission" class="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer">Notre mission</a></li>
                        <li><a href="#projets" class="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer">Projets</a></li>
                        <li><a href="#patrimoine" class="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer">Notre engagement</a></li>
                        <li><a href="#dons" class="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer">Faire un don</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="font-serif text-lg mb-4 text-gold">Contact</h4>
                    <a href="mailto:contact@amisdelacroix.fr" class="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer">
                        contact@amisdelacroix.fr
                    </a>
                </div>
            </div>
            
            <div class="h-px w-full bg-white/10 mb-8"></div>
            
            <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                <p>© 2024 Association des Amis de La Croix. Tous droits réservés.</p>
                <p>Préservation du patrimoine local</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Scroll animations with Intersection Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    </script>
</body>
</html>
