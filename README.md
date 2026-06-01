# Fanatics Travel (exploration prototype)

Internal exploration prototype for Fanatics Travel — cruises, resorts, and FanCash rewards.

## Live preview

After deployment, the site is available at:

**https://YOUR_GITHUB_USERNAME.github.io/fanatics/**

Replace `YOUR_GITHUB_USERNAME` with your work GitHub username.

## Share with your manager

1. Go to the repo on GitHub → **Settings** → **Collaborators**
2. Add your manager's GitHub username
3. Send them the live URL above

The site is only visible to people with access to this private repo.

## Local development

```bash
cd travel
npm install
npm run dev
```

Open [http://localhost:5173/fanatics/](http://localhost:5173/fanatics/)

## Deploy

Pushes to `main` automatically build and deploy via GitHub Actions.

To deploy manually: **Actions** → **Deploy to GitHub Pages** → **Run workflow**

First-time setup on GitHub:

1. **Settings** → **Pages** → **Build and deployment** → Source: **GitHub Actions**
2. After the first successful workflow run, the live URL will appear under **Settings** → **Pages**
