import Link from "next/link";
import Image from "next/image";
import { Box, Text, Button } from "@chakra-ui/react";
import Homepage from "/components/Homepage";

export default function Home() {
  return (
    <Box className="text-center mx-auto w-full min-h-screen">
      <Homepage />
    </Box>
  );
}
