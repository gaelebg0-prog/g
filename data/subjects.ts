
import { Subject } from '../types.ts';

export const SUBJECTS: Subject[] = [
  {
    id: 'maths',
    name: 'Mathématiques',
    icon: '📐',
    color: 'bg-blue-600',
    levels: {
      'Collège': [
        {
          id: 'm-c-1',
          title: 'Géométrie : Théorème de Thalès',
          content: 'Le théorème de Thalès est une propriété fondamentale de la géométrie plane. Il permet de calculer des longueurs dans des configurations de triangles emboîtés ou de "papillons" lorsque deux droites sont parallèles.\n\nFormule de base : AM/AB = AN/AC = MN/BC\nConditions d\'application : \n1. Points alignés dans le même ordre.\n2. Deux droites parallèles.',
          exercises: [{ id: 'm-c-1-e1', question: 'Si le rapport d\'agrandissement est de 2 et que le petit côté mesure 4cm, quelle est la mesure du grand côté correspondant ?', options: ['2cm', '6cm', '8cm', '12cm'], correctAnswer: 2, justification: 'Dans un agrandissement de rapport k, les longueurs sont multipliées par k. Ici 4cm * 2 = 8cm.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 'm-l-1',
          title: 'Analyse : Les Nombres Complexes',
          content: 'L\'introduction de l\'ensemble C permet de résoudre des équations du second degré à discriminant négatif. On définit l\'unité imaginaire "i" telle que i² = -1.\n\nForme algébrique : z = a + bi\n- a est la partie réelle Re(z)\n- b est la partie imaginaire Im(z)\n\nLe plan complexe permet de représenter ces nombres par des points de coordonnées (a, b).',
          exercises: [{ id: 'm-l-1-e1', question: 'Quelle est la forme simplifiée de i³ ?', options: ['1', '-1', 'i', '-i'], correctAnswer: 3, justification: 'i³ = i² * i. Comme i² = -1, alors i³ = -1 * i = -i.', points: 30 }]
        }
      ]
    }
  },
  {
    id: 'francais',
    name: 'Français & Philo',
    icon: '🖋️',
    color: 'bg-slate-700',
    levels: {
      'Collège': [
        {
          id: 'f-c-1',
          title: 'Littérature : Les Figures de Style',
          content: 'Les figures de style permettent d\'enrichir un texte en créant des images ou en insistant sur des idées.\n\n- La métaphore : comparaison sans outil de comparaison.\n- L\'oxymore : rapprochement de deux termes opposés.\n- L\'hyperbole : exagération frappante.',
          exercises: [{ id: 'f-c-1-e1', question: 'Quelle figure de style est utilisée dans "Une obscure clarté" ?', options: ['Une litote', 'Un oxymore', 'Une métaphore', 'Une anaphore'], correctAnswer: 1, justification: 'L\'oxymore réunit deux termes de sens opposés dans un même groupe de mots.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 'f-l-1',
          title: 'Philosophie : La Conscience et l\'Inconscient',
          content: 'La conscience définit le rapport du sujet à lui-même et au monde. Descartes en fait le fondement de la vérité ("Je pense donc je suis").\n\nFreud introduit la notion d\'Inconscient, remettant en cause la pleine maîtrise du sujet sur ses pensées et ses actes.',
          exercises: [{ id: 'f-l-1-e1', question: 'À quel auteur doit-on la célèbre formule du "Cogito" ?', options: ['Spinoza', 'Kant', 'Descartes', 'Nietzsche'], correctAnswer: 2, justification: 'René Descartes, dans le Discours de la méthode, pose le Cogito comme première certitude.', points: 30 }]
        }
      ]
    }
  },
  {
    id: 'sciences',
    name: 'Physique-Chimie',
    icon: '⚛️',
    color: 'bg-indigo-600',
    levels: {
      'Collège': [
        {
          id: 's-c-1',
          title: 'Électricité : Intensité et Tension',
          content: 'Dans un circuit électrique, la tension (U) s\'exprime en Volts (V) et l\'intensité (I) en Ampères (A).\n\nLoi d\'Ohm : U = R * I\nOù R est la résistance en Ohms.',
          exercises: [{ id: 's-c-1-e1', question: 'Si R = 10 Ohms et I = 2 A, quelle est la tension U ?', options: ['5 V', '12 V', '20 V', '0.2 V'], correctAnswer: 2, justification: 'U = 10 * 2 = 20 Volts.', points: 20 }]
        }
      ],
      'Lycée': [
        {
          id: 's-l-1',
          title: 'Chimie Organique : Nomenclature',
          content: 'La chimie organique étudie les composés du carbone. La nomenclature IUPAC permet de nommer les molécules de manière unique.\n\n- Alcanes : CnH2n+2\n- Alcools : groupement -OH\n- Acides carboxyliques : groupement -COOH',
          exercises: [{ id: 's-l-1-e1', question: 'Quel est le suffixe caractéristique des alcènes ?', options: ['-ane', '-ène', '-ol', '-oïque'], correctAnswer: 1, justification: 'Les alcènes possèdent au moins une double liaison C=C et finissent par "-ène".', points: 30 }]
        }
      ]
    }
  }
];
