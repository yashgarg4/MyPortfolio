# Overview

This is a personal portfolio website built as a full-stack web application showcasing the work and experience of Yash Garg, a Full-Stack Developer and AI Engineer. The site features multiple sections including hero, about, experience, projects, skills, education, AI chat assistant, and contact information. It includes a contact form and an interactive AI chat feature powered by Gemini 2.5 Pro that allows visitors to ask questions about Yash's background and experience. The application is designed with a modern, responsive interface supporting both light and dark themes.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built with **React** using **TypeScript** for type safety. The application uses **Vite** as the build tool and development server, providing fast hot module replacement and optimized builds. Component styling is handled by **Tailwind CSS** with **shadcn/ui** components for a consistent design system.

**Key Frontend Decisions:**
- **Wouter** for client-side routing instead of React Router for lighter bundle size
- **TanStack Query** for server state management and API calls
- **React Hook Form** with **Zod** validation for form handling
- Custom theme provider for dark/light mode switching
- Responsive design with mobile-first approach using Tailwind breakpoints

## Backend Architecture
The server is built with **Express.js** running on **Node.js**, serving both API endpoints and static files. The application uses a modular route structure with separate storage abstraction.

**Key Backend Decisions:**
- **Express** chosen for simplicity and wide ecosystem support
- **In-memory storage** implementation with interface for easy database migration
- **Zod** schema validation for API request/response validation
- Custom error handling middleware for consistent error responses
- Vite integration for development with SSR capabilities

## Data Storage
Currently uses **in-memory storage** with a well-defined interface (`IStorage`) that can be easily replaced with a database implementation. The schema is defined using **Drizzle ORM** with **PostgreSQL** dialect, indicating planned database migration.

**Storage Design:**
- Abstract storage interface for easy swapping between implementations
- Drizzle schema definitions ready for PostgreSQL migration
- UUID-based primary keys for scalability
- Typed data models using Zod inference

## Form Handling & Validation
Forms use **React Hook Form** with **Zod** resolvers for client-side validation, while server-side validation uses the same Zod schemas for consistency.

**Validation Strategy:**
- Shared validation schemas between client and server
- Type-safe form handling with TypeScript inference
- Real-time validation feedback to users
- Server-side validation as security fallback

# Recent Changes

## AI Chat Feature (Added: January 2025)
- Integrated Gemini 2.5 Pro AI chat assistant for interactive resume exploration
- Added `/api/chat` endpoint for processing user questions about Yash's experience
- Created responsive chat interface with message history and suggested questions
- Implemented real-time conversation flow with typing indicators
- Added comprehensive resume context for accurate AI responses about skills, projects, and experience

# External Dependencies

## AI Integration
- **@google/genai** - Google Gemini AI SDK for chat functionality
- **Gemini 2.5 Pro** - Large language model for intelligent resume Q&A

## Database & ORM
- **Drizzle ORM** - Type-safe database toolkit with PostgreSQL dialect
- **@neondatabase/serverless** - Serverless PostgreSQL driver for production deployment
- Configured for PostgreSQL migration with environment-based connection

## UI & Styling
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **shadcn/ui** - High-quality React component library built on Radix UI
- **Radix UI** primitives - Accessible, unstyled UI components
- **Lucide React** - Icon library for consistent iconography

## State Management & API
- **TanStack Query** - Server state management and caching
- **React Hook Form** - Performant forms with easy validation
- **Zod** - Schema validation and type inference

## Development & Build Tools
- **Vite** - Fast build tool and development server
- **TypeScript** - Static type checking for better developer experience
- **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

## Deployment & Hosting
Configured for **Replit** deployment with:
- Custom Vite plugins for Replit integration
- Environment-based configuration
- Static file serving through Express
- Hot reload support in development