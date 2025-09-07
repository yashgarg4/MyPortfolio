#!/usr/bin/env node

// Windows-compatible development server starter
process.env.NODE_ENV = "development";

// Import and run the server
import("./server/index.ts").catch(console.error);
