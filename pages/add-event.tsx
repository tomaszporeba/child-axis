import Layout from "../src/components/layout";
import {useContext} from "react";
import {EventContext, Events} from "../utils/EventContext";

export default function AddEvent(): JSX.Element {
    const {state, dispatch} = useContext(EventContext);
    return (
    <Layout>
        <div>
            {JSON.stringify(state)}
        </div>
        <button onClick={() => dispatch({type: Events.GET_EVENTS, payload: [{name: 'evencik'}]})}>klikej</button>
        <h1>Add event on childs life</h1>
    </Layout>
    )
}