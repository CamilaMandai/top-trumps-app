import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  trunfoElement = (hasTrunfo, cardTrunfo, onInputChange) => {
    if (hasTrunfo) {
      return (<span>Você já tem um Super Trunfo em seu baralho</span>);
    } return (
      <label htmlFor="trunfo-input">
        É Super Trunfo?
        <input
          name="cardTrunfo"
          onChange={ onInputChange }
          type="checkbox"
          id="trunfo-input"
          checked={ cardTrunfo }
          data-testid="trunfo-input"
        />
      </label>);
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome
            <input
              data-testid="name-input"
              id="cardName"
              type="text"
              name="cardName"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <Input
            label="Descrição"
            type="textarea"
            name="cardDescription"
            testId="description-input"
            value={ cardDescription }
            handleChange={ onInputChange }
          />
          <Input
            label="Velocidade"
            type="number"
            name="cardAttr1"
            testId="attr1-input"
            value={ cardAttr1 }
            handleChange={ onInputChange }
          />
          <Input
            label="Peso (kg)"
            type="number"
            name="cardAttr2"
            testId="attr2-input"
            value={ cardAttr2 }
            handleChange={ onInputChange }
          />
          <Input
            label="Longevidade (anos)"
            type="number"
            name="cardAttr3"
            testId="attr3-input"
            value={ cardAttr3 }
            handleChange={ onInputChange }
          />
          <Input
            label="Imagem"
            type="text"
            name="cardImage"
            testId="image-input"
            value={ cardImage }
            handleChange={ onInputChange }
          />
          <label htmlFor="rare-input">
            Raridade
            <select
              data-testid="rare-input"
              name="cardRare"
              onChange={ onInputChange }
              // value={rarity}
              value={ cardRare }
            >
              <option name="cardRare" value="normal">Normal</option>
              <option name="cardRare" value="raro">Raro</option>
              <option name="cardRare" value="muito raro">Muito raro</option>
            </select>
          </label>

          {/* {hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span>
            : <label htmlFor="trunfo-input">
              É Super Trunfo?
              <input
                name="cardTrunfo"
                onChange={ onInputChange }
                type="checkbox"
                id="trunfo-input"
                checked={ cardTrunfo }
                data-testid="trunfo-input"
              />
              </label>} */}
          {this.trunfoElement(hasTrunfo, cardTrunfo, onInputChange)}

        </form>
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
