import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { FC, Fragment } from "react";
import PostItem from "@/components/post-item";
import { MessageProps } from "../types";

interface IProps {
  posts: MessageProps[];
}
const AlignItemsList: FC<IProps> = ({ posts }) => {
  return (
    <div className="p-[16px]">
      <List
        sx={{ width: "100%", bgcolor: "background.paper", borderRadius: "8px" }}
      >
        {posts.map((post, index) => (
          <Fragment key={index}>
            <PostItem {...post} />
            {index < posts.length - 1 && <Divider component="li" />}
          </Fragment>
        ))}
      </List>
    </div>
  );
};

export default AlignItemsList;
