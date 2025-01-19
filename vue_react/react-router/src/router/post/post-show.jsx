import React from 'react';
import { useParams } from 'react-router-dom';

function PostShow() {
    // 使用 useParams 获取 URL 参数
    const { postId } = useParams();

    return (
        <div>
            <h2>帖子详情 - ID: {postId}</h2>
            {/* 在这里可以根据 postId 加载具体的帖子内容 */}
        </div>
    );
}

export default PostShow;