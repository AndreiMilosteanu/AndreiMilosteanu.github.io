import {
  Avatar,
  Box,
  Button,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePic from "../assets/poza_profil.png";

export default function Contact() {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={4}
      boxShadow="lg"
    >
      <Avatar size="2xl" name="Milosteanu Andrei" src={profilePic} mb={4} />

      <VStack align="start">
        <Heading fontSize="xl" mb={2}>
          Milosteanu Andrei-Constantin
        </Heading>
        <Text fontSize="md" color="blue.600">
          "Babeș-Bolyai" University Cluj-Napoca, Romania
        </Text>
        <Text fontSize="md" color="blue.600">
          Department of Faculty of Mathematics and Computer Science
        </Text>
      </VStack>

      <Text mt={4}>
        I am a dedicated and enthusiastic educator currently serving as a
        teacher at Babeș Bolyai University, specializing in Web Development.
        With a passion for fostering student success, I create engaging and
        interactive learning experiences that inspire critical thinking and
        curiosity. Committed to staying current with educational trends, I
        integrate innovative teaching methods and technology into my courses. My
        goal is to cultivate a positive and inclusive learning environment where
        students feel empowered to explore, question, and excel. Beyond the
        classroom, I am an avid learner, constantly seeking opportunities for
        professional development. Connect with me on LinkedIn and GitHub to
        explore my educational journey and collaborative projects. Let's build a
        community of lifelong learners together!
      </Text>

      <HStack mt={4} align="start">
        <Link
          href="https://www.linkedin.com/in/andrei-milosteanu-b07582204/"
          isExternal
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            leftIcon={<FaLinkedin />}
            colorScheme="linkedin"
            variant="outline"
          >
            LinkedIn
          </Button>
        </Link>
        <Link
          href="https://github.com/AndreiMilosteanu"
          isExternal
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button leftIcon={<FaGithub />} colorScheme="gray" variant="outline">
            GitHub
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}
