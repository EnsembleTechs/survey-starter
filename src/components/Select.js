import React from 'react'
import PropTypes from 'prop-types'
import { createField } from 'react-advanced-form'
import ReactSelect from 'react-select'

class Select extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }

  handleChange = (selectedOption) => {
    this.props.handleFieldChange({ nextValue: selectedOption })
  }

  render() {
    const { fieldProps, label } = this.props

    return (
      <div className="form-group">
        {label && <label>{label}</label>}
        <ReactSelect {...fieldProps} onChange={this.handleChange} />
      </div>
    )
  }
}

export default createField({
  enforceProps({ props: { options, isMulti, } }) {
    return {
      options,
      isMulti,
    }
  },
})(Select)