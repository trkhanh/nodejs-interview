import * as React from "react";
import { GlobalHotKeys } from "react-hotkeys";

type Props = {
    className: string;
    value: number | string
};
type State = {
    count: number; // like this
};

class Button extends React.Component<Props, State> {
    keyMap: any
    handlers: any
    constructor(props: Props) {
        super(props);

        this.keyMap = {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
            6: "6",
            7: "7",
            8: "8",
            9: "9",
            0: "0",
            EQUAL: "=",
            MULTIPLY: "shift+8",
            ADD: "shift+=",
            SUBTRACT: "-",
            DIVIDE: "/",
            AC: "c",
            DOT: ".",
            PERCENT: "shift+5",
            ENTER: "enter",
        };
    }
    render() {
        return (
            <GlobalHotKeys keyMap={this.keyMap} >
                <button
                    className={this.props.className}
                >
                    {this.props.value}
                </button>
            </GlobalHotKeys>
        );
    }
}


export default Button;
