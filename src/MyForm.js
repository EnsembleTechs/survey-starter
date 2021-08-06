import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography, TextField } from '@material-ui/core'
import './App.css'

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
          margin: theme.spacing(2),
          width: '35ch',
          borderBottomColor: '#fff',
        },
        textfield: {
          color: 'white'
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 3)
    },
}))

const MyForm = () => {
    const classes = useStyles()
    const testField = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(testField.current.value)
    }

    return (
        <div className="App">
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    className={classes.textfield}
                    margin="normal"
                    required
                    id="testfield"
                    label="Test Field"
                    name="testfield"
                    inputRef={testField}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    type="submit"
                >
                    Submit
                </Button>
             </form>
        </div>
    )
}

export default MyForm

