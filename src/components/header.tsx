import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import { FC, ReactNode } from "react";

interface HeaderProps {
  center?: boolean;
  heading: string | ReactNode;
  subheading?: string | ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  parent?: string;
  onParentClick?: () => void;
}

const Header: FC<HeaderProps> = ({
  heading,
  subheading,
  loading,
  parent,
  onParentClick,
}) => {
  return (
    <div>
      {loading ? (
        <Skeleton variant="text">
          <Typography variant="h4">{heading}</Typography>
        </Skeleton>
      ) : (
        <Typography variant="h4" color="primary.contrastText">
          {parent && (
            <Typography variant="body1" color="secondary">
              <span
                className="hover:underline cursor-pointer"
                onClick={onParentClick}
              >
                {parent}
              </span>
              {" /"}
            </Typography>
          )}

          {heading}
        </Typography>
      )}

      {subheading && loading ? (
        <Skeleton>
          <Typography variant="body1">{subheading}</Typography>
        </Skeleton>
      ) : (
        <Typography variant="body1" color="secondary">
          {subheading}
        </Typography>
      )}
    </div>
  );
};

export default Header;
