import * as React from "react";


type Props = {
  display: any;

};
type States = {
  display: any;
};

class Display extends React.Component<Props, States> {
  divRef: React.RefObject<any>;
  spanRef: React.RefObject<any>;
  previousWidth: number;

  constructor(props: Readonly<Props>) {
    super(props);

    this.state = { display: props.display };

    this.divRef = React.createRef();
    this.spanRef = React.createRef();

  }

  render(): JSX.Element {
    return (
      <div ref={this.divRef} className="Display">
        <span ref={this.spanRef} className="DisplaySpan">
          {this.props.display}
        </span>
      </div>
    );
  }

  // componentDidUpdate() {
  //   const divWidth = this.divRef.current.clientWidth;
  //   this.previousWidth = divWidth;
  // }
}



export default Display