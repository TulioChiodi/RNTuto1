import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

//importando o componente
import Todo from './components/Todo';

// Unica maneira de rodar o modo render novamente, é alterando o state ou mudando alguma propriedade de algum componente.

export default class App extends Component {
  // declaração de estado e seu conteudo, array de objetos , 'usuario' e 'todos'.
  state = {
    usuario: 'Diego',
    todos: [
      { id: 0, text: 'Fazer café'},
      { id: 1, text: 'Estudar o GoNative'} , 
    ],
  };
  // Arrow functions são utilizadas para que o this. se refira ao escopo da classe e não da própria função
  // Para modificar a função estado, é necessário copiar seu conteúdo e assim apendar (append) o que desejar
  // Caso alguma variavel seja omitida, ela não sofre alterações
  addTodo = () => {
    this.setState({ 
      todos: [ 
        ...this.state.todos,
        { id:Math.random(), text: 'Novo Todo' },
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* É utilizado o .map para iterar sobre a variavel, dentro de um array, no caso, this, 'App', estado, state e 'todos' */}
        {this.state.todos.map(i => (
          <Todo key={i.id} propTitle={i.text} />
        ))}
        <Button title="Adicionar todo" onPress={this.addTodo} />
        {/* componente sendo chamado sem props */}
        <Todo />
        {/* componente sendo chamado com props */}
        <Todo propTitle="PropTitle" />
      </View>
    );
  }
}

// Declaração de estilos do componente App
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FcFF',
  },
});
