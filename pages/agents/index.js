import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "/utils/fetchApi";

import ListData from "../../components/ListData.jsx";

export default function Agents({ agentDatas }) {
  return (
    <Box>
      <Flex>
        {agentDatas.map((agentData) => (
          <div key={agentData.id}>
            {agentData.agents.map((agent) => ({ agent }))}
          </div>
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const agentData = await fetchApi(`${baseUrl}/agents/en-us`);

  return {
    props: {
      agentDatas: agentData?.hits || "Null",
    },
  };
}
