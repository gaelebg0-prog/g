
import { Subject } from '../types.ts';

export const SUBJECTS: Subject[] = [
  {
    id: 'maths',
    name: 'Mathématiques',
    icon: '📐',
    color: 'bg-blue-500',
    levels: {
      'Primaire': [
        {
          id: 'm-p-1',
          title: 'Addition & Soustraction',
          content: 'L\'addition permet de calculer un total. La soustraction permet de trouver une différence.\nEx: 5 + 3 = 8 | 10 - 4 = 6',
          exercises: [{ id: 'm-p-1-e1', question: 'Combien font 12 + 15 ?', options: ['25', '27', '30', '22'], correctAnswer: 1, justification: '12 + 10 = 22, 22 + 5 = 27.', points: 10 }]
        }
      ],
      'Collège': [
        {
          id: 'm-c-1',
          title: 'Le Théorème de Thalès',
          content: 'Thalès permet de calculer des longueurs dans des triangles emboîtés avec des droites parallèles.\nFormule : AM/AB = AN/AC = MN/BC',
          exercises: [{ id: 'm-c-1-e1', question: 'Si AM/AB = 0.5 et BC = 10, que vaut MN ?', options: ['5', '2.5', '20', '7.5'], correctAnswer: 0, justification: 'MN = BC * (AM/AB) = 10 * 0.5 = 5.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 'm-l-1',
          title: 'Nombres Complexes',
          content: 'L\'ensemble C prolonge R. On définit i tel que i² = -1.\nForme algébrique : z = a + bi (a: partie réelle, b: partie imaginaire).',
          exercises: [{ id: 'm-l-1-e1', question: 'Que vaut (2 + 3i) + (1 - i) ?', options: ['3 + 2i', '3 + 4i', '1 + 4i', '2 + 2i'], correctAnswer: 0, justification: 'On additionne réels entre eux et imaginaires entre eux : 2+1=3 et 3i-i=2i.', points: 30 }]
        }
      ]
    }
  },
  {
    id: 'francais',
    name: 'Français & Philo',
    icon: '📚',
    color: 'bg-orange-500',
    levels: {
      'Primaire': [
        {
          id: 'f-p-1',
          title: 'Les Homophones (a/à)',
          content: '"a" sans accent est le verbe avoir conjugué. On peut le remplacer par "avait".\n"à" avec accent est une préposition.',
          exercises: [{ id: 'f-p-1-e1', question: 'Il ___ mangé ___ la cantine.', options: ['a / a', 'à / à', 'à / a', 'a / à'], correctAnswer: 3, justification: 'Il avait mangé (a) à la cantine (préposition).', points: 10 }]
        }
      ],
      'Collège': [
        {
          id: 'f-c-1',
          title: 'L\'Ironie',
          content: 'L\'ironie consiste à dire le contraire de ce que l\'on pense pour se moquer.',
          exercises: [{ id: 'f-c-1-e1', question: '"Quel beau temps !" alors qu\'il pleut est une...', options: ['Métaphore', 'Antiphrase', 'Comparaison', 'Hyperbole'], correctAnswer: 1, justification: 'L\'antiphrase est le procédé majeur de l\'ironie.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 'f-l-1',
          title: 'Introduction à la Philosophie : Le Bonheur',
          content: 'Le bonheur est un état de satisfaction durable. Épicure le définit par l\'absence de souffrance (ataraxie). Pour Kant, c\'est un idéal de l\'imagination.',
          exercises: [{ id: 'f-l-1-e1', question: 'Selon Épicure, le bonheur réside dans...', options: ['La richesse', 'L\'absence de trouble (ataraxie)', 'Le pouvoir', 'Le travail acharné'], correctAnswer: 1, justification: 'La philosophie épicurienne prône la recherche de plaisirs simples et l\'absence de douleur.', points: 30 }]
        }
      ]
    }
  },
  {
    id: 'sciences',
    name: 'Sciences & Physique',
    icon: '🧪',
    color: 'bg-emerald-500',
    levels: {
      'Primaire': [
        {
          id: 's-p-1',
          title: 'Les États de la Matière',
          content: 'L\'eau peut être solide (glace), liquide ou gazeuse (vapeur).',
          exercises: [{ id: 's-p-1-e1', question: 'À quelle température l\'eau gèle-t-elle ?', options: ['100°C', '0°C', '50°C', '-10°C'], correctAnswer: 1, justification: 'L\'eau pure devient solide à 0°C.', points: 10 }]
        }
      ],
      'Collège': [
        {
          id: 's-c-1',
          title: 'Le Système Solaire',
          content: 'Huit planètes tournent autour du Soleil. Les planètes telluriques sont proches du Soleil.',
          exercises: [{ id: 's-c-1-e1', question: 'Quelle est la planète la plus proche du Soleil ?', options: ['Vénus', 'Terre', 'Mercure', 'Mars'], correctAnswer: 2, justification: 'Mercure est la première planète du système solaire.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 's-l-1',
          title: 'Thermodynamique : Loi des Gaz Parfaits',
          content: 'Relation PV = nRT.\nP: pression (Pa), V: volume (m3), n: moles, R: 8.314, T: Température (Kelvin).',
          exercises: [{ id: 's-l-1-e1', question: 'Pour un gaz, si on double la pression à température constante, le volume...', options: ['Double', 'Reste identique', 'Est divisé par deux', 'Triple'], correctAnswer: 2, justification: 'P*V = constante, donc si P x2, V /2.', points: 30 }]
        }
      ]
    }
  },
  {
    id: 'histoire',
    name: 'Histoire',
    icon: '📜',
    color: 'bg-purple-500',
    levels: {
      'Primaire': [
        {
          id: 'h-p-1',
          title: 'Les Châteaux Forts',
          content: 'Au Moyen-Âge, les seigneurs vivaient dans des châteaux pour se protéger.',
          exercises: [{ id: 'h-p-1-e1', question: 'Où se réfugie-t-on en dernier recours dans un château ?', options: ['Les douves', 'La cour', 'Le donjon', 'L\'écurie'], correctAnswer: 2, justification: 'Le donjon est la tour la plus haute et la mieux protégée.', points: 10 }]
        }
      ],
      'Collège': [
        {
          id: 'h-c-1',
          title: 'La Première Guerre Mondiale',
          content: '1914-1918. Une guerre de tranchées meurtrière.',
          exercises: [{ id: 'h-c-1-e1', question: 'En quelle année l\'armistice a-t-il été signé ?', options: ['1914', '1916', '1918', '1945'], correctAnswer: 2, justification: 'Le 11 novembre 1918.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 'h-l-1',
          title: 'La Guerre Froide (1947-1991)',
          content: 'Conflit idéologique entre USA (Capitalisme) et URSS (Communisme) sans affrontement direct.',
          exercises: [{ id: 'h-l-1-e1', question: 'Quel symbole tombe en 1989 marquant la fin de la Guerre Froide ?', options: ['Le Mur de Berlin', 'La Statue de la Liberté', 'Le Kremlin', 'La Tour Eiffel'], correctAnswer: 0, justification: 'La chute du mur de Berlin préfigure l\'effondrement de l\'URSS.', points: 30 }]
        }
      ]
    }
  },
  {
    id: 'geographie',
    name: 'Géographie',
    icon: '🌍',
    color: 'bg-teal-500',
    levels: {
      'Primaire': [
        {
          id: 'g-p-1',
          title: 'Les Continents',
          content: 'Il y a 6 continents : Europe, Afrique, Asie, Amérique, Océanie, Antarctique.',
          exercises: [{ id: 'g-p-1-e1', question: 'Sur quel continent se trouve la France ?', options: ['Asie', 'Amérique', 'Europe', 'Afrique'], correctAnswer: 2, justification: 'La France est au coeur de l\'Europe.', points: 10 }]
        }
      ],
      'Collège': [
        {
          id: 'g-c-1',
          title: 'Le Développement Durable',
          content: 'Répondre aux besoins du présent sans compromettre ceux des générations futures.',
          exercises: [{ id: 'g-c-1-e1', question: 'Quels sont les 3 piliers du DD ?', options: ['Argent, Or, Bronze', 'Économie, Social, Environnement', 'Paix, Travail, Patrie', 'Liberté, Égalité, Fraternité'], correctAnswer: 1, justification: 'Le DD doit concilier ces trois aspects.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 'g-l-1',
          title: 'La Mondialisation',
          content: 'Processus d\'intégration croissante des territoires et des économies à l\'échelle mondiale.',
          exercises: [{ id: 'g-l-1-e1', question: 'Qu\'est-ce qu\'une FTN ?', options: ['Force Terrestre Nationale', 'Firme Transnationale', 'Fonds Total Net', 'Flux de Transport'], correctAnswer: 1, justification: 'Entreprise présente dans plusieurs pays (ex: Apple, Toyota).', points: 30 }]
        }
      ]
    }
  },
  {
    id: 'anglais',
    name: 'Anglais',
    icon: '🇬🇧',
    color: 'bg-red-600',
    levels: {
      'Primaire': [
        {
          id: 'a-p-1',
          title: 'Greetings & Colors',
          content: 'Hello, Goodbye. Blue, Red, Green, Yellow.',
          exercises: [{ id: 'a-p-1-e1', question: 'Comment dit-on "Vert" ?', options: ['Red', 'Green', 'Yellow', 'Blue'], correctAnswer: 1, justification: 'Green signifie Vert.', points: 10 }]
        }
      ],
      'Collège': [
        {
          id: 'a-c-1',
          title: 'Present Perfect',
          content: 'S\'utilise pour une action passée ayant un lien avec le présent. Formule : Have/Has + Participe Passé.',
          exercises: [{ id: 'a-c-1-e1', question: '"I ___ my keys!" (Je viens de perdre mes clés)', options: ['lost', 'have lost', 'has lost', 'am losing'], correctAnswer: 1, justification: 'Present Perfect pour un résultat présent.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 'a-l-1',
          title: 'Conditionals (Type 2)',
          content: 'Action imaginaire ou peu probable au présent.\nStructure : If + Simple Past, would + Base Verb.',
          exercises: [{ id: 'a-l-1-e1', question: '"If I ___ rich, I would travel more."', options: ['am', 'was/were', 'will be', 'have been'], correctAnswer: 1, justification: 'Prétérit après "If" pour exprimer l\'irréel.', points: 30 }]
        }
      ]
    }
  },
  {
    id: 'informatique',
    name: 'Informatique & SNT',
    icon: '💻',
    color: 'bg-gray-800',
    levels: {
      'Primaire': [
        {
          id: 'i-p-1',
          title: 'Souris & Clavier',
          content: 'La souris pour cliquer, le clavier pour écrire.',
          exercises: [{ id: 'i-p-1-e1', question: 'Quelle touche permet d\'effacer ?', options: ['Entrée', 'Retour Arrière', 'Espace', 'Shift'], correctAnswer: 1, justification: 'Backspace ou Retour Arrière efface le texte.', points: 10 }]
        }
      ],
      'Collège': [
        {
          id: 'i-c-1',
          title: 'Programmation avec Scratch',
          content: 'Assembler des blocs pour créer des algorithmes.',
          exercises: [{ id: 'i-c-1-e1', question: 'Quel bloc répète indéfiniment ?', options: ['Si... alors', 'Répéter 10 fois', 'Répéter indéfiniment', 'Avancer'], correctAnswer: 2, justification: 'C\'est la boucle infinie.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 'i-l-1',
          title: 'Algorithmes : Listes en Python',
          content: 'Une liste permet de stocker plusieurs valeurs. Indexée à partir de 0.',
          exercises: [{ id: 'i-l-1-e1', question: 'Que fait L.append(5) ?', options: ['Supprime 5', 'Ajoute 5 à la fin', 'Trie la liste', 'Calcule la somme'], correctAnswer: 1, justification: 'Append ajoute un élément à la fin d\'une liste Python.', points: 30 }]
        }
      ]
    }
  },
  {
    id: 'arts',
    name: 'Arts Plastiques',
    icon: '🎨',
    color: 'bg-pink-500',
    levels: {
      'Primaire': [
        {
          id: 'art-p-1',
          title: 'Couleurs Primaires',
          content: 'Cyan (Bleu), Magenta (Rouge), Jaune.',
          exercises: [{ id: 'art-p-1-e1', question: 'Cyan + Jaune = ?', options: ['Vert', 'Orange', 'Violet', 'Gris'], correctAnswer: 0, justification: 'Le bleu et le jaune font du vert.', points: 10 }]
        }
      ],
      'Collège': [
        {
          id: 'art-c-1',
          title: 'La Perspective',
          content: 'Technique pour représenter la profondeur sur une feuille plane.',
          exercises: [{ id: 'art-c-1-e1', question: 'Comment s\'appelle le point où convergent les lignes ?', options: ['Point mort', 'Point de fuite', 'Point final', 'Point de vue'], correctAnswer: 1, justification: 'Le point de fuite simule l\'éloignement.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 'art-l-1',
          title: 'Analyse d\'oeuvre : Guernica',
          content: 'Tableau monumental de Picasso (1937) dénonçant les horreurs de la guerre.',
          exercises: [{ id: 'art-l-1-e1', question: 'Quel mouvement artistique Guernica utilise-t-il ?', options: ['Impressionnisme', 'Cubisme / Surréalisme', 'Art Abstrait', 'Pop Art'], correctAnswer: 1, justification: 'Picasso utilise la déconstruction cubiste pour exprimer la douleur.', points: 30 }]
        }
      ]
    }
  },
  {
    id: 'civisme',
    name: 'Citoyenneté',
    icon: '⚖️',
    color: 'bg-amber-600',
    levels: {
      'Primaire': [
        {
          id: 'civ-p-1',
          title: 'Les Symboles de la France',
          content: 'Le drapeau tricolore, l\'hymne (La Marseillaise), la devise.',
          exercises: [{ id: 'civ-p-1-e1', question: 'Quelle est la devise de la France ?', options: ['Paix et Travail', 'Liberté, Égalité, Fraternité', 'Un pour tous', 'Vivre ensemble'], correctAnswer: 1, justification: 'Héritage de la Révolution Française.', points: 10 }]
        }
      ],
      'Collège': [
        {
          id: 'civ-c-1',
          title: 'Le Rôle du Maire',
          content: 'Le maire dirige la commune et s\'occupe des écoles primaires.',
          exercises: [{ id: 'civ-c-1-e1', question: 'Par qui le maire est-il élu ?', options: ['Le Président', 'Les citoyens directement', 'Le Conseil Municipal', 'Le Préfet'], correctAnswer: 2, justification: 'Le suffrage est indirect : les citoyens élisent le conseil, qui élit le maire.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 'civ-l-1',
          title: 'Les Institutions de l\'UE',
          content: 'Commission Européenne, Parlement Européen, Conseil de l\'UE.',
          exercises: [{ id: 'civ-l-1-e1', question: 'Où siège le Parlement Européen ?', options: ['Paris', 'Bruxelles / Strasbourg', 'Londres', 'Rome'], correctAnswer: 1, justification: 'Le siège officiel est à Strasbourg.', points: 30 }]
        }
      ]
    }
  },
  {
    id: 'ecologie',
    name: 'Écologie',
    icon: '🌿',
    color: 'bg-green-600',
    levels: {
      'Primaire': [
        {
          id: 'eco-p-1',
          title: 'Le Tri des Déchets',
          content: 'Bac jaune pour le plastique/papier, bac gris pour le reste, bac vert pour le verre.',
          exercises: [{ id: 'e-1', question: 'Où va une bouteille en plastique ?', options: ['Bac gris', 'Bac jaune', 'Bac vert', 'La mer'], correctAnswer: 1, justification: 'Elle se recycle !', points: 10 }]
        }
      ],
      'Collège': [
        {
          id: 'eco-c-1',
          title: 'La Biodiversité',
          content: 'Diversité des espèces vivantes sur Terre. Menacée par la pollution.',
          exercises: [{ id: 'eco-c-1-e1', question: 'Qu\'est-ce qui aide à la pollinisation des plantes ?', options: ['Le vent', 'Les abeilles', 'Les fleurs elles-mêmes', 'Tous les trois'], correctAnswer: 3, justification: 'Les trois jouent un rôle, mais les insectes sont cruciaux.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 'eco-l-1',
          title: 'Empreinte Carbone & Transition',
          content: 'Mesurer l\'impact de nos activités en CO2. Passer aux énergies renouvelables.',
          exercises: [{ id: 'eco-l-1-e1', question: 'Quel secteur émet le plus de GES en France ?', options: ['Numérique', 'Transports', 'Agriculture', 'Mode'], correctAnswer: 1, justification: 'Le transport routier est la source majeure.', points: 30 }]
        }
      ]
    }
  }
];
