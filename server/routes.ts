import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, chatRequestSchema } from "@shared/schema";
import { ZodError } from "zod";
import path from "path";
import { generateChatResponse } from "./gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      
      // In a real application, you would send an email here
      // For now, we'll just store the message
      console.log("New contact message received:", {
        name: message.name,
        email: message.email,
        subject: message.subject,
      });
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I'll get back to you soon." 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // In a real application, you would serve the actual resume PDF
    // For now, we'll return a simple response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Yash_Garg_Resume.pdf"');
    
    // Return a simple text response indicating this would be the resume
    res.status(200).send("Resume download would be available here in production");
  });

  // Get contact messages (for admin purposes)
  app.get("/api/contact-messages", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contact messages" 
      });
    }
  });

  // Chat with AI agent about resume
  app.post("/api/chat", async (req, res) => {
    try {
      const validatedData = chatRequestSchema.parse(req.body);
      
      // Generate AI response using Gemini
      const aiResponse = await generateChatResponse(validatedData.message);
      
      // Store the chat exchange
      await storage.createChatMessage({
        userMessage: validatedData.message,
        aiResponse: aiResponse,
      });
      
      res.json({ 
        success: true, 
        response: aiResponse 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid chat message", 
          errors: error.errors 
        });
      } else {
        console.error("Chat API error:", error);
        res.status(500).json({ 
          success: false, 
          message: "Sorry, I'm having trouble processing your message right now. Please try again." 
        });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
