import { StyleSheet, View, Text, FlatList, TouchableOpacity, Button } from 'react-native';


const ViewAll = ({ goBack, categories }) => {
    const allItems = Object.values(categories).flat();
  
    return (
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.changeButton} onPress={goBack}>
          <Text style={styles.changeButtonText}>Choose Category</Text>
        </TouchableOpacity>
        <FlatList
          data={allItems}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4DECB',
    },
    pickerContainer: {
      flex: 1,
      padding: 20,
      justifyContent: 'space-between',
    },
    picker: {
      height: 50,
      width: '100%',
      backgroundColor: '#E5E5E5',
      borderRadius: 8,
      marginBottom: 20,
    },
    pickerItem: {
      backgroundColor: '#E5E5E5',
      fontWeight: 'bold', // Bolder font for picker items
    },
    confirmButtonContainer: {
      padding: 20,
    },
    confirmButton: {
      backgroundColor: '#98C1D9',
      padding: 12,
      borderRadius: 8,
      alignItems: 'center',
    },
    listContainer: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    changeButton: {
      backgroundColor: '#3D5A80',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 10,
    },
    buttonText: {
      color: '#293241',
      fontWeight: 'bold', // Bolder font for button text
      fontSize: 16,
    },
    changeButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold', // Bolder font for change button text
      fontSize: 14,
    },
    item: {
      padding: 15,
      fontSize: 18,
      backgroundColor: '#E5E5E5',
      borderRadius: 8,
      marginTop: 10,
      color: '#293241',
      fontWeight: 'bold', // Bolder font for item list
    },
  });