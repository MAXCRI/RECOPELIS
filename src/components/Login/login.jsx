import { View, TextInput, Button } from 'react-native';
import styles from './Styles'


const Login = ({navigation}) => {
    function HandleLogin(){
            props.setIsLoggedIn(true);
        }
return(
    <View style={styles.container}>
            <TextInput
              placeholder="USUARIO"
              style={styles.inputUser}
            />
            <TextInput
              placeholder="CONTRASEÑÁ"
              style={styles.inputContra}
            />
        <View style={styles.button}> 
        < Button title="Iniciar Sesion " color="red" onPress={() => navigation.navigate("Recomendaciones")}/>
        </View>
        
    </View>
    );
    }

export default Login;
