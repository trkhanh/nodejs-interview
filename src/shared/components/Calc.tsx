import * as React from "react";


import Display from "./Display";
import Button from "./Button";

type Props = {
    className: string;
    value: number | string
};
type State = {
    display: any
};

class Calculator extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            display: "0",
        };
    }
    render() {
        return (
            <div className="Calculator">
                <Display display={this.state.display} />

                <Button
                    value={"C"}
                    className="Button BlackButton"
                />
                <Button
                    value="+/-"
                    className="Button BlackButton"
                />
                <Button
                    value="%"
                    className="Button BlackButton"
                />
                <Button
                    value={"\u00F7"}
                    className="Button OrangeButton"
                />

                <br />

                <Button
                    value="7"
                    className="Button GrayButton"
                />
                <Button
                    value="8"
                    className="Button GrayButton"
                />
                <Button
                    value="9"
                    className="Button GrayButton"
                />
                <Button
                    value="x"
                    className="Button OrangeButton"
                />

                <br />

                <Button
                    value="4"
                    className="Button GrayButton"
                />
                <Button
                    value="5"
                    className="Button GrayButton"
                />
                <Button
                    value="6"
                    className="Button GrayButton"
                />
                <Button
                    value="-"
                    className="Button OrangeButton"
                />

                <br />

                <Button
                    value="1"
                    className="Button GrayButton"
                />
                <Button
                    value="2"
                    className="Button GrayButton"
                />
                <Button
                    value="3"
                    className="Button GrayButton"
                />
                <Button
                    value="+"
                    className="Button OrangeButton"

                />

                <br />

                <Button
                    value="0"
                    className="Button GrayButton LargeButton"
                />
                <Button
                    value="."
                    className="Button GrayButton"
                />
                <Button
                    value="="
                    className="Button OrangeButton"
                />
            </div>
        );
    }
}

export default Calculator;
