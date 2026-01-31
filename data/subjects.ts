
import { GradeContent, Theme, Lesson } from '../types.ts';

const createVideoTheme = (subjectName: string): Theme => ({
  id: `v-${subjectName.toLowerCase().replace(/\s+/g, '-')}`,
  title: "Vidéos de révision",
  description: "Apprenez en images avec nos capsules vidéo synthétiques.",
  lessons: [
    {
      id: `l-vid-${subjectName}-1`,
      title: `Résumé : ${subjectName}`,
      content: "Une synthèse visuelle pour réviser les points essentiels du chapitre en quelques minutes.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      exercises: [
        { id: `ex-vid-${subjectName}-1`, question: "Quel est l'objectif principal de cette capsule ?", options: ["Divertir", "Récapituler", "Évaluer", "Rien"], correctAnswer: 1, justification: "Les vidéos de révision servent à récapituler les acquis." }
      ]
    }
  ]
});

export const ACADEMIC_DATA: GradeContent[] = [
  {
    grade: '6ème',
    subjects: [
      {
        id: 'fr-6', name: 'Français', icon: '📚',
        themes: [
          {
            id: 't-gram-6', title: 'Grammaire', description: 'Classes de mots et fonctions.',
            lessons: [
              {
                id: 'l-adj-6', title: 'L\'adjectif qualificatif',
                content: "L'adjectif précise le nom. Il s'accorde en genre et en nombre.\nEx: Une 'belle' journée.",
                exercises: [{ id: 'ex-adj', question: "Accordez : 'De (grand) forêts'", options: ["grand", "grands", "grande", "grandes"], correctAnswer: 3, justification: "Forêt est féminin pluriel." }]
              }
            ]
          },
          createVideoTheme('Français')
        ]
      },
      {
        id: 'maths-6', name: 'Mathématiques', icon: '📐',
        themes: [
          {
            id: 't-num-6', title: 'Nombres décimaux', description: 'Lire et écrire les nombres à virgule.',
            lessons: [
              {
                id: 'l-rangs-6', title: 'Rangs des chiffres',
                content: "Dans 12,345 : 3 est le chiffre des dixièmes, 4 des centièmes, 5 des millièmes.",
                exercises: [{ id: 'ex-num', question: "Quel est le chiffre des centièmes dans 1,234 ?", options: ["1", "2", "3", "4"], correctAnswer: 2, justification: "C'est le deuxième chiffre après la virgule." }]
              }
            ]
          },
          createVideoTheme('Mathématiques')
        ]
      },
      {
        id: 'svt-6', name: 'SVT', icon: '🌱',
        themes: [
          {
            id: 't-cell-6', title: 'Le Vivant', description: 'La cellule et la diversité.',
            lessons: [
              {
                id: 'l-cellule-6', title: 'La cellule',
                content: "Unité de base du vivant. Contient : Noyau, Cytoplasme, Membrane.",
                exercises: [{ id: 'ex-svt', question: "Quel élément entoure la cellule ?", options: ["Le noyau", "La membrane", "Le sang", "L'eau"], correctAnswer: 1, justification: "La membrane délimite la cellule." }]
              }
            ]
          },
          createVideoTheme('SVT')
        ]
      },
      {
        id: 'arts-6', name: 'Arts Plastiques', icon: '🎨',
        themes: [
          {
            id: 't-coul-6', title: 'La Couleur', description: 'Couleurs primaires et mélanges.',
            lessons: [
              {
                id: 'l-prim-6', title: 'Les couleurs primaires',
                content: "Le Cyan, le Magenta et le Jaune. On ne peut pas les fabriquer par mélange.",
                exercises: [{ id: 'ex-art', question: "Quelle couleur obtient-on en mélangeant Bleu et Jaune ?", options: ["Rouge", "Vert", "Orange", "Violet"], correctAnswer: 1, justification: "Le bleu et le jaune forment le vert." }]
              }
            ]
          },
          createVideoTheme('Arts Plastiques')
        ]
      }
    ]
  },
  {
    grade: '5ème',
    subjects: [
      {
        id: 'maths-5', name: 'Mathématiques', icon: '📐',
        themes: [
          {
            id: 't-rel-5', title: 'Nombres relatifs', description: 'Nombres positifs et négatifs.',
            lessons: [
              {
                id: 'l-ord-5', title: 'Ordre et relatifs',
                content: "Plus un nombre négatif est loin de zéro, plus il est petit. -10 < -2.",
                exercises: [{ id: 'ex-rel', question: "Lequel est le plus grand ?", options: ["-5", "-8", "0", "-1"], correctAnswer: 2, justification: "0 est supérieur à tout nombre négatif." }]
              }
            ]
          },
          createVideoTheme('Mathématiques')
        ]
      },
      {
        id: 'phys-5', name: 'Physique-Chimie', icon: '⚛️',
        themes: [
          {
            id: 't-mat-5', title: 'États de la matière', description: 'L\'eau dans tous ses états.',
            lessons: [
              {
                id: 'l-eau-5', title: 'Changements d\'état',
                content: "La fusion est le passage du solide au liquide. La vaporisation du liquide au gaz.",
                exercises: [{ id: 'ex-phys', question: "Comment appelle-t-on le passage du solide au liquide ?", options: ["Fusion", "Solidification", "Liquéfaction", "Sublimation"], correctAnswer: 0, justification: "C'est la fusion (ex: glace qui fond)." }]
              }
            ]
          },
          createVideoTheme('Physique-Chimie')
        ]
      },
      {
        id: 'hist-5', name: 'Histoire-Géo', icon: '🗺️',
        themes: [
          {
            id: 't-moyen-age', title: 'Le Moyen Âge', description: 'Seigneurs et paysans.',
            lessons: [
              {
                id: 'l-feod-5', title: 'La Féodalité',
                content: "Organisation de la société entre le Suzerain et son Vassal (hommage).",
                exercises: [{ id: 'ex-hist', question: "Qui travaille la terre au Moyen Âge ?", options: ["Le Chevalier", "Le Clergé", "Le Paysan", "Le Roi"], correctAnswer: 2, justification: "Les paysans (serfs ou vilains) cultivent les terres." }]
              }
            ]
          },
          createVideoTheme('Histoire-Géo')
        ]
      }
    ]
  },
  {
    grade: '4ème',
    subjects: [
      {
        id: 'maths-4', name: 'Mathématiques', icon: '📐',
        themes: [
          {
            id: 't-pyt-4', title: 'Théorème de Pythagore', description: 'Calculer des longueurs.',
            lessons: [
              {
                id: 'l-pyt-4', title: 'Le Théorème',
                content: "Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.",
                exercises: [{ id: 'ex-pyt', question: "Si les côtés valent 3 et 4, que vaut l'hypoténuse ?", options: ["5", "7", "25", "10"], correctAnswer: 0, justification: "3² + 4² = 9 + 16 = 25. Racine de 25 = 5." }]
              }
            ]
          },
          createVideoTheme('Mathématiques')
        ]
      },
      {
        id: 'anglais-4', name: 'Anglais', icon: '🇬🇧',
        themes: [
          {
            id: 't-past-4', title: 'The Past', description: 'Raconter des événements passés.',
            lessons: [
              {
                id: 'l-simple-past-4', title: 'Simple Past',
                content: "Verbes réguliers : -ed. Verbes irréguliers : à apprendre par cœur. \nEx: I 'visited' London.",
                exercises: [{ id: 'ex-ang', question: "Passé de 'GO' ?", options: ["Goed", "Went", "Gone", "Gow"], correctAnswer: 1, justification: "Go est un verbe irrégulier (Go/Went/Gone)." }]
              }
            ]
          },
          createVideoTheme('Anglais')
        ]
      },
      {
        id: 'svt-4', name: 'SVT', icon: '🌱',
        themes: [
          {
            id: 't-seisme-4', title: 'Planète Terre', description: 'Séismes et Volcans.',
            lessons: [
              {
                id: 'l-seisme-4', title: 'Les Séismes',
                content: "Vibrations brutales du sol nées d'une rupture des roches en profondeur au niveau du foyer.",
                exercises: [{ id: 'ex-svt4', question: "Comment appelle-t-on le point de rupture en profondeur ?", options: ["Épicentre", "Foyer", "Magnitude", "Faille"], correctAnswer: 1, justification: "Le foyer (ou hypocentre) est le point de départ de la rupture." }]
              }
            ]
          },
          createVideoTheme('SVT')
        ]
      }
    ]
  },
  {
    grade: '3ème',
    subjects: [
      {
        id: 'maths-3', name: 'Mathématiques', icon: '📐',
        themes: [
          {
            id: 't-fonc-3', title: 'Fonctions', description: 'Modéliser des phénomènes.',
            lessons: [
              {
                id: 'l-lin-3', title: 'Fonctions linéaires',
                content: "f(x) = ax. Représentée par une droite passant par l'origine.",
                exercises: [{ id: 'ex-foc', question: "Si f(x) = 2x, que vaut f(3) ?", options: ["5", "6", "1", "9"], correctAnswer: 1, justification: "2 * 3 = 6." }]
              }
            ]
          },
          createVideoTheme('Mathématiques')
        ]
      },
      {
        id: 'hist-3', name: 'Histoire-Géo', icon: '🗺️',
        themes: [
          {
            id: 't-guerres-3', title: 'Le XXème Siècle', description: 'Les guerres mondiales.',
            lessons: [
              {
                id: 'l-1gm-3', title: 'La Grande Guerre',
                content: "1914-1918. Tranchées, guerre totale, 11 novembre 1918.",
                exercises: [{ id: 'ex-hist3', question: "En quelle année commence la 1ère Guerre Mondiale ?", options: ["1911", "1914", "1918", "1939"], correctAnswer: 1, justification: "Elle commence en août 1914." }]
              }
            ]
          },
          createVideoTheme('Histoire-Géo')
        ]
      },
      {
        id: 'phys-3', name: 'Physique-Chimie', icon: '⚛️',
        themes: [
          {
            id: 't-ion-3', title: 'Chimie', description: 'Atomes et Ions.',
            lessons: [
              {
                id: 'l-atome-3', title: 'L\'Atome',
                content: "Composé d'un noyau (protons/neutrons) et d'électrons négatifs.",
                exercises: [{ id: 'ex-pc3', question: "Quelle est la charge du noyau ?", options: ["Négative", "Positive", "Neutre", "Nulle"], correctAnswer: 1, justification: "Le noyau contient les protons (positifs)." }]
              }
            ]
          },
          createVideoTheme('Physique-Chimie')
        ]
      },
      {
        id: 'techno-3', name: 'Technologie', icon: '💻',
        themes: [
          {
            id: 't-algo-3', title: 'Informatique', description: 'Algorithmique et Scratch.',
            lessons: [
              {
                id: 'l-boucle-3', title: 'Les Boucles',
                content: "Permettent de répéter des instructions plusieurs fois sans les réécrire.",
                exercises: [{ id: 'ex-tec', question: "Quel bloc Scratch répète indéfiniment ?", options: ["Si", "Répéter 10 fois", "Répéter indéfiniment", "Quand cliqué"], correctAnswer: 2, justification: "C'est la boucle infinie." }]
              }
            ]
          },
          createVideoTheme('Technologie')
        ]
      }
    ]
  }
];
