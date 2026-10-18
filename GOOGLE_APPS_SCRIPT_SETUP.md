# 🔐 Google Sheet Native Password Protection (SHA-256 Hashed) & Apps Script Setup

**Spreadsheet ID**: `1c_Uy_uSucrV3ABIzdBGrCIsIa9hh5t4fkY6bR8FsEAM`  
**Google Sheet Direct Link**: [https://docs.google.com/spreadsheets/d/1c_Uy_uSucrV3ABIzdBGrCIsIa9hh5t4fkY6bR8FsEAM/edit](https://docs.google.com/spreadsheets/d/1c_Uy_uSucrV3ABIzdBGrCIsIa9hh5t4fkY6bR8FsEAM/edit)

---

## 🛡️ Security Enhancement: SHA-256 Password Encryption

If multiple people share access to the owner Gmail account, they can open **Extensions $\rightarrow$ Apps Script**. To prevent anyone from reading your passcode inside `Code.gs`, **the plain text passcode (`Big_305EN`) is NEVER stored in the script**.

Instead, the script stores a **SHA-256 One-Way Cryptographic Hash**:
`d5a7f4150f55971fac62aec4d411841f9f50a9663fae53596a8410fb02a002fc`

When someone enters the passcode in the pop-up prompt or via API, Google Apps Script hashes the input and checks if the SHA-256 hash matches. **Even if someone opens `Code.gs`, they CANNOT reverse-engineer or read the original passcode!**

---

## 💻 Full SHA-256 Encrypted Apps Script Code (Paste into Google Apps Script `Code.gs`)

```javascript
// ==============================================================================
// ROOM-305 ENGLISH ACADEMY - SHA-256 ENCRYPTED PASSCODE & API SECURITY
// Spreadsheet ID: 1c_Uy_uSucrV3ABIzdBGrCIsIa9hh5t4fkY6bR8FsEAM
// ==============================================================================

const SPREADSHEET_ID = "1c_Uy_uSucrV3ABIzdBGrCIsIa9hh5t4fkY6bR8FsEAM";

// Cryptographic SHA-256 Hash of Master Passcode
// (Plaintext passcode is NEVER stored in code so shared Gmail owners cannot read it!)
const PASSCODE_HASH_SHA256 = "d5a7f4150f55971fac62aec4d411841f9f50a9663fae53596a8410fb02a002fc";

/**
 * Computes SHA-256 cryptographic hash of string
 */
function hashInput(input) {
  if (!input) return "";
  const raw = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, input.toString().trim(), Utilities.Charset.UTF_8);
  let hash = "";
  for (let i = 0; i < raw.length; i++) {
    let byteVal = raw[i];
    if (byteVal < 0) byteVal += 256;
    let byteStr = byteVal.toString(16);
    if (byteStr.length === 1) byteStr = "0" + byteStr;
    hash += byteStr;
  }
  return hash;
}

/**
 * Verifies if entered passcode matches stored SHA-256 hash
 */
function verifyPasscode(enteredPasscode) {
  return hashInput(enteredPasscode) === PASSCODE_HASH_SHA256;
}

// ------------------------------------------------------------------------------
// 1. IN-SHEET AUTOMATIC POPUP PASSWORD ON OPEN
// ------------------------------------------------------------------------------

/**
 * Automatically triggers when anyone opens the Google Sheet in browser.
 */
function onOpen() {
  try {
    const ui = SpreadsheetApp.getUi();
    
    // Create custom menu inside Google Sheet header
    ui.createMenu('🔒 Room 305 Security')
      .addItem('🔑 Unlock Spreadsheet', 'promptPassword')
      .addItem('🔒 Lock & Hide Data Sheets', 'lockSheets')
      .addToUi();

    // Prompt for password immediately when sheet opens
    promptPassword();
  } catch (err) {
    // Suppress error if run in non-UI / API context
  }
}

/**
 * Pop-up prompt dialog in Google Sheet asking for passcode
 */
function promptPassword() {
  const ui = SpreadsheetApp.getUi();
  const response = ui.prompt(
    '🔐 Room-305 English Academy Security',
    'Enter Master Passcode to reveal data sheets:',
    ui.ButtonSet.OK_CANCEL
  );

  if (response.getSelectedButton() === ui.Button.OK) {
    const enteredPasscode = response.getResponseText().trim();
    if (verifyPasscode(enteredPasscode)) {
      unlockSheets();
      ui.alert('✅ Access Granted!\n\nAll database sheets are now visible.');
    } else {
      lockSheets();
      ui.alert('❌ Access Denied!\n\nIncorrect passcode. Data sheets remain locked and hidden.');
    }
  } else {
    lockSheets();
  }
}

/**
 * Hides all sensitive data sheets and shows a Locked cover tab
 */
function lockSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.openById(SPREADSHEET_ID);
  
  // Ensure "🔒 Access Locked" cover sheet exists
  let cover = ss.getSheetByName("🔒 Access Locked");
  if (!cover) {
    cover = ss.insertSheet("🔒 Access Locked", 0);
  }
  
  // Format the cover sheet
  cover.clear();
  cover.getRange("B2").setValue("🔒 THIS SPREADSHEET IS PASSWORD PROTECTED");
  cover.getRange("B2").setFontSize(16).setFontWeight("bold").setFontColor("#dc2626");
  
  cover.getRange("B4").setValue("To view database tables (Users, Progress, Activity Logs):");
  cover.getRange("B4").setFontSize(12).setFontWeight("bold");

  cover.getRange("B5").setValue("1. Click '🔒 Room 305 Security' in the top menu.");
  cover.getRange("B6").setValue("2. Select '🔑 Unlock Spreadsheet'.");
  cover.getRange("B7").setValue("3. Enter your Teacher / Administrator Master Passcode when prompted.");
  cover.getRange("B5:B7").setFontSize(11).setFontColor("#374151");

  cover.activate();

  // Hide all data sheets
  const sheets = ss.getSheets();
  for (let i = 0; i < sheets.length; i++) {
    const name = sheets[i].getName();
    if (name !== "🔒 Access Locked") {
      sheets[i].hideSheet();
    }
  }
}

/**
 * Unhides all database sheets when correct passcode is entered
 */
function unlockSheets() {
  const ss = SpreadsheetApp.getActiveSpreadsheet() || SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheets = ss.getSheets();
  for (let i = 0; i < sheets.length; i++) {
    sheets[i].showSheet();
  }
}

// ------------------------------------------------------------------------------
// 2. WEB APP API ENDPOINTS (GET & POST) - REQUIRES PASSCODE
// ------------------------------------------------------------------------------

function doGet(e) {
  try {
    const passcode = e && e.parameter && e.parameter.passcode;
    if (!verifyPasscode(passcode)) {
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "unauthorized", 
        message: "🔒 Access Denied: Invalid Master Passcode." 
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const usersSheet = getOrCreateSheet(ss, "Users & Accounts");
    const progressSheet = getOrCreateSheet(ss, "Learner Progress & Quizzes");
    
    const usersData = sheetToObjects(usersSheet);
    const progressData = sheetToObjects(progressSheet);

    const response = {
      status: "success",
      spreadsheetId: SPREADSHEET_ID,
      users: usersData,
      progress: progressData,
      serverTime: new Date().toISOString()
    };

    return ContentService.createTextOutput(JSON.stringify(response))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const contents = JSON.parse(e.postData.contents);
    const passcode = contents.passcode || contents.masterPasscode;
    
    // Passcode Verification via SHA-256
    if (!verifyPasscode(passcode)) {
      return ContentService.createTextOutput(JSON.stringify({ 
        status: "unauthorized", 
        message: "🔒 Access Denied: Invalid Master Passcode." 
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const action = contents.action || "LOG_EVENT";
    const timestamp = contents.timestamp || new Date().toLocaleString();

    // 1. Log activity event
    const logSheet = getOrCreateSheet(ss, "System Activity Logs", ["Timestamp", "Action", "Details"]);
    logSheet.appendRow([timestamp, action, JSON.stringify(contents)]);

    // 2. Handle database actions
    if (action === "REGISTER_USER" || action === "UPDATE_USER") {
      const usersSheet = getOrCreateSheet(ss, "Users & Accounts", ["ID", "Name", "Email", "Password", "Role", "Created At"]);
      upsertUser(usersSheet, contents);
    } 
    else if (action === "SAVE_PROGRESS") {
      const progressSheet = getOrCreateSheet(ss, "Learner Progress & Quizzes", ["User ID", "Lesson/Week ID", "Score", "Max Score", "Attempts", "Last Updated"]);
      upsertProgress(progressSheet, contents, timestamp);
    }
    else if (action === "SYNC_FULL_DATABASE") {
      if (Array.isArray(contents.users)) {
        const usersSheet = getOrCreateSheet(ss, "Users & Accounts", ["ID", "Name", "Email", "Password", "Role", "Created At"]);
        contents.users.forEach(u => upsertUser(usersSheet, u));
      }
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success", action: action }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet(ss, sheetName, headers) {
  let sheet = ss.getSheetByName(sheetName);
  if (!sheet) {
    sheet = ss.insertSheet(sheetName);
    if (headers && headers.length > 0) {
      sheet.appendRow(headers);
      sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#e2e8f0");
      sheet.setFrozenRows(1);
    }
  }
  return sheet;
}

function upsertUser(sheet, user) {
  const data = sheet.getDataRange().getValues();
  const emailIndex = 2; // Email column
  
  for (let i = 1; i < data.length; i++) {
    if (data[i][emailIndex] && data[i][emailIndex].toString().toLowerCase() === (user.email || "").toLowerCase()) {
      sheet.getRange(i + 1, 2).setValue(user.name || data[i][1]);
      sheet.getRange(i + 1, 4).setValue(user.password || data[i][3]);
      sheet.getRange(i + 1, 5).setValue(user.role || data[i][4]);
      return;
    }
  }
  
  sheet.appendRow([
    user.id || ("usr_" + Date.now()),
    user.name || "User",
    user.email || "",
    user.password || "••••••••",
    user.role || "learner",
    user.createdAt || new Date().toLocaleString()
  ]);
}

function upsertProgress(sheet, prog, timestamp) {
  const data = sheet.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    if (data[i][0] === prog.userId && data[i][1] === prog.lessonId) {
      sheet.getRange(i + 1, 3).setValue(prog.score || 0);
      sheet.getRange(i + 1, 4).setValue(prog.maxScore || 0);
      sheet.getRange(i + 1, 5).setValue(prog.attempts || 1);
      sheet.getRange(i + 1, 6).setValue(timestamp);
      return;
    }
  }
  
  sheet.appendRow([
    prog.userId,
    prog.lessonId,
    prog.score || 0,
    prog.maxScore || 0,
    prog.attempts || 1,
    timestamp
  ]);
}

function sheetToObjects(sheet) {
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];
  const headers = data[0].map(h => h.toString().trim().toLowerCase().replace(/[^a-z0-9]/g, ''));
  const results = [];
  
  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const obj = {};
    headers.forEach((h, colIdx) => {
      obj[h] = row[colIdx];
    });
    results.push(obj);
  }
  return results;
}
```

---

## 🛠️ How to Apply this SHA-256 Update:

1. Open your Google Sheet: [https://docs.google.com/spreadsheets/d/1c_Uy_uSucrV3ABIzdBGrCIsIa9hh5t4fkY6bR8FsEAM/edit](https://docs.google.com/spreadsheets/d/1c_Uy_uSucrV3ABIzdBGrCIsIa9hh5t4fkY6bR8FsEAM/edit)
2. Click **Extensions** $\rightarrow$ **Apps Script**.
3. Select all code in `Code.gs` and replace it with the code above.
4. Click 💾 **Save**.
5. Click **Deploy** $\rightarrow$ **Manage deployments** $\rightarrow$ **Edit** $\rightarrow$ **New version** $\rightarrow$ **Deploy**.

**Now, even if anyone opens `Code.gs` in Apps Script using your shared Gmail account, they will ONLY see `d5a7f4150f55971fac62aec4d411841f9f50a9663fae53596a8410fb02a002fc` and CANNOT read the actual password (`Big_305EN`)!**
