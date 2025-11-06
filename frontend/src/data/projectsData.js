import ecommerceImg from "../asset/projects/ecommerce-platform.jpeg";
import chatbotImg from "../asset/projects/ecommerce-platform.jpeg";
import bankingImg from "../asset/projects/ecommerce-platform.jpeg";

export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Built a full-stack e-commerce platform with real-time inventory, payments, and admin dashboard.",
    image: ecommerceImg,
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "web",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 2,
    title: "AI Chatbot System",
    description:
      "Developed an intelligent chatbot using NLP for automated customer support.",
    image: chatbotImg,
    technologies: ["Python", "TensorFlow", "FastAPI"],
    category: "ai",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "Created a mobile banking application with biometric security and real-time transactions.",
    image: bankingImg,
    technologies: ["React Native", "Firebase", "Node.js", "MySQL"],
    category: "mobile",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example"
  }
];
