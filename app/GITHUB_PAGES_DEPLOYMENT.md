# GitHub Pages Deployment Guide

## 📋 What I've Done For You

✅ Updated `package.json` with deployment scripts
✅ Added `gh-pages` dependency 
✅ Created GitHub Actions workflow (`.github/workflows/deploy.yml`)
✅ Vite config already has `base: './'` (required for GitHub Pages)

---

## 🎯 What YOU Need To Do (5 Steps)

### **Step 1: Create/Prepare GitHub Repository**

```bash
# If you don't have git initialized yet:
git init

# Add this remote (replace with your repo):
git remote add origin https://github.com/yourusername/repo-name.git

# Or update if already exists:
git remote set-url origin https://github.com/yourusername/repo-name.git
```

Your repo must be **PUBLIC** for free GitHub Pages. If you have Pro/Enterprise, private repos work too.

---

### **Step 2: Update Homepage in package.json**

Open `package.json` and change this line:

```json
"homepage": "https://yourusername.github.io/repo-name"
```

**Replace:**
- `yourusername` with your GitHub username
- `repo-name` with your repository name

**Examples:**
- `https://github.com/john-doe/electronice-repair` → `https://john-doe.github.io/electronice-repair`
- `https://github.com/techuser/repairs-app` → `https://techuser.github.io/repairs-app`

---

### **Step 3: Push Code to GitHub**

```bash
# Add all files
git add .

# Commit with message
git commit -m "Initial commit - ready for deployment"

# Push to main branch
git branch -M main
git push -u origin main
```

---

### **Step 4: Enable GitHub Pages**

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Go to **Pages** (left sidebar)
4. Under "Build and deployment":
   - Source: Select **GitHub Actions** ✅
   - (Do NOT select "Deploy from a branch")
5. Save

---

### **Step 5: Wait for Deployment**

1. Go to **Actions** tab in your repo
2. Wait for the workflow to complete (green checkmark)
3. Your site will be live at: `https://yourusername.github.io/repo-name`

---

## 🚀 Deployment Options

### **Option A: Automatic (Recommended) ⭐**

Every time you push to `main` branch, the site auto-deploys:

```bash
# Make changes locally
git add .
git commit -m "Your changes"
git push origin main

# → GitHub Actions runs automatically → Site updates
```

**Perfect for:** Continuous updates, team collaboration

---

### **Option B: Manual Deployment (Using gh-pages)**

```bash
# Install gh-pages globally (first time only):
npm install -g gh-pages

# Then deploy manually:
npm run deploy
```

**Perfect for:** One-time deployments, testing before pushing

---

## 🔄 Typical Workflow

```
Local Changes
    ↓
git add . && git commit -m "message"
    ↓
git push origin main
    ↓
GitHub Actions triggered
    ↓
npm install
    ↓
npm run build
    ↓
Deploy to GitHub Pages
    ↓
Live at https://yourusername.github.io/repo-name ✅
```

---

## ✅ What Gets Deployed

Only the **`dist` folder** gets deployed (production build):
- TypeScript compiled to JavaScript ✅
- React components bundled ✅
- CSS/Tailwind minified ✅
- Assets optimized ✅
- Source code NOT visible ✅

---

## 🔗 Custom Domain (Optional)

If you own a custom domain:

1. Settings → Pages → Custom domain
2. Add your domain (e.g., `electronice-repair.com`)
3. Configure DNS records with GitHub's IP addresses
4. Takes ~10 minutes to activate

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| **Deploy button disabled** | Switch source to "GitHub Actions" |
| **Site shows 404** | Check homepage URL matches repo name exactly |
| **Build fails** | Check Actions tab for error logs |
| **Blank white page** | Check browser console for errors |
| **Assets not loading** | Verify `base: './'` in vite.config.ts |
| **Images broken** | Use `/image.png` (not `./image.png`) |

---

## 📊 Deployment Status

Check build status anytime:
1. Go to **Actions** tab
2. See workflow history
3. Red X = failed, green ✓ = success
4. Click for details

---

## 💡 Pro Tips

✅ **Keep `main` branch production-ready** - Everything pushed deploys!

✅ **Use branches for testing:**
```bash
git checkout -b new-feature
# Make changes
git push origin new-feature
# Create Pull Request for review
# Merge to main when ready
```

✅ **Test locally before pushing:**
```bash
npm run build
npm run preview
# Open localhost:4173 to test production build
```

✅ **Monitor deployments:**
- Set up GitHub notifications to get alerts
- Watch the Actions tab for build failures

---

## 📝 Files Modified

- `package.json` - Added deploy script & homepage
- `.github/workflows/deploy.yml` - Automatic deployment workflow
- `vite.config.ts` - Already has `base: './'` ✅

---

## ❓ FAQ

**Q: Can I use gh-pages subdomain instead of username.github.io?**
A: If your repo is named `yourusername.github.io`, it deploys to `yourusername.github.io` directly.

**Q: How often does it deploy?**
A: Every push to `main` branch. Usually takes 1-3 minutes.

**Q: Can I deploy without GitHub?**
A: Yes - Vercel, Netlify, etc. But GitHub Pages is free and simple.

**Q: What about the backend/API?**
A: This deploys the frontend only. Backend needs separate hosting (Heroku, AWS, etc.)

**Q: How do I rollback if something breaks?**
A: Push a fix to main, or revert the last commit and push again.

---

## 🎉 You're Ready!

Once you complete the 5 steps above, your site will be **live and automatically deploying**!

**Next push after Step 4 = Live website!**

---

**Need help?**
- Check GitHub Actions logs for errors
- Verify homepage URL is correct
- Ensure repository is public
- Check if branch is named "main" or "master"
