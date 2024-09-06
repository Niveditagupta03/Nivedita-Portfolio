import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  Tag,
  SimpleGrid,
  Link,
  WrapItem,
  Wrap,
} from "@chakra-ui/react";

const Section = ({ title, children }) => (
  <>
    <Divider my="6" />
    <VStack spacing="4" align="start">
      <Heading as="h2" size="xl" mb="4">
        {title}
      </Heading>
      {children}
    </VStack>
  </>
);

const SkillsSection = ({ title, skills }) => (
  <Box>
    <Heading as="h3" size="lg" mb="2">
      {title}
    </Heading>
    <Wrap spacing="4">
      {skills.map((skill) => (
        <WrapItem key={skill}>
          <Tag size="lg" color="#7CABFD" backgroundColor="white">
            {skill}
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  </Box>
);

const EducationItem = ({ title, details, date, additionalInfo }) => (
  <Box>
    <Heading as="h3" size="lg">
      {title}
    </Heading>
    <Text fontSize="md" color="gray.600">
      {details} | {date}
    </Text>
    {additionalInfo && (
      <Text fontSize="lg" mt="2">
        {additionalInfo}
      </Text>
    )}
  </Box>
);

const ProjectItem = ({ title, details }) => (
  <Box>
    <Heading as="h3" size="lg" mb="2">
      {title}
    </Heading>
    <Text fontSize="lg">{details}</Text>
  </Box>
);

const Resume = () => {
  const programmingLanguages = [
    "Python",
    "JavaScript",
    "HTML",
    "C#",
    "CSS",
    "Java",
    "C",
  ];
  const frontEndSkills = [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Responsive Design",
    "Flexbox",
    "Grid",
    "NPM",
    "SASS",
  ];
  const backEndSkills = [
    "Node.js",
    ".NET Core",
    "Python (FastAPI)",
    "RESTful APIs",
    "Authentication (OAuth, JWT)",
  ];
  const databases = ["MySQL", "PostgreSQL", "SQL Server"];
  const tools = [
    "Docker",
    "Pydantic",
    "TensorFlow",
    "Numpy",
    "Pandas",
    "Langchain",
    "Qdrant",
    "Chakra UI",
    "Tailwind",
    "Git",
  ];
  const projects = [
    {
      title: "Brand Monitoring",
      details:
        "Developed a full-stack sentiment analysis application with a FastAPI backend and Svelte frontend. Implemented an LSTM model for real-time text classification and designed interactive dashboards for data visualization.",
    },
    {
      title: "Financial Intelligence",
      details:
        "Created a financial intelligence platform using React.js, Chakra UI, and React Router for a responsive UI. Developed a secure login system and dynamic loan application forms. Implemented a FastAPI backend with Alembic for database migrations and Poetry for dependency management, processing user data to deliver loan approval status.",
    },
    {
      title: "Document Chat",
      details:
        "Designed and implemented a RAG application for answering questions based on uploaded files using FastAPI, Langchain, and Qdrant. Added support for multiple LLM providers such as ChatGPT, Claude, Ollama, and Huggingface pipelines. Built a chat UI using React and ChakraUI for ease of use.",
    },
  ];

  const onlineCourses = [
    { title: "Python for Everybody", provider: "Coursera" },
    { title: "Object Oriented Programming in Java", provider: "Coursera" },
    { title: "Object Oriented Concepts", provider: "Coursera" },
  ];

  return (
    <Box
      spacing="20px"
      padding="30px"
      maxWidth="1100px"
      margin="auto"
      backgroundColor="rgba(255, 255, 255, 0.8)"
    >
      {/* Header Section */}
      <VStack spacing="4" align="start">
        <Heading as="h1" size="2xl" mb="4">
          Nivedita
        </Heading>
        <Text fontSize="lg">
          <strong>PHONE:</strong> +91 83401 28840
        </Text>
        <Text fontSize="lg">
          <strong>EMAIL:</strong>{" "}
          <Link href="mailto:annie.gupta03@gmail.com">
            annie.gupta03@gmail.com
          </Link>
        </Text>
        <Text fontSize="lg">
          <strong>Github:</strong>{" "}
          <Link href="https://github.com/Niveditagupta03" isExternal>
            github.com/Niveditagupta03
          </Link>
        </Text>
      </VStack>

      {/* Summary Section */}
      <Section title="Summary">
        <Text fontSize="lg">
          Dynamic and results-driven software developer with a strong foundation
          in algorithms and data structures. Proven ability to quickly acquire
          new skills and leverage technical expertise to contribute to
          innovative projects. Seeking opportunities in a fast-paced tech
          environment to apply and expand my knowledge.
        </Text>
      </Section>

      {/* Experience Section */}
      <Section title="Experience">
        <Box>
          <Heading as="h3" size="lg">
            Intern Fullstack | CAI Technologies Private Limited
          </Heading>
          <Text fontSize="md" color="gray.600">
            Feb 2024 – Present
          </Text>
          <Text fontSize="lg" mt="2">
            - Designed a custom dashboard for a financial platform using Figma.
            <br />- Developed a brand analysis API backend with Python and
            FastAPI.
            <br />- Utilized Chakra UI’s grid system to create a responsive
            layout, enhancing user experience across devices.
            <br />- Integrated data visualization charts to provide interactive
            financial insights for improved decision-making.
          </Text>
        </Box>
      </Section>

      {/* Education Section */}
      <Section title="Education">
        <EducationItem
          title="B.Eng. in Information Science and Engineering"
          details="CMR Institute of Technology, Bengaluru"
          date="Dec 2020 – May 2024"
          additionalInfo="CGPA: 7.40"
        />
        <EducationItem
          title="12th Grade"
          details="R.S.S. Science College, Sitamarhi, Bihar"
          date="May 2018 – Mar 2020"
          additionalInfo="Percentage: 70%"
        />
        <EducationItem
          title="10th Grade"
          details="Hellen School Rajopatti, Sitamarhi, Bihar"
          date="May 2017 – May 2018"
          additionalInfo="Percentage: 55.5%"
        />
      </Section>

      {/* Skills Section */}
      <Section title="Skills">
        <SimpleGrid columns={[1, null, 3]} spacing="6">
          <SkillsSection
            title="Programming Languages"
            skills={programmingLanguages}
          />
          <SkillsSection
            title="Front-End Development"
            skills={frontEndSkills}
          />
          <SkillsSection title="Back-End Development" skills={backEndSkills} />
          <SkillsSection title="Databases" skills={databases} />
          <SkillsSection title="Tools and Technologies" skills={tools} />
        </SimpleGrid>
      </Section>

      {/* Projects Section */}
      <Section title="Projects">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            title={project.title}
            details={project.details}
          />
        ))}
      </Section>

      {/* Online Courses Section */}
      <Section title="Online Courses">
        {onlineCourses.map((course) => (
          <Box key={course.title}>
            <Heading as="h3" size="md">
              {course.title}
            </Heading>
            <Text fontSize="md" color="gray.600">
              {course.provider}
            </Text>
          </Box>
        ))}
      </Section>
    </Box>
  );
};

export default Resume;
