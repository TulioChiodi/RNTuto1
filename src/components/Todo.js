import React, {Component} from 'react';
//Para se utilizar as PropTypes é necessário a importação de PropTypes de prop-types
import PropTypes from 'prop-types';

import {View, Text, StyleSheet} from 'react-native';

// Criando o componente Todo, deve ser declarado com o mesmo nome do arquivo.js
export default class Todo extends Component {

// Atribuindo um tipo para a variavel e/ou colocando a propriedade como requerida (obrigatória)
  static propTypes = {
    propTitle: PropTypes.string.isRequired,
  };

  // Props padrão caso nenhum valor para a propriedade seja inserido, aparentemente tem prioridade sobre propTypes
  static defaultProps = {
    propTitle: 'Todo padrão'
  };
  render(){
    return(
      <View>
      {/* Chamando a propriedade 'prop' nomeada 'PropTitle' do componente Todo 'this' */}
        <Text> {this.props.propTitle} </Text>
      </View>
    );
  }
}

// declaração de estilos do componente
const styles = StyleSheet.create({

});
