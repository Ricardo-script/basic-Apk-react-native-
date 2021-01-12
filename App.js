import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

    class App extends Component{
        constructor(props){
            super(props);
            this.state={
                textoFrase:'',
                img: require('./src/biscoito.png'),
            }

            this.quebraBiscoito = this.quebraBiscoito.bind(this);

            this.frases = [
                'Alegrem-se na esperança, sejam pacientes na tribulação, perseverem na oração. RM 12:12 ',
                'Ó minha alma, espera silenciosa somente em Deus, porque dele vem a minha esperança salmos 62.5 ',
                'Ora, a fé é a certeza daquilo que esperamos e a prova das coisas que não vemos HB 11:1',
                'Portanto, visto que temos tal esperança, mostramos muita confiança 2 Coríntios 3:12',
                'Mas os pobres nunca serão esquecidos nem se frustrará a esperança dos necessitados. Sl 9:18',
                'Mas agora, Senhor, que hei de esperar?, Minha esperança está em ti. Sl 39:7',
                'Apeguemo-nos com firmeza à esperança que professamos, pois aquele, que prometeu é fiel. Hb 10.23',
            ];
        }

        quebraBiscoito(){
            let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
            this.setState({
                textoFrase: ' " ' + this.frases[numeroAleatorio] + ' " ',
                img: require('./src/biscoitoAberto.png')
            });

            // ex: this.frases[1], qual é a frase 1? então retorna a frase.
        }

        // estatico seria: source={require('./src/biscoito.png')}
        render(){
            return(
                <View style={styles.container}>
                    <Image 
                        style={styles.img}
                        source={ this.state.img }
                    />
                    <Text style={styles.textoFrase}>{ this.state.textoFrase }</Text>

                    <TouchableOpacity style={styles.botao}onPress={ this.quebraBiscoito }>
                        <View style={styles.btnArea}>
                            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            );
        }
    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
            alignItems: 'center',
            justifyContent:'center',
            backgroundColor:'#151515',
        },
        img:{
            width: 250,
            height: 250,
        },
        textoFrase:{
            fontSize:20,
            color:'#DD7B22',
            margin:30,
            fontStyle:'italic',
            textAlign:'center',
        },
        botao:{
            width: 230,
            height:50,
            borderWidth:2,
            borderColor:'#DD7B22',
            borderRadius:25,
        },
        btnArea:{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
        },
        btnTexto:{
            fontSize:18,
            fontWeight:"bold",
            color:'#DD7B22',
        },
    });

    export default App;

