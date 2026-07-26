import React, { useState } from 'react';
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import FundoOndulado from '../../componentes/FundoOndulado';
import { TelaDeFundo } from '../../componentes/TelaDeFundo';
import { Formulario } from '../../componentes/Formulario';
import styles from './styles';

export default function Onboarding({ navigation }) {
  const [fazerLogin, setFazerLogin] = useState(false);
  const [altura, setAltura] = useState(250);

  function avancar() {
    if (fazerLogin) {
      navigation.navigate('Principal');
    } else {
      setAltura(400);
      setFazerLogin(true);
    }
  }

  return (
    <TelaDeFundo>
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' backgroundColor='#FFF' />
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
        />

        <View style={styles.carrosselArea}>
          {!fazerLogin && (
            <Image
              source={require('../../assets/card1.png')}
              style={styles.cardImagem}
              resizeMode="contain"
            />
            )}
        </View>
        <Image
          source={require('../../assets/medica.png')}
          style={styles.medicaImg}
        />
        <FundoOndulado height={altura}>
          <View style={styles.infoArea}>
            {fazerLogin ?
              <Formulario
                titulo="Olá! Acesse sua conta"
                texto="Entre com suas informações para acompanhar os atendimentos da escola."
              />
              :
              <View>
                <Text style={styles.titulo}>Organize os atendimentos da escola</Text>
                <Text style={styles.texto}>
                  Acompanhe reuniões, chamados da secretaria e horários com alunos, professores e responsáveis.
                </Text>
              </View>
            }

            <TouchableOpacity style={styles.botao} onPress={avancar}>
              <Text style={styles.botaoTexto}>{fazerLogin ? 'Entrar' : 'Começar'}</Text>
            </TouchableOpacity>
          </View>
        </FundoOndulado>
      </View>
    </TelaDeFundo>
  );
}
