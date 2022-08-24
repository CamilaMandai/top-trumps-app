import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    cards: [],
  };

  checkButtonDisable = () => {
    const { cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const maxAtt = 90;
    const maxSumAtt = 210;
    const sumAtt = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if (cardName === ''
      || cardDescription === ''
      || cardImage === ''
      || Number(cardAttr1) > maxAtt
      || Number(cardAttr1) < 0
      || Number(cardAttr2) > maxAtt
      || Number(cardAttr2) < 0
      || Number(cardAttr3) > maxAtt
      || Number(cardAttr3) < 0
      || sumAtt > maxSumAtt) {
      this.setState({ isSaveButtonDisabled: true });
    } else {
      this.setState({ isSaveButtonDisabled: false });
    }
  };

  onInputChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value }, () => this.checkButtonDisable());
  };

  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;
    if (cardTrunfo) { this.setState({ hasTrunfo: true }); }
    const novoCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };
    this.setState((anterior) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cards: [...anterior.cards, novoCard],
    }));
  };

  removeBtn = ({ target }) => {
    const { name } = target;
    const { cards } = this.state;
    const cardExcluded = cards.find((card) => card.cardName === name);
    if (cardExcluded.cardTrunfo) { this.setState({ hasTrunfo: false }); }
    const cardRemained = cards.filter((card) => card.cardName !== name);
    this.setState({ cards: cardRemained });
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cards,
    } = this.state;

    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          button={ false }
          onClick={ this.removeBtn }
        />
        <div>
          <h3>Todas as Cartas</h3>
          {cards.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
              hasTrunfo={ card.hasTrunfo }
              button
              del={ this.removeBtn }
            />
          ))}
        </div>

      </div>
    );
  }
}

export default App;
