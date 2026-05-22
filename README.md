# RPG-skyrim.com

A Skyrim-inspired browser RPG landing page and playable story built with HTML, CSS, and JavaScript.

## Open locally

1. Open `C:\Users\micha\RoleplayGameWebsite\index.html` in your browser.
2. Alternatively, run a local server from that folder:

```powershell
cd C:\Users\micha\RoleplayGameWebsite
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## What it includes

- interactive adventure with branching choices
- hero customization and stats
- polished dark fantasy website layout
- navigation, lore section, and footer

## Deploy to GitHub

1. Install Git from https://git-scm.com/downloads.
2. Open PowerShell and run:

```powershell
cd C:\Users\micha\RoleplayGameWebsite
.\deploy-to-github.ps1 -RepoName "KnightsQuest" -RemoteUrl "https://github.com/<your-username>/KnightsQuest.git"
```

3. If you want GitHub Pages, enable it in the repository settings and use the `main` branch as the source.

## Deploy as a public website without GitHub

### Netlify
1. Sign up at https://www.netlify.com.
2. Connect your site folder or drag the project into the Netlify dashboard.
3. Use `.` as the publish directory.

Netlify will serve the site publicly on a `*.netlify.app` address.

### Vercel
1. Sign up at https://vercel.com.
2. Create a new project and import the folder.
3. Vercel will detect the static site and publish it automatically.

### Cloudflare Pages
1. Sign up at https://pages.cloudflare.com.
2. Create a new Pages project and upload the folder.
3. Use `.` as the build output folder.

### Hosting provider
This site is ready to be hosted on a static hosting provider.

Recommended provider:

- Netlify: `netlify.toml` is included so you can deploy from the project root with `.` as the publish directory.
- Vercel: `vercel.json` is included for static deployment.

## Netlify deployment

1. Sign up or log in at https://www.netlify.com.
2. Create a new site and connect your Git repository, or drag the project folder into the dashboard.
3. Set the publish directory to `.` if prompted.
4. Add a custom domain under Site settings and configure DNS for `www.dreamjob.com`.

### Custom domain for GitHub Pages

1. Create a GitHub repository and push this project.
2. Add a file named `CNAME` in the repository root with the content:

```
www.dreamjob.com
```

3. Enable GitHub Pages in repository settings and select the `main` branch.
4. Point your domain DNS to GitHub Pages as described by GitHub.
