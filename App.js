// IMPORTS:
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// SCREENS:
function Estoque () {
  const [count, setCount] = useState(0);
  const navigation = useNavigation();

  function Adicionar () {
    setCount(count+1)
  }

  function Diminuir () {
    if (count > 0) {
      setCount(count-1)
    }
  }

  return (
    <ScrollView>
      <View style={styles.container_produtos}>
        <View style={styles.box_produtos}>
          <Image source={{uri: 'https://www.lojabackinblack.com.br/cdn/imagens/produtos/det/514-slipknot.jpg'}}
          style={{width: 100, height: 100}} />
          <Text>Camisa Slipknot</Text>
          <Text>Camisa da banda Slipknot</Text>
          <View>
            <Text>Estoque: {count}</Text>
            <Button onPress={Adicionar}>
              +
            </Button>
            <Button onPress={Diminuir}>
              -
            </Button>
          </View>
        </View>

        <View style={styles.box_produtos}>
          <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIA4dJ_wloULuLSmV67d995O5arz3ibZRTMw&s'}}
          style={{width: 100, height: 100}} />
          <Text>Camisa System of a Down</Text>
          <Text>Camisa da banda SOAD</Text>
          <View>
            <Text>Estoque: {count}</Text>
            <Button onPress={Adicionar}>
              +
            </Button>
            <Button onPress={Diminuir}>
              -
            </Button>
          </View>
        </View>

        <View style={styles.box_produtos}>
          <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKEtks8h01nfcl5XFXqrAEchZGXsfVX1h9FQ&shttps://down-br.img.susercontent.com/file/sg-11134201-7rdwh-lyajc7jmrh2k8f'}}
          style={{width: 100, height: 100}} />
          <Text>Camisa Bathory</Text>
          <Text>Camisa da banda Bathory</Text>
          <View>
            <Text>Estoque: {count}</Text>
            <Button onPress={Adicionar}>
              +
            </Button>
            <Button onPress={Diminuir}>
              -
            </Button>
          </View>
        </View>

        <View style={styles.box_produtos}>
          <Image source={{uri: 'https://imgs.extra.com.br/1511973574/1xg.jpg?imwidth=500'}}
          style={{width: 100, height: 100}} />
          <Text>Camisa Deftones</Text>
          <Text>Camisa da banda Deftones</Text>
          <View>
            <Text>Estoque: {count}</Text>
            <Button onPress={Adicionar}>
              +
            </Button>
            <Button onPress={Diminuir}>
              -
            </Button>
          </View>
        </View>

        <View style={styles.box_produtos}>
          <Image source={{uri: 'https://img.elo7.com.br/product/600x380/37F5010/camiseta-darkthrone-transilvanian-hunger-black-metal-loja-de-camiseta-de-banda-sao-bernardo-do-campo.jpg'}}
          style={{width: 100, height: 100}} />
          <Text>Camisa Darkthrone</Text>
          <Text>Camisa da banda Darkthrone</Text>
          <View>
            <Text>Estoque: {count}</Text>
            <Button onPress={Adicionar}>
              +
            </Button>
            <Button onPress={Diminuir}>
              -
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

function FaleConosco () {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.image_fale}>
        <Image source={require('./Images/rock.jpg')} />
      </View>
      <View style={styles.container_txtInput}>
        <TextInput style={{height: 40, padding: 5, width: '50%'}} placeholder='Digite seu nome aqui...'/>
        <TextInput style={{height: 40, padding: 5, width: '50%'}} placeholder='Digite seu e-mail aqui...'/>
        <TextInput style={{height: 80, padding: 5, width: '50%'}} placeholder='Deixe seu feedback aqui...'/>
      </View>
    </ScrollView>
  )
}

function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container_txtInput}>
      <TextInput style={{height: 40, padding: 5, width: '50%', margin: 10}} placeholder='Digite seu e-mail aqui...'/>
      <TextInput style={{height: 40, padding: 5, width: '50%', margin: 10}} placeholder='Digite sua senha aqui...'/>
      <Button style={{width: '20%', padding: 20}} onPress={() => {navigation.navigate('MyDrawer')}}>
        <Text>LOGIN</Text>
      </Button>
    </View>
  )
}

// NAVIGATORS:
function MyDrawer() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Estoque" component={Estoque}></Drawer.Screen>
      <Drawer.Screen name="Fale Conosco" component={FaleConosco}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

function MyStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="MyDrawer" component={MyDrawer} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

// APP:
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f432',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_fale: {
    alignItems: 'center',
    margin: 20,
  },
  container_txtInput: {
    alignItems: 'center',
  },
  box_produtos: {
    alignItems: 'center',
    margin: 20,
    backgroundColor: 'grey',
    width: '20%',
    padding: 20,
    borderRadius: 20
  },
  container_produtos: {
    alignItems: 'center'
  }
});
