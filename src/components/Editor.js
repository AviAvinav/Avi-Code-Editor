import React from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled } from 'react-codemirror2';
import './Editor.css';
import 'codemirror/addon/display/placeholder';

function Editor({ displayName, value, language, onChange, placeholder }) {
    
    function handleChange(editor, data, value) {
        onChange(value)
    }
    
    return (
        <div className="Editor">
            <div className="Editor__top">
                {displayName}
            </div>
            <Controlled 
                onBeforeChange={handleChange}
                value={value}
                className="Editor__bottom"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    placeholder: placeholder,
                    theme: 'dracula',
                    lineNumbers: true,
                }}
            />
        </div>
    )
};

export default Editor;
