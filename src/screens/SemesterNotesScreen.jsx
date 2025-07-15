import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
// import BackButton from '../../components/BackButton';

const notesData = {
  '1': [
    {
  title: 'Introduction to IT',
  chapters: ['Introduction to Computer', 'The Computer System Hardware', 'Computer Memory', 'Input and Output Devices', 'Data Representation', 'Computer Software', 'Data Communication and Computer Network', 'The Internet and Internet Services', 'Fundamentals of Database', 'Multimedia', 'Computer Security']
},
{
  title: 'C Programming',
  chapters: ['Problem Solving with Computer',
    'Elements of C', 'Input and Output',
    'Operators and Expression',
    'Control Statement',
    'Arrays',
    'Functions',
    'Structure and Union',
    'Pointers',
    'File Handling in C',
    'Introduction to Graphics',
  ],
},
{
  title: 'Digital Logic',
  chapters: [
    'Binary Systems',
    'Boolean Algebra and Logic Gates',
    'Simplification of Boolean Functions',
    'Combinational Logic',
    'Combinational Logic with MSI and LSI',
    'Synchronous and Asynchronous Sequential Logic',
    'Registers and Counters',
    ],
},
  {
  title: 'Mathematics I',
  chapters: [
    'Function of One Variable', 
    'Limits and Continuity', 
    'Derivatives', 
    'Applications of Derivatives', 
    'Antiderivatives', 
    'Applications of Antiderivatives', 
    'Ordinary Differential Equations', 
    'Infinite Sequence and Series', 
    'Plane and Space Vectors', 
    'Partial Derivatives and Multiple Integrals'
  ],
},
  {
  title: 'Physics',
  chapters: [
    'Rotational Dynamics and Oscillatory Motion', 
    'Electric and Magnetic Field', 
    'Fundamentals of Atomic Theory', 
    'Methods of Quantum Mechanics', 
    'Fundamentals of Solid State Physics', 
    'Semiconductor and Semiconductor devices', 
    'Universal Gates and Physics of Integrated Circuits'
  ],
},
  ],

  '2': [
    {
      title: 'Discrete Structures',
      chapters: [
        'Basic Discrete Structures',
        'Integers and Matrices',
        'Logic and Proof Methods',
        'Induction and Recursion',
        'Counting and Discrete Probability',
        'Relations and Graphs'
      ]
    },
    {
      title: 'Object Oriented Programming',
      chapters: [
        'Introduction to Object Oriented Programming',
        'Basics of C++ Programming',
        'Classes & Objects',
        'Operator Overloading',
        'Inheritance',
        'Virtual Functions, Polymorphism, and Miscellaneous Features',
        'Function Templates and Exception Handling',
        'File Handling'
      ]
    },
    {
      title: 'Microprocessor',
      chapters: [
        'Introduction',
        'Basic Architecture',
        'Instruction Cycle',
        'Assembly Language Programming',
        'Basic I/O, Memory R/W and Interrupt Operations',
        'Input/Output Interfaces',
        'Advanced Microprocessors'
      ]
    },
    {
      title: 'Mathematics II',
      chapters: [
        'Linear Equations in Linear Algebra',
        'Transformation',
        'Matrix Algebra',
        'Determinants',
        'Vector Spaces',
        'Vector Space Continued',
        'Eigenvalues and Eigenvectors',
        'Orthogonality and Least Squares',
        'Groups and Subgroups',
        'Rings and Fields'
      ]
    },
    {
      title: 'Statistics I',
      chapters: [
        'Introduction',
        'Descriptive Statistics',
        'Introduction to Probability',
        'Sampling',
        'Random Variables and Mathematical Expectation',
        'Probability Distributions',
        'Correlation and Linear Regression'
      ]
    }
  ],
  '3': [
    {
      title: 'Data Structures and Algorithms',
      chapters: [
        'Introduction to Data Structures & Algorithms',
        'Stack',
        'Queue',
        'Recursion',
        'Lists',
        'Sorting',
        'Searching and Hashing',
        'Trees and Graphs'
      ]
    },
    {
      title: 'Numerical Method',
      chapters: [
        'Solution of Nonlinear Equations',
        'Interpolation and Regression',
        'Numerical Differentiation and Integration',
        'Solving System of Linear Equations',
        'Solution of Ordinary Differential Equations',
        'Solution of Partial Differential Equations'
      ]
    },
    {
      title: 'Computer Architecture',
      chapters: [
        'Data Representation',
        'Register Transfer and Microoperations',
        'Basic Computer Organization and Design',
        'Microprogrammed Control',
        'Central Processing Unit',
        'Pipelining',
        'Computer Arithmetic',
        'Input Output Organization',
        'Memory Organization'
      ]
    },
    {
      title: 'Computer Graphics',
      chapters: [
        'Introduction to Computer Graphics',
        'Scan Conversion Algorithms',
        'Two-Dimensional Geometric Transformations',
        'Three-Dimensional Geometric Transformations',
        '3D Object Representation',
        'Solid Modeling',
        'Visible Surface Detection',
        'Illumination Models and Surface Rendering',
        'Introduction to Virtual Reality',
        'Introduction to OpenGL'
      ]
    },
    {
      title: 'Statistics II',
      chapters: [
        'Sampling Distribution and Estimation',
        'Testing of Hypothesis',
        'Non-Parametric Tests',
        'Multiple Correlation and Regression',
        'Design of Experiment',
        'Stochastic Process'
      ]
    }
  ],
  '4': [
    {
      title: 'Theory of Computation',
      chapters: [
        'Basic Foundations',
        'Introduction to Finite Automata',
        'Regular Expressions',
        'Context Free Grammar',
        'Push Down Automata',
        'Turing Machines',
        'Undecidability and Intractability'
      ]
    },
    {
      title: 'Computer Networks',
      chapters: [
        'Introduction to Computer Network',
        'Physical Layer and Network Media',
        'Data Link Layer',
        'Network Layer',
        'Transport Layer',
        'Application Layer',
        'Multimedia & Future Networking'
      ]
    },
    {
      title: 'Operating Systems',
      chapters: [
        'Operating System Overview',
        'Process Management',
        'Process Deadlocks',
        'Memory Management',
        'File Management',
        'Device Management',
        'Linux Case Study'
      ],
    },
    {
      title: 'Database Management System',
      chapters: [
        'Database and Database Users',
        'Database System – Concepts and Architecture',
        'Data Modeling Using the Entity-Relational Model',
        'The Relational Data Model and Relational Database Constraints',
        'The Relational Algebra and Relational Calculus',
        'SQL',
        'Relational Database Design',
        'Introduction to Transaction Processing Concepts and Theory',
        'Concurrency Control Techniques',
        'Database Recovery Techniques'
      ]
    },
    {
      title: 'Artificial Intelligence',
      chapters: [
        'Introduction',
        'Intelligent Agents',
        'Problem Solving by Searching',
        'Knowledge Representation',
        'Machine Learning',
        'Applications of AI'
      ]
    }
  ],
  '5': [
    {
      title: 'Design and Analysis of Algorithms',
      chapters: [
        'Foundation of Algorithm Analysis',
        'Iterative Algorithms',
        'Divide and Conquer Algorithms',
        'Greedy Algorithms',
        'Dynamic Programming',
        'Backtracking',
        'Number Theoretic Algorithms',
        'NP Completeness and Approximation Algorithms',
        'Lab Work: Algorithm Implementation and Analysis'
      ]
    },
    {
      title: 'System Analysis and Design',
      chapters: [
        'Foundations for Systems Development',
        'Planning',
        'Analysis',
        'Design',
        'Implementation and Maintenance',
        'Introduction to Object-Oriented Development',
        'Lab Work: System Analysis and Design Case Studies & Modeling'
      ]
    },
    {
      title: 'Cryptography',
      chapters: [
        'Introduction and Classical Ciphers',
        'Symmetric Ciphers',
        'Asymmetric Ciphers',
        'Cryptographic Hash Functions and Digital Signatures',
        'Authentication',
        'Network Security and Public Key Infrastructure',
        'Malicious Logic',
        'Lab Work: Cryptographic Algorithms and Network Security'
      ]
    },
    {
      title: 'Simulation and Modelling',
      chapters: [
        'Introduction to Simulation',
        'Simulation of Continuous and Discrete System',
        'Queuing System',
        'Markov Chains',
        'Random Numbers',
        'Verification and Validation',
        'Analysis of Simulation Output',
        'Simulation of Computer Systems',
        'Lab Work: Simulation Exercises and Tools (GPSS, Random Generation, Monte Carlo, Queues)'
      ]
    },
    {
      title: 'Web Technology',
      chapters: [
        'Introduction',
        'Hyper Text Markup Language',
        'Cascading Style Sheets',
        'Client Side Scripting with JavaScript',
        'AJAX and XML',
        'Server Side Scripting using PHP'
      ]
    }
  ],
  '6': [
    {
      title: 'Software Engineering',
      chapters: [
        'Introduction',
        'Software Processes',
        'Agile Software Development',
        'Requirements Engineering',
        'System Modeling',
        'Architectural Design',
        'Design and Implementation',
        'Software Testing',
        'Software Evolution',
        'Software Management'
      ]
    },
    {
      title: 'Compiler Design and Construction',
      chapters: [
        'Introduction to Compiler',
        'Lexical Analyzer',
        'Symbol Table Design and Runtime Storage Management',
        'Intermediate Code Generator, Code Generator, Optimization and Case studies'
      ]
    },
    {
      title: 'E-Governance',
      chapters: [
        'Introduction to E-Government and E-Governance',
        'Models of E-Governance',
        'E-Government Infrastructure Development',
        'Security for e-Government',
        'Applications of Data Warehousing and Data Mining in Government',
        'Case Studies'
      ]
    },
    {
      title: 'NET Centric Computing',
      chapters: [
        'Language Preliminaries',
        'Introduction to ASP.NET',
        'HTTP and ASP.NET Core',
        'Creating ASP.NET core MVC applications',
        'Working with Database',
        'State Management on ASP.NET Core Application',
        'Client-side Development in ASP.NET Core',
        'Securing in ASP.NET Core Application',
        'Hosting and Deploying ASP.NET Core Application'
      ]
    },
    {
      title: 'Technical Writing',
      chapters: [
        'What Is Technical Writing',
        'Audience and Purpose',
        'Writing Process',
        'Brief Correspondence',
        'Document Design and Graphics',
        'Writing for the Web',
        'Information Reports',
        'Employment Communication',
        'Presentations',
        'Recommendation Reports',
        'Proposals',
        'Ethics in the Workplace'
      ]
    }
  ],
  '7': [
    {
      title: 'Advanced Java Programming',
      chapters: [
        'Programming in Java',
        'User Interface Components with Swing',
        'Event Handling',
        'Database Connectivity',
        'Network Programming',
        'GUI with JavaFX',
        'Servlets and Java Server Pages',
        'RMI and CORBA'
      ]
    },
    {
      title: 'Data Warehousing and Data Mining',
      chapters: [
        'Introduction to Data Warehousing',
        'Introduction to Data Mining',
        'Data Preprocessing',
        'Data Cube Technology',
        'Mining Frequent Patterns',
        'Classification and Prediction',
        'Cluster Analysis',
        'Graph Mining and Social Network Analysis',
        'Mining Spatial, Multimedia, Text and Web Data'
      ]
    },
    {
      title: 'Principles of Management',
      chapters: [
        'The Nature of Organizations',
        'Introduction to Management',
        'Evolution of Management Thought',
        'Environmental Context of Management',
        'Planning and Decision Making',
        'Organizing Function',
        'Leadership & Conflict',
        'Motivation',
        'Communication',
        'Control and Quality Management',
        'Global Context of Management',
        'Management Trends and Scenario in Nepal'
      ]
    },
    {
      title: 'Project Work',
      chapters: []
    }
  ],
  '8': [
    {
      title: 'Advanced Database',
      chapters: [
        'Enhanced E-R Model and Relational Model',
        'Object and Object Relational Databases',
        'Query Processing and Optimization',
        'Distributed Databases, NoSQL Systems, and BigData',
        'Advanced Database Models, Systems, and Applications',
        'Lab Work: Advanced Database Implementation and Mini Project'
      ]
    },
    {
      title: 'Internship',
      chapters: [
        'Internship Guidelines',
        'Internship Report Content'
      ]
    }
  ]
};



const CARD_WIDTH = Dimensions.get('window').width / 2 - 24;

export default function SemesterNotesScreen({ route, navigation }) {
  const { semesterId, semesterTitle } = route.params;
  const notes = notesData[semesterId] || [];

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.cardWrapper}
      android_ripple={{ color: '#ddd' }}
      onPress={() =>
        navigation.navigate('BookChapters', {
          bookTitle: item.title,
          chapters: item.chapters,
        })
      }
    >
      <LinearGradient
        colors={['#6a11cb', '#2575fc']}
        style={styles.card}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.iconWrapper}>
          <Icon name="file-document-outline" size={28} color="#fff" />
        </View>
        <Text numberOfLines={2} style={styles.noteText}>
          {item.title}
        </Text>
      </LinearGradient>
    </Pressable>
  );

  return (
    <>
    {/* <BackButton /> */}
    <View style={styles.container}>
      <Text style={styles.heading}>{semesterTitle} Notes</Text>
      {notes.length === 0 ? (
        <Text style={styles.noNotes}>No notes available yet.</Text>
      ) : (
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4FA',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4C278A',
    textAlign: 'center',
    marginBottom: 20,
  },
  noNotes: {
    marginTop: 60,
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  list: {
    paddingBottom: 40,
  },
  row: {
    justifyContent: 'space-between',
  },
  cardWrapper: {
    flex: 1,
    margin: 8,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 14,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 2, height: 4 },
  },
  iconWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: 10,
    borderRadius: 30,
    marginBottom: 14,
  },
  noteText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
});
