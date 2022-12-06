import React, { useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Card, Avatar, Button } from 'antd';

import { logoutAction } from '../reducers/user';

const UserProfile = () => {
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onLogOut = useCallback(() => {
        dispatch(logoutAction);
    }, []);

    return (
        <Card
            actions={[
                <div key="twit">짹짹<br/>{user.Posts.length}</div>,
                <div key="followings">팔로잉<br/>{user.Followings.length}</div>,
                <div key="followings">팔로워<br/>{user.Followers.length}</div>,
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{user.nickname[0]}</Avatar>}
                title={user.nickname}
            />
            <Button onClick={onLogOut}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;