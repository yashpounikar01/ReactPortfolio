import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  text: string;
  isUser: boolean;
}

const presetResponses = [
  {
    keywords: ["who", "name", "about"],
    response: "Hi! I'm Yash Pounikar, a software engineer and 3rd-year undergraduate student at PJLCE pursuing B.Tech in Artificial Intelligence.",
  },
  {
    keywords: ["education", "study", "college", "university", "degree"],
    response: "I'm currently in my 3rd year at PJLCE, pursuing a Bachelor's in Technology with a focus on Artificial Intelligence.",
  },
  {
    keywords: ["skills"],
    response: "Yash has both technical skills and soft skills. Technical skills include Java, Python, Node.js, Express.js, Flask, MySQL, and MongoDB. His soft skills include problem-solving, teamwork, communication, leadership, and adaptability.",
  },
  {
    keywords: ["5 years", "five years", "future plans", "career plans", "see yourself"],
    response: "In the next 5 years, Yash plans to start with a technical role to strengthen his foundation and gain hands-on experience, then eventually transition towards management. He aims to move into a Product Management role where he can leverage both his technical expertise and leadership skills to guide product development and strategy.",
  },
  {
    keywords: ["technologies", "programming", "languages", "tech"],
    response: "I'm proficient in programming languages like C and Java, with a strong foundation in Object-Oriented Programming. Web development is my main domain of interest, where I have extensive knowledge and continue to learn new technologies.",
  },
  {
    keywords: ["job", "roles", "position", "hire", "offer"],
    response: "Yash is available for the following job roles: Software Engineer, Full-Stack Developer, and Backend Developer.",
  },
  {
    keywords: ["web", "development", "frontend", "backend"],
    response: "Web development is my primary area of expertise. I'm constantly learning and improving my skills in this domain.",
  },
  {
    keywords: ["experience", "work", "project"],
    response: "I have experience with various programming languages and technologies, particularly focusing on web development projects. I'm passionate about creating efficient and user-friendly applications.",
  },
  {
    keywords: ["hi", "hello", "hey"],
    response: "Hello! I'm a chatbot assistant for Yash's portfolio. How can I help you learn more about Yash's experience and skills?",
  },
];

function findBestResponse(input: string): string {
  const lowercaseInput = input.toLowerCase();
  let bestMatch = {
    keywords: 0,
    response: "I'm here to help answer questions about Yash's background and experience. Feel free to ask about his education, skills, or web development experience!"
  };

  for (const preset of presetResponses) {
    const matchingKeywords = preset.keywords.filter(keyword => 
      lowercaseInput.includes(keyword.toLowerCase())
    ).length;

    if (matchingKeywords > bestMatch.keywords) {
      bestMatch = {
        keywords: matchingKeywords,
        response: preset.response
      };
    }
  }

  return bestMatch.response;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi! I'm Yash's portfolio assistant. How can I help you?", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { text: input, isUser: true },
    ];

    setMessages(newMessages);
    setInput("");

    // Generate response based on input
    setTimeout(() => {
      const response = findBestResponse(input);
      setMessages([...newMessages, { text: response, isUser: false }]);
    }, 500);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg"
          onClick={() => setIsOpen(true)}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 z-50"
          >
            <Card className="w-80">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Chat with Yash's Assistant</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] pr-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`rounded-lg px-3 py-2 max-w-[80%] ${
                            message.isUser
                              ? 'bg-primary text-primary-foreground'
                              : 'bg-muted'
                          }`}
                        >
                          {message.text}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea>
                <div className="flex gap-2 mt-4">
                  <Input
                    placeholder="Ask about Yash..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  />
                  <Button size="icon" onClick={handleSend}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}