# Habit Tracker — Software Requirements Specification

**Document Version 1.0**

---

## Cover Letter

Feb 12, 2025

To,
Mr. Alex Morgan
Northwind Ltd

**Sub:** SRS Final Version for the "Northwind Habit Tracker Mobile Application Development Project".

Greetings from DevWorks Software!

Hope this SRS aligns with your requirements, and we look forward to hearing your feedback and approval.

For DevWorks Software,
Thanking You,
Jordan Lee | Head of Business Development

---

## Table of Contents

1. Revision History
2. Documentation Version Control
3. Introduction
4. Overall Description
5. Functional Requirements
6. Non-Functional Requirements

---

## 1. Revision History

| Field | Detail |
|---|---|
| Prepared by | Sam Rivera, Business Analyst |
| Reviewed by | Taylor Kim, Tech Lead |
| Last Modified On | Wednesday, February 12th 2025 |

## 2. Documentation Version Control

| Version | Date | Created By | Reviewed By (Client side) | Comments |
|---|---|---|---|---|
| 1.0 | 3rd February 2025 | Sam Rivera | Alex Morgan | Initial Draft |
| Final | 12th February 2025 | Sam Rivera | Alex Morgan | Revised Final Version |

---

## 3. Introduction

### 3.1 Document Purpose

The purpose of this Software Requirements Specification (SRS) document is to provide a
complete description of the proposed Habit Tracker mobile application, outlining its
objectives, scope, intended users, and functional as well as non-functional requirements.
This document is the single point of reference for stakeholders — client, business analyst,
developers, and testers — and is used throughout the software development lifecycle to guide
design, implementation, and validation.

### 3.2 Scope

The scope of the project is to develop a cross-platform Habit Tracker mobile application that
helps users build and maintain habits. The application will be built with React Native for
Android and iOS. It will support user authentication, guided onboarding, habit creation and
tracking with streaks and reminders, a gamified reward system, social features (friends,
leaderboards, challenges, in-app messaging), analytics, home-screen widgets, and a
subscription tier for premium features.

### 3.3 Intended Audience

This document is intended for the client (Northwind Ltd), the development team at DevWorks
Software, and the testers responsible for validating the delivered application.

---

## 4. Overall Description

### 4.1 Product Perspective

The Habit Tracker is a standalone mobile application backed by an API service. It runs on
Android and iOS devices and synchronizes user data with a backend.

### 4.2 User Classes

- **End User** — a person who creates and tracks their own habits, and may connect with
  friends. This version has a single end-user role; there are no administrator roles.

### 4.3 Operating Environment

The application runs on Android and iOS mobile devices, is built with React Native, and
communicates with a backend API over the network. Some features (streaks, widgets, offline
viewing) rely on secure local storage on the device.

### 4.4 Assumptions and Dependencies

- Users have a network connection for account, social, and synchronization features.
- Push notifications depend on the platform notification services.
- Payments depend on the platform's in-app purchase / payment provider.

### 4.5 Out of Scope (Infrastructure)

The following are engineering/infrastructure activities from the estimate and are not tracked
as functional requirements: initial project setup (React Native project, libraries, folder
structure, navigation, theming, reusable components, API manager, sockets), platform-specific
implementations, and unit testing & deployment.

---

## 5. Functional Requirements

### 5.1 Authentication

#### 5.1.1 Introduction
Account access: sign up, log in, and password recovery, with secure token handling.

#### 5.1.2 Users with Access
- End User

#### 5.1.3 Functional Requirements
- **FR-AUTH-1:** The system shall allow a user to sign up with an email and password.
- **FR-AUTH-2:** The system shall allow a user to log in with their credentials.
- **FR-AUTH-3:** The system shall allow a user to recover a forgotten password.
- **FR-AUTH-4:** The system shall validate user input on the authentication forms.
- **FR-AUTH-5:** The system shall securely store the authentication token on the device.

### 5.2 Onboarding

#### 5.2.1 Introduction
A guided, multi-step first-run experience that sets up the user.

#### 5.2.2 Users with Access
- End User

#### 5.2.3 Functional Requirements
- **FR-ONB-1:** The system shall present a multi-step onboarding flow with a welcome note.
- **FR-ONB-2:** The system shall allow the user to create an avatar.
- **FR-ONB-3:** The system shall collect the user's basic details during onboarding.
- **FR-ONB-4:** The system shall request required permissions through a single permission manager.

### 5.3 Home Dashboard

#### 5.3.1 Introduction
The main screen summarizing the user's habits and progress.

#### 5.3.2 Users with Access
- End User

#### 5.3.3 Functional Requirements
- **FR-HOME-1:** The system shall display the user's current active streak.
- **FR-HOME-2:** The system shall display today's habits.
- **FR-HOME-3:** The system shall display all of the user's habits.
- **FR-HOME-4:** The system shall display the active habit count.
- **FR-HOME-5:** The system shall display the habit completion rate and average completion rate.
- **FR-HOME-6:** The system shall display a calendar view of habit activity.

### 5.4 Create Habit

#### 5.4.1 Introduction
Creating a new habit with scheduling and reminders.

#### 5.4.2 Users with Access
- End User

#### 5.4.3 Functional Requirements
- **FR-CH-1:** The system shall allow the user to create a habit with a name.
- **FR-CH-2:** The system shall allow the user to set the habit's frequency.
- **FR-CH-3:** The system shall allow the user to set a time-based reminder for a habit.
- **FR-CH-4:** The system shall allow the user to set a location-based reminder for a habit.
- **FR-CH-5:** The system shall validate the habit creation input.

### 5.5 Habit Management

#### 5.5.1 Introduction
Day-to-day tracking of habits, history, and the reward mechanics.

#### 5.5.2 Users with Access
- End User

#### 5.5.3 Functional Requirements
- **FR-HM-1:** The system shall allow the user to mark daily habits as complete.
- **FR-HM-2:** The system shall maintain a history of habit completions.
- **FR-HM-3:** The system shall award XP, gems, and rewards for completing habits.
- **FR-HM-4:** The system shall track the user's progress level.
- **FR-HM-5:** The system shall allow the user to apply a habit freeze.
- **FR-HM-6:** The system shall handle missed habits (miss management).
- **FR-HM-7:** The system shall award milestone badges.

### 5.6 Social

#### 5.6.1 Introduction
Connecting with friends and comparing progress.

#### 5.6.2 Users with Access
- End User

#### 5.6.3 Functional Requirements
- **FR-SOC-1:** The system shall allow the user to add friends.
- **FR-SOC-2:** The system shall allow the user to manage friend requests.
- **FR-SOC-3:** The system shall display a leaderboard.
- **FR-SOC-4:** The system shall generate and share an invite code.
- **FR-SOC-5:** The system shall allow the user to view a friend's profile.
- **FR-SOC-6:** The system shall display friends' streaks.

### 5.7 In-App Messaging

#### 5.7.1 Introduction
Real-time chat between friends.

#### 5.7.2 Users with Access
- End User

#### 5.7.3 Functional Requirements
- **FR-MSG-1:** The system shall allow the user to chat with friends in real time.
- **FR-MSG-2:** The system shall support emoji in messages.
- **FR-MSG-3:** The system shall manage chat users.

### 5.8 Challenges

#### 5.8.1 Introduction
Group or timed challenges the user can take part in.

#### 5.8.2 Users with Access
- End User

#### 5.8.3 Functional Requirements
- **FR-CHL-1:** The system shall allow the user to join challenges.
- **FR-CHL-2:** The system shall track challenge progress in real time.

### 5.9 Notifications

#### 5.9.1 Introduction
Global and in-app notifications.

#### 5.9.2 Users with Access
- End User

#### 5.9.3 Functional Requirements
- **FR-NOT-1:** The system shall send global (push) and in-app notifications to the user.

### 5.10 Widgets & Lock Screen

#### 5.10.1 Introduction
Home-screen and lock-screen widgets with synced data.

#### 5.10.2 Users with Access
- End User

#### 5.10.3 Functional Requirements
- **FR-WID-1:** The system shall provide a home-screen / lock-screen widget.
- **FR-WID-2:** The system shall synchronize widget data in real time.

### 5.11 Profile

#### 5.11.1 Introduction
Viewing and editing the user's profile.

#### 5.11.2 Users with Access
- End User

#### 5.11.3 Functional Requirements
- **FR-PRO-1:** The system shall allow the user to view and edit their profile.

### 5.12 Analytics

#### 5.12.1 Introduction
Visual insights into the user's habits.

#### 5.12.2 Users with Access
- End User

#### 5.12.3 Functional Requirements
- **FR-ANL-1:** The system shall display habit analytics as charts and graphs.

### 5.13 Settings

#### 5.13.1 Introduction
Configuring the application.

#### 5.13.2 Users with Access
- End User

#### 5.13.3 Functional Requirements
- **FR-SET-1:** The system shall allow the user to configure application settings.

### 5.14 Gamification & Mascot

#### 5.14.1 Introduction
Interactive, animated elements that make the app engaging.

#### 5.14.2 Users with Access
- End User

#### 5.14.3 Functional Requirements
- **FR-GAM-1:** The system shall present an animated mascot with audio and haptic feedback.

### 5.15 Subscription

#### 5.15.1 Introduction
Premium tier and payments.

#### 5.15.2 Users with Access
- End User

#### 5.15.3 Functional Requirements
- **FR-SUB-1:** The system shall integrate payments for subscriptions.
- **FR-SUB-2:** The system shall gate premium features behind the user's subscription status.

---

## 6. Non-Functional Requirements

- **NFR1:** The application shall run on both Android and iOS from a single React Native codebase.
- **NFR2:** The application shall store authentication tokens and sensitive data in secure storage.
- **NFR3:** The application shall synchronize data with the backend in real time where applicable.
- **NFR4:** The application should be intuitive and responsive to use.
