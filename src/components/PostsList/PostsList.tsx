import { Space } from 'antd';
import { FC, useEffect, useState } from 'react';
import Api from 'src/api/api';
import { Posts } from 'src/models';
import Post from '../Post/Post';

const PostsList: FC = () => {
  const [data, setData] = useState<Posts>([]);

  const getData = async (): Promise<void> => {
    const data = await Api.getPosts();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Space direction='vertical' size='middle' style={{ display: 'flex' }}>
      {data.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </Space>
  );
};
export default PostsList;
