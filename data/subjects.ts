
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
          title: 'Les Multiplications de base',
          content: 'La multiplication est une addition répétée. Par exemple, 3 x 4 c\'est 4 + 4 + 4.\n\nPoints clés :\n- Tout nombre multiplié par 0 égale 0.\n- Tout nombre multiplié par 1 ne change pas.',
          exercises: [
            { id: 'm-p-1-e1', question: 'Combien font 7 x 8 ?', options: ['48', '54', '56', '62'], correctAnswer: 2, justification: '7 x 8 = 56. Un classique des tables !', points: 10 },
            { id: 'm-p-1-e2', question: 'Si j\'ai 3 paquets de 5 bonbons, combien ai-je de bonbons ?', options: ['8', '15', '12', '18'], correctAnswer: 1, justification: '3 x 5 = 15 bonbons.', points: 10 }
          ]
        },
        {
          id: 'm-p-2',
          title: 'Géométrie : Carré et Rectangle',
          content: 'Le carré a 4 côtés égaux. Le rectangle a ses côtés opposés égaux.',
          exercises: [
            { id: 'm-p-2-e1', question: 'Combien de côtés a un triangle ?', options: ['2', '3', '4', '5'], correctAnswer: 1, justification: 'Un tri-angle a 3 angles et 3 côtés.', points: 10 }
          ]
        }
      ],
      'Collège': [
        {
          id: 'm-c-1',
          title: 'Le Théorème de Pythagore',
          content: 'Dans un triangle rectangle, le carré de l\'hypoténuse est égal à la somme des carrés des deux autres côtés.',
          exercises: [
            { id: 'm-c-1-e1', question: 'Côtés de 3cm et 4cm, quelle est l\'hypoténuse ?', options: ['5cm', '6cm', '7cm', '25cm'], correctAnswer: 0, justification: '3² + 4² = 25. √25 = 5.', points: 20 }
          ]
        },
        {
          id: 'm-c-2',
          title: 'Calcul Littéral',
          content: 'Le calcul littéral utilise des lettres pour représenter des nombres inconnus.',
          exercises: [
            { id: 'm-c-2-e1', question: 'Simplifiez : 2x + 3x', options: ['5x', '6x', '5x²', 'x'], correctAnswer: 0, justification: 'On additionne les coefficients : 2+3=5.', points: 20 }
          ]
        }
      ],
      'Lycée': [
        {
          id: 'm-l-1',
          title: 'Les Dérivées',
          content: 'La dérivée d\'une fonction mesure son taux de variation instantané.',
          exercises: [
            { id: 'm-l-1-e1', question: 'Dérivée de f(x) = x² ?', options: ['x', '2', '2x', 'x²/2'], correctAnswer: 2, justification: 'La règle est n*x^(n-1).', points: 30 }
          ]
        }
      ]
    }
  },
  {
    id: 'francais',
    name: 'Français',
    icon: '📚',
    color: 'bg-orange-500',
    levels: {
      'Primaire': [
        {
          id: 'f-p-1',
          title: 'L\'accord sujet-verbe',
          content: 'Le verbe s\'accorde toujours avec son sujet.',
          exercises: [
            { id: 'f-p-1-e1', question: 'Les enfants ___ (jouer).', options: ['joue', 'jouent', 'joues', 'jouaient'], correctAnswer: 1, justification: 'Sujet pluriel = terminaison -ent.', points: 10 }
          ]
        }
      ],
      'Collège': [
        {
          id: 'f-c-1',
          title: 'Figures de Style',
          content: 'La métaphore et la comparaison sont les bases de l\'expression poétique.',
          exercises: [
            { id: 'f-c-1-e1', question: '"Cet homme est un lion" est une...', options: ['Comparaison', 'Métaphore', 'Hyperbole', 'Anaphore'], correctAnswer: 1, justification: 'Pas d\'outil de comparaison (comme).', points: 20 }
          ]
        }
      ],
      'Lycée': [
        {
          id: 'f-l-1',
          title: 'Le Romantisme',
          content: 'Mouvement mettant en avant les sentiments et le "Moi".',
          exercises: [
            { id: 'f-l-1-e1', question: 'Auteur phare du Romantisme ?', options: ['Molière', 'Hugo', 'Zola', 'Rabelais'], correctAnswer: 1, justification: 'Victor Hugo est le chef de file du romantisme.', points: 30 }
          ]
        }
      ]
    }
  },
  {
    id: 'sciences',
    name: 'Sciences',
    icon: '🧪',
    color: 'bg-emerald-500',
    levels: {
      'Primaire': [
        {
          id: 's-p-1',
          title: 'Le Cycle de l\'Eau',
          content: 'Évaporation, Condensation, Précipitation.',
          exercises: [
            { id: 's-p-1-e1', question: 'Passage liquide -> gaz ?', options: ['Fusion', 'Vaporisation', 'Solidification', 'Condensation'], correctAnswer: 1, justification: 'L\'eau s\'évapore en vapeur.', points: 10 }
          ]
        }
      ],
      'Collège': [
        {
          id: 's-c-1',
          title: 'Système Solaire',
          content: 'Huit planètes gravitent autour du Soleil.',
          exercises: [
            { id: 's-c-1-e1', question: 'La planète rouge ?', options: ['Vénus', 'Mars', 'Jupiter', 'Saturne'], correctAnswer: 1, justification: 'Mars doit sa couleur à l\'oxyde de fer.', points: 20 }
          ]
        }
      ],
      'Lycée': [
        {
          id: 's-l-1',
          title: 'Génétique : L\'ADN',
          content: 'L\'ADN est le support de l\'hérédité.',
          exercises: [
            { id: 's-l-1-e1', question: 'Où se trouve l\'ADN ?', options: ['Membrane', 'Cytoplasme', 'Noyau', 'Ribosome'], correctAnswer: 2, justification: 'Chez les eucaryotes, l\'ADN est protégé dans le noyau.', points: 30 }
          ]
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
          title: 'Les Gaulois',
          content: 'Peuple vivant sur notre territoire avant les Romains.',
          exercises: [
            { id: 'h-p-1-e1', question: 'Chef gaulois célèbre ?', options: ['Napoléon', 'Clovis', 'Vercingétorix', 'Charlemagne'], correctAnswer: 2, justification: 'Il a affronté César à Alésia.', points: 10 }
          ]
        }
      ],
      'Collège': [
        {
          id: 'h-c-1',
          title: 'La Renaissance',
          content: 'Période de renouveau artistique et scientifique.',
          exercises: [
            { id: 'h-c-1-e1', question: 'Artiste de la Joconde ?', options: ['Raphaël', 'Michel-Ange', 'De Vinci', 'Donatello'], correctAnswer: 2, justification: 'Léonard de Vinci, génie universel.', points: 20 }
          ]
        }
      ],
      'Lycée': [
        {
          id: 'h-l-1',
          title: 'Guerre Froide',
          content: 'Monde bipolaire (USA vs URSS).',
          exercises: [
            { id: 'h-l-1-e1', question: 'Chute du mur de Berlin ?', options: ['1945', '1962', '1989', '1991'], correctAnswer: 2, justification: 'Le 9 novembre 1989.', points: 30 }
          ]
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
          content: 'Il y a 6 continents habités sur Terre.',
          exercises: [
            { id: 'g-p-1-e1', question: 'Plus grand continent ?', options: ['Europe', 'Afrique', 'Asie', 'Amérique'], correctAnswer: 2, justification: 'L\'Asie est le plus grand en surface et population.', points: 10 }
          ]
        }
      ],
      'Collège': [
        {
          id: 'g-c-1',
          title: 'La France urbaine',
          content: 'L\'urbanisation transforme le territoire.',
          exercises: [
            { id: 'g-c-1-e1', question: 'Plus grande aire urbaine ?', options: ['Lyon', 'Marseille', 'Paris', 'Lille'], correctAnswer: 2, justification: 'Paris domine largement.', points: 20 }
          ]
        }
      ],
      'Lycée': [
        {
          id: 'g-l-1',
          title: 'Mondialisation',
          content: 'L\'interconnexion croissante du monde.',
          exercises: [
            { id: 'g-l-1-e1', question: 'Qu\'est-ce qu\'une FTN ?', options: ['Firme Transnationale', 'Force Terrestre Nationale', 'Fonds Total Net', 'Flux de Transport'], correctAnswer: 0, justification: 'Entreprise présente dans plusieurs pays.', points: 30 }
          ]
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
          title: 'Colors & Animals',
          content: 'Red (rouge), Blue (bleu), Dog (chien), Cat (chat).',
          exercises: [
            { id: 'a-p-1-e1', question: 'What color is "Vert" ?', options: ['Red', 'Green', 'Yellow', 'Black'], correctAnswer: 1, justification: 'Green = Vert.', points: 10 }
          ]
        }
      ],
      'Collège': [
        {
          id: 'a-c-1',
          title: 'Present Continuous',
          content: 'Be + V-ing pour une action en cours.',
          exercises: [
            { id: 'a-c-1-e1', question: '"I ___ a book now."', options: ['read', 'reads', 'am reading', 'reading'], correctAnswer: 2, justification: 'Be (am) + read + ing.', points: 20 }
          ]
        }
      ],
      'Lycée': [
        {
          id: 'a-l-1',
          title: 'Passive Voice',
          content: 'Sujet subit l\'action.',
          exercises: [
            { id: 'a-l-1-e1', question: '"The cake ___ by Mary."', options: ['ate', 'was eating', 'was eaten', 'eats'], correctAnswer: 2, justification: 'Be au passé + Participe passé.', points: 30 }
          ]
        }
      ]
    }
  },
  {
    id: 'informatique',
    name: 'Informatique',
    icon: '💻',
    color: 'bg-gray-800',
    levels: {
      'Primaire': [
        {
          id: 'i-p-1',
          title: 'Les composants du PC',
          content: 'Souris, Clavier, Écran, Unité centrale.',
          exercises: [
            { id: 'i-p-1-e1', question: 'Le cerveau du PC ?', options: ['Écran', 'Clavier', 'Processeur', 'Imprimante'], correctAnswer: 2, justification: 'C\'est lui qui fait tous les calculs.', points: 10 }
          ]
        }
      ],
      'Collège': [
        {
          id: 'i-c-1',
          title: 'Introduction au HTML',
          content: 'Structure des pages web.',
          exercises: [
            { id: 'i-c-1-e1', question: 'Balise pour un titre ?', options: ['<p>', '<a>', '<h1>', '<div>'], correctAnswer: 2, justification: 'h1 signifie "Heading 1".', points: 20 }
          ]
        }
      ],
      'Lycée': [
        {
          id: 'i-l-1',
          title: 'Algorithmes : Les Boucles',
          content: 'Répéter des instructions.',
          exercises: [
            { id: 'i-l-1-e1', question: 'Boucle pour un nombre fini ?', options: ['While', 'For', 'If', 'Return'], correctAnswer: 1, justification: 'La boucle FOR est idéale quand on connaît le nombre de répétitions.', points: 30 }
          ]
        }
      ]
    }
  },
  {
    id: 'arts',
    name: 'Arts',
    icon: '🎨',
    color: 'bg-pink-500',
    levels: {
      'Primaire': [
        {
          id: 'art-p-1',
          title: 'Couleurs Primaires',
          content: 'Bleu, Rouge, Jaune.',
          exercises: [
            { id: 'art-p-1-e1', question: 'Mélange Bleu + Jaune ?', options: ['Violet', 'Vert', 'Orange', 'Gris'], correctAnswer: 1, justification: 'Le bleu et le jaune font du vert.', points: 10 }
          ]
        }
      ],
      'Collège': [
        {
          id: 'art-c-1',
          title: 'L\'Impressionnisme',
          content: 'Capturer la lumière.',
          exercises: [
            { id: 'art-c-1-e1', question: 'Peintre des Nymphéas ?', options: ['Monet', 'Renoir', 'Degas', 'Pissarro'], correctAnswer: 0, justification: 'Claude Monet, à Giverny.', points: 20 }
          ]
        }
      ],
      'Lycée': [
        {
          id: 'art-l-1',
          title: 'L\'Art Abstrait',
          content: 'Ne représente pas la réalité visible.',
          exercises: [
            { id: 'art-l-1-e1', question: 'Pionnier de l\'abstraction ?', options: ['Picasso', 'Kandinsky', 'Dali', 'Warhol'], correctAnswer: 1, justification: 'Vassily Kandinsky est considéré comme l\'un des fondateurs.', points: 30 }
          ]
        }
      ]
    }
  }
];
