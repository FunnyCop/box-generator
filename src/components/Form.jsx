import React, { useState } from "react"

const Form = () => {
    const [ boxes, setBoxes ] = useState( [] )
    const [ color, setColor ] = useState( "" )
    const [ width, setWidth ] = useState( "50px" )
    const [ height, setHeight ] = useState( "50px" )

    const handleSubmit = (e) => {
        e.preventDefault()

        setBoxes( [ ...boxes, <div className = "box" style = {{ backgroundColor: color, width: width, height: height }} /> ] )

        setColor( "" )
        setWidth( "50px" )
        setHeight( "50px" )
    }

    return (
        <div className = "Display">
            <form
                className = "form-group"
                onSubmit = { handleSubmit }
            >
                <label htmlFor = "color">Color</label>

                <input
                    className = "form-control"
                    type = "text"
                    name = "color"
                    value = { color }
                    onChange = {
                        ( e ) => setColor( e.target.value )
                    }
                />

                <label htmlFor = "width">Width</label>

                <input
                    className = "form-control"
                    type = "text"
                    name = "width"
                    value = { width }
                    onChange = {
                        ( e ) => setWidth( e.target.value )
                    }
                />

                <label htmlFor = "height">Height</label>

                <input
                    className = "form-control"
                    type = "text"
                    name = "height"
                    value = { height }
                    onChange = {
                        ( e ) => setHeight( e.target.value )
                    }
                />

                <input
                className = "btn btn-primary"
                    type="submit"
                />
            </form>

            <div className = "Boxes">
                { boxes }
            </div>
        </div>
    )
}

export default Form