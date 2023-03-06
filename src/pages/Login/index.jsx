import { RxPerson, RxLockClosed, RxCheckbox,  } from "react-icons/rx";
import { Route, BrowserRouter } from "react-router-dom";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Content, Title, Column,  SubTitle, Login, LoginPosition,  Password, RememberMe, ForgotPassword, BuildAccount, Img   } from "./styles";


export default function Page ( ){


    
    return (
       // <Header/>
       <Switch>
            <Container>
                <Content>
                    <img src={LittleCloud} alt="teste"/>
                </Content>
                <Column> 
                    <Title>
                            Bem-Vindo
                    </Title> 
                </Column>
                <Column>
                    <SubTitle>
                        <p>Cloud Center of Excelence</p>
                    </SubTitle>
                    <Column>
                        <Login>
                        <p>Usuário</p> 
                        </Login>
                        <LoginPosition>
                            <p>
                                <Input type="email" leftIcon={<RxPerson />} onChange={e => GetUserName (e)} />
                            </p>
                        </LoginPosition>
                        <Password>
                            <p>Senha</p>
                        </Password>
                        <LoginPosition>
                            <p>
                                <Input type="password" leftIcon={<RxLockClosed />} onchange={e => GetUserPassword (e)} />
                            </p>
                        </LoginPosition>
                        <RememberMe>
                            <p>Lembre-me</p>
                        </RememberMe>
                        <ForgotPassword>
                            Esqueceu a senha
                        </ForgotPassword>
                        /*<BuildAccount>
                            criar o input
                        </BuildAccount>*/
                    </Column>
                </Column>
            </Container>
        </Switch>
                





                /*<LoginPosition>
                    <Title>Login</Title>
                    <p>Username</p>
                    <p>
                        <Input type="email" leftIcon={<RxPerson />} onChange={e => GetUserName(e)}  />
                    </p>
                    <p>Password</p>
                    <p>
                    <Input type="password" leftIcon={<RxLockClosed />} onChange={e => GetUserPassword(e)} />
                    </p>
                    <ContextRemember>
                        <TextColor>
                        <CheckBox type="checkbox" /> Remember me
                        </TextColor>
                        <div>
                        <Link href="ola mundo">Esqueceu a Senha ?</Link>
                        </div>
                    </ContextRemember>
                    <Button onClick={() => Auth()}>Entrar</Button>
                </LoginPosition>
            </Login>
        </Container>*/
    );
    }
