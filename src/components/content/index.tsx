import {useContext} from "react";
import {GlobalContext} from "../../../utils/GlobalContext";

export default function Content(): JSX.Element {
    const {state, dispatch} = useContext(GlobalContext);
    console.log(JSON.stringify(state));
    return <div>
        {state.selectedEvent.name}
    </div>
}

