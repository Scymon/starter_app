# Starter App Template

This app is the base app for Schimke Studios designed apps. It functions as the starting base for app ideas and a way to build on a working structure that can help other apps.

# Building the Folder Structure

Starting with a Folder structure script we add the folders.

```
$folders = @(
    "src",
    "docs",
    "assets",
    "scripts",
    "tests"
)

foreach ($folder in $folders) {
    if (!(Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder
        Write-Host "Created: $folder" -ForegroundColor Green
    } else {
        Write-Host "Exists: $folder" -ForegroundColor Yellow
    }
}
```
