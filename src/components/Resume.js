import React from "react";
import { Box, Text, Heading } from "@chakra-ui/react";

const Resume = () => {
  return (
    <Box margin="25px" padding="70px" marginTop="35px">
      <Heading as="h1" size="2xl" mb="4">
        Nivedita
      </Heading>
      <Text fontSize="lg" mb="2">
        <strong>Phone:</strong> +91 83401 28840
      </Text>
      <Text fontSize="lg" mb="6">
        <strong>Email:</strong> annie.gutpa03@gmail.com
      </Text>

      <Heading as="h2" size="xl" mb="4">
        Summary
      </Heading>
      <Text fontSize="md" mb="6">
        Dynamic and results-driven professional with a strong foundation in
        technical skills and a passion for innovation. Proven track record of
        rapid skill acquisition and applying expertise to drive growth in the IT
        industry. Eager to contribute to a forward-thinking organization known
        for its excellence and innovation.
      </Text>

      <Heading as="h2" size="xl" mb="4">
        Experience
      </Heading>
      <Box mb="4">
        <Heading as="h3" size="lg" mb="2">
          Intern Fullstack | CAI Technologies Private Limited
        </Heading>
        <Text fontSize="md" mb="2">
          <strong>Feb 2024 - Current</strong>
        </Text>
        <Text fontSize="md" mb="2">
          - Designed a custom dashboard for a consumer-facing financial platform
          using Figma, enhancing user experience and data visualization.
        </Text>
        <Text fontSize="md" mb="2">
          - Developed a brand analysis API backend using Python and FastAPI,
          improving the efficiency and scalability of data processing.
        </Text>
      </Box>

      <Heading as="h2" size="xl" mb="4">
        Education
      </Heading>
      <Box mb="4">
        <Heading as="h3" size="lg" mb="2">
          Bachelor of Engineering – Information Science and Engineering
        </Heading>
        <Text fontSize="md" mb="2">
          <strong>CMR Institute of Technology, Bengaluru</strong> | Dec 2020 -
          May 2024
        </Text>
        <Text fontSize="md" mb="2">
          - CGPA: 7.40
        </Text>
      </Box>
      <Box mb="4">
        <Heading as="h3" size="lg" mb="2">
          12th Grade
        </Heading>
        <Text fontSize="md" mb="2">
          <strong>R.S.S. Science College, Sitamarhi, Bihar</strong> | May 2018 -
          Mar 2020
        </Text>
        <Text fontSize="md" mb="2">
          - Percentage: 70%
        </Text>
      </Box>
      <Box mb="4">
        <Heading as="h3" size="lg" mb="2">
          10th Grade
        </Heading>
        <Text fontSize="md" mb="2">
          <strong>Hellen School, Rajopatti, Sitamarhi, Bihar</strong> | May 2017
          - May 2018
        </Text>
        <Text fontSize="md" mb="2">
          - Percentage: 55.5%
        </Text>
      </Box>

      <Heading as="h2" size="xl" mb="4">
        Skills
      </Heading>
      <Text fontSize="md" mb="6">
        - **Programming Languages**: Python, Java, C, C++
      </Text>
      <Text fontSize="md" mb="6">
        - **Web Development**: HTML, CSS, JavaScript, Node.js, React, Tailwind
      </Text>
      <Text fontSize="md" mb="6">
        - **Backend Development**: FastAPI, Flask, SQL, MySQL, NoSQL, MongoDB
      </Text>
      <Text fontSize="md" mb="6">
        - **Data Science & ML**: TensorFlow, PyTorch, Scikit-learn, Numpy,
        Pandas, Matplotlib, Jupyter, Ollama, NLTK, OpenAI, Langchain
      </Text>
      <Text fontSize="md" mb="6">
        - **Image Processing & OCR**: OpenCV, PyOCR
      </Text>
      <Text fontSize="md" mb="6">
        - **Containerization & DevOps**: Docker, Git
      </Text>
      <Text fontSize="md" mb="6">
        - **IoT**: Arduino
      </Text>

      <Heading as="h2" size="xl" mb="4">
        Projects
      </Heading>
      <Box mb="4">
        <Heading as="h3" size="lg" mb="2">
          DOCUMENT CHAT
        </Heading>
        <Text fontSize="md" mb="2">
          - Designed and implemented a Retrieval-Augmented Generation (RAG)
          pipeline for answering questions based on user-uploaded files.
        </Text>
        <Text fontSize="md" mb="2">
          - Integrated support for multiple Large Language Model (LLM)
          providers, including ChatGPT, Claude, Ollama, and Huggingface.
        </Text>
        <Text fontSize="md" mb="2">
          - Developed a user-friendly chat UI to enhance service accessibility.
        </Text>
      </Box>
      <Box mb="4">
        <Heading as="h3" size="lg" mb="2">
          BRAND MONITORING
        </Heading>
        <Text fontSize="md" mb="2">
          - Created a sentiment analysis workflow for user reviews, including
          data preprocessing and analysis.
        </Text>
        <Text fontSize="md" mb="2">
          - Trained an LSTM model for text classification, achieving accurate
          sentiment classification.
        </Text>
        <Text fontSize="md" mb="2">
          - Developed an API server for bulk review analysis and metrics
          computation.
        </Text>
        <Text fontSize="md" mb="2">
          - Designed an intuitive UI dashboard for visualizing metrics and
          comparing brand performance.
        </Text>
      </Box>
      <Box mb="4">
        <Heading as="h3" size="lg" mb="2">
          FINANCIAL INTELLIGENCE
        </Heading>
        <Text fontSize="md" mb="2">
          - Developed a risk assessment pipeline for evaluating loan risks based
          on lender information.
        </Text>
        <Text fontSize="md" mb="2">
          - Trained a Multi-Layer Perceptron (MLP) model for risk scoring,
          achieving 95% accuracy.
        </Text>
        <Text fontSize="md" mb="2">
          - Implemented an income verification flow using bank statements.
        </Text>
        <Text fontSize="md" mb="2">
          - Built an API server and a user-friendly UI for loan applications and
          administrative tasks.
        </Text>
      </Box>

      <Heading as="h2" size="xl" mb="4">
        Online Courses
      </Heading>
      <Text fontSize="md" mb="6">
        - “Python for Everybody” - Coursera
      </Text>
      <Text fontSize="md" mb="6">
        - “Object-Oriented Programming in Java” - Coursera
      </Text>
      <Text fontSize="md" mb="6">
        - “Object-Oriented Concepts” - Coursera
      </Text>

      <Heading as="h2" size="xl" mb="4">
        Seminars
      </Heading>
      <Text fontSize="md" mb="2">
        - “Problem Solving & Ideation” - CMRIT, 20th November 2021
      </Text>
      <Text fontSize="md" mb="2">
        - “Intellectual Property Rights (IPR)” - NIPAM, Govt. of India, CMRIT,
        20th November 2021
      </Text>
      <Text fontSize="md" mb="2">
        - “Design Thinking and Innovation Workshop” - CMRIT, 2021
      </Text>
    </Box>
  );
};

export default Resume;
