import { View, TextInput, Button } from 'react-native';
import styles from './Styles'

const Login = (props) => {
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
        < Button title="Iniciar Sesion " color="red" onPress={HandleLogin}/>
        </View>
        
    </View>
    );
    }

export default Login;
