import React from 'react';
import classnames from 'classnames';

const Link = (props) => {
  return <a href={props.link}>{props.children}</a>
}

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = 'button';
    if (this.props.classname) {
      classes = classnames(classes, this.props.classnames);
    }
    return (
      <Button className={classnames} onClick={this.props.clickHandler}>
        {this.props.children}
      </Button>
    );
  }
}
