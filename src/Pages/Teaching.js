import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Link,
  ListItem,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import pdf_awd from "../assets/BD_sem3_MME8120_en_sanda_2023_8353.pdf";
import pdf_wp from "../assets/IG_sem4_MLG5015_de_sanda_2020_5069.pdf";

export default function Teaching() {
  return (
    <Card overflow="hidden" variant="outline">
      <CardHeader>
        <Heading size="xl">Current Teaching</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Card overflow="hidden" variant="outline">
            <CardHeader>
              <Heading size="xl">Web Programming</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase" mb={5}>
                    Summary
                  </Heading>
                  <UnorderedList spacing={2}>
                    <ListItem>Level: Bachelor</ListItem>
                    <ListItem>Semester: 4</ListItem>
                    <ListItem>Language: Deutsch</ListItem>
                    <ListItem>
                      <Link
                        color="teal.500"
                        href={pdf_wp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Course Syllabus
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Lecture
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    2 h/week
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Seminar
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    2 h/week
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Labs
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    2 h/week + weekly assignments
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Card overflow="hidden" variant="outline">
            <CardHeader>
              <Heading size="xl">Adaptive Web Development</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Heading size="xs" textTransform="uppercase" mb={5}>
                    Summary
                  </Heading>
                  <UnorderedList spacing={2}>
                    <ListItem>Level: Master</ListItem>
                    <ListItem>Optional course</ListItem>
                    <ListItem>Semester: 3</ListItem>
                    <ListItem>Language: English</ListItem>
                    <ListItem>
                      <Link
                        color="teal.500"
                        href={pdf_awd}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Course Syllabus
                      </Link>
                    </ListItem>
                  </UnorderedList>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Lecture
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    2 h/week
                  </Text>
                </Box>
                <Box>
                  <Heading size="xs" textTransform="uppercase">
                    Seminar
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    1 h/week
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </CardBody>
    </Card>
  );
}
