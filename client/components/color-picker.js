import { ChromePicker } from 'react-color'
import { SketchPicker } from 'react-color'
import React from 'react'
import reactCSS from 'reactcss'

class ColorPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayColorPicker: false,
    }
  }
  handleClick = () =>
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  handleClose = () => this.setState({ displayColorPicker: false })
  handleChange = (_color) => this.props.setColor(_color.hex)

  render() {
    const { title, ruby } = this.props

    const styles = reactCSS({
      default: {
        color: {
          width: '90px',
          height: '30px',
          borderRadius: '2px',
          background: this.props.color,
        },
        swatch: {
          padding: '1px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    })

    return (
      <div className="mx-1 my-1 flex flex-col items-left text-left">
        <div className="flex flex-col mb-1">
          <span className="text-xs">{ruby}</span>
          <span className="text-sm font-bold">{title}</span>
        </div>
        <div>
          <div style={styles.swatch} onClick={this.handleClick}>
            <div style={styles.color} />
          </div>
          {this.state.displayColorPicker ? (
            <div style={styles.popover}>
              <div style={styles.cover} onClick={this.handleClose} />
              <ChromePicker
                color={this.props.color}
                onChangeComplete={this.handleChange}
              />
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}
export default ColorPicker
