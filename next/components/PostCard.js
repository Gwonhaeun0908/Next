import React, { useState, useCallback } from "react";
import { Card, Button, Avatar, Popover, List, Comment} from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Link from "next/link";
import { useSelector  } from "react-redux";
import { Content } from "antd/lib/layout/layout";

const PostCard = () => {
    return (
        <CardWrapper key={post.id}>
            <Card
                cover={post.Images[0] && <PostImges images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClink={onToggleLike} />
                        : <HeartOutlined key="heart" onClink={onToggleLike} />,
                    <MessageOutlined key="message" onClink={onToggleComment} />,
                    <Popover
                        key="ellipsis"
                        content={(
                            <Button.Group>
                                <Button>신고</Button>
                                <Button>수정</Button>
                                <Button danger>삭제</Button>
                            </Button.Group>
                        )}
                    >
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                extra={<FollowButton post={post} />}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            {commentFormOpened && (
                <>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments.length} 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={(
                                        <Link href={{ pathname: '/user', query: {id: item.User.id} }} as={`/user/${item.User.id}`}>
                                            <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                                        </Link>
                                    )}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </>
            )}
        </CardWrapper>
    );
};

export default PostCard;