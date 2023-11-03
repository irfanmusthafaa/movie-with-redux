import React, { useEffect } from "react";
import { Popover, PopoverHandler, PopoverContent, Avatar, Button, Typography, List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetMeAction } from "../../redux/actions/GetMeAction";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogOut } from "../../redux/actions/AuthAction";

export const PopOver = ({ className }) => {
  const data = useSelector((state) => state.getMe);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(GetMeAction());
  }, [dispatch]);

  return (
    <Popover placement="bottom-end">
      <PopoverHandler>
        <Button className="px-7 bg-[#BE123C] lg:inline-block hover:opacity-75 flex justify-center items-center gap-3">
          <FontAwesomeIcon icon={faUser} /> Account
        </Button>
      </PopoverHandler>
      <PopoverContent className="w-72">
        <div className="mb-4 flex items-center gap-4 border-b  border-blue-gray-50 pb-4">
          {/* <Avatar src="/img/team-4.jpg" alt="tania andrew" /> */}
          {/* <FontAwesomeIcon icon={faUser} /> */}
          <div>
            <Typography variant="h6" color="blue-gray">
              {data?.getMe?.name}
            </Typography>
            <Typography variant="small" color="gray" className="font-medium text-blue-gray-500">
              {data?.getMe?.email}
            </Typography>
          </div>
        </div>
        <List className="p-0  text-center">
          <Button
            onClick={() => {
              dispatch(LogOut());
            }}
            className="px-7 bg-[#BE123C]  hover:opacity-75"
          >
            <span>Logout</span>
          </Button>
          {/* <a href="/" className="text-initial font-medium text-blue-gray-500">
            <ListItem>
              <Button
                onClick={() => {
                  dispatch(LogOut());
                }}
                className="px-7 bg-[#BE123C] hidden lg:inline-block hover:opacity-75"
              >
                <span>Logout</span>
              </Button>
            </ListItem>
          </a> */}
        </List>
      </PopoverContent>
    </Popover>
  );
};
