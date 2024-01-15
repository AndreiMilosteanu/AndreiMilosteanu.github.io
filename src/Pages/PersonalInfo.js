import {
  Box,
  Heading,
  StackDivider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "@chakra-ui/react";

export default function PersonalInfo() {
  return (
    <Tabs isFitted variant="enclosed">
      <TabList mb="1em">
        <Tab>Education</Tab>
        <Tab>Professional Experience</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <VStack
            divider={<StackDivider borderColor="gray.200" />}
            spacing={4}
            align="stretch"
          >
            <Box>
              <Heading as="h2" size="xl">
                PhD in Computer Science
              </Heading>
              <Text>
                2024-2027{" "}
                <Link
                  color="teal.500"
                  href="https://www.cs.ubbcluj.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Babeș-Bolyai" University
                </Link>{" "}
                Cluj-Napoca, Romania
              </Text>
              <Link
                color="teal.500"
                href="https://www.cs.ubbcluj.ro/invatamant/programe-academice/masterat/sisteme-informatice-avansate/"
                target="_blank"
                rel="noopener noreferrer"
              ></Link>
              <Text>
                Coordinator:{" "}
                <Link
                  color="teal.500"
                  href="https://math.ubbcluj.ro/~csacarea/wordpress/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conf. Dr. Christian Sacarea
                </Link>
              </Text>
            </Box>
            <Box>
              <Heading as="h2" size="xl">
                Master in Computer Science
              </Heading>
              <Text>
                2022- 2024{" "}
                <Link
                  color="teal.500"
                  href="https://www.cs.ubbcluj.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Babeș-Bolyai" University
                </Link>{" "}
                Cluj-Napoca, Romania
              </Text>
              <Link
                color="teal.500"
                href="https://www.cs.ubbcluj.ro/invatamant/programe-academice/masterat/sisteme-informatice-avansate/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Advanced IT systems: modeling, design, development
              </Link>
              <Text>
                Coordinator:{" "}
                <Link
                  color="teal.500"
                  href="https://math.ubbcluj.ro/~csacarea/wordpress/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conf. Dr. Christian Sacarea
                </Link>
              </Text>
            </Box>
            <Box>
              <Heading as="h2" size="xl">
                Bachelor in Computer Science
              </Heading>
              <Text>
                2019- 2022{" "}
                <Link
                  color="teal.500"
                  href="https://www.cs.ubbcluj.ro/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  "Babeș-Bolyai" University
                </Link>{" "}
                Cluj-Napoca, Romania
              </Text>
              <Text>
                Coordinator:{" "}
                <Link
                  color="teal.500"
                  href="https://math.ubbcluj.ro/~csacarea/wordpress/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Conf. Dr. Christian Sacarea
                </Link>
              </Text>
            </Box>
          </VStack>
        </TabPanel>
        <TabPanel>
          <TabPanel>
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={4}
              align="stretch"
            >
              <Box>
                <Heading as="h2" size="xl">
                  Associate Professor
                </Heading>
                <Text>
                  2023 - 2024 - Computer Science Department of the{" "}
                  <Link
                    color="teal.500"
                    href="https://www.cs.ubbcluj.ro/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Faculty of Mathematics and Computer Science
                  </Link>{" "}
                  at "Babeș-Bolyai" University
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="xl">
                  Assistant Professor
                </Heading>
                <Text>
                  2022 - Computer Science Department of the{" "}
                  <Link
                    color="teal.500"
                    href="https://www.cs.ubbcluj.ro/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Faculty of Mathematics and Computer Science
                  </Link>{" "}
                  at "Babeș-Bolyai" University
                </Text>
              </Box>
              <Box>
                <Heading as="h2" size="xl">
                  Junior Software Developer
                </Heading>
                <Text>
                  2021 @{" "}
                  <Link
                    color="teal.500"
                    href="https://www.bertrandt.com/en/company/bertrandt-group/locations/location/bukarest-bertrandt-engineering-technologie-romania"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bertrandt Romania
                  </Link>{" "}
                </Text>
                <Text>Tool development using Flask</Text>
              </Box>
              <Box>
                <Heading as="h2" size="xl">
                  Database administration internship
                </Heading>
                <Text>
                  2020 @{" "}
                  <Link
                    color="teal.500"
                    href="https://ro.nttdata.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NTT Data Romania
                  </Link>{" "}
                </Text>
                <Text>
                  Internship for administrating Oracle Dataseses using SQL and
                  Unix
                </Text>
              </Box>
            </VStack>
          </TabPanel>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
