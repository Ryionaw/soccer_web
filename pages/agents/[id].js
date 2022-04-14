import Link from "next/link";
import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { baseUrl, fetchApi } from "/utils/fetchApi";

export default function AgentDetails({ agentDatas: { agents } }) {
  return (
    <Box>
      <Flex>{agents}</Flex>
    </Box>
  );
}

export async function getStaticProps({ params: { name } }) {
  const agentData = await fetchApi(`${baseUrl}/agents/en-us/`);

  return {
    props: {
      agentDatas: agentData?.hits || "gundul",
    },
  };
}
