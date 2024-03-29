import React, { useCallback, useState, useEffect } from "react";
import { Form, Input, Checkbox, Button } from 'antd';
import styled from 'styled-components';
import Router from 'next/router';
import Head from 'next/head';

import { SIGN_UP_REQUEST } from "../reducers/user";
import AppLayout from "../components/AppLayout";
import useInput from '../hooks/useInput'
import { useDispatch, useSelector } from "react-redux";

const ErrorMessage = styled.div`
    color: red;
`;

const Signup = () => {
    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const dispatch = useDispatch();
    const { isSigningUp, me } = useSelector((state) => state.user);

    const [password, onChangePassword] = useInput('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }, [password]);

    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    useEffect(() => {
        if (me) {
            alert('로그인했으니 메인페이지로 이동합니다.');
            Router.push('/');
        }
    }, [me && me.id]);

    const onSubmit = useCallback(() => {
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        return dispatch({
            type: SIGN_UP_REQUEST,
            data: {
                email,
                password,
                nickname,
            },
        });
    }, [email, password, passwordCheck, term]);
    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit} style={{  padding: 10 }}>
                <div>
                    <label htmlFor="user-email">아이디</label>
                    <br />
                    <Input name="user-email" value={email} required onChange={onChangeEmail} />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input 
                        name="user-password-check" 
                        type="password" 
                        value={passwordCheck} 
                        required 
                        onChange={onChangePasswordCheck} 
                    />
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit" loading={isSigningUp}>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    );
};

export default Signup;