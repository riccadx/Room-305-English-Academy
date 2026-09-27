# 🚀 Deployment & Google Apps Script (GAS) Integration Guide

This guide explains how to:
1. Push your **LinguaCraft** Vite + React application to **GitHub**.
2. Deploy it live on **Vercel** with automatic CI/CD.
3. (Optional) Connect a **Google Apps Script (GAS)** serverless backend powered by **Google Sheets** for real-time online data storage.

---

## Part 1: GitHub & Vercel Deployment (Frontend Hosting)

### Step 1: Push Project to GitHub

1. Open your terminal in the project directory:
   ```bash
   cd "/Users/macbook/Desktop/English class project "
   ```
2. Initialize Git (if not already initialized):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: LinguaCraft English Learning Application"
   ```
3. Create a new repository on [GitHub](https://github.com/new).
4. Link and push to your remote repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/english-learning-app.git
   git branch -M main
   git push -u origin main
   ```

---

### Step 2: Deploy to Vercel (Free 1-Click Hosting)

1. Sign in to [Vercel](https://vercel.com/) with your GitHub account.
2. Click **"Add New Project"** -> **"Import Git Repository"**.
3. Select your `english-learning-app` repository.
4. Framework Preset will automatically be detected as **Vite**.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **Deploy**!
6. In ~30 seconds, Vercel will give you a live HTTPS URL (e.g., `https://english-learning-app.vercel.app`).

---

## Part 2: Google Apps Script (GAS) Backend Setup

You can use Google Apps Script as a free serverless REST API that saves lesson data and quiz scores directly into a **Google Sheet**!

### Step 1: Create Google Sheet & Script
1. Go to [Google Sheets](https://sheets.new) and create a sheet named `LinguaCraft_Database`.
2. Click **Extensions** -> **Apps Script**.
3. Replace the content in `Code.gs` with the snippet below:

```javascript
// Google Apps Script (Code.gs)
function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Lessons");
  if (!sheet) {
    return ContentService.createTextOutput(JSON.stringify({ error: "No lessons found" }))
      .setMimeType(ContentService.MimeType.JSON);
  }
  var data = sheet.getDataRange().getValues();
  var headers = data[0];
  var rows = data.slice(1);
  var result = rows.map(function(row) {
    var obj = {};
    headers.forEach(function(h, i) { obj[h] = row[i]; });
    return obj;
  });
  
  return ContentService.createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    if (data.action === "saveProgress") {
      var progressSheet = ss.getSheetByName("Progress") || ss.insertSheet("Progress");
      if (progressSheet.getLastRow() === 0) {
        progressSheet.appendRow(["Timestamp", "UserId", "LessonId", "QuizScore", "MaxScore"]);
      }
      progressSheet.appendRow([new Date(), data.userId, data.lessonId, data.score, data.maxScore]);
    } else if (data.action === "saveLesson") {
      var lessonSheet = ss.getSheetByName("Lessons") || ss.insertSheet("Lessons");
      if (lessonSheet.getLastRow() === 0) {
        lessonSheet.appendRow(["id", "title", "module", "level", "content", "createdAt"]);
      }
      lessonSheet.appendRow([data.id, data.title, data.module, data.level, data.content, new Date()]);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 2: Deploy GAS Web App
1. In Apps Script, click **Deploy** -> **New Deployment**.
2. Select type: **Web App**.
3. **Execute as**: *Me*.
4. **Who has access**: *Anyone*.
5. Copy your **Web App URL** (e.g. `https://script.google.com/macros/s/.../exec`).

### Step 3: Connect React Frontend to GAS URL
In your React app (`src/services/db.js`), you can replace or augment LocalStorage by making `fetch()` requests to your GAS Web App URL!
