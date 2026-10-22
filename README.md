# Shivanshu Chaturvedi — Cybersecurity + Software Portfolio

A responsive React portfolio styled like a cybersecurity operations console. It includes project cards, experience, education, skill groups, and a live read-only connection to public GitHub profile/repository data.

## Profile links and resume

- GitHub: https://github.com/Shivanshu22-eng
- LinkedIn: https://www.linkedin.com/in/shivanshu-c
- Contact: shivanshuchaturvedi678@gmail.com
- Resume PDF is included at `public/Shivanshu_Chaturvedi_Resume.pdf`.

## GitHub connection

The portfolio uses the public GitHub REST API for `Shivanshu22-eng` and needs no token for the public profile/repositories. Change `GITHUB_USERNAME` in `src/main.jsx` if the account changes. GitHub rate limits can temporarily prevent repository loading; the direct profile link remains available.

## Run locally

Requirements: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Deploy

1. Create a new repository on GitHub, e.g. `shivanshu-cyber-portfolio`.
2. Extract this ZIP and open a terminal in this folder.
3. Run:

```bash
git init
git add .
git commit -m "Create cybersecurity portfolio"
git branch -M main
git remote add origin https://github.com/Shivanshu22-eng/shivanshu-cyber-portfolio.git
git push -u origin main
```

4. Import the repository into Vercel, or use GitHub Pages with an appropriate Vite deployment workflow.
5. Add your resume PDF at `public/Shivanshu_Chaturvedi_Resume.pdf` (create the `public` folder if needed).
6. Replace `LINKEDIN_URL` and `EMAIL` near the top of `src/main.jsx` with your real professional details.
7. Add the correct GitHub repository URLs to projects where `repo: null`. Project descriptions intentionally distinguish known repositories from projects whose source links/details have not been confirmed.

## Project accuracy notes

- API Sentinel is labelled **In Development** and describes the planned scope rather than claiming every feature is already implemented.
- Projects without confirmed source links do not get fake repository URLs.
- Check that every project description reflects your actual implementation before using the portfolio in an application.
- The education CGPA shown is 7.01/10, based on the latest information provided earlier. Update if your transcript changes.

## Included projects

- API Sentinel
- Healthcare Appointment & Prescription Management System
- AI-Based Phishing Detection
- Real-Time Covert Channel Detection
- Python Encryption / Decryption Utility
- Manufacturing Analytics
- AI Business Analyst
- Online Book Reading Website
- Inventory Management System

## Tech stack

React, Vite, CSS, Lucide React icons, GitHub public REST API.
