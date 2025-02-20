import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { FC, Fragment } from "react";
import PostItem from "@/components/blogs/post-item";
import { PostResponse } from "../../app/types";

interface IProps {
  posts: PostResponse[];
  titleFiltered: string;
  isEditable?: boolean;
}
const PostList: FC<IProps> = ({ isEditable, posts, titleFiltered }) => {
  return (
    <div className="p-[16px]">
      <List
        sx={{ width: "100%", bgcolor: "background.paper", borderRadius: "8px" }}
      >
        {posts.map((post, index) => (
          <Fragment key={index}>
            <PostItem
              post={post}
              titleFiltered={titleFiltered}
              isEditable={isEditable}
            />
            {index < posts.length - 1 && <Divider component="li" />}
          </Fragment>
        ))}
      </List>
    </div>
  );
};

export default PostList;
