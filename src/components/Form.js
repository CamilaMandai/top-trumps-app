import React from 'react';
import Input from './Input';

class Form extends React.Component {
  state = {
    name: '',
    cardDescription: '',
    speed: 0,
    weight: 0,
    lifespan: 0,
    imgUrl: '',
    rarity: 'normal',
    superT: false,
  };

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  };

  handleCheck = ({ target }) => {
    const { name } = target;
    this.setState(target.checked ? { [name]: true } : { [name]: false });
  };

  // getValue = (chave) => this.state[chave];

  render() {
    // const { label, type, name, testId, value, htmlFor, handleChange } = this.props;
    const { name,
      cardDescription,
      speed,
      weight,
      lifespan,
      imgUrl,
      rarity,
      superT } = this.state;
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input
            data-testid="name-input"
            id="name"
            type="text"
            name="name"
            value={ name }
            onChange={ this.handleChange }
          />
        </label>
        <Input
          label="Descrição"
          type="textarea"
          name="cardDescription"
          testId="description-input"
          value={ cardDescription }
          handleChange={ this.handleChange }
        />
        <Input
          label="Velocidade"
          type="number"
          name="speed"
          testId="attr1-input"
          value={ speed }
          handleChange={ this.handleChange }
        />
        <Input
          label="Peso (kg)"
          type="number"
          name="weight"
          testId="attr2-input"
          value={ weight }
          handleChange={ this.handleChange }
        />
        <Input
          label="Longevidade (anos)"
          type="number"
          name="lifespan"
          testId="attr3-input"
          value={ lifespan }
          handleChange={ this.handleChange }
        />
        <Input
          label="Imagem"
          type="text"
          name="imgUrl"
          testId="image-input"
          value={ imgUrl }
          handleChange={ this.handleChange }
        />
        <label htmlFor="rare-input">
          Raridade
          <select
            data-testid="rare-input"
            name="rarity"
            onChange={ this.handleChange }
            value={ rarity }
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
            value={ superT }
            onChange={ this.handleCheck }
            type="checkbox"
            checked={ superT === true }
            data-testid="trunfo-input"
          />
        </label>
        <button data-testid="save-button" type="submit">Salvar</button>
      </form>
    );
  }
}

export default Form;
