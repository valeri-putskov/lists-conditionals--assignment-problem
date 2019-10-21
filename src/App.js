import React, {Component} from 'react'
import './App.css'
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
    state = {
        textValue: 'Original text'
    };

    keySequence = 0;

    newKey = () => {
        return this.keySequence++
    };

    onChangeListener = (event) => {
        const text = event.target.value.toString();
        this.setState({
            textValue: text
        })
    };

    onCharClick = (index) => {
        const text = this.state.textValue;
        const newText = this.removeCharAt(text, index);
        this.setState({textValue: newText});
    };

    removeCharAt = (text, index) => {
        let tmp = text.split(''); // convert to an array
        tmp.splice(index, 1); // remove 1 element from the array (adjusting for non-zero-indexed counts)
        return tmp.join(''); // reconstruct the string
    };

    render() {
        const chars = this.state.textValue.split('').map((c, index) => {
            const keyValue = this.newKey();
            return (<CharComponent value={c}
                                   key={keyValue}
                                   click={() => this.onCharClick(index)}/>)
        });

        return (
            <div className="App">
                {this.createTaskList()}

                <input type='text' onChange={(event) => this.onChangeListener(event)} value={this.state.textValue}/>
                <ValidationComponent textValue={this.state.textValue}/>
                {chars}
            </div>
        );
    }

    createTaskList = () => {
        return (
            <div>
                <ol>
                    <li>Create an input field (in App component) with a change listener which outputs the length of the
                        entered text below it (e.g. in a paragraph).
                    </li>
                    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
                    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending
                        on the text length (e.g. take 5 as a minimum length)
                    </li>
                    <li>Create another component (=> CharComponent) and style it as an inline box (=> display:
                        inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).
                    </li>
                    <li>Render a list of CharComponents where each CharComponent receives a different letter of the
                        entered text (in the initial input field) as a prop.
                    </li>
                    <li>When you click a CharComponent, it should be removed from the entered text.</li>
                </ol>
                <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
            </div>

        )
    }
}

export default App;
