import PostDetail from "./post-detail";

const PostDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  return <PostDetail postId={(await params).id} />;
};

export default PostDetailPage;
