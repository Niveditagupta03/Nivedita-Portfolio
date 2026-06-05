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
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon, LinkIcon } from "@chakra-ui/icons";

const Section = ({ title, children }) => {
  const sectionTitleColor = useColorModeValue("#B0183D", "#FFD464");
  const borderCol = useColorModeValue("rgba(255, 94, 94, 0.2)", "rgba(176, 24, 61, 0.25)");
  
  return (
    <Box w="100%">
      <Heading
        as="h2"
        fontSize="xl"
        color={sectionTitleColor}
        mb="4"
        fontWeight="800"
        borderBottom={`2px solid ${borderCol}`}
        pb="2"
        textTransform="uppercase"
        letterSpacing="wider"
      >
        {title}
      </Heading>
      <VStack spacing="4" align="start" mb="8">
        {children}
      </VStack>
    </Box>
  );
};

const SkillsSection = ({ title, skills }) => {
  const headingColor = useColorModeValue("#E23C64", "#FF5E5E");
  const tagBg = useColorModeValue("rgba(255, 255, 255, 0.6)", "rgba(20, 14, 28, 0.4)");
  const tagColor = useColorModeValue("#B0183D", "#FCEDD8");
  const tagBorder = useColorModeValue("rgba(176, 24, 61, 0.15)", "rgba(252, 237, 216, 0.2)");
  
  return (
    <Box w="100%">
      <Heading as="h4" fontSize="sm" fontWeight="700" color={headingColor} mb="3">
        {title}
      </Heading>
      <Wrap spacing="2">
        {skills.map((skill) => (
          <WrapItem key={skill}>
            <Tag
              size="md"
              borderRadius="full"
              bg={tagBg}
              color={tagColor}
              border={`1px solid ${tagBorder}`}
              fontWeight="600"
            >
              {skill}
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};

const EducationItem = ({ title, details, date, additionalInfo }) => {
  const titleColor = useColorModeValue("#B0183D", "#FFD464");
  const detailsColor = useColorModeValue("#E23C64", "#FCEDD8");
  
  return (
    <Box w="100%">
      <Flex justify="space-between" align={{ base: "start", sm: "center" }} direction={{ base: "column", sm: "row" }} mb="1">
        <Heading as="h3" fontSize="md" fontWeight="800" color={titleColor}>
          {title}
        </Heading>
        <Text fontSize="xs" fontWeight="700" color="#FF5E5E">
          {date}
        </Text>
      </Flex>
      <Text fontSize="sm" color={detailsColor} fontWeight="600">
        {details}
      </Text>
      {additionalInfo && (
        <Tag size="sm" colorScheme="red" borderRadius="full" mt="2" fontWeight="700">
          {additionalInfo}
        </Tag>
      )}
    </Box>
  );
};

const ProjectItem = ({ title, details }) => {
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.3)", "rgba(20, 14, 28, 0.4)");
  const cardBorder = useColorModeValue("1px solid rgba(255, 255, 255, 0.2)", "1px solid rgba(176, 24, 61, 0.15)");
  const titleColor = useColorModeValue("#B0183D", "#FFD464");
  const detailsColor = useColorModeValue("#B0183D", "#FCEDD8");
  
  return (
    <Box w="100%" p="4" borderRadius="xl" bg={cardBg} border={cardBorder}>
      <Heading as="h3" fontSize="md" fontWeight="800" color={titleColor} mb="2">
        {title}
      </Heading>
      <Text fontSize="sm" color={detailsColor} fontWeight="500" lineHeight="relaxed">
        {details}
      </Text>
    </Box>
  );
};

const Resume = () => {
  const programmingLanguages = ["Python", "JavaScript", "SQL"];
  const frontEndSkills = ["React.js", "HTML", "CSS", "Tailwind CSS", "Responsive Design", "React Router"];
  const backEndSkills = ["FastAPI", "Node.js", "RESTful APIs", "Authentication (OAuth2, JWT)"];
  const databases = ["MySQL", "PostgreSQL", "SQL Server"];
  const tools = ["Docker", "AWS", "Visual Studio Code", "Redis", "Git", "GitHub", "Power Automate"];
  const coreConcepts = ["Data Structures & Algorithms", "Object-Oriented Programming (OOP)", "Database Management Systems (DBMS)", "Computer Networks"];

  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Firstsource Solutions Limited",
      duration: "Dec 2024 – Present",
      projects: [
        {
          name: "AI-Powered Resume Parsing Application",
          tech: "Node.js, React.js, JavaScript, MySql, OpenAI, JSON, REST",
          details: [
            "Designed and developed a full-stack AI-powered resume parsing application using Node.js for the backend and React.js for the frontend.",
            "Integrated the OpenAI API to extract structured information (skills, experience, education, and other key attributes) from unstructured PDF and DOCX resumes.",
            "Implemented prompt-engineered extraction logic to match candidate profiles with job descriptions (JD) and generate relevance-based resume rankings.",
            "Improved backend response efficiency by implementing optimized asynchronous REST APIs using async/await."
          ]
        },
        {
          name: "Higher Education Tool",
          tech: "React, Node.js, MySQL",
          details: [
            "Developed an internal corporate application that allows employees to apply for and manage their higher education benefits.",
            "Built request workflows allowing employees to submit initial enrollment requests and later submit reimbursement requests for their educational expenses.",
            "Features a multi-tier approval system that automatically routes requests to the appropriate stakeholders."
          ]
        },
        {
          name: "Email Automation",
          tech: "Power Automate",
          details: [
            "Designed and implemented automated workflows to send exit and welcome emails to employees based on defined triggers and business logic.",
            "Created structured flow logic and flowcharts to ensure accurate email delivery and process reliability.",
            "Developed desktop automation flows to eliminate repetitive manual tasks by automatically downloading files and storing them in designated locations."
          ]
        }
      ]
    },
    {
      role: "Full-Stack Intern",
      company: "CAI Technologies Pvt. Ltd.",
      duration: "Feb 2024 – Sep 2024",
      details: [
        "Built a responsive dashboard UI in React based on Figma designs using Chakra UI, improving user engagement and reducing page load times.",
        "Developed a brand analysis API using Python and FastAPI, improving data processing efficiency and reducing data retrieval latency.",
        "Integrated real-time financial charts and data visualizations to support faster and more informed business decision-making."
      ]
    }
  ];

  const projects = [
    {
      title: "Bulk Emailer",
      details:
        "Developed a cold mailing tool that allows users to upload recipient email IDs, subjects, and attachments, and automatically send emails to the respective recipients. Integrated Gmail API to send emails, track delivery confirmations, and log errors for failed deliveries. Implemented functionality to auto-generate email IDs using first and last names when the domain already exists in the database.",
    },
    {
      title: "NiveMart",
      details:
        "Developed a responsive full-stack shopping website using React, HTML, CSS, and Chakra UI, featuring secure Google OAuth authentication and backend support for dynamic product management. Built the backend using FastAPI and documented all APIs using Swagger for easy testing and integration.",
    },
    {
      title: "Financial Intelligence",
      details:
        "Assembled a platform using React.js and React Router with secure login and loan application forms, increasing form submission rates by 30%. Built a robust backend with FastAPI, integrating Alembic for seamless database migrations and Poetry for efficient dependency management.",
    },
    {
      title: "Project Tracker",
      details:
        "Developed a collaborative project tracking workspace featuring interactive task boards, prioritization columns, real-time progress feeds, and a secure user login gateway. Built with React and designed with Chakra UI to ensure a fluid, responsive UI across desktop and mobile screens.",
    },
  ];

  const achievements = [
    { name: "Solved 150+ DSA Questions on LeetCode", link: "https://leetcode.com/u/NiveditaG/" },
    { name: "Women Techmakers Member", link: "https://developers.google.com/profile/badges/community/wtm/member" },
    { name: "Google Cloud Skills Boost Earned Badge", link: "https://developers.google.com/profile/badges/skillsboost/earned-badge" }
  ];

  const onlineCourses = [
    { title: "Python Programming for Beginners", provider: "Udemy" },
    { title: "Python Functions for Data Science", provider: "Coursera" },
    { title: "Full Stack Web Development Bootcamp with React and Python", provider: "Udemy" },
    { title: "Object Oriented Programming in Java", provider: "Coursera" },
    { title: "Object Oriented Concepts", provider: "Coursera" },
    { title: "Software Engineering for Beginners", provider: "Udemy" }
  ];

  // Dark Mode Style Mappings
  const headingColor = useColorModeValue("#B0183D", "#FFD464");
  const textColor = useColorModeValue("#B0183D", "#FCEDD8");
  const borderCol = useColorModeValue("rgba(176, 24, 61, 0.1)", "rgba(252, 237, 216, 0.1)");
  const cardBg = useColorModeValue("rgba(255, 255, 255, 0.45)", "rgba(20, 14, 28, 0.65)");
  const cardBorder = useColorModeValue("1px solid rgba(255, 255, 255, 0.4)", "1px solid rgba(176, 24, 61, 0.2)");
  const linkIconColor = useColorModeValue("#E23C64", "#FF5E5E");
  
  const achBg = useColorModeValue("rgba(255, 255, 255, 0.25)", "rgba(20, 14, 28, 0.3)");
  const achBorder = useColorModeValue("1px solid rgba(255, 255, 255, 0.15)", "1px solid rgba(176, 24, 61, 0.1)");
  const achTitleColor = useColorModeValue("#B0183D", "#FFD464");
  
  const courseBg = useColorModeValue("rgba(255, 94, 94, 0.1)", "rgba(255, 255, 255, 0.05)");
  const courseColor = useColorModeValue("#E23C64", "#FF5E5E");
  const courseBorder = useColorModeValue("rgba(226, 60, 100, 0.2)", "rgba(255, 94, 94, 0.25)");

  return (
    <Box
      py={{ base: "8", md: "16" }}
      px={{ base: "4", md: "8" }}
      maxW="900px"
      margin="0 auto"
    >
      <Box
        p={{ base: "6", md: "10" }}
        borderRadius="3xl"
        bg={cardBg}
        border={cardBorder}
        backdropFilter="blur(15px)"
        boxShadow="0 8px 32px 0 rgba(176, 24, 61, 0.05)"
      >
        {/* CV Header */}
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "start", md: "center" }}
          gap="4"
          mb="8"
          pb="6"
          borderBottom={`2px solid ${borderCol}`}
        >
          <Box>
            <Heading as="h1" fontSize="3xl" fontWeight="900" color={headingColor}>
              Nivedita Gupta
            </Heading>
            <Text fontSize="md" fontWeight="700" color="#FF5E5E" mt="1">
              Associate Software Engineer | Full Stack Developer
            </Text>
          </Box>
          <VStack align={{ base: "start", md: "end" }} spacing="1" fontSize="sm" color={textColor} fontWeight="600">
            <Link href="mailto:annie.gupta03@gmail.com" display="flex" alignItems="center" gap="2">
              <EmailIcon color={linkIconColor} /> annie.gupta03@gmail.com
            </Link>
            <Text display="flex" alignItems="center" gap="2">
              <PhoneIcon color={linkIconColor} /> +91 83401 28840
            </Text>
            <Link href="https://linkedin.com/in/nivedita-g-b942a421b" isExternal display="flex" alignItems="center" gap="2">
              <LinkIcon color={linkIconColor} /> linkedin.com/in/nivedita-g-b942a421b
            </Link>
          </VStack>
        </Flex>

        {/* Summary */}
        <Section title="Summary">
          <Text fontSize="sm" color={textColor} fontWeight="500" lineHeight="relaxed">
            Dynamic and results-driven Associate Software Engineer with experience in developing full-stack applications, AI integrations, and workflow automation. Proven ability to architect RESTful APIs, design responsive user interfaces, and build automated backend pipelines. Focused on leveraging technical expertise in React.js, Node.js, and Python to engineer efficient, scalable software solutions.
          </Text>
        </Section>

        {/* Experience */}
        <Section title="Experience">
          {experiences.map((exp, idx) => (
            <Box key={idx} w="100%" mb={idx === 0 ? "6" : "0"}>
              <Flex justify="space-between" align={{ base: "start", sm: "center" }} direction={{ base: "column", sm: "row" }} mb="2">
                <Heading as="h3" fontSize="md" fontWeight="800" color={headingColor}>
                  {exp.role} | {exp.company}
                </Heading>
                <Text fontSize="xs" fontWeight="700" color="#FF5E5E">
                  {exp.duration}
                </Text>
              </Flex>
              {exp.projects ? (
                exp.projects.map((proj, pIdx) => (
                  <Box key={pIdx} mt="4" pl="4" borderLeft={`2px solid ${linkIconColor}`}>
                    <Heading as="h4" fontSize="sm" fontWeight="700" color={linkIconColor}>
                      • {proj.name}
                    </Heading>
                    <Text fontSize="xs" fontWeight="600" color={textColor} opacity="0.8" mt="1">
                      Tech Stack: {proj.tech}
                    </Text>
                    <Text fontSize="sm" color={textColor} fontWeight="500" mt="2" lineHeight="relaxed">
                      {proj.details.map((detail, dIdx) => (
                        <span key={dIdx}>
                          – {detail}
                          <br />
                        </span>
                      ))}
                    </Text>
                  </Box>
                ))
              ) : (
                <Text fontSize="sm" color={textColor} fontWeight="500" mt="2" lineHeight="relaxed">
                  {exp.details.map((detail, dIdx) => (
                    <span key={dIdx}>
                      • {detail}
                      <br />
                    </span>
                  ))}
                </Text>
              )}
            </Box>
          ))}
        </Section>

        {/* Education */}
        <Section title="Education">
          <EducationItem
            title="B.Tech. in Information Science and Engineering"
            details="CMR Institute of Technology, Bengaluru"
            date="Dec 2020 – June 2024"
            additionalInfo="Key Courses: Data Structures, Data Science, Machine Learning"
          />
        </Section>

        {/* Technical Skills */}
        <Section title="Technical Skills">
          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="6" w="100%">
            <SkillsSection title="Programming Languages" skills={programmingLanguages} />
            <SkillsSection title="Databases" skills={databases} />
            <SkillsSection title="Front-End Development" skills={frontEndSkills} />
            <SkillsSection title="Back-End Development" skills={backEndSkills} />
            <SkillsSection title="Tools and Technologies" skills={tools} />
            <SkillsSection title="Core Concepts" skills={coreConcepts} />
          </SimpleGrid>
        </Section>

        {/* Academic & Personal Projects */}
        <Section title="Academic & Personal Projects">
          <VStack spacing="4" w="100%">
            {projects.map((project, idx) => (
              <ProjectItem
                key={idx}
                title={project.title}
                details={project.details}
              />
            ))}
          </VStack>
        </Section>

        {/* Achievements */}
        <Section title="Achievements">
          <SimpleGrid columns={{ base: 1, sm: 3 }} spacing="4" w="100%">
            {achievements.map((ach, idx) => (
              <Box key={idx} p="4" borderRadius="xl" bg={achBg} border={achBorder}>
                <Heading as="h4" fontSize="xs" fontWeight="800" color={achTitleColor} mb="2">
                  {ach.name}
                </Heading>
                <Link href={ach.link} isExternal fontSize="10px" fontWeight="700" color="#FF5E5E" display="inline-flex" alignItems="center">
                  View Profile &rarr;
                </Link>
              </Box>
            ))}
          </SimpleGrid>
        </Section>

        {/* Online Courses */}
        <Section title="Courses">
          <Wrap spacing="3">
            {onlineCourses.map((course, idx) => (
              <WrapItem key={idx}>
                <Tag size="md" variant="subtle" bg={courseBg} color={courseColor} border={`1px solid ${courseBorder}`}>
                  {course.title} ({course.provider})
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Section>
      </Box>
    </Box>
  );
};

export default Resume;
