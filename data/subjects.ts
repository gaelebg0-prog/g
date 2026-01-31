
import { Subject, SubjectId } from '../types';

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
          content: 'La multiplication est une addition répétée. Par exemple, 3 x 4 c\'est 4 + 4 + 4.',
          exercises: [
            {
              id: 'm-p-1-e1',
              question: 'Combien font 7 x 8 ?',
              options: ['48', '54', '56', '62'],
              correctAnswer: 2,
              justification: '7 x 8 = 56. C\'est une base fondamentale des tables de multiplication.',
              points: 10
            },
            {
              id: 'm-p-1-e2',
              question: 'Si j\'ai 3 paquets de 5 bonbons, combien ai-je de bonbons ?',
              options: ['8', '15', '12', '18'],
              correctAnswer: 1,
              justification: '3 x 5 = 15 bonbons au total.',
              points: 10
            }
          ]
        }
      ],
      'Collège': [
        {
          id: 'm-c-1',
          title: 'Le Théorème de Pythagore',
          content: 'Dans un triangle rectangle, le carré de l\'hypoténuse est égal à la somme des carrés des deux autres côtés.',
          exercises: [
            {
              id: 'm-c-1-e1',
              question: 'Dans un triangle rectangle avec des côtés de 3cm et 4cm, quelle est la longueur de l\'hypoténuse ?',
              options: ['5cm', '6cm', '7cm', '25cm'],
              correctAnswer: 0,
              justification: '3² + 4² = 9 + 16 = 25. La racine carrée de 25 est 5.',
              points: 20
            }
          ]
        }
      ],
      'Lycée': [
        {
          id: 'm-l-1',
          title: 'Les Dérivées',
          content: 'La dérivée d\'une fonction mesure le taux de variation de cette fonction.',
          exercises: [
            {
              id: 'm-l-1-e1',
              question: 'Quelle est la dérivée de f(x) = x² ?',
              options: ['x', '2', '2x', 'x²/2'],
              correctAnswer: 2,
              justification: 'La règle de dérivation pour x^n est n*x^(n-1). Pour n=2, on obtient 2x.',
              points: 30
            }
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
          content: 'Le verbe s\'accorde toujours en nombre et en personne avec son sujet.',
          exercises: [
            {
              id: 'f-p-1-e1',
              question: 'Choisissez la bonne forme : Les enfants ___ dans le parc.',
              options: ['joue', 'jouent', 'joues', 'jouaient'],
              correctAnswer: 1,
              justification: 'Le sujet "Les enfants" est à la troisième personne du pluriel, donc le verbe prend la terminaison -ent.',
              points: 10
            }
          ]
        }
      ],
      'Collège': [
        {
          id: 'f-c-1',
          title: 'Figures de Style',
          content: 'Une métaphore est une comparaison sans outil de comparaison (comme, tel que...).',
          exercises: [
            {
              id: 'f-c-1-e1',
              question: 'Quelle figure de style est utilisée ici : "Cet homme est un lion" ?',
              options: ['Comparaison', 'Métaphore', 'Personnification', 'Hyperbole'],
              correctAnswer: 1,
              justification: 'C\'est une métaphore car on compare l\'homme au lion sans utiliser "comme".',
              points: 20
            }
          ]
        }
      ],
      'Lycée': [
        {
          id: 'f-l-1',
          title: 'L\'Humanisme',
          content: 'Mouvement intellectuel européen de la Renaissance caractérisé par un retour aux textes antiques.',
          exercises: [
            {
              id: 'f-l-1-e1',
              question: 'Lequel de ces auteurs est un représentant majeur de l\'humanisme ?',
              options: ['Victor Hugo', 'Montaigne', 'Molière', 'Baudelaire'],
              correctAnswer: 1,
              justification: 'Montaigne, avec ses "Essais", est une figure centrale de l\'humanisme français.',
              points: 30
            }
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
          title: 'Le cycle de l\'eau',
          content: 'L\'eau s\'évapore, forme des nuages, puis retombe sous forme de pluie.',
          exercises: [
            {
              id: 's-p-1-e1',
              question: 'Comment appelle-t-on le passage de l\'eau liquide à la vapeur ?',
              options: ['Fusion', 'Solidification', 'Évaporation', 'Condensation'],
              correctAnswer: 2,
              justification: 'L\'évaporation est le processus par lequel l\'eau se transforme en gaz sous l\'effet de la chaleur.',
              points: 10
            }
          ]
        }
      ],
      'Collège': [
        {
          id: 's-c-1',
          title: 'La Cellule',
          content: 'La cellule est l\'unité de base du vivant. Elle contient un noyau, du cytoplasme et une membrane.',
          exercises: [
            {
              id: 's-c-1-e1',
              question: 'Quelle partie de la cellule contient l\'information génétique (ADN) ?',
              options: ['La membrane', 'Le cytoplasme', 'Le noyau', 'La mitochondrie'],
              correctAnswer: 2,
              justification: 'Le noyau est le centre de contrôle de la cellule et contient l\'ADN.',
              points: 20
            }
          ]
        }
      ],
      'Lycée': [
        {
          id: 's-l-1',
          title: 'La Relativité Restreinte',
          content: 'Théorie d\'Einstein expliquant que le temps et l\'espace sont liés.',
          exercises: [
            {
              id: 's-l-1-e1',
              question: 'Quelle est la formule célèbre liant l\'énergie et la masse ?',
              options: ['F = ma', 'E = mc²', 'V = IR', 'P = IV'],
              correctAnswer: 1,
              justification: 'E=mc² montre l\'équivalence entre la masse et l\'énergie.',
              points: 30
            }
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
          title: 'La Préhistoire',
          content: 'Période allant de l\'apparition de l\'homme à l\'invention de l\'écriture.',
          exercises: [
            {
              id: 'h-p-1-e1',
              question: 'Quelle invention marque la fin de la préhistoire ?',
              options: ['Le feu', 'La roue', 'L\'écriture', 'L\'agriculture'],
              correctAnswer: 2,
              justification: 'L\'invention de l\'écriture vers -3300 marque le passage à l\'Antiquité.',
              points: 10
            }
          ]
        }
      ],
      'Collège': [
        {
          id: 'h-c-1',
          title: 'La Révolution Française',
          content: 'Période de profonds changements politiques et sociaux en France à partir de 1789.',
          exercises: [
            {
              id: 'h-c-1-e1',
              question: 'Quelle est la date de la prise de la Bastille ?',
              options: ['14 juillet 1789', '4 août 1789', '21 septembre 1792', '9 thermidor'],
              correctAnswer: 0,
              justification: 'Le 14 juillet 1789 est l\'événement symbolique du début de la Révolution.',
              points: 20
            }
          ]
        }
      ],
      'Lycée': [
        {
          id: 'h-l-1',
          title: 'La Guerre Froide',
          content: 'Période de tensions entre les USA et l\'URSS de 1947 à 1991.',
          exercises: [
            {
              id: 'h-l-1-e1',
              question: 'Quelle crise a failli mener à une guerre nucléaire en 1962 ?',
              options: ['Crise de Berlin', 'Guerre de Corée', 'Crise des missiles de Cuba', 'Guerre du Vietnam'],
              correctAnswer: 2,
              justification: 'La découverte de missiles soviétiques à Cuba a provoqué une tension extrême entre Kennedy et Khrouchtchev.',
              points: 30
            }
          ]
        }
      ]
    }
  }
];
