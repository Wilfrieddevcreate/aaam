export type Locale = "fr" | "en";

const translations = {
  // ── NAVBAR ──
  "nav.home": { fr: "Accueil", en: "Home" },
  "nav.about": { fr: "À propos", en: "About" },
  "nav.mission": { fr: "Mission", en: "Mission" },
  "nav.apply": { fr: "Candidature", en: "Apply" },
  "nav.masterclass": { fr: "Masterclass", en: "Masterclass" },

  // ── HERO ──
  "hero.title.1": { fr: "African Alliance", en: "African Alliance" },
  "hero.title.2": { fr: "of ", en: "of " },
  "hero.title.3": { fr: "Artist Managers", en: "Artist Managers" },
  "hero.subtitle": {
    fr: "Le carrefour essentiel de l'innovation, de la collaboration et de l'excellence au sein de l'industrie musicale africaine.",
    en: "The essential crossroads of innovation, collaboration and excellence in the African music industry.",
  },
  "hero.cta.join": { fr: "Devenir AAAM", en: "Become an AAAM" },
  "hero.cta.discover": { fr: "Découvrir", en: "Discover" },

  // ── ABOUT ──
  "about.label": { fr: "À propos", en: "About" },
  "about.title.1": { fr: "Une vision pour", en: "A vision for" },
  "about.title.2": { fr: "l'Afrique musicale", en: "musical Africa" },
  "about.p1": {
    fr: "Créée par Donald Jean-Marie GNIMADI, entrepreneur culturel visionnaire originaire du Bénin, l'AAAM réunit des managers d'artistes, des promoteurs et des professionnels de la musique de tout le continent.",
    en: "Founded by Donald Jean-Marie GNIMADI, a visionary cultural entrepreneur from Benin, AAAM brings together artist managers, promoters and music professionals from across the continent.",
  },
  "about.p2": {
    fr: "Convaincue que le succès artistique repose sur des bases solides de management et de stratégie, l'AAAM s'engage à fournir à ses membres des outils, des formations et des plateformes d'échange adaptés aux défis et aux opportunités d'un secteur en pleine mutation.",
    en: "Convinced that artistic success is built on solid management and strategy foundations, AAAM is committed to providing its members with tools, training and exchange platforms tailored to the challenges and opportunities of a rapidly changing sector.",
  },
  "about.stat.countries": { fr: "Pays africains", en: "African countries" },
  "about.stat.opportunities": { fr: "Opportunités", en: "Opportunities" },
  "about.stat.engagement": { fr: "Engagement", en: "Commitment" },
  "about.stat.vision": { fr: "Vision commune", en: "Shared vision" },

  // ── MISSION ──
  "mission.label": { fr: "Notre Mission", en: "Our Mission" },
  "mission.title.1": { fr: "Ensemble, pour une industrie", en: "Together, for a dynamic" },
  "mission.title.2": { fr: " musicale africaine dynamique", en: " African music industry" },
  "mission.obj1.title": { fr: "Excellence Professionnelle", en: "Professional Excellence" },
  "mission.obj1.desc": {
    fr: "Promouvoir l'excellence dans la gestion artistique en Afrique à travers des formations et masterclass de haut niveau.",
    en: "Promoting excellence in artistic management in Africa through high-level training and masterclasses.",
  },
  "mission.obj2.title": { fr: "Réseautage & Synergies", en: "Networking & Synergies" },
  "mission.obj2.desc": {
    fr: "Fournir des opportunités de réseautage et de développement pour les professionnels de l'industrie musicale africaine.",
    en: "Providing networking and development opportunities for African music industry professionals.",
  },
  "mission.obj3.title": { fr: "Défense des Intérêts", en: "Advocacy" },
  "mission.obj3.desc": {
    fr: "Défendre les intérêts communs des AAAMs et représenter la voix de l'industrie musicale africaine.",
    en: "Defending the common interests of AAAMs and representing the voice of the African music industry.",
  },
  "mission.obj4.title": { fr: "Professionnalisation", en: "Professionalization" },
  "mission.obj4.desc": {
    fr: "Dynamiser l'industrie musicale africaine pour la rendre compétitive et tournée vers l'avenir.",
    en: "Energizing the African music industry to make it competitive and forward-looking.",
  },

  // ── VALUES ──
  "values.label.who": { fr: "Qui peut rejoindre ?", en: "Who can join?" },
  "values.title.join": { fr: "Devenez un membre de ", en: "Become an member of " },
  "values.desc": {
    fr: "Les candidats à l'adhésion doivent être des gestionnaires d'artistes actifs dans l'industrie musicale africaine avec une expérience professionnelle confirmée.",
    en: "Applicants must be active artist managers in the African music industry with proven professional experience.",
  },
  "values.label.rights": { fr: "Droits des AAAMs", en: "AAAM Benefits" },
  "values.title.benefits": { fr: "Vos ", en: "Your " },
  "values.title.benefits.2": { fr: "avantages", en: "benefits" },
  "values.right.1": { fr: "Accès aux ressources exclusives de l'AAAM", en: "Access to exclusive AAAM resources" },
  "values.right.2": { fr: "Participation aux événements et masterclass", en: "Participation in events and masterclasses" },
  "values.right.3": { fr: "Représentation de vos intérêts collectifs", en: "Representation of your collective interests" },
  "values.right.4": { fr: "Réseau de professionnels à travers l'Afrique", en: "Network of professionals across Africa" },

  // ── CTA ──
  "cta.title.1": { fr: "Prêt à rejoindre", en: "Ready to join" },
  "cta.title.2": { fr: "le mouvement ?", en: "the movement?" },
  "cta.desc": {
    fr: "Remplissez le formulaire de candidature et rejoignez la communauté des AAAMs. Ensemble, construisons l'avenir de l'industrie musicale africaine.",
    en: "Fill out the application form and join the AAAM community. Together, let's build the future of the African music industry.",
  },
  "cta.button": { fr: "Soumettre ma candidature", en: "Submit my application" },

  // ── APPLY ──
  "apply.label": { fr: "Formulaire d'adhésion", en: "Membership Form" },
  "apply.title": { fr: "Devenez un membre de  ", en: "Become an member of " },
  "apply.desc": {
    fr: "Remplissez ce formulaire pour soumettre votre demande d'adhésion. Le comité examinera votre candidature et vous informera par voie électronique.",
    en: "Fill out this form to submit your membership application. The committee will review your application and notify you electronically.",
  },
  "apply.name": { fr: "Nom complet", en: "Full name" },
  "apply.email": { fr: "Email", en: "Email" },
  "apply.phone": { fr: "Téléphone", en: "Phone" },
  "apply.country": { fr: "Pays", en: "Country" },
  "apply.country.placeholder": { fr: "Sélectionnez votre pays", en: "Select your country" },
  "apply.role": { fr: "Métier / Rôle dans l'industrie", en: "Profession / Industry Role" },
  "apply.role.placeholder": { fr: "Sélectionnez votre rôle", en: "Select your role" },
  "apply.experience": { fr: "Expérience professionnelle", en: "Professional experience" },
  "apply.experience.placeholder": {
    fr: "Décrivez votre parcours et votre expérience dans l'industrie musicale...",
    en: "Describe your background and experience in the music industry...",
  },
  "apply.motivation": { fr: "Motivation", en: "Motivation" },
  "apply.motivation.placeholder": {
    fr: "Pourquoi souhaitez-vous rejoindre l'AAAM ?",
    en: "Why do you want to join AAAM?",
  },
  "apply.submit": { fr: "Soumettre ma candidature", en: "Submit my application" },
  "apply.sending": { fr: "Envoi en cours...", en: "Sending..." },
  "apply.success.title": { fr: "Candidature envoyée !", en: "Application sent!" },
  "apply.success.desc": {
    fr: "Merci pour votre intérêt. Le comité d'adhésion de l'AAAM examinera votre candidature et vous contactera par email.",
    en: "Thank you for your interest. The AAAM membership committee will review your application and contact you by email.",
  },

  // ── DASHBOARD ──
  "dashboard.label": { fr: "Espace membre", en: "Member area" },
  "dashboard.title": { fr: "Nos ", en: "Our " },
  "dashboard.title.2": { fr: "Masterclass", en: "Masterclasses" },
  "dashboard.desc": {
    fr: "Découvrez les formations et événements organisés par l'AAAM.",
    en: "Discover the training and events organized by AAAM.",
  },
  "dashboard.upcoming": { fr: "À venir", en: "Upcoming" },
  "dashboard.past": { fr: "Événements passés", en: "Past events" },
  "dashboard.empty": {
    fr: "Aucun événement programmé pour le moment. Revenez bientôt !",
    en: "No events scheduled at the moment. Check back soon!",
  },
  "dashboard.join": { fr: "Rejoindre la session", en: "Join session" },
  "dashboard.masterclass": { fr: "Masterclass", en: "Masterclass" },
  "dashboard.by": { fr: "Par", en: "By" },

  // ── FOOTER ──
  "footer.desc": {
    fr: "Le carrefour de l'innovation et de l'excellence dans l'industrie musicale africaine.",
    en: "The crossroads of innovation and excellence in the African music industry.",
  },
  "footer.nav": { fr: "Navigation", en: "Navigation" },
  "footer.platform": { fr: "Plateforme", en: "Platform" },
  "footer.admin": { fr: "Espace Admin", en: "Admin Panel" },
  "footer.join": { fr: "Devenir AAAM", en: "Become an AAAM" },
  "footer.contact": { fr: "Contact", en: "Contact" },
  "footer.founder": { fr: "Fondée par", en: "Founded by" },
  "footer.rights": { fr: "Tous droits réservés", en: "All rights reserved" },

  // ── LOGIN ──
  "login.label": { fr: "Espace Administrateur", en: "Admin Panel" },
  "login.title": { fr: "Connexion ", en: "Login " },
  "login.desc": { fr: "Accès réservé aux administrateurs de la plateforme.", en: "Access restricted to platform administrators." },
  "login.email": { fr: "Email", en: "Email" },
  "login.password": { fr: "Mot de passe", en: "Password" },
  "login.submit": { fr: "Se connecter", en: "Sign in" },
  "login.loading": { fr: "Connexion...", en: "Signing in..." },
  "login.back": { fr: "Retour à l'accueil", en: "Back to home" },

  // ── ROLES ──
  "role.manager": { fr: "Manager d'artiste", en: "Artist Manager" },
  "role.director": { fr: "Directeur artistique", en: "Artistic Director" },
  "role.communication": { fr: "Chargé de communication", en: "Communications Manager" },
  "role.booker": { fr: "Bookeur", en: "Booker" },
  "role.promoter": { fr: "Promoteur", en: "Promoter" },
  "role.producer": { fr: "Producteur", en: "Producer" },
  "role.sound": { fr: "Ingénieur du son", en: "Sound Engineer" },
  "role.other": { fr: "Autre", en: "Other" },

  // ── COUNTRIES ──
  "country.benin": { fr: "Bénin", en: "Benin" },
  "country.burkina": { fr: "Burkina Faso", en: "Burkina Faso" },
  "country.cameroon": { fr: "Cameroun", en: "Cameroon" },
  "country.ivory": { fr: "Côte d'Ivoire", en: "Ivory Coast" },
  "country.gabon": { fr: "Gabon", en: "Gabon" },
  "country.ghana": { fr: "Ghana", en: "Ghana" },
  "country.guinea": { fr: "Guinée", en: "Guinea" },
  "country.kenya": { fr: "Kenya", en: "Kenya" },
  "country.mali": { fr: "Mali", en: "Mali" },
  "country.morocco": { fr: "Maroc", en: "Morocco" },
  "country.nigeria": { fr: "Nigeria", en: "Nigeria" },
  "country.drc": { fr: "République Démocratique du Congo", en: "Democratic Republic of Congo" },
  "country.senegal": { fr: "Sénégal", en: "Senegal" },
  "country.south_africa": { fr: "Afrique du Sud", en: "South Africa" },
  "country.tanzania": { fr: "Tanzanie", en: "Tanzania" },
  "country.togo": { fr: "Togo", en: "Togo" },
  "country.tunisia": { fr: "Tunisie", en: "Tunisia" },
  "country.uganda": { fr: "Ouganda", en: "Uganda" },
  "country.other": { fr: "Autre", en: "Other" },

  // ── MASTERCLASS DETAIL ──
  "mc.ended": { fr: "Terminé", en: "Ended" },
  "mc.label": { fr: "Masterclass", en: "Masterclass" },
  "mc.back": { fr: "← Toutes les masterclass", en: "← All masterclasses" },
  "mc.description": { fr: "Description", en: "Description" },
  "mc.share": { fr: "Partager", en: "Share" },
  "mc.request_access": { fr: "Demander l'accès à cette masterclass", en: "Request access to this masterclass" },
  "mc.details": { fr: "Voir les détails →", en: "View details →" },
  "mc.by": { fr: "Par", en: "By" },
  "mc.speaker": { fr: "Intervenant :", en: "Speaker:" },
  "mc.apply_title": { fr: "Formulaire de candidature", en: "Application Form" },
  "mc.apply_desc": { fr: "Remplissez ce formulaire pour demander l'accès à cette masterclass.", en: "Fill out this form to request access to this masterclass." },
  "mc.request_btn": { fr: "Demander l'accès", en: "Request access" },

  // ── SHARE ──
  "share.copied": { fr: "Copié !", en: "Copied!" },
  "share.copy": { fr: "Copier le lien", en: "Copy link" },

  // ── MASTERCLASS ACCESS FORM ──
  "mcform.success": { fr: "Votre demande a bien été envoyée. L'administration vous recontactera par email.", en: "Your request has been sent. The administration will contact you by email." },
  "mcform.lastname": { fr: "Nom", en: "Last name" },
  "mcform.firstname": { fr: "Prénoms", en: "First name" },
  "mcform.alias": { fr: "Pseudo ou Alias", en: "Alias / Stage name" },
  "mcform.gender": { fr: "Genre", en: "Gender" },
  "mcform.gender.male": { fr: "Masculin", en: "Male" },
  "mcform.gender.female": { fr: "Féminin", en: "Female" },
  "mcform.age": { fr: "Tranche d'âge", en: "Age range" },
  "mcform.age.u18": { fr: "Moins de 18 ans", en: "Under 18" },
  "mcform.age.18_24": { fr: "18 - 24 ans", en: "18 - 24" },
  "mcform.age.25_34": { fr: "25 - 34 ans", en: "25 - 34" },
  "mcform.age.35_44": { fr: "35 - 44 ans", en: "35 - 44" },
  "mcform.age.45_54": { fr: "45 - 54 ans", en: "45 - 54" },
  "mcform.age.55plus": { fr: "55 ans et plus", en: "55 and over" },
  "mcform.phone": { fr: "Numéro de téléphone", en: "Phone number" },
  "mcform.nationality": { fr: "Nationalité", en: "Nationality" },
  "mcform.city": { fr: "Ville de résidence", en: "City of residence" },
  "mcform.assoc_check": { fr: "Je suis membre d'une association.", en: "I am a member of an association." },
  "mcform.assoc_name": { fr: "Nom de l'association", en: "Association name" },
  "mcform.assoc_role": { fr: "Rôle au sein de l'association", en: "Role in the association" },
  "mcform.artist": { fr: "Artiste représenté dans le passé ou actuellement", en: "Artist represented past or present" },
  "mcform.profession": { fr: "Quel métier exercez-vous dans l'industrie musicale ?", en: "What is your profession in the music industry?" },
  "mcform.social": { fr: "Lien vers vos profils sur les réseaux sociaux", en: "Links to your social media profiles" },
  "mcform.years": { fr: "Depuis combien d'années évoluez-vous dans l'industrie musicale ?", en: "How many years have you been in the music industry?" },
  "mcform.cv_check": { fr: "Je souhaite joindre mon CV plutôt qu'une biographie professionnelle.", en: "I prefer to attach my CV rather than a professional biography." },
  "mcform.cv_upload": { fr: "Joindre votre CV", en: "Attach your CV" },
  "mcform.cv_help": { fr: "Formats acceptés : PDF, DOC, DOCX. Taille max : 5 Mo.", en: "Accepted formats: PDF, DOC, DOCX. Max size: 5 MB." },
  "mcform.bio": { fr: "Biographie professionnelle", en: "Professional biography" },
  "mcform.sending": { fr: "Envoi en cours...", en: "Sending..." },
  "mcform.submit": { fr: "Envoyer ma demande", en: "Send my request" },
  "mcform.select": { fr: "Sélectionnez", en: "Select" },

  // ── NOT FOUND ──
  "notfound.title": { fr: "Page introuvable", en: "Page not found" },
  "notfound.desc": { fr: "La page que vous cherchez n'existe pas ou a été déplacée.", en: "The page you are looking for does not exist or has been moved." },
  "notfound.home": { fr: "Retour à l'accueil", en: "Back to home" },
  "notfound.apply": { fr: "Candidature", en: "Apply" },

  // ── COMMON ──
  "common.email": { fr: "Email", en: "Email" },
  "common.phone": { fr: "Téléphone", en: "Phone" },
  "common.country": { fr: "Pays", en: "Country" },
  "common.role": { fr: "Rôle", en: "Role" },
  "common.experience": { fr: "Expérience", en: "Experience" },
  "common.motivation": { fr: "Motivation", en: "Motivation" },

  // ── PRIVACY POLICY ──
  "privacy.label": { fr: "Mentions légales", en: "Legal" },
  "privacy.title": { fr: "Politique de confidentialité", en: "Privacy Policy" },
  "privacy.s1.title": { fr: "1. Collecte des données", en: "1. Data Collection" },
  "privacy.s1.content": {
    fr: "L'African Alliance of Artist Managers (AAAM) collecte les données personnelles que vous fournissez volontairement lors de votre candidature ou demande d'accès aux masterclass : nom, prénom, email, téléphone, pays, profession, expérience professionnelle et motivation.\n\nCes données sont nécessaires au traitement de votre demande d'adhésion et à la gestion des événements.",
    en: "The African Alliance of Artist Managers (AAAM) collects personal data that you voluntarily provide when applying for membership or requesting access to masterclasses: name, email, phone, country, profession, professional experience and motivation.\n\nThis data is necessary for processing your membership application and managing events.",
  },
  "privacy.s2.title": { fr: "2. Utilisation des données", en: "2. Use of Data" },
  "privacy.s2.content": {
    fr: "Vos données personnelles sont utilisées exclusivement pour :\n• Traiter votre candidature d'adhésion\n• Gérer votre accès aux masterclass et événements\n• Vous envoyer des notifications relatives à vos demandes\n• Vous informer des activités et événements de l'AAAM\n\nNous ne vendons, ne louons ni ne partageons vos données avec des tiers à des fins commerciales.",
    en: "Your personal data is used exclusively for:\n• Processing your membership application\n• Managing your access to masterclasses and events\n• Sending you notifications about your requests\n• Informing you about AAAM activities and events\n\nWe do not sell, rent or share your data with third parties for commercial purposes.",
  },
  "privacy.s3.title": { fr: "3. Protection des données", en: "3. Data Protection" },
  "privacy.s3.content": {
    fr: "L'AAAM met en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, modification, divulgation ou destruction.\n\nLes mots de passe sont chiffrés et les sessions sont sécurisées par des tokens JWT.",
    en: "AAAM implements appropriate technical and organizational security measures to protect your personal data against unauthorized access, modification, disclosure or destruction.\n\nPasswords are encrypted and sessions are secured with JWT tokens.",
  },
  "privacy.s4.title": { fr: "4. Conservation des données", en: "4. Data Retention" },
  "privacy.s4.content": {
    fr: "Vos données personnelles sont conservées pendant la durée de votre adhésion à l'AAAM et pendant une période de 3 ans après la fin de votre adhésion, sauf obligation légale contraire.\n\nVous pouvez demander la suppression de vos données à tout moment en contactant l'administration.",
    en: "Your personal data is retained for the duration of your AAAM membership and for a period of 3 years after the end of your membership, unless otherwise required by law.\n\nYou may request deletion of your data at any time by contacting the administration.",
  },
  "privacy.s5.title": { fr: "5. Vos droits", en: "5. Your Rights" },
  "privacy.s5.content": {
    fr: "Conformément à la réglementation applicable, vous disposez des droits suivants :\n• Droit d'accès à vos données personnelles\n• Droit de rectification de vos données\n• Droit à l'effacement de vos données\n• Droit d'opposition au traitement de vos données\n• Droit à la portabilité de vos données\n\nPour exercer ces droits, contactez-nous par email.",
    en: "In accordance with applicable regulations, you have the following rights:\n• Right to access your personal data\n• Right to rectify your data\n• Right to erase your data\n• Right to object to the processing of your data\n• Right to data portability\n\nTo exercise these rights, contact us by email.",
  },
  "privacy.s6.title": { fr: "6. Cookies", en: "6. Cookies" },
  "privacy.s6.content": {
    fr: "Notre site utilise des cookies strictement nécessaires au fonctionnement de la plateforme :\n• Cookie de session d'authentification (administrateurs)\n• Cookie de préférence de thème (clair/sombre)\n• Cookie de préférence de langue\n\nAucun cookie de tracking ou publicitaire n'est utilisé.",
    en: "Our site uses cookies strictly necessary for the platform to function:\n• Authentication session cookie (administrators)\n• Theme preference cookie (light/dark)\n• Language preference cookie\n\nNo tracking or advertising cookies are used.",
  },
  "privacy.s7.title": { fr: "7. Contact", en: "7. Contact" },
  "privacy.s7.content": {
    fr: "Pour toute question relative à la protection de vos données personnelles, vous pouvez contacter :\n\nAfrican Alliance of Artist Managers (AAAM)\nFondée par Donald Jean-Marie GNIMADI\nBénin, Afrique",
    en: "For any questions regarding the protection of your personal data, you may contact:\n\nAfrican Alliance of Artist Managers (AAAM)\nFounded by Donald Jean-Marie GNIMADI\nBenin, Africa",
  },

  // ── TERMS & CONDITIONS ──
  "terms.label": { fr: "Mentions légales", en: "Legal" },
  "terms.title": { fr: "Conditions générales d'utilisation", en: "Terms & Conditions" },
  "terms.s1.title": { fr: "1. Objet", en: "1. Purpose" },
  "terms.s1.content": {
    fr: "Les présentes conditions générales régissent l'utilisation de la plateforme de l'African Alliance of Artist Managers (AAAM). En accédant à ce site, vous acceptez ces conditions dans leur intégralité.\n\nL'AAAM se réserve le droit de modifier ces conditions à tout moment. Les modifications prendront effet dès leur publication sur le site.",
    en: "These terms and conditions govern the use of the African Alliance of Artist Managers (AAAM) platform. By accessing this site, you accept these terms in their entirety.\n\nAAAM reserves the right to modify these terms at any time. Changes will take effect upon publication on the site.",
  },
  "terms.s2.title": { fr: "2. Adhésion", en: "2. Membership" },
  "terms.s2.content": {
    fr: "L'adhésion à l'AAAM est soumise à l'approbation du comité d'adhésion. Les candidats doivent :\n• Être des gestionnaires d'artistes actifs dans l'industrie musicale africaine\n• Avoir une expérience professionnelle confirmée\n• Accepter de se conformer aux statuts et règlements de l'association\n• Adhérer aux objectifs et valeurs de l'AAAM\n\nLe comité se réserve le droit de refuser toute candidature sans avoir à motiver sa décision.",
    en: "AAAM membership is subject to approval by the membership committee. Applicants must:\n• Be active artist managers in the African music industry\n• Have proven professional experience\n• Agree to comply with the association's statutes and regulations\n• Adhere to AAAM's objectives and values\n\nThe committee reserves the right to reject any application without justification.",
  },
  "terms.s3.title": { fr: "3. Obligations des membres", en: "3. Member Obligations" },
  "terms.s3.content": {
    fr: "Les membres de l'AAAM (AAAMis) s'engagent à :\n• Respecter les valeurs fondamentales de l'association : intégrité, collaboration, professionnalisme et respect mutuel\n• Contribuer activement à la réalisation de la mission de l'AAAM\n• Maintenir des normes éthiques élevées dans leur pratique professionnelle\n• Respecter les règles de conduite lors des réunions et événements\n• Se conformer aux décisions prises par le conseil d'administration",
    en: "AAAM members commit to:\n• Respecting the association's core values: integrity, collaboration, professionalism and mutual respect\n• Actively contributing to fulfilling AAAM's mission\n• Maintaining high ethical standards in their professional practice\n• Following rules of conduct at meetings and events\n• Complying with decisions made by the board of directors",
  },
  "terms.s4.title": { fr: "4. Masterclass et événements", en: "4. Masterclasses and Events" },
  "terms.s4.content": {
    fr: "L'accès aux masterclass est soumis à validation par l'administration de l'AAAM. Les participants s'engagent à :\n• Respecter les horaires et modalités de chaque événement\n• Ne pas enregistrer ou diffuser le contenu sans autorisation\n• Adopter un comportement respectueux envers les intervenants et participants\n\nL'AAAM se réserve le droit d'annuler ou reporter un événement à tout moment.",
    en: "Access to masterclasses is subject to validation by the AAAM administration. Participants agree to:\n• Respect the schedule and terms of each event\n• Not record or share content without authorization\n• Behave respectfully towards speakers and participants\n\nAAAM reserves the right to cancel or postpone an event at any time.",
  },
  "terms.s5.title": { fr: "5. Propriété intellectuelle", en: "5. Intellectual Property" },
  "terms.s5.content": {
    fr: "L'ensemble du contenu de la plateforme AAAM (textes, images, logos, design) est protégé par le droit de la propriété intellectuelle. Toute reproduction, distribution ou utilisation sans autorisation préalable est strictement interdite.\n\nLe logo et le nom « AAAM » sont des marques déposées de l'African Alliance of Artist Managers.",
    en: "All content on the AAAM platform (text, images, logos, design) is protected by intellectual property law. Any reproduction, distribution or use without prior authorization is strictly prohibited.\n\nThe logo and name 'AAAM' are registered trademarks of the African Alliance of Artist Managers.",
  },
  "terms.s6.title": { fr: "6. Suspension et exclusion", en: "6. Suspension and Exclusion" },
  "terms.s6.content": {
    fr: "En cas de violation des statuts, règlements ou valeurs de l'AAAM, un membre peut faire l'objet d'une procédure de suspension ou d'exclusion.\n\nLe membre concerné sera informé des allégations et aura l'occasion de présenter sa défense devant le conseil d'administration avant toute décision.",
    en: "In case of violation of AAAM statutes, regulations or values, a member may be subject to suspension or exclusion proceedings.\n\nThe member concerned will be informed of the allegations and given the opportunity to present their defense before the board of directors prior to any decision.",
  },
  "terms.s7.title": { fr: "7. Limitation de responsabilité", en: "7. Limitation of Liability" },
  "terms.s7.content": {
    fr: "L'AAAM s'efforce de fournir des informations exactes et à jour sur sa plateforme. Toutefois, elle ne peut garantir l'exactitude, l'exhaustivité ou l'actualité de toutes les informations.\n\nL'AAAM ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation de la plateforme ou de l'impossibilité d'y accéder.",
    en: "AAAM strives to provide accurate and up-to-date information on its platform. However, it cannot guarantee the accuracy, completeness or currency of all information.\n\nAAAM shall not be held liable for any direct or indirect damages resulting from the use of the platform or the inability to access it.",
  },

  // ── FOOTER LEGAL LINKS ──
  "footer.privacy": { fr: "Confidentialité", en: "Privacy" },
  "footer.terms": { fr: "Conditions", en: "Terms" },

  // ── COOKIE BANNER ──
  "cookie.title": { fr: "Nous utilisons des cookies", en: "We use cookies" },
  "cookie.desc": {
    fr: "Ce site utilise des cookies essentiels au bon fonctionnement de la plateforme (authentification, préférences de thème et de langue). Aucun cookie publicitaire ou de tracking n'est utilisé.",
    en: "This site uses essential cookies for the platform to function properly (authentication, theme and language preferences). No advertising or tracking cookies are used.",
  },
  "cookie.accept": { fr: "Accepter", en: "Accept" },
  "cookie.reject": { fr: "Refuser", en: "Decline" },
  "cookie.privacy": { fr: "En savoir plus", en: "Learn more" },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, locale: Locale): string {
  return translations[key]?.[locale] ?? key;
}

export default translations;
