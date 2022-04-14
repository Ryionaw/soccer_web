import React from "react";

const ListData = ({
  content: {
    machine_name,
    title,
    url,
    description,
    role,
    abilities,
    agent_image,
    agent_background_video,
  },
}) => {
  return (
    <div>
      {machine_name} <br />
      {title}
      <br />
      {url}
      <br />
      {description}
      <br />
      {role}
      <br />
      {abilities}
      <br />
      {agent_image}
      <br />
      {agent_background_video}
    </div>
  );
};

export default ListData;
