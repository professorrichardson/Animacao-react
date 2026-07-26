import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import { InformacoesUsuario } from '../../componentes/InformacoesUsuario';
import { MaterialIcons } from '@expo/vector-icons';
import mapa from '../../assets/mapa.png';
import styles from './styles';

export default function Detalhes(props) {
  const dados = props.route.params;

  const [jaAnimou, setJaAnimou] = useState(false);

  function fazerRotacao(){
    setJaAnimou(true);
  }

  return (
    <TelaDeFundo>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>

          <InformacoesUsuario
          nome={dados.nome}
          detalhes={dados.perfil}
          foto={dados.foto}
        />
          <View style={styles.detalhesMedia}>
            <View style={styles.media}>
              <Text style={styles.subtitulo}>Tempo médio de atendimento</Text>
              <View style={[styles.circulo, { borderColor: '#FFB050' }]}>
                <Text style={styles.circuloTexto}>52 min</Text>
              </View>
            </View>
            <View style={styles.media}>
              <Text style={styles.subtitulo}>Atendimentos no mês</Text>
              <View style={styles.circulo}>
                <Text style={styles.circuloTexto}>22</Text>
              </View>
            </View>
          </View>


          <Text style={styles.subtitulo}>Anotações do atendimento</Text>
          <Text style={styles.detalhes}>{dados.sobre}</Text>

          <Text style={styles.subtitulo}>Local</Text>
          <Image style={styles.imagemMapa} source={mapa} />
          <Text>{dados.endereco}</Text>
          <TouchableOpacity 
            style={styles.botao} 
            onPress={fazerRotacao}
          >
            <Text style={styles.botaoTexto}>Notificar atendimento</Text>
              <View style={styles.icone}>
              <MaterialIcons
                name={ jaAnimou? 'notifications' : 'notifications-none'} 
                size={20} 
                color="#FFF"
              />
              </View>
          </TouchableOpacity>
      </ScrollView>
    </TelaDeFundo>
  )
}
