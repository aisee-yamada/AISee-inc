import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  company: z.string(),
  message: z.string(),
});

export function registerRoutes(app: Express): Server {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = contactSchema.parse(req.body);
      
      // TODO: Implement email sending logic here
      // For now, just log the contact request
      console.log("Contact form submission:", data);

      res.json({ success: true });
    } catch (error) {
      res.status(400).json({ 
        message: "Invalid form data"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
