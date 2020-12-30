import Layout from "../src/components/layout";
import {useContext} from "react";
import {GlobalContext, Actions} from "../utils/GlobalContext";
import { Optional } from 'sequelize';
import { UserAttributes } from '../models/user';
import { useMutation } from '@apollo/client';
import { LOGIN } from './api/graphql/queries';

const userToLogin: Optional<UserAttributes, "id" | "firstName" | "lastName">[] = [
    {
        email: 'adam@ma',
        password: 'dupa'
    }
]

export default function Login(): JSX.Element {
    const { state } = useContext(GlobalContext);
    const [login] = useMutation(LOGIN, {
        onCompleted({ login }) {
            if (login) {

            }
        }
    });

    return (
        <Layout>
            <div>
                {JSON.stringify(state)}
            </div>
            <button onClick={() => login({ variables: {inputs: userToLogin[0]}})}>klikej</button>
            <h1>Login</h1>
        </Layout>
    )
}