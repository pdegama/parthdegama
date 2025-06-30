---
title: "Levify Mail – Full-Stack Email System with Go, BunJS, RabbitMQ & React"
description: "Levify Mail is a full-featured custom email platform built using Go (SMTP), BunJS, RabbitMQ, and React. It supports real-time delivery, attachments, AI-based suggestions, and powerful admin tools."
image: /static/images/email-app.png
slug: email-app-project
date: "2025-06-27"
---

# 📬 Levify Mail – Industrial-Grade Email System Built with Go, BunJS, RabbitMQ & React

Levify Mail is a full-stack, self-hosted email platform engineered for performance, reliability, and complete control over email infrastructure. It includes a production-level SMTP server (`box`), real-time WebSocket updates, queue-based message delivery via RabbitMQ, a scalable BunJS backend, and a modern React interface for both web and desktop experiences.

Designed with the same architectural principles as Gmail or Zoho, Levify Mail is ideal for teams, startups, or organizations who want to operate their own secure email environment with advanced features and extensibility.

## 🔗 Dashboard Access

**Login URL:** [http://mx.uniqueartsurat.com:3031/login](http://mx.uniqueartsurat.com:3031/login)

- **Username:** `parthdegama`  
- **Password:** `22042005`


## 🧠 Tech Stack Overview

- SMTP Engine: `box` (custom-built in Go)
- Backend API: BunJS (Node.js alternative, fast)
- Frontend UI: React.js + Tailwind CSS
- Realtime Updates: WebSocket (client ↔ server)
- Email Queue System: RabbitMQ (AMQP protocol)
- Database: PostgreSQL
- Attachment Delivery: Secure object storage with signed URLs
- Deployment Stack: Docker + Caddy reverse proxy
- Desktop App Option: Electron (repackaged React UI)

## 🧰 The `box` SMTP Engine – Industrial-Level Logic

At the heart of Levify Mail lies `box`, a production-grade SMTP server implemented entirely in Go. It's purpose-built to match the robustness and efficiency of enterprise email providers.

### Key Capabilities:

- 📬 **Parallel Email Processing**: Uses Go’s goroutines to process hundreds of emails concurrently without blocking.
- 📦 **AMQP Queue Consumption**: Integrates with RabbitMQ to pull and send emails at scale with retry logic.
- 📩 **Per-Recipient Status Tracking**: Ensures email status (sent, failed, queued) is recorded **per recipient**, not per message — preventing overwrite issues.
- 🔐 **DKIM Signing & Domain Binding**: Supports domain-level authentication and cryptographic signing.
- 📊 **Scalable Routing Logic**: Allows for domain-specific delivery routing (e.g., per-IP or per-policy).
- 💥 **Crash Resistant & Always-On**: Built to run in high-load environments with auto-recovery mechanisms.

> `box` is more than a server — it’s a distributed mail pipeline, optimized like a factory line.

## 📊 System Architecture

```txt
       ┌───────────────────────────────┐
       │        React Frontend         │
       │  (Web + Desktop via Electron) │
       └──────────────┬────────────────┘
                      │
                      ▼
              ┌──────────────┐
              │   BunJS API  │
              └──────┬───────┘
                     │
       ┌─────────────┴─────────────┐
       │                           │
 ┌──────────────┐          ┌────────────────┐
 │  PostgreSQL  │◄───────► │   RabbitMQ     │
 └──────────────┘          └────────────────┘
                                │
                                ▼
                      ┌──────────────────┐
                      │     box (Go)     │
                      │ SMTP Mail Engine │
                      └──────────────────┘
                                │
                                ▼
                      ┌──────────────────┐
                      │  Mail Recipients │
                      └──────────────────┘
                                │
                                ▼
                   ┌─────────────────────────┐
                   │  Object Storage (Files) │
                   └─────────────────────────┘
```

## 🚀 Feature Highlights

### ✅ SMTP-Level Control
- Send, track, and monitor emails using your own mail engine.
- Industrial-quality logic with granular recipient handling.

### 📨 Dynamic Queued Delivery
- RabbitMQ lets you enqueue thousands of emails with smart retry logic and separate consumers for fast throughput.

### ⚡ Realtime Inbox
- WebSocket updates for incoming/outgoing emails, status changes, and more — without page reload.

### 🔒 Attachment Management
- Upload/download files securely using signed secret URLs. Stored in object storage with temporary access.

### 💻 Multi-Platform Interface
- Responsive, fast UI for mobile + desktop (with Electron) using modern React and Tailwind stack.

### 📡 Mailto Registration
- Optionally register as the system-wide mail handler using the `mailto:` protocol.

## 📌 Motivation – Why I Built Levify Mail

In a world dominated by a few email giants, developers and teams often lack **control**, **transparency**, and **customizability** over how email systems work.

I created Levify Mail to:

- 💡 **Learn deeply** how real email systems (SMTP, DKIM, MIME, AMQP) work
- 🔧 **Build a self-hosted alternative** to Gmail with full stack ownership
- 🧩 **Solve real delivery issues** like per-recipient status tracking
- 💬 **Support AI-driven user features** (smart replies, suggestions)
- 🛠️ **Create my own scalable pipeline** for handling thousands of messages/day
- 🔒 **Own my infrastructure**, data privacy, and customization freedom

## 🧠 Who It's For

Levify Mail is ideal for:

- Developers wanting to learn internals of email protocols
- Startups needing private, branded mail servers
- Teams building alternative clients, inbox tools, or automation flows
- Hackers/tinkerers who want to own the entire mail stack

## ✅ Conclusion

Levify Mail is not just an experiment — it’s a **powerful, scalable, and modern mail infrastructure** designed from first principles. From SMTP engines to inbox, every layer is built for flexibility and performance.

If Gmail is a black box, Levify Mail is a transparent, open workshop — engineered by one mind, optimized for many.

