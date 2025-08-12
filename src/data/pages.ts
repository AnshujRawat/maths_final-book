import { Page } from '../types/page';

export const pages: Page[] = [
  // Page 1 - Cover
  {
    id: 1,
    title: "SETS",
    subtitle: "Understanding the Foundation of Discrete Mathematics",
    type: 'cover'
  },
  
  // Page 2 - Table of Contents
  {
    id: 2,
    title: "Table of Contents",
    type: 'toc'
  },

  // Page 3 - Introduction to Sets
  {
    id: 3,
    title: "Introduction to Sets",
    subtitle: "The Building Blocks of Mathematics",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'A set is a well-defined collection of distinct objects, called elements or members of the set.'
      },
      {
        type: 'text',
        text: 'Sets are one of the most fundamental concepts in mathematics. They provide the foundation for virtually all mathematical structures and are essential in discrete mathematics, computer science, and logic.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Key Characteristics of Sets'
      },
      {
        type: 'list',
        items: [
          'Well-defined: It must be clear whether an object belongs to the set or not',
          'Distinct elements: No element appears more than once in a set',
          'Unordered: The order of elements does not matter',
          'Can be finite or infinite'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Basic Notation'
      },
      {
        type: 'formula',
        formula: 'A = {1, 2, 3, 4}',
        description: 'Set A containing elements 1, 2, 3, and 4'
      },
      {
        type: 'formula',
        formula: '3 ∈ A',
        description: '3 is an element of set A (membership)'
      },
      {
        type: 'formula',
        formula: '5 ∉ A',
        description: '5 is not an element of set A'
      }
    ]
  },

  // Page 4 - Visual Introduction with Venn Diagram
  {
    id: 4,
    title: "Visualizing Sets",
    subtitle: "Venn Diagrams and Set Representation",
    type: 'content',
    content: [
      {
        type: 'text',
        text: 'Sets can be visualized using Venn diagrams, which show relationships between different sets using circles or other shapes.'
      },
      {
        type: 'venn',
        title: 'Interactive Example: Sets A and B',
        setA: [1, 2, 3, 5],
        setB: [3, 4, 5, 6]
      },
      {
        type: 'text',
        text: 'In the diagram above, you can see how elements are distributed between sets A and B. Notice how some elements appear in both sets (intersection), while others appear in only one set.'
      },
      {
        type: 'example',
        title: 'Real-world Applications',
        index: 1,
        content: [
          'Students enrolled in Mathematics: {Alice, Bob, Charlie, Diana}',
          'Students enrolled in Physics: {Bob, Charlie, Eve, Frank}',
          'Students in both courses: {Bob, Charlie}',
          'Students only in Math: {Alice, Diana}',
          'Students only in Physics: {Eve, Frank}'
        ]
      }
    ]
  },

  // Page 5 - Set Builder Notation
  {
    id: 5,
    title: "Set Builder Notation",
    subtitle: "Mathematical Description of Sets",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'Set builder notation describes a set by stating the properties that its elements must satisfy.'
      },
      {
        type: 'formula',
        formula: 'A = {x | condition}',
        description: 'Read as "A is the set of all x such that condition is true"'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Examples of Set Builder Notation'
      },
      {
        type: 'example',
        title: 'Even Numbers',
        index: 2,
        content: [
          'E = {x | x is an even integer}',
          'E = {x | x = 2k for some integer k}',
          'This represents the set {..., -4, -2, 0, 2, 4, 6, ...}'
        ]
      },
      {
        type: 'example',
        title: 'Bounded Sets',
        index: 3,
        content: [
          'B = {x | 1 ≤ x ≤ 10, x ∈ ℕ}',
          'B = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}',
          'Natural numbers from 1 to 10 inclusive'
        ]
      },
      {
        type: 'collapsible',
        title: 'Practice: Converting Between Notations',
        index: 1,
        content: [
          {
            type: 'text',
            text: 'Convert these roster form sets to set builder notation:'
          },
          {
            type: 'list',
            items: [
              'A = {2, 4, 6, 8, 10} → A = {x | x = 2k, 1 ≤ k ≤ 5, k ∈ ℕ}',
              'B = {1, 4, 9, 16, 25} → B = {x | x = n², 1 ≤ n ≤ 5, n ∈ ℕ}',
              'C = {a, e, i, o, u} → C = {x | x is a vowel in English alphabet}'
            ]
          }
        ]
      }
    ]
  },

  // Page 6 - Types of Sets: Empty and Universal
  {
    id: 6,
    title: "Types of Sets",
    subtitle: "Empty Sets and Universal Sets",
    type: 'content',
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Empty Set (Null Set)'
      },
      {
        type: 'definition',
        text: 'The empty set is a set containing no elements. It is denoted by ∅ or { }.'
      },
      {
        type: 'formula',
        formula: '∅ = { }',
        description: 'The empty set has cardinality 0'
      },
      {
        type: 'example',
        title: 'Examples of Empty Sets',
        index: 4,
        content: [
          'The set of all unicorns: ∅',
          'The set of real numbers x such that x² = -1: ∅',
          'The set of months with 32 days: ∅'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Universal Set'
      },
      {
        type: 'definition',
        text: 'The universal set U is the set that contains all objects under consideration in a particular context.'
      },
      {
        type: 'example',
        title: 'Context-Dependent Universal Sets',
        index: 5,
        content: [
          'When discussing integers: U = ℤ = {..., -2, -1, 0, 1, 2, ...}',
          'When discussing students in a class: U = {all students in the class}',
          'When discussing playing cards: U = {all 52 cards in a standard deck}'
        ]
      }
    ]
  },

  // Page 7 - Finite and Infinite Sets
  {
    id: 7,
    title: "Finite and Infinite Sets",
    subtitle: "Understanding Set Size",
    type: 'content',
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Finite Sets'
      },
      {
        type: 'definition',
        text: 'A finite set is a set with a finite number of elements. The number of elements in a finite set is called its cardinality.'
      },
      {
        type: 'formula',
        formula: '|A| = n',
        description: 'The cardinality of set A is n (where n is a non-negative integer)'
      },
      {
        type: 'example',
        title: 'Examples of Finite Sets',
        index: 6,
        content: [
          'Days of the week: {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}, |A| = 7',
          'Digits: {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, |B| = 10',
          'Empty set: ∅, |∅| = 0'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Infinite Sets'
      },
      {
        type: 'definition',
        text: 'An infinite set is a set with infinitely many elements. Its cardinality is denoted as ∞.'
      },
      {
        type: 'example',
        title: 'Examples of Infinite Sets',
        index: 7,
        content: [
          'Natural numbers: ℕ = {1, 2, 3, 4, ...}',
          'Even integers: {2, 4, 6, 8, ...}',
          'Real numbers between 0 and 1: (0, 1)',
          'All points on a line segment'
        ]
      },
      {
        type: 'collapsible',
        title: 'Interesting Fact: Different Types of Infinity',
        index: 2,
        content: [
          {
            type: 'text',
            text: 'Not all infinite sets have the same "size". Some infinite sets are larger than others!'
          },
          {
            type: 'list',
            items: [
              'Countably infinite: Can be put in one-to-one correspondence with natural numbers (like ℕ, ℤ, ℚ)',
              'Uncountably infinite: Cannot be counted (like ℝ, the set of all real numbers)',
              'The set of real numbers is "larger" than the set of natural numbers'
            ]
          }
        ]
      }
    ]
  },

  // Page 8 - Singleton and Equal Sets
  {
    id: 8,
    title: "Singleton and Equal Sets",
    subtitle: "Special Types of Sets",
    type: 'content',
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Singleton Sets'
      },
      {
        type: 'definition',
        text: 'A singleton set is a set containing exactly one element.'
      },
      {
        type: 'formula',
        formula: 'S = {a}',
        description: 'Set S is a singleton containing only element a, |S| = 1'
      },
      {
        type: 'example',
        title: 'Examples of Singleton Sets',
        index: 8,
        content: [
          '{0} - the set containing only zero',
          '{∅} - the set containing only the empty set (note: this is not empty!)',
          '{π} - the set containing only the number pi',
          'Important: {0} ≠ ∅. The first contains zero; the second contains nothing.'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Equal Sets'
      },
      {
        type: 'definition',
        text: 'Two sets A and B are equal (A = B) if and only if they contain exactly the same elements.'
      },
      {
        type: 'formula',
        formula: 'A = B ⟺ (∀x)(x ∈ A ⟺ x ∈ B)',
        description: 'A equals B if and only if every element of A is in B and vice versa'
      },
      {
        type: 'example',
        title: 'Examples of Equal Sets',
        index: 9,
        content: [
          '{1, 2, 3} = {3, 1, 2} = {1, 2, 3, 1} (order and repetition don\'t matter)',
          '{x | x² = 4} = {-2, 2} (both represent the same set)',
          '{x | x is a prime number less than 5} = {2, 3}'
        ]
      }
    ]
  },

  // Page 9 - Equivalent Sets
  {
    id: 9,
    title: "Equivalent Sets",
    subtitle: "Same Size, Different Elements",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'Two sets A and B are equivalent (A ~ B) if they have the same cardinality (same number of elements).'
      },
      {
        type: 'formula',
        formula: 'A ~ B ⟺ |A| = |B|',
        description: 'Sets A and B are equivalent if their cardinalities are equal'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Equal vs Equivalent Sets'
      },
      {
        type: 'table',
        headers: ['Property', 'Equal Sets (A = B)', 'Equivalent Sets (A ~ B)'],
        rows: [
          ['Same elements', 'Yes', 'Not necessarily'],
          ['Same cardinality', 'Yes', 'Yes'],
          ['Example', '{1, 2, 3} = {3, 1, 2}', '{1, 2, 3} ~ {a, b, c}'],
          ['Relationship', 'If A = B, then A ~ B', 'A ~ B does not imply A = B']
        ]
      },
      {
        type: 'example',
        title: 'Examples of Equivalent Sets',
        index: 10,
        content: [
          '{1, 2, 3} ~ {a, b, c} (both have cardinality 3)',
          '{red, green, blue} ~ {apple, banana, cherry} (both have cardinality 3)',
          'ℕ ~ ℤ (both are countably infinite)',
          '{x | x is a day of the week} ~ {x | x is a color of the rainbow} (both have 7 elements)'
        ]
      },
      {
        type: 'collapsible',
        title: 'One-to-One Correspondence',
        index: 3,
        content: [
          {
            type: 'definition',
            text: 'Two sets are equivalent if there exists a one-to-one correspondence (bijection) between their elements.'
          },
          {
            type: 'text',
            text: 'Example: {1, 2, 3} ~ {a, b, c} because we can pair: 1↔a, 2↔b, 3↔c'
          },
          {
            type: 'text',
            text: 'This concept is crucial for understanding infinite sets and different types of infinity.'
          }
        ]
      }
    ]
  },

  // Page 10 - Set Representation Methods
  {
    id: 10,
    title: "Methods of Set Representation",
    subtitle: "Different Ways to Describe Sets",
    type: 'content',
    content: [
      {
        type: 'text',
        text: 'There are several ways to represent sets, each with its own advantages depending on the context and purpose.'
      },
      {
        type: 'heading',
        level: 3,
        text: '1. Roster Method (Tabular Form)'
      },
      {
        type: 'definition',
        text: 'The roster method lists all elements of the set explicitly, separated by commas and enclosed in braces.'
      },
      {
        type: 'example',
        title: 'Roster Method Examples',
        index: 11,
        content: [
          'A = {1, 2, 3, 4, 5}',
          'B = {red, green, blue}',
          'C = {2, 4, 6, 8, ...} (using ellipsis for patterns)',
          'D = {..., -2, -1, 0, 1, 2, ...} (infinite sets with patterns)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: '2. Set Builder Method'
      },
      {
        type: 'definition',
        text: 'Set builder notation describes a set by specifying a property that its elements must satisfy.'
      },
      {
        type: 'example',
        title: 'Set Builder Examples',
        index: 12,
        content: [
          'A = {x | 1 ≤ x ≤ 5, x ∈ ℕ}',
          'B = {x | x is a primary color}',
          'C = {x | x = 2n, n ∈ ℕ} (even natural numbers)',
          'D = {x | x ∈ ℤ} (all integers)'
        ]
      }
    ]
  },

  // Page 11 - Venn Diagrams
  {
    id: 11,
    title: "Venn Diagrams",
    subtitle: "Visual Representation of Sets",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'A Venn diagram is a pictorial representation of sets using circles or other closed curves, typically drawn within a rectangle representing the universal set.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Components of a Venn Diagram'
      },
      {
        type: 'list',
        items: [
          'Rectangle: Represents the universal set U',
          'Circles: Represent individual sets',
          'Overlapping regions: Show elements common to multiple sets',
          'Non-overlapping regions: Show elements unique to each set'
        ]
      },
      {
        type: 'venn',
        title: 'Basic Two-Set Venn Diagram',
        setA: [1, 2, 3, 7],
        setB: [3, 4, 5, 6]
      },
      {
        type: 'example',
        title: 'Reading Venn Diagrams',
        index: 13,
        content: [
          'Elements only in A: {1, 2, 7}',
          'Elements only in B: {4, 5, 6}', 
          'Elements in both A and B: {3}',
          'Elements in A or B (or both): {1, 2, 3, 4, 5, 6, 7}'
        ]
      },
      {
        type: 'collapsible',
        title: 'Venn Diagram Rules and Conventions',
        index: 4,
        content: [
          {
            type: 'list',
            items: [
              'Each element appears in exactly one region of the diagram',
              'Overlapping regions represent intersections',
              'The universal set contains all relevant elements',
              'Elements outside all circles but inside the rectangle are in U but not in any named set'
            ]
          }
        ]
      }
    ]
  },

  // Page 12 - Interval Notation
  {
    id: 12,
    title: "Interval Notation",
    subtitle: "Representing Continuous Sets",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'Interval notation is a method of representing sets of real numbers that form intervals on the number line.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Types of Intervals'
      },
      {
        type: 'table',
        headers: ['Notation', 'Description', 'Set Builder Form', 'Graph'],
        rows: [
          ['[a, b]', 'Closed interval', '{x | a ≤ x ≤ b}', '●───●'],
          ['(a, b)', 'Open interval', '{x | a < x < b}', '○───○'],
          ['[a, b)', 'Half-open interval', '{x | a ≤ x < b}', '●───○'],
          ['(a, b]', 'Half-open interval', '{x | a < x ≤ b}', '○───●'],
          ['[a, ∞)', 'Unbounded interval', '{x | x ≥ a}', '●───→'],
          ['(-∞, b]', 'Unbounded interval', '{x | x ≤ b}', '←───●']
        ]
      },
      {
        type: 'example',
        title: 'Interval Notation Examples',
        index: 14,
        content: [
          '[2, 5] = {x | 2 ≤ x ≤ 5} includes endpoints 2 and 5',
          '(0, 1) = {x | 0 < x < 1} excludes endpoints 0 and 1',
          '[3, 7) = {x | 3 ≤ x < 7} includes 3 but excludes 7',
          '(-∞, 0) = {x | x < 0} all negative real numbers'
        ]
      },
      {
        type: 'collapsible',
        title: 'Union of Intervals',
        index: 5,
        content: [
          {
            type: 'text',
            text: 'Multiple intervals can be combined using union (∪):'
          },
          {
            type: 'list',
            items: [
              '(-∞, 2) ∪ (3, ∞) represents all real numbers except [2, 3]',
              '[1, 2] ∪ [4, 5] represents two separate closed intervals',
              '(-1, 1) ∪ (2, 4) ∪ (6, 8) represents three separate open intervals'
            ]
          }
        ]
      }
    ]
  },

  // Page 13 - Set Operations: Union
  {
    id: 13,
    title: "Set Operations: Union",
    subtitle: "Combining Sets Together",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'The union of two sets A and B, denoted A ∪ B, is the set containing all elements that are in A or in B or in both.'
      },
      {
        type: 'formula',
        formula: 'A ∪ B = {x | x ∈ A or x ∈ B}',
        description: 'Union contains all elements from both sets'
      },
      {
        type: 'venn',
        title: 'Union Operation Visualization',
        setA: [1, 2, 3],
        setB: [3, 4, 5],
        operation: 'union'
      },
      {
        type: 'example',
        title: 'Union Examples',
        index: 15,
        content: [
          'A = {1, 2, 3}, B = {3, 4, 5}',
          'A ∪ B = {1, 2, 3, 4, 5}',
          'Note: Element 3 appears in both sets but only once in the union',
          '',
          'C = {red, green}, D = {blue, yellow}',
          'C ∪ D = {red, green, blue, yellow}'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Properties of Union'
      },
      {
        type: 'collapsible',
        title: 'Union Properties',
        index: 6,
        content: [
          {
            type: 'list',
            items: [
              'Commutative: A ∪ B = B ∪ A',
              'Associative: (A ∪ B) ∪ C = A ∪ (B ∪ C)',
              'Identity: A ∪ ∅ = A',
              'Idempotent: A ∪ A = A',
              'Absorption: A ∪ (A ∩ B) = A'
            ]
          }
        ]
      }
    ]
  },

  // Page 14 - Set Operations: Intersection
  {
    id: 14,
    title: "Set Operations: Intersection",
    subtitle: "Finding Common Elements",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'The intersection of two sets A and B, denoted A ∩ B, is the set containing all elements that are in both A and B.'
      },
      {
        type: 'formula',
        formula: 'A ∩ B = {x | x ∈ A and x ∈ B}',
        description: 'Intersection contains only common elements'
      },
      {
        type: 'venn',
        title: 'Intersection Operation Visualization',
        setA: [1, 2, 3, 7],
        setB: [3, 4, 5, 7],
        operation: 'intersection'
      },
      {
        type: 'example',
        title: 'Intersection Examples',
        index: 16,
        content: [
          'A = {1, 2, 3, 7}, B = {3, 4, 5, 7}',
          'A ∩ B = {3, 7}',
          'Only elements present in both sets',
          '',
          'E = {2, 4, 6, 8}, O = {1, 3, 5, 7}',
          'E ∩ O = ∅ (disjoint sets - no common elements)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Disjoint Sets'
      },
      {
        type: 'definition',
        text: 'Two sets A and B are called disjoint if their intersection is empty: A ∩ B = ∅.'
      },
      {
        type: 'collapsible',
        title: 'Properties of Intersection',
        index: 7,
        content: [
          {
            type: 'list',
            items: [
              'Commutative: A ∩ B = B ∩ A',
              'Associative: (A ∩ B) ∩ C = A ∩ (B ∩ C)',
              'Identity: A ∩ U = A (where U is universal set)',
              'Zero: A ∩ ∅ = ∅',
              'Idempotent: A ∩ A = A'
            ]
          }
        ]
      }
    ]
  },

  // Page 15 - Set Operations: Difference
  {
    id: 15,
    title: "Set Operations: Difference",
    subtitle: "Elements in One Set But Not Another",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'The difference of two sets A and B, denoted A - B or A \\ B, is the set containing all elements that are in A but not in B.'
      },
      {
        type: 'formula',
        formula: 'A - B = {x | x ∈ A and x ∉ B}',
        description: 'Difference contains elements unique to the first set'
      },
      {
        type: 'venn',
        title: 'Difference Operation Visualization',
        setA: [1, 2, 3, 7],
        setB: [3, 4, 5, 7],
        operation: 'difference'
      },
      {
        type: 'example',
        title: 'Difference Examples',
        index: 17,
        content: [
          'A = {1, 2, 3, 7}, B = {3, 4, 5, 7}',
          'A - B = {1, 2} (elements in A but not in B)',
          'B - A = {4, 5} (elements in B but not in A)',
          'Note: A - B ≠ B - A in general',
          '',
          'S = {1, 2, 3, 4, 5}, T = {4, 5, 6, 7}',
          'S - T = {1, 2, 3}, T - S = {6, 7}'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Important Properties'
      },
      {
        type: 'collapsible',
        title: 'Difference Properties',
        index: 8,
        content: [
          {
            type: 'list',
            items: [
              'Not commutative: A - B ≠ B - A (usually)',
              'A - ∅ = A',
              'A - A = ∅',
              'A - B = A if A ∩ B = ∅',
              '∅ - A = ∅',
              'A - B = A ∩ B\' (where B\' is the complement of B)'
            ]
          }
        ]
      }
    ]
  },

  // Page 16 - Set Operations: Complement
  {
    id: 16,
    title: "Set Operations: Complement",
    subtitle: "Everything Not in the Set",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'The complement of a set A, denoted A\' or Ā or A^c, is the set of all elements in the universal set U that are not in A.'
      },
      {
        type: 'formula',
        formula: 'A\' = {x | x ∈ U and x ∉ A} = U - A',
        description: 'Complement with respect to universal set U'
      },
      {
        type: 'example',
        title: 'Complement Examples',
        index: 18,
        content: [
          'If U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and A = {2, 4, 6, 8, 10}',
          'Then A\' = {1, 3, 5, 7, 9} (all odd numbers in U)',
          '',
          'If U = {all students in class} and B = {students who passed}',
          'Then B\' = {students who did not pass}'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Complement Laws'
      },
      {
        type: 'table',
        headers: ['Law', 'Formula', 'Description'],
        rows: [
          ['Double Complement', '(A\')\' = A', 'Complement of complement is original set'],
          ['Universal Complement', 'U\' = ∅', 'Complement of universal set is empty'],
          ['Empty Set Complement', '∅\' = U', 'Complement of empty set is universal'],
          ['Complement Union', 'A ∪ A\' = U', 'Set union with complement is universal'],
          ['Complement Intersection', 'A ∩ A\' = ∅', 'Set intersection with complement is empty']
        ]
      },
      {
        type: 'collapsible',
        title: 'De Morgan\'s Laws',
        index: 9,
        content: [
          {
            type: 'definition',
            text: 'De Morgan\'s Laws relate complements to unions and intersections:'
          },
          {
            type: 'formula',
            formula: '(A ∪ B)\' = A\' ∩ B\'',
            description: 'Complement of union equals intersection of complements'
          },
          {
            type: 'formula',
            formula: '(A ∩ B)\' = A\' ∪ B\'',
            description: 'Complement of intersection equals union of complements'
          }
        ]
      }
    ]
  },

  // Page 17 - Symmetric Difference
  {
    id: 17,
    title: "Symmetric Difference",
    subtitle: "Elements in Either Set, But Not Both",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'The symmetric difference of two sets A and B, denoted A ⊕ B or A △ B, is the set of elements that are in either A or B, but not in both.'
      },
      {
        type: 'formula',
        formula: 'A ⊕ B = (A - B) ∪ (B - A) = (A ∪ B) - (A ∩ B)',
        description: 'Symmetric difference excludes common elements'
      },
      {
        type: 'example',
        title: 'Symmetric Difference Examples',
        index: 19,
        content: [
          'A = {1, 2, 3, 4}, B = {3, 4, 5, 6}',
          'A - B = {1, 2}, B - A = {5, 6}',
          'A ⊕ B = {1, 2, 5, 6}',
          '',
          'Think of it as "exclusive or" - elements in A or B, but not both'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Visual Representation'
      },
      {
        type: 'text',
        text: 'In a Venn diagram, the symmetric difference is represented by the shaded regions that belong to only one of the sets (the non-overlapping parts).'
      },
      {
        type: 'collapsible',
        title: 'Properties of Symmetric Difference',
        index: 10,
        content: [
          {
            type: 'list',
            items: [
              'Commutative: A ⊕ B = B ⊕ A',
              'Associative: (A ⊕ B) ⊕ C = A ⊕ (B ⊕ C)',
              'Identity: A ⊕ ∅ = A',
              'Self-inverse: A ⊕ A = ∅',
              'A ⊕ B = ∅ if and only if A = B'
            ]
          }
        ]
      }
    ]
  },

  // Page 18 - Cartesian Product
  {
    id: 18,
    title: "Cartesian Product",
    subtitle: "Ordered Pairs from Sets",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'The Cartesian product of two sets A and B, denoted A × B, is the set of all ordered pairs (a, b) where a ∈ A and b ∈ B.'
      },
      {
        type: 'formula',
        formula: 'A × B = {(a, b) | a ∈ A and b ∈ B}',
        description: 'All possible ordered pairs from A and B'
      },
      {
        type: 'example',
        title: 'Cartesian Product Examples',
        index: 20,
        content: [
          'A = {1, 2}, B = {x, y}',
          'A × B = {(1, x), (1, y), (2, x), (2, y)}',
          '|A × B| = |A| × |B| = 2 × 2 = 4',
          '',
          'Note: Order matters! (1, x) ≠ (x, 1)',
          'Also: A × B ≠ B × A in general'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Real-World Applications'
      },
      {
        type: 'example',
        title: 'Coordinate System',
        index: 21,
        content: [
          'ℝ × ℝ represents all points in the coordinate plane',
          'Each point (x, y) is an ordered pair of real numbers',
          'Database relations: Students × Courses gives all possible student-course pairs',
          'Menu combinations: Appetizers × Main Courses × Desserts'
        ]
      },
      {
        type: 'collapsible',
        title: 'Properties of Cartesian Product',
        index: 11,
        content: [
          {
            type: 'list',
            items: [
              'Not commutative: A × B ≠ B × A (usually)',
              '|A × B| = |A| × |B|',
              'A × ∅ = ∅ × A = ∅',
              'Distributive over union: A × (B ∪ C) = (A × B) ∪ (A × C)',
              'Distributive over intersection: A × (B ∩ C) = (A × B) ∩ (A × C)'
            ]
          }
        ]
      }
    ]
  },

  // Page 19 - Multiple Set Operations
  {
    id: 19,
    title: "Complex Set Operations",
    subtitle: "Combining Multiple Operations",
    type: 'content',
    content: [
      {
        type: 'text',
        text: 'Real-world problems often require combining multiple set operations. Understanding precedence and using parentheses correctly is crucial.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Order of Operations'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Complement (highest precedence)',
          'Intersection',
          'Union (lowest precedence)',
          'Use parentheses to change order'
        ]
      },
      {
        type: 'example',
        title: 'Complex Operation Examples',
        index: 22,
        content: [
          'Given: A = {1, 2, 3}, B = {2, 3, 4}, C = {3, 4, 5}, U = {1, 2, 3, 4, 5}',
          '',
          '(A ∪ B) ∩ C = {1, 2, 3, 4} ∩ {3, 4, 5} = {3, 4}',
          'A ∪ (B ∩ C) = {1, 2, 3} ∪ {3, 4} = {1, 2, 3, 4}',
          '(A ∩ B)\' = {2, 3}\' = {1, 4, 5}',
          'A\' ∪ B\' = {4, 5} ∪ {1, 5} = {1, 4, 5}'
        ]
      },
      {
        type: 'collapsible',
        title: 'Set Identities and Laws',
        index: 12,
        content: [
          {
            type: 'table',
            headers: ['Law', 'Formula'],
            rows: [
              ['Commutative', 'A ∪ B = B ∪ A, A ∩ B = B ∩ A'],
              ['Associative', '(A ∪ B) ∪ C = A ∪ (B ∪ C)'],
              ['Distributive', 'A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)'],
              ['Identity', 'A ∪ ∅ = A, A ∩ U = A'],
              ['Complement', 'A ∪ A\' = U, A ∩ A\' = ∅'],
              ['De Morgan\'s', '(A ∪ B)\' = A\' ∩ B\'']
            ]
          }
        ]
      }
    ]
  },

  // Page 20 - Set Operations Practice
  {
    id: 20,
    title: "Set Operations in Action",
    subtitle: "Step-by-Step Problem Solving",
    type: 'content',
    content: [
      {
        type: 'text',
        text: 'Let\'s work through some comprehensive examples that combine multiple set operations and concepts.'
      },
      {
        type: 'example',
        title: 'Comprehensive Problem',
        index: 23,
        content: [
          'Given: U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}',
          'A = {2, 4, 6, 8, 10} (even numbers)',
          'B = {1, 3, 5, 7, 9} (odd numbers)',
          'C = {1, 2, 3, 4, 5} (numbers ≤ 5)',
          '',
          'Find: (A ∩ C) ∪ (B - C)\''
        ]
      },
      {
        type: 'collapsible',
        title: 'Step-by-Step Solution',
        index: 13,
        content: [
          {
            type: 'text',
            text: 'Step 1: Find A ∩ C'
          },
          {
            type: 'text',
            text: 'A ∩ C = {2, 4, 6, 8, 10} ∩ {1, 2, 3, 4, 5} = {2, 4}'
          },
          {
            type: 'text',
            text: 'Step 2: Find B - C'
          },
          {
            type: 'text',
            text: 'B - C = {1, 3, 5, 7, 9} - {1, 2, 3, 4, 5} = {7, 9}'
          },
          {
            type: 'text',
            text: 'Step 3: Find (B - C)\''
          },
          {
            type: 'text',
            text: '(B - C)\' = {7, 9}\' = {1, 2, 3, 4, 5, 6, 8, 10}'
          },
          {
            type: 'text',
            text: 'Step 4: Find final result'
          },
          {
            type: 'text',
            text: '(A ∩ C) ∪ (B - C)\' = {2, 4} ∪ {1, 2, 3, 4, 5, 6, 8, 10} = {1, 2, 3, 4, 5, 6, 8, 10}'
          }
        ]
      },
      {
        type: 'example',
        title: 'Proving Set Identities',
        index: 24,
        content: [
          'Prove: A - (B ∩ C) = (A - B) ∪ (A - C)',
          '',
          'This can be proven using element-wise proof or using known identities.',
          'Try working through this step-by-step using the definitions!'
        ]
      }
    ]
  },

  // Page 21 - Equal Sets Deep Dive
  {
    id: 21,
    title: "Equal Sets: A Deeper Look",
    subtitle: "When Two Sets Are Exactly the Same",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'Two sets A and B are equal if and only if every element of A is also an element of B, and every element of B is also an element of A.'
      },
      {
        type: 'formula',
        formula: 'A = B ⟺ (A ⊆ B and B ⊆ A)',
        description: 'Sets are equal if they are subsets of each other'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Proving Set Equality'
      },
      {
        type: 'example',
        title: 'Method 1: Element-wise Proof',
        index: 25,
        content: [
          'To prove A = B:',
          '1. Show that if x ∈ A, then x ∈ B (A ⊆ B)',
          '2. Show that if x ∈ B, then x ∈ A (B ⊆ A)',
          '',
          'Example: Prove {x | x² = 4} = {-2, 2}',
          'Left side: x² = 4 implies x = ±2, so x ∈ {-2, 2}',
          'Right side: (-2)² = 4 and 2² = 4, so both satisfy x² = 4'
        ]
      },
      {
        type: 'example',
        title: 'Method 2: Using Set Operations',
        index: 26,
        content: [
          'Show that A ⊆ B and B ⊆ A by proving:',
          '• A ∩ B = A (this proves A ⊆ B)',
          '• A ∪ B = B (this also proves A ⊆ B)',
          '• A - B = ∅ (this proves A ⊆ B)',
          '• Then prove the reverse inclusion'
        ]
      }
    ]
  },

  // Page 22 - Equivalent Sets Deep Dive  
  {
    id: 22,
    title: "Equivalent Sets: Same Cardinality",
    subtitle: "When Sets Have the Same Size",
    type: 'content',
    content: [
      {
        type: 'text',
        text: 'Two sets are equivalent if there exists a one-to-one correspondence (bijection) between their elements. This concept is fundamental in understanding different types of infinity.'
      },
      {
        type: 'example',
        title: 'Finite Set Equivalence',
        index: 27,
        content: [
          'A = {apple, banana, cherry}',
          'B = {1, 2, 3}',
          'Bijection: apple ↔ 1, banana ↔ 2, cherry ↔ 3',
          'Therefore A ~ B (A is equivalent to B)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Infinite Set Equivalence'
      },
      {
        type: 'example',
        title: 'Surprising Equivalences',
        index: 28,
        content: [
          'ℕ ~ ℤ: Natural numbers equivalent to integers!',
          'Bijection: 1↔0, 2↔1, 3↔-1, 4↔2, 5↔-2, ...',
          'Pattern: odd positions → positive integers, even positions → non-positive',
          '',
          'ℕ ~ ℚ⁺: Natural numbers equivalent to positive rationals!',
          'This uses Cantor\'s diagonal argument for enumeration'
        ]
      },
      {
        type: 'collapsible',
        title: 'Cantor\'s Theorem',
        index: 14,
        content: [
          {
            type: 'definition',
            text: 'For any set A, the power set P(A) has strictly greater cardinality than A.'
          },
          {
            type: 'text',
            text: 'This means there are different "sizes" of infinity:'
          },
          {
            type: 'list',
            items: [
              '|ℕ| = ℵ₀ (aleph-null) - countable infinity',
              '|ℝ| = |P(ℕ)| = 2^ℵ₀ = c (continuum) - uncountable infinity',
              '|P(ℝ)| = 2^c - even larger infinity!'
            ]
          }
        ]
      }
    ]
  },

  // Page 23 - Subsets
  {
    id: 23,
    title: "Subsets",
    subtitle: "When One Set Is Contained in Another",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'Set A is a subset of set B (written A ⊆ B) if every element of A is also an element of B.'
      },
      {
        type: 'formula',
        formula: 'A ⊆ B ⟺ ∀x(x ∈ A → x ∈ B)',
        description: 'For all x, if x is in A, then x is in B'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Types of Subsets'
      },
      {
        type: 'table',
        headers: ['Type', 'Notation', 'Definition', 'Example'],
        rows: [
          ['Subset', 'A ⊆ B', 'A is contained in B', '{1,2} ⊆ {1,2,3}'],
          ['Proper Subset', 'A ⊂ B', 'A ⊆ B and A ≠ B', '{1,2} ⊂ {1,2,3}'],
          ['Not a Subset', 'A ⊄ B', 'A is not contained in B', '{1,4} ⊄ {1,2,3}']
        ]
      },
      {
        type: 'example',
        title: 'Subset Examples',
        index: 29,
        content: [
          '∅ ⊆ A for any set A (empty set is subset of every set)',
          'A ⊆ A for any set A (every set is subset of itself)',
          '{1, 2} ⊆ {1, 2, 3, 4}',
          '{a} ⊆ {a, b, c}',
          'If A ⊆ B and B ⊆ C, then A ⊆ C (transitivity)'
        ]
      },
      {
        type: 'collapsible',
        title: 'Proving Subset Relationships',
        index: 15,
        content: [
          {
            type: 'text',
            text: 'To prove A ⊆ B:'
          },
          {
            type: 'list',
            items: [
              'Take an arbitrary element x ∈ A',
              'Show that x must also belong to B',
              'Conclude A ⊆ B'
            ]
          },
          {
            type: 'text',
            text: 'To prove A ⊄ B, find a counterexample: an element in A that is not in B.'
          }
        ]
      }
    ]
  },

  // Page 24 - Power Sets
  {
    id: 24,
    title: "Power Sets",
    subtitle: "The Set of All Subsets",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'The power set of a set A, denoted P(A) or 2^A, is the set of all subsets of A.'
      },
      {
        type: 'formula',
        formula: 'P(A) = {S | S ⊆ A}',
        description: 'Power set contains every possible subset of A'
      },
      {
        type: 'example',
        title: 'Power Set Examples',
        index: 30,
        content: [
          'A = {1, 2}',
          'Subsets of A: ∅, {1}, {2}, {1, 2}',
          'P(A) = {∅, {1}, {2}, {1, 2}}',
          '|A| = 2, |P(A)| = 4 = 2²'
        ]
      },
      {
        type: 'example',
        title: 'Larger Example',
        index: 31,
        content: [
          'B = {a, b, c}',
          'P(B) = {∅, {a}, {b}, {c}, {a,b}, {a,c}, {b,c}, {a,b,c}}',
          '|B| = 3, |P(B)| = 8 = 2³'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Power Set Properties'
      },
      {
        type: 'collapsible',
        title: 'Key Properties',
        index: 16,
        content: [
          {
            type: 'list',
            items: [
              'If |A| = n, then |P(A)| = 2ⁿ',
              '∅ ∈ P(A) for any set A',
              'A ∈ P(A) for any set A',
              'If A ⊆ B, then P(A) ⊆ P(B)',
              'P(∅) = {∅} (not empty!)',
              'P(A ∪ B) ≠ P(A) ∪ P(B) in general'
            ]
          }
        ]
      }
    ]
  },

  // Page 25 - Advanced Power Set Concepts
  {
    id: 25,
    title: "Advanced Power Set Concepts",
    subtitle: "Deeper Understanding of Power Sets",
    type: 'content',
    content: [
      {
        type: 'text',
        text: 'Power sets have fascinating properties and applications in mathematics, computer science, and logic.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Systematic Construction'
      },
      {
        type: 'example',
        title: 'Binary Method for Power Set Construction',
        index: 32,
        content: [
          'For A = {a, b, c}, represent subsets using binary:',
          '000 → ∅ (no elements selected)',
          '001 → {c} (only third element)',
          '010 → {b} (only second element)',
          '011 → {b, c} (second and third elements)',
          '100 → {a} (only first element)',
          '101 → {a, c} (first and third elements)',
          '110 → {a, b} (first and second elements)',
          '111 → {a, b, c} (all elements selected)'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Recursive Definition'
      },
      {
        type: 'formula',
        formula: 'P(A ∪ {x}) = P(A) ∪ {S ∪ {x} | S ∈ P(A)}',
        description: 'Power set of A∪{x} includes all subsets of A plus those same subsets with x added'
      },
      {
        type: 'collapsible',
        title: 'Applications of Power Sets',
        index: 17,
        content: [
          {
            type: 'list',
            items: [
              'Boolean algebra: Power set forms a Boolean lattice',
              'Computer science: Representing all possible states or configurations',
              'Combinatorics: Counting problems and subset selection',
              'Topology: Collections of open sets',
              'Logic: Truth assignments to propositional variables'
            ]
          }
        ]
      }
    ]
  },

  // Page 26 - Cardinality
  {
    id: 26,
    title: "Cardinality",
    subtitle: "Measuring the Size of Sets",
    type: 'content',
    content: [
      {
        type: 'definition',
        text: 'The cardinality of a set A, denoted |A| or #A, is the number of elements in the set.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Finite Cardinality'
      },
      {
        type: 'example',
        title: 'Finite Set Cardinalities',
        index: 33,
        content: [
          '|∅| = 0 (empty set has zero elements)',
          '|{a}| = 1 (singleton has one element)',
          '|{red, blue, green}| = 3',
          '|{x | x² = 4}| = |{-2, 2}| = 2',
          '|P({a, b})| = |{∅, {a}, {b}, {a,b}}| = 4'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Cardinality Rules'
      },
      {
        type: 'table',
        headers: ['Operation', 'Cardinality Rule', 'Note'],
        rows: [
          ['Union', '|A ∪ B| = |A| + |B| - |A ∩ B|', 'Inclusion-Exclusion Principle'],
          ['Intersection', '|A ∩ B| ≤ min(|A|, |B|)', 'Cannot exceed smaller set'],
          ['Difference', '|A - B| = |A| - |A ∩ B|', 'Remove common elements'],
          ['Cartesian Product', '|A × B| = |A| × |B|', 'Multiplicative principle'],
          ['Power Set', '|P(A)| = 2^|A|', 'Exponential growth']
        ]
      },
      {
        type: 'example',
        title: 'Inclusion-Exclusion Example',
        index: 34,
        content: [
          'A = {1, 2, 3, 4}, B = {3, 4, 5, 6}',
          '|A| = 4, |B| = 4, |A ∩ B| = |{3, 4}| = 2',
          '|A ∪ B| = 4 + 4 - 2 = 6',
          'Verify: A ∪ B = {1, 2, 3, 4, 5, 6}, so |A ∪ B| = 6 ✓'
        ]
      }
    ]
  },

  // Page 27 - Infinite Cardinalities
  {
    id: 27,
    title: "Infinite Cardinalities",
    subtitle: "Comparing Different Types of Infinity",
    type: 'content',
    content: [
      {
        type: 'text',
        text: 'Not all infinite sets are the same size. There are different levels of infinity, discovered by Georg Cantor in the late 19th century.'
      },
      {
        type: 'heading',
        level: 3,
        text: 'Countable Infinity'
      },
      {
        type: 'definition',
        text: 'A set is countably infinite if it can be put in one-to-one correspondence with the natural numbers ℕ. Its cardinality is denoted ℵ₀ (aleph-null).'
      },
      {
        type: 'example',
        title: 'Countably Infinite Sets',
        index: 35,
        content: [
          'ℕ = {1, 2, 3, 4, ...} has cardinality ℵ₀',
          'ℤ = {..., -2, -1, 0, 1, 2, ...} also has cardinality ℵ₀',
          'ℚ (rational numbers) has cardinality ℵ₀',
          'Even the set of all finite sequences of natural numbers is countable!'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Uncountable Infinity'
      },
      {
        type: 'definition',
        text: 'A set is uncountable if it cannot be put in one-to-one correspondence with ℕ. The cardinality of ℝ is denoted c (for continuum).'
      },
      {
        type: 'example',
        title: 'Uncountably Infinite Sets',
        index: 36,
        content: [
          'ℝ (real numbers) has cardinality c = 2^ℵ₀',
          'Any interval of real numbers, e.g., (0,1), has cardinality c',
          'P(ℕ) (power set of natural numbers) has cardinality c',
          'The set of all infinite sequences of 0s and 1s has cardinality c'
        ]
      },
      {
        type: 'collapsible',
        title: 'Cantor\'s Diagonal Argument',
        index: 18,
        content: [
          {
            type: 'text',
            text: 'Cantor proved that ℝ is uncountable using the diagonal argument:'
          },
          {
            type: 'list',
            items: [
              'Assume ℝ is countable and can be listed as r₁, r₂, r₃, ...',
              'Construct a new real number by changing the nth digit of rₙ',
              'This new number differs from every number in the list',
              'Contradiction! Therefore ℝ is uncountable'
            ]
          }
        ]
      }
    ]
  },

  // Page 28 - Summary and Review
  {
    id: 28,
    title: "Chapter Summary",
    subtitle: "Key Concepts and Formulas",
    type: 'content',
    content: [
      {
        type: 'heading',
        level: 3,
        text: 'Fundamental Definitions'
      },
      {
        type: 'list',
        items: [
          'Set: A well-defined collection of distinct objects',
          'Element: An object belonging to a set (a ∈ A)',
          'Empty set: ∅ = { } (contains no elements)',
          'Universal set: U (contains all elements under consideration)',
          'Cardinality: |A| = number of elements in set A'
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Set Operations'
      },
      {
        type: 'table',
        headers: ['Operation', 'Symbol', 'Definition'],
        rows: [
          ['Union', 'A ∪ B', '{x | x ∈ A or x ∈ B}'],
          ['Intersection', 'A ∩ B', '{x | x ∈ A and x ∈ B}'],
          ['Difference', 'A - B', '{x | x ∈ A and x ∉ B}'],
          ['Complement', 'A\'', '{x | x ∈ U and x ∉ A}'],
          ['Cartesian Product', 'A × B', '{(a,b) | a ∈ A and b ∈ B}']
        ]
      },
      {
        type: 'heading',
        level: 3,
        text: 'Important Relationships'
      },
      {
        type: 'list',
        items: [
          'A = B ⟺ A ⊆ B and B ⊆ A (equal sets)',
          'A ~ B ⟺ |A| = |B| (equivalent sets)',
          'A ⊆ B ⟺ ∀x(x ∈ A → x ∈ B) (subset)',
          'P(A) = {S | S ⊆ A} and |P(A)| = 2^|A| (power set)'
        ]
      },
      {
        type: 'collapsible',
        title: 'Key Formulas for Problem Solving',
        index: 19,
        content: [
          {
            type: 'list',
            items: [
              'Inclusion-Exclusion: |A ∪ B| = |A| + |B| - |A ∩ B|',
              'De Morgan\'s Laws: (A ∪ B)\' = A\' ∩ B\', (A ∩ B)\' = A\' ∪ B\'',
              'Distributive Laws: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)',
              'Complement Laws: A ∪ A\' = U, A ∩ A\' = ∅',
              'Power Set Cardinality: |P(A)| = 2^|A|'
            ]
          }
        ]
      }
    ]
  },

  // Page 29 - Quiz
  {
    id: 29,
    title: "Chapter Quiz",
    subtitle: "Test Your Understanding",
    type: 'quiz'
  },

  // Page 30 - References
  {
    id: 30,
    title: "References & Credits",
    subtitle: "Sources and Acknowledgments",
    type: 'references'
  }
];