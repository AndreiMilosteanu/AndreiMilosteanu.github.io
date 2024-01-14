import {
  Box,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Icon,
  Link,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <Box>
      <Card overflow="hidden" variant="outline">
        <CardHeader>
          <Heading size="xl">Contact</Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="s" textTransform="uppercase">
                Email
              </Heading>
              <Text pt="2" fontSize="s">
                andrei.milosteanu@stud.ubbcluj.ro
              </Text>
            </Box>
            <Box>
              <Heading size="s" textTransform="uppercase">
                Adress
              </Heading>
              <Text pt="2" fontSize="s">
                Babeș - Bolyai University{" "}
                <Link
                  color="teal.500"
                  href="https://www.google.com/maps/place/Strada+Mihail+Kog%C4%83lniceanu+1,+Cluj-Napoca+400347/@46.7631926,23.5888429,17z/data=!3m1!4b1!4m6!3m5!1s0x47490c2a2b72ffad:0x56c760dc1680a5e8!8m2!3d46.7631926!4d23.5888429!16s%2Fg%2F11bw4d81zr?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Street Kogălniceanu, 1, 400084 Cluj-Napoca, România
                </Link>
              </Text>
            </Box>
            <Box>
              <Heading size="s" textTransform="uppercase" mb={4}>
                Socials
              </Heading>
              <HStack spacing={5}>
                <Link
                  href="https://github.com/AndreiMilosteanu"
                  isExternal
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={FaGithub} boxSize={8} />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/andrei-milosteanu-b07582204/"
                  isExternal
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon as={FaLinkedin} boxSize={8} />
                </Link>
              </HStack>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
