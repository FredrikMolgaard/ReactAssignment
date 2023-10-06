[---Your Daily Ghoul---]

En TodoList för daglig produktivitet

- Lägg till aktiviteter
- Tracka din progress
- Få en bra översikt över dina dagliga sysslor och bli mer produktiv!

Krav för godkänt:

- [x] Projektet använder minst 4 stycken RN-komponenter och minst 4 stycken Expo
      komponenter.
- [x] De utvalda komponenterna MÅSTE antecknas i README filen tillsammans med en lista över genomförda krav.
- [x] React Navigation används för att skapa en bättre upplevelse i appen.
- [x] Git & GitHub har använts
- [x] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [x] Uppgiften lämnas in i tid!
- [x] Muntlig presentation är genomförd

      Krav för väl godkänt:

- [x] Alla punkter för godkänt är uppfyllda
- [?] Ytterligare en valfri extern modul används i projektet. <Räknas ProgressBar som extern komponent?>
- [x] Appen ska prata med ett Web-API för att hämta data. <AsyncStorage?>
- [?] Appen ska lanseras på en Appstore (Deadline samma dag som kursen slutar) <Testar gärna att lansera i framtiden>

Komponenter:

- React Native:

  - TextInput
  - Button
  - FlatList
  - ImageBackground
  - BottomTab

- Expo:
  - Checkbox
  - Expo Font
  - KeepAwake
  - AsyncStorage
  - StatusBar

Bygga projekt:

- npx create-expo-app -t
- npm install @react-native-community/progress-bar-android --save
- npm install @react-navigation/bottom-tabs
- npm install @react-navigation/native
- npm install @react-navigation/native-stack
- npx expo install react-native-screens react-native-safe-area-context
- npx expo install @react-native-async-storage/async-storage
- npx expo install expo-status-bar
- npx expo install expo-keep-awake
- npx expo install expo-font
- npx expo install expo-checkbox
