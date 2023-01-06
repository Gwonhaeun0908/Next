import React from "react";
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align: 'middle';
`;

const AppLayout = ({ children }) => {
    const { me } = useSelector((state) => state.user);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item key="mail">
                    <SearchInput enterButton />
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6} >
                    {me 
                        ? < UserProfile /> 
                        : <LoginForm />}
                </Col>
                <Col xs={24} md={12} >
                    {children}
                </Col>
                <Col xs={24} md={6} >
                    <a href="https://github.com/Gwonhaeun0908" target="_blank" rel="noreferrer noopener">Made by Gwonhaeun</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;