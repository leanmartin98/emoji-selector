import EmojiPicker from "./emojiPicker";
import { useRef } from "react";

export default function EmojiPickerInput() {

    const refInput = useRef(null);
   
    return (
        <div className="inputContainer">
            <input ref={refInput}/>
            <EmojiPicker ref={refInput}/>
        </div>
    );
}