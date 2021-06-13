import * as React from "react";

type Props = {

};
type States = {
    display: any
};

class Calculator extends React.Component<Props, States> {
    constructor(props: Readonly<Props>) {
        super(props);

        this.state = {
            display: "0",
        };

    }

    render(): JSX.Element {
        return (
            <div className="calc">
                <div className="display"> 0 </div>
                <div className="nums">
                    <div className="ac special-code"> AC </div>
                    <div className="plus-minus special-code"> +/-</div>
                    <div className="percent special-code"> &#37; </div>
                    <div className="num-7"> 7 </div>
                    <div className="num-8"> 8 </div>
                    <div className="num-9"> 9 </div>
                    <div className="num-4"> 4 </div><div className="num-5"> 5 </div>
                    <div className="num-6"> 6 </div>
                    <div className="num-1"> 1 </div>
                    <div className="num-2"> 2 </div>
                    <div className="num-3"> 3 </div>
                    <div className="num-0"> 0 </div>
                    <div className="num-dot"> . </div>
                </div>
                <div className="ops">
                    <div className="op-1"> &#247; </div>
                    <div className="op-2"> &#215; </div>
                    <div className="op-3"> – </div>
                    <div className="op-4"> + </div>
                    <div className="op-5"> = </div>
                </div>
            </div>
        );
    }
}
export default Calculator;