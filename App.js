import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import Health from './screens/week5/Health';
import ChartKitScreen from './components/week5/ChartKitScreen';
// import TestPaper from './screens/week4/TestPaper';
// import PaperQuiz from './screens/week4/PaperQuiz';
// import Welcome from './screens/Welcome';
// import Travel from './screens/week3/Travel';
// import Resort from './screens/week3.1/Resort';

export default function App() {
  return (
    // <Resort />
    // <PaperProvider>
    // <PaperQuiz />
    // </PaperProvider>
    // <Health />
    <ChartKitScreen />
  );
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';

// import { PaperProvider } from 'react-native-paper';
// import TestPaper from './screens/week4/TestPaper';

// export default function App() {
//   return (
//     // <Welcome />
//     // <Travel />
//     <PaperProvider>
//     <TestPaper />
//     </PaperProvider>

//   );
// }
