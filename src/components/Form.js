import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends React.Component {
  // state = {
  //   name: '',
  //   carddescription: '',
  //   speed: 0,
  //   weight: 0,
  //   lifespan: 0,
  //   imgUrl: '',
  //   rarity: 'normal',
  //   superT: false,
  // };

  // handleChange = ({ target }) => {
  //   const { value, name } = target;
  //   this.setState({ [name]: value });
  // };

  // handleCheck = ({ target }) => {
  //   const { name } = target;
  //   this.setState(target.checked ? { [name]: true } : { [name]: false });
  // };

  // getValue = (chave) => this.state[chave];

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

    // const { name,
    //   carddescription,
    //   speed,
    //   weight,
    //   lifespan,
    //   imgUrl,
    //   rarity,
    //   superT } = this.state;
    console.log(hasTrunfo);
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            id="name"
            type="text"
            name="name"
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
          name="speed"
          testId="attr1-input"
          value={ cardAttr1 }
          handleChange={ onInputChange }
        />
        <Input
          label="Peso (kg)"
          type="number"
          name="weight"
          testId="attr2-input"
          value={ cardAttr2 }
          handleChange={ onInputChange }
        />
        <Input
          label="Longevidade (anos)"
          type="number"
          name="lifespan"
          testId="attr3-input"
          // value={lifespan}
          // handleChange={this.handleChange}
          value={ cardAttr3 }
          handleChange={ onInputChange }
        />
        <Input
          label="Imagem"
          type="text"
          name="imgUrl"
          testId="image-input"
          // value={imgUrl}
          value={ cardImage }
          handleChange={ onInputChange }
        />
        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            name="rarity"
            onChange={ onInputChange }
            // value={rarity}
            value={ cardRare }
          >
            <option name="rarity" value="normal">Normal</option>
            <option name="rarity" value="raro">Raro</option>
            <option name="rarity" value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          É Super Trunfo?
          <input
            name="superT"
            // value={ superT }
            // onChange={this.handleCheck}
            onChange={ onInputChange }
            type="checkbox"
            // checked={superT === true}
            checked={ cardTrunfo }
            data-testid="trunfo-input"
          />
        </label>
        <button
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          type="submit"
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
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
