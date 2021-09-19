import React from 'react'
import { createField } from 'react-advanced-form'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

class Datepicker extends React.Component {
    handleChange = (nextValue) => {
        this.props.handleFieldChange({ nextValue })
    }

    render() {
        const { fieldProps } = this.props

        return (
            <div className="form-group">
                <ReactDatePicker
                    {...fieldProps}
                    className="form-control"
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default createField({
    valuePropName: 'selected',
    initialValue: new Date(),
})(Datepicker)