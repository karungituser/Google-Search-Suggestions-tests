// Write your code here

import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickArrow = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="list-container">
      <p className="suggestion">{suggestion}</p>
      <button className="arrow-button" type="button" onClick={onClickArrow}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-icon"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
