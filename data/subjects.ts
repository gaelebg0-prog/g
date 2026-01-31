
import { Subject } from '../types.ts';

export const SUBJECTS: Subject[] = [
  // ... (Garder les autres matières)
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
        }
      ],
      'Collège': [],
      'Lycée': []
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
          title: 'Protéger notre Planète',
          content: `L'écologie, c'est l'étude des relations entre les êtres vivants et leur environnement. Notre planète Terre est comme une grande maison que nous devons partager et protéger.\n\nLes 3 gestes essentiels (La règle des 3R) :\n1. Réduire : Utiliser moins de choses (moins de plastique, moins d'eau).\n2. Réutiliser : Donner une seconde vie aux objets au lieu de les jeter.\n3. Recycler : Trier ses déchets pour en faire de nouveaux objets.\n\nPourquoi est-ce important ?\nParce que les ressources de la Terre ne sont pas infinies. L'eau potable est rare, et les forêts mettent des dizaines d'années à pousser. En faisant attention, nous protégeons les animaux et notre propre santé !`,
          exercises: [
            { id: 'e-1', question: 'Lequel de ces objets va dans la poubelle jaune (recyclage) ?', options: ['Un reste de pomme', 'Une bouteille en plastique', 'Une couche culotte', 'Un mouchoir sale'], correctAnswer: 1, justification: 'Le plastique se recycle pour créer de nouveaux objets.', points: 10 },
            { id: 'e-2', question: 'Que signifie "Réduire" dans la règle des 3R ?', options: ['Acheter plus', 'Utiliser moins de ressources', 'Jeter par terre', 'Couper les arbres'], correctAnswer: 1, justification: 'Moins on consomme, moins on produit de pollution.', points: 10 },
            { id: 'e-3', question: 'Pourquoi faut-il fermer le robinet quand on se brosse les dents ?', options: ['Pour faire du bruit', 'Pour économiser l\'eau potable', 'Pour s\'amuser', 'Parce que c\'est interdit'], correctAnswer: 1, justification: 'L\'eau est précieuse, il ne faut pas la gaspiller.', points: 10 },
            { id: 'e-4', question: 'Quel transport pollue le MOINS pour aller à l\'école ?', options: ['La voiture', 'Le vélo', 'Le bus', 'L\'avion'], correctAnswer: 1, justification: 'Le vélo utilise l\'énergie de tes jambes !', points: 10 },
            { id: 'e-5', question: 'Où doit-on jeter les piles usagées ?', options: ['Dans la rue', 'Dans un bac spécial en magasin', 'À la poubelle grise', 'Dans les toilettes'], correctAnswer: 1, justification: 'Les piles contiennent des produits dangereux qui polluent la terre.', points: 10 },
            { id: 'e-6', question: 'Lequel est un déchet organique (qui se décompose) ?', options: ['Une canette', 'Une peau de banane', 'Un sac plastique', 'Un jouet cassé'], correctAnswer: 1, justification: 'La peau de banane peut servir de compost pour les plantes.', points: 10 },
            { id: 'e-7', question: 'Combien de temps un sac plastique met-il à disparaître dans la nature ?', options: ['1 an', '10 ans', '450 ans', 'Jamais'], correctAnswer: 2, justification: 'C\'est énorme ! C\'est pour ça qu\'il faut éviter le plastique.', points: 10 },
            { id: 'e-8', question: 'Que peut-on faire avec de vieux vêtements ?', options: ['Les brûler', 'Les donner ou les recycler', 'Les mettre dans la forêt', 'Les manger'], correctAnswer: 1, justification: 'La réutilisation évite de fabriquer de nouveaux tissus.', points: 10 },
            { id: 'e-9', question: 'Quelle est la couleur habituelle du bac pour le verre ?', options: ['Bleu', 'Jaune', 'Vert', 'Rouge'], correctAnswer: 2, justification: 'Le vert rappelle souvent le recyclage du verre.', points: 10 },
            { id: 'e-10', question: 'Le papier se recycle-t-il ?', options: ['Oui, toujours', 'Non, jamais', 'Seulement le papier journal', 'Seulement si c\'est écrit'], correctAnswer: 0, justification: 'Le papier peut être transformé en nouveau papier plusieurs fois.', points: 10 },
            { id: 'e-11', question: 'Comment appelle-t-on le fait de faire du terreau avec des déchets ?', options: ['Le recyclage', 'Le compostage', 'Le jardinage', 'Le mélange'], correctAnswer: 1, justification: 'Le compost transforme les déchets en nourriture pour la terre.', points: 10 },
            { id: 'e-12', question: 'Que se passe-t-il si on jette du plastique dans la mer ?', options: ['Il fond', 'Les poissons le mangent et tombent malades', 'Il devient du sable', 'Il nettoie l\'eau'], correctAnswer: 1, justification: 'C\'est une grave pollution pour les océans.', points: 10 },
            { id: 'e-13', question: 'Faut-il éteindre la lumière quand on sort d\'une pièce ?', options: ['Non', 'Oui, pour économiser l\'électricité', 'Seulement le soir', 'Si maman le dit'], correctAnswer: 1, justification: 'Produire de l\'électricité peut polluer la planète.', points: 10 },
            { id: 'e-14', question: 'Quel animal aide à nettoyer la terre en mangeant les feuilles mortes ?', options: ['Le lion', 'Le ver de terre', 'L\'oiseau', 'Le chat'], correctAnswer: 1, justification: 'Il est l\'ingénieur secret du sol !', points: 10 },
            { id: 'e-15', question: 'Peut-on recycler un pot de yaourt ?', options: ['Oui', 'Non', 'Seulement s\'il est lavé', 'Seulement le couvercle'], correctAnswer: 0, justification: 'De plus en plus de villes acceptent tous les plastiques.', points: 10 },
            { id: 'e-16', question: 'Qu\'est-ce qui est le plus écologique ?', options: ['Une gourde', 'Une bouteille en plastique', 'Une canette', 'Un gobelet jetable'], correctAnswer: 0, justification: 'La gourde se réutilise des milliers de fois.', points: 10 },
            { id: 'e-17', question: 'Où vont les eaux usées des toilettes ?', options: ['À la mer directement', 'Dans une station d\'épuration', 'Dans les rivières', 'Sous la terre'], correctAnswer: 1, justification: 'Elles sont nettoyées avant d\'être relâchées.', points: 10 },
            { id: 'e-18', question: 'Comment protéger les abeilles ?', options: ['En mettant des fleurs partout', 'En utilisant des pesticides', 'En les chassant', 'En fermant les fenêtres'], correctAnswer: 0, justification: 'Les abeilles ont besoin de fleurs pour vivre et nous donner des fruits.', points: 10 },
            { id: 'e-19', question: 'Quelle énergie vient du Soleil ?', options: ['Le vent', 'Le solaire', 'Le pétrole', 'Le charbon'], correctAnswer: 1, justification: 'C\'est une énergie propre et inépuisable.', points: 10 },
            { id: 'e-20', question: 'Comment appelle-t-on une forêt qui brûle ?', options: ['Un incendie', 'Une fête', 'Un barbecue', 'Une déforestation'], correctAnswer: 0, justification: 'Les incendies détruisent la maison des animaux.', points: 10 }
          ]
        }
      ],
      'Collège': [],
      'Lycée': []
    }
  }
];
