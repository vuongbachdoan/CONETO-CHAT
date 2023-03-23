import { Authenticator } from '@aws-amplify/ui-react';
import styled from 'styled-components';

import { Amplify } from 'aws-amplify';
// import awsExports from '../aws-exports';
// Amplify.configure(awsExports);

export const Login = () => {
    return (
        <LoginWrapper className="login_wrapper w-full">
            <div class="bg-white dark:bg-gray-900 w-full">
                <div class="flex justify-center h-screen">
                    <div class="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)" }}>
                        <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                            <div>
                                <h2 class="text-2xl font-bold text-white sm:text-3xl">Meraki UI</h2>

                                <p class="max-w-xl mt-3 text-gray-300">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                                    autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus
                                    molestiae
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center w-full mx-auto lg:w-2/6">
                        <div class="flex-1">
                            <div class="text-center">
                                <div class="flex justify-center mx-auto">
                                    <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                                </div>
                            </div>

                            <div class="mt-8">
                                <Authenticator
                                    signUpAttributes={[
                                        'facebook',
                                        'google'
                                    ]}
                                >
                                    {({ signOut, user }) => {
                                        alert(user)
                                        return (
                                            <main>
                                                <h1>Hello {user.username}</h1>
                                                <button onClick={signOut}>Sign out</button>
                                            </main>
                                        )
                                    }}
                                </Authenticator>
                                <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LoginWrapper>
    );
}

const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center
`;