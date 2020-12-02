import Layout from "../src/components/layout";
import {useContext} from "react";
import {GlobalContext, Actions} from "../utils/GlobalContext";

export default function AddEvent(): JSX.Element {
    const {state, dispatch} = useContext(GlobalContext);
    return (
    <Layout>
        <div>
            {JSON.stringify(state)}
        </div>
        <button onClick={() => dispatch({type: Actions.GET_EVENTS, payload: [{name: 'evencik'}]})}>klikej</button>
        <h1>Add event on childs life</h1>
    </Layout>
    )
}